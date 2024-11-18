import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      pointsRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <>
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#4f46e5"
          emissive="#312e81"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
          wireframe
        />
      </Sphere>
      <points ref={pointsRef}>
        <sphereGeometry args={[1.2, 84, 84]} />
        <pointsMaterial
          size={0.015}
          color="#93c5fd"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-slate-900/40" />
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3730a3" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Hero3D;