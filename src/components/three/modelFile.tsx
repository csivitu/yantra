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
            controls.autoRotate = true;
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
                            // Type guard to check if it's a Mesh
                            const mesh = child;

                            const materials = Array.isArray(mesh.material)
                                ? mesh.material
                                : [mesh.material];

                            materials.forEach((material: THREE.Material) => {
                                if ('map' in material) {
                                    // const texture = textureLoader.load(
                                    //     texturePath + material.map.name
                                    // );
                                    // material.map = texture;
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
                    renderer.render(scene, camera);
                }
                requestAnimationFrame(animate);
            };
            animate();

            return () => {
                console.log('unmount');
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
                className="h-full w-full flex justify-around items-center"
                ref={refBody}
            >
                {loading && <Loader />}
            </div>
        </>
    );
};

export default ComputerModel;
