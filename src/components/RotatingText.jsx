import React, { useRef, useEffect } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, Mesh } from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

function RotatingText() {
    const ref = useRef();

    useEffect(() => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        ref.current.appendChild(renderer.domElement);

        // Declare resize function
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        const loader = new FontLoader();
        loader.load('/assets/fonts.typeface.json', font => {
            const geometry = new TextGeometry('Welcome!', {
                font: font,
                size: 1,
                height: 0.2,
            });
            const material = new MeshBasicMaterial({ color: 0xff00ff });
            const mesh = new Mesh(geometry, material);
            scene.add(mesh);

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);
                mesh.rotation.x += 0.005;
                mesh.rotation.y += 0.005;
                renderer.render(scene, camera);
            };

            animate();
        });

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);  // Corrected here
            renderer.dispose();
        };

    }, []);

    return <div ref={ref} />;
}

export default RotatingText;
