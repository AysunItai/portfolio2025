import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function InteractiveParticles() {
  const ref = useRef();
  let mouseX = 0;
  let mouseY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x88ccff, size: 0.1 });
    const points = new THREE.Points(particles, material);
    scene.add(points);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.005;
      points.rotation.y += 0.005;

      points.position.x += (mouseX - points.position.x) * 0.05;
      points.position.y += (-mouseY - points.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove, false);
    return () => document.removeEventListener('mousemove', onMouseMove, false);
  }, []);

  const onMouseMove = (event) => {
    mouseX = (event.clientX - windowHalfX) / 10;
    mouseY = (event.clientY - windowHalfY) / 10;
  };

  return <div ref={ref} />;
}
export default InteractiveParticles;