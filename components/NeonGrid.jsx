// components/NeuralScene.jsx
"use client";

import styles from "./styles/NeuralScene.module.css";

export default function NeuralScene() {
  return (
    <div className={styles.shell}>
      {/* Background grid + glow */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      {/* Floating nodes in the air */}
      <div className={styles.nodeLayer}>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={styles.node} />
        ))}
      </div>

      {/* Rising neural lines from chip */}
      <div className={styles.linesLayer}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className={styles.line} />
        ))}
      </div>

      {/* Top floating cards */}
      <div className={styles.cardsLayer}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardInner} />
          </div>
        ))}
      </div>

      {/* AI chip anchored to bottom (heavy) */}
      <div className={styles.chipZone}>
        <div className={styles.chipShadow} />

        <div className={styles.chip}>
          <div className={styles.chipFrame}>
            <div className={styles.chipPlate}>
              <div className={`${styles.chipLayer} ${styles.topLayer}`} />
              <div className={`${styles.chipLayer} ${styles.midLayer}`} />
              <div className={`${styles.chipLayer} ${styles.coreLayer}`}>
                <div className={styles.chipCore}>
                  <span className={styles.aiLabel}>AI</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.pinRow} ${styles.pinTop}`} />
          <div className={`${styles.pinRow} ${styles.pinBottom}`} />
        </div>
      </div>
    </div>
  );
}
