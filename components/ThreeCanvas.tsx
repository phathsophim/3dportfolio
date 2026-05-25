// components/ThreeCanvas.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Html } from "@react-three/drei";

interface Props {
  children: React.ReactNode;
}

export default function ThreeCanvas({ children }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Suspense fallback={<Html>Loading…</Html>}>{children}</Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
