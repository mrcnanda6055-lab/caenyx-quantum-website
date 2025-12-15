// components/Hero.jsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  const canvasRef = useRef(null);

  // Procedural starfield (near + far parallax)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const createStars = (count, depth) => {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: (Math.random() * 1.2 + 0.3) * depth,
          speed: (0.02 + Math.random() * 0.08) * depth,
          alpha: 0.4 + Math.random() * 0.6,
        });
      }
      return arr;
    };

    let farStars = createStars(180, 0.7);
    let nearStars = createStars(120, 1.4);

    let frameId;

    const loop = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const drawSet = (stars, tint) => {
        stars.forEach((s) => {
          ctx.beginPath();
          ctx.globalAlpha = s.alpha;
          ctx.fillStyle = tint;
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();

          s.y += s.speed;
          if (s.y > height) {
            s.y = 0;
            s.x = Math.random() * width;
          }
        });
      };

      // far = cool cyan, near = bright white
      drawSet(farStars, "rgba(56,189,248,0.9)");
      drawSet(nearStars, "rgba(248,250,252,0.95)");

      frameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home">
      {/* Ultra AI background layers */}
      <div className={styles.energyField} />
      <div className={styles.quantumGrid} />
      <div className={styles.plasmaRings} />
      <div className={styles.neuralNoise} />
      <canvas ref={canvasRef} className={styles.aiStars} />

      {/* Content */}
      <div className={styles.content}>
        {/* Massive holographic core behind text */}
        <div className={styles.coreGlow} />

        <div className={styles.inner}>
          {/* HUD strip */}
          <div className={styles.hud}>
            <span className={styles.hudDot} />
            <span className={styles.hudLabel}>
              CaenyX AIOPS MULTI-AGENT ENGINE
            </span>
            <span className={styles.hudStatus}>
              Live · Orchestrating workflows
            </span>
          </div>

          <h1 className={styles.title}>
            AI-Powered Systems.
            <br />
            Built for Modern Businesses.
          </h1>

          <p className={styles.subtitle}>
            We build websites, dashboards and automations 3–10× faster using our
            multi-agent AIOps engine — so you ship more, debug less, and stay
            online.
          </p>

          {/* CTA ROW – ONLY ONE BUTTON */}
          <div className={styles.ctaRow}>
            <button className={styles.primary} onClick={scrollToContact}>
              Get Proposal
            </button>
          </div>

          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>Latency</span>
              <span className={styles.metricValue}>↓ 68%</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>Agents Online</span>
              <span className={styles.metricValue}>12</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>Deploys / Month</span>
              <span className={styles.metricValue}>10+</span>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Fast Delivery</span>
            <span className={styles.tag}>AI-First</span>
            <span className={styles.tag}>Trusted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
