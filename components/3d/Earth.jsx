// components/3d/Earth.jsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

export default function Earth() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) coreRef.current.rotation.y += 0.0008;
    if (ringRef.current) ringRef.current.rotation.z = t * 0.15;
  });

  return (
    <group>
      {/* glowing AI core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.5}
          distort={0.18}
          speed={1.6}
        />
      </mesh>

      {/* atmosphere glow */}
      <mesh scale={1.18}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>

      {/* orbit ring */}
      <mesh ref={ringRef} rotation={[1.2, 0, 0]}>
        <torusGeometry args={[1.45, 0.03, 32, 180]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}
