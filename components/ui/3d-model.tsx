"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Brain(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.y = 
      state.clock.getElapsedTime() * 0.2;
    
    // Subtle floating animation
    meshRef.current.position.y = 
      Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <Sphere args={[1.5, 100, 200]} ref={meshRef} {...props}>
      <MeshDistortMaterial
        color="#4b0082"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
}

export function AIModel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5e17eb" />
        <Brain position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}