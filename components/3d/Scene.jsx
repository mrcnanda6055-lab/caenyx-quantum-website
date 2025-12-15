// components/3d/Scene.jsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";
import Particles from "./Particles";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.2], fov: 55 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* background color */}
      <color attach="background" args={["#020617"]} />

      {/* lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 4]} intensity={1.3} />
      <pointLight position={[-3, -2, -4]} intensity={0.8} color="#22c55e" />

      {/* main objects */}
      <Earth />
      <Particles />

      {/* star field */}
      <Stars
        radius={250}
        depth={80}
        count={18000}
        factor={6}
        saturation={0}
        fade
      />

      {/* slow cinematic rotation */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </Canvas>
  );
}
