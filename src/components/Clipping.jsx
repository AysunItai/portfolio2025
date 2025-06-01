import React, { useRef, useEffect } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from 'stats.js';
import { GUI } from 'lil-gui';

extend({ OrbitControls });

function Scene() {
  const objectRef = useRef();
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  
  useEffect(() => {
    const stats = new Stats();
    document.body.appendChild(stats.dom);
    const gui = new GUI();
    // Add GUI controls here...
    return () => {
      document.body.removeChild(stats.dom);
      gui.destroy();
    };
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const obj = objectRef.current;
    obj.position.y = 0.8;
    obj.rotation.x = time * 0.5;
    obj.rotation.y = time * 0.2;
    obj.scale.setScalar(Math.cos(time) * 0.125 + 0.875);
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight position={[2, 3, 3]} angle={Math.PI / 5} />
      <directionalLight position={[0, 3, 0]} />
      
      <mesh ref={objectRef}>
        <torusKnotGeometry args={[0.4, 0.08, 95, 20]} />
        <meshStandardMaterial color="green" />
      </mesh>
      
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial color="#a0adaf" />
      </mesh>
      
      <orbitControls args={[camera, gl.domElement]} ref={controlsRef} />
    </>
  );
}

function Clipping() {
  return (
    <Canvas shadowMap>
      <perspectiveCamera position={[0, 1.3, 3]} />
      <Scene />
    </Canvas>
  );
}

export default Clipping;
