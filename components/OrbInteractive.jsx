// components/OrbInteractive.jsx
"use client";

import styles from "./styles/OrbInteractive.module.css";

export default function OrbInteractive() {
  return (
    <div className={styles.wrapper}>
      {/* Glow + core */}
      <div className={styles.glow} />
      <div className={styles.core} />

      {/* Orbit rings */}
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={`${styles.ring} ${styles.ring3}`} />
      <div className={`${styles.ring} ${styles.ring4}`} />
      <div className={`${styles.ring} ${styles.ring5}`} />

      {/* AI */}
      <div className={`${styles.orbit} ${styles.speed1}`}>
        <div className={`${styles.node} ${styles.ai}`}>AI</div>
      </div>

      {/* DATA */}
      <div className={`${styles.orbit} ${styles.speed2}`}>
        <div className={`${styles.node} ${styles.data}`}>DATA</div>
      </div>

      {/* UX */}
      <div className={`${styles.orbit} ${styles.speed3}`}>
        <div className={`${styles.node} ${styles.ux}`}>UX</div>
      </div>

      {/* OPS */}
      <div className={`${styles.orbit} ${styles.speed4}`}>
        <div className={`${styles.node} ${styles.ops}`}>OPS</div>
      </div>

      {/* DEV */}
      <div className={`${styles.orbit} ${styles.speed5}`}>
        <div className={`${styles.node} ${styles.dev}`}>DEV</div>
      </div>

      {/* SEC */}
      <div className={`${styles.orbit} ${styles.speed6}`}>
        <div className={`${styles.node} ${styles.sec}`}>SEC</div>
      </div>
    </div>
  );
}
