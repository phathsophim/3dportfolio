// components/HeroModel.tsx
"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function HeroModel() {
  const meshRef = useRef<Mesh>(null);

  // Simple rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#4fd1c5"
        metalness={0.6}
        roughness={0.2}
        envMapIntensity={0.5}
      />
    </mesh>
  );
}
