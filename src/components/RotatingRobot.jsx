import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

function RobotArm({ position }) {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    meshRef.current.position.y = position + Math.sin(clock.getElapsedTime()) * 0.5;
  });

  const geometry= new THREE.BoxGeometry(0.5,1,0.5);

  return (
    <mesh geometry={geometry} position={[position, 2.2, 0]} ref={meshRef}>
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Robot() {
  const geometryb= new THREE.BoxGeometry(2,2,1);
  const  geometryl = new THREE.BoxGeometry(0.5,1,0.5);
  
  return (
    <>
      <mesh geometry={geometryb} position={[0, 1, 0]}>
        <meshStandardMaterial color="red" />
      </mesh>

      <RobotArm position={-1.5} />
      <RobotArm position={1.5} />

      <mesh geometry={geometryl} position={[-1, -1.5, 0]}>
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh geometry={geometryl} position={[1, -1.5, 0]}>
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

function RotatingRobot() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Robot />
    </Canvas>
  );
}

export default RotatingRobot;
