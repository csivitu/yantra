import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Loader from '../common/loader';

const ComputerModel: React.FC = () => {
    const refBody = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
    const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
    const [target] = useState(new THREE.Vector3(0, 0, 0));
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
                20,
                clientWidth / clientHeight,
                0.1,
                1000
            );
            camera.position.set(0, 0, 3);
            setCamera(camera);

            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);

            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight2.position.set(-1, -1, -1);
            scene.add(directionalLight2);

            const axesHelper = new THREE.AxesHelper(2); // Length of axes can be adjusted as needed
            scene.add(axesHelper);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true; // Enable auto rotation
            controls.autoRotateSpeed = 2; // Adjust the speed of auto rotation
            controls.target = target;
            controls.enableZoom = false; // Disable zooming
            controls.enableRotate = false; // Disable click and drag rotation

            controls.enablePan = false; // Disable click and drag panning
            setControls(controls);

            const loader = new GLTFLoader();
            loader.load(
                '/computer/scene.gltf',
                (gltf) => {
                    const model = gltf.scene;
                    model.position.x = -0.06;
                    model.position.z = 0.14;
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
                    scene.add(model);
                    setLoading(false);
                },
                undefined,
                (error) => {
                    console.error('Error loading GLTF model:', error);
                }
            );

            const animate = () => {
                controls.update();
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();

            return () => {
                console.log('unmount');
                renderer.dispose();
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
            <div className="h-full w-full" ref={refBody}>
                {loading && (
                    <div className="w-full h-full flex justify-center items-center">
                        <Loader />
                    </div>
                )}
            </div>
        </>
    );
};

export default ComputerModel;
