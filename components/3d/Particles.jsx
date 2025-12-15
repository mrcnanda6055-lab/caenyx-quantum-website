// components/3d/Particles.jsx
"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

export default function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(3500 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      const r = 3 + Math.random() * 4;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.5;
      arr[i] = Math.cos(angle) * r;
      arr[i + 1] = y;
      arr[i + 2] = Math.sin(angle) * r;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
