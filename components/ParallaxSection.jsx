"use client";

export default function ParallaxSection({ children, speed = 0.2 }) {
  return (
    <div
      data-parallax={speed}
      style={{
        position: "relative",
        willChange: "transform",
        transition: "transform 0.05s linear",
      }}
    >
      {children}
    </div>
  );
}
