import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Loader from '../common/loader';

const ComputerModel: React.FC = () => {
    const refBody = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
    const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
    const [target] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
    const [scene] = useState<THREE.Scene>(new THREE.Scene());
    const [controls, setControls] = useState<OrbitControls | null>(null);
    const [rotation, setRotation] = useState<number>(0);
    const [animationFrameId, setAnimationFrameId] = useState<number | null>(
        null
    );

    const handleWindowResize = useCallback(() => {
        if (refBody.current && renderer) {
            const { clientWidth, clientHeight } = refBody.current;
            renderer.setSize(clientWidth, clientHeight);
            if (camera) {
                camera.aspect = clientWidth / clientHeight;
                camera.updateProjectionMatrix();
            }
        }
    }, [renderer, camera]);

    useEffect(() => {
        if (refBody.current && !renderer) {
            const { clientWidth, clientHeight } = refBody.current;

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(clientWidth, clientHeight);
            renderer.outputEncoding = THREE.sRGBEncoding;
            refBody.current.appendChild(renderer.domElement);
            setRenderer(renderer);

            const camera = new THREE.PerspectiveCamera(
                45,
                clientWidth / clientHeight,
                0.1,
                1000
            );
            camera.position.set(0, 0, 2);
            setCamera(camera);

            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);

            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight2.position.set(-1, -1, -1);
            scene.add(directionalLight2);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.target = target;
            controls.enableZoom = false;
            controls.enableRotate = false;
            controls.enablePan = false;
            setControls(controls);

            const loader = new GLTFLoader();
            loader.load(
                '/computer/scene.gltf',
                (gltf: GLTF) => {
                    const model = gltf.scene;

                    // Load textures and assign them to materials
                    const textureLoader = new THREE.TextureLoader();
                    const texturePath = 'computer/';
                    model.traverse((child: THREE.Object3D) => {
                        if (child instanceof THREE.Mesh) {
                            const mesh = child;

                            const materials = Array.isArray(mesh.material)
                                ? mesh.material
                                : [mesh.material];

                            materials.forEach((material: THREE.Material) => {
                                if ('map' in material) {
                                    material.side = THREE.FrontSide;
                                    material.transparent = true;
                                    material.alphaTest = 0.5;
                                    material.needsUpdate = true;
                                }
                            });
                        }
                    });

                    scene.add(model); // Add the model to the scene

                    setLoading(false);
                },
                undefined,
                (error) => {
                    console.error('Error loading GLTF model:', error);
                }
            );

            const animate = () => {
                if (controls) {
                    controls.update();
                }
                if (renderer && camera) {
                    const radius = 2; // Adjust the radius of the camera orbit
                    const angle = rotation; // Use rotation as the angle of rotation

                    // Calculate the new camera position
                    const cameraX = radius * Math.sin(angle);
                    const cameraZ = radius * Math.cos(angle);
                    camera.position.set(cameraX, 0, cameraZ);
                    camera.lookAt(target);

                    renderer.render(scene, camera);

                    setRotation((rotation) => rotation + 0.01); // Update the rotation state

                    setAnimationFrameId(requestAnimationFrame(animate));
                }
            };

            // Start the animation loop
            const animationId = requestAnimationFrame(animate);
            setAnimationFrameId(animationId);

            return () => {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                if (renderer) {
                    renderer.dispose();
                }
            };
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);

    return (
        <>
            <div
                className="h-full w-full flex justify-around items-center bg-transparent"
                ref={refBody}
            >
                {loading && <Loader />}
            </div>
        </>
    );
};

export default ComputerModel;
