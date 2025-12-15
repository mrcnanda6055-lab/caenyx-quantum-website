"use client";

import { useEffect, useRef } from "react";

export default function FlowCanvas({ intensity = 6 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = null;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const lines = [];

    function setup() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      lines.length = 0;
      const count = Math.max(4, Math.min(12, intensity));
      for (let i = 0; i < count; i++) {
        lines.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() * 0.5) - 0.25,
          vy: (Math.random() * 0.3) - 0.15,
          amp: 30 + Math.random() * 80,
          offset: Math.random() * Math.PI * 2,
        });
      }
    }

    function resize() {
      // reinit using updated size
      setup();
    }

    function draw() {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const li of lines) {
        li.offset += 0.004;
        li.x += li.vx;
        li.y += li.vy;
        if (li.x < -150) li.x = rect.width + 150;
        if (li.x > rect.width + 150) li.x = -150;
        ctx.beginPath();
        for (let s = 0; s < 6; s++) {
          const px = li.x + Math.cos(li.offset + s * 0.6) * (li.amp + s * 6);
          const py = li.y + Math.sin(li.offset * 1.1 + s * 0.8) * (li.amp / 2 + s * 3);
          s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.lineWidth = 2;
        const grad = ctx.createLinearGradient(0, 0, rect.width, 0);
        grad.addColorStop(0, "rgba(34,211,238,0)");
        grad.addColorStop(0.45, "rgba(34,211,238,0.48)");
        grad.addColorStop(1, "rgba(59,130,246,0)");
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.62;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    }

    // respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduce = mq?.matches;
    if (!shouldReduce) {
      setup();
      window.addEventListener("resize", resize);
      raf = requestAnimationFrame(draw);
    } else {
      // Draw a single static subtle line for reduced motion users
      setup();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(34,211,238,0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 20);
      ctx.quadraticCurveTo(rect.width / 2, 0, rect.width, 20);
      ctx.stroke();
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return <canvas ref={ref} style={{ width: "100%", height: "100%", display: "block", position: "absolute", inset: 0, pointerEvents: "none" }} />;
}
