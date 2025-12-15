// components/NeuralScene.jsx
"use client";

import React from "react";
import styles from "./styles/NeuralScene.module.css";

export default function NeuralScene() {
  return (
    <div className={styles.shell}>
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      {/* Minimal nodes + lines kept subtle — we focus on the chip realism */}
      <div className={styles.nodeLayer}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={styles.node} />
        ))}
      </div>

      <div className={styles.linesLayer}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.line} />
        ))}
      </div>

      {/* Top files — keep them but subtle */}
      <div className={styles.cardsLayer}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.fileCard}>
            <div className={styles.fileInner} />
            <div className={styles.fold} />
          </div>
        ))}
      </div>

      {/* ==== GOD-LEVEL METALLIC CHIP BLOCK ==== */}
      <div className={styles.chipZone}>
        <div className={styles.chipShadow} />

        <div className={styles.chip}>
          {/* outer bezel rim */}
          <div className={styles.bezel} />

          {/* device body */}
          <div className={styles.device}>
            {/* outer rails to give thickness */}
            <div className={`${styles.rail} ${styles.left}`} />
            <div className={`${styles.rail} ${styles.right}`} />

            {/* top ridges for layered metal */}
            <div className={styles.ridges}>
              <div className={styles.ridge} />
              <div className={styles.ridge} />
              <div className={styles.ridge} />
            </div>

            {/* glass window (deep glossy) */}
            <div className={styles.windowWrap}>
              <div className={styles.windowGlass}>
                <span className={styles.aiLabel}>AI</span>
                {/* inner micro-reflection */}
                <div className={styles.innerGlow} />
              </div>

              {/* subtle engraved nameplate */}
              <div className={styles.namePlate} />
            </div>

            {/* bolts */}
            <div className={styles.bolts}>
              <span className={styles.bolt} />
              <span className={styles.bolt} />
              <span className={styles.bolt} />
              <span className={styles.bolt} />
            </div>

            {/* layered sheens */}
            <div className={styles.sheenFast} />
            <div className={styles.sheenSlow} />

            {/* metallic micro-grain overlay */}
            <div className={styles.metalGrain} />
          </div>

          {/* reflection / floor mirror */}
          <div className={styles.reflection} />
        </div>
      </div>
    </div>
  );
}
