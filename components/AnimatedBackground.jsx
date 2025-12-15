"use client";

import FlowCanvas from "./FlowCanvas";
import OrbInteractive from "./OrbInteractive";
import StripeLine from "./StripeLine";
import styles from "./styles/AnimatedBackground.module.css";

/**
 * AnimatedBackground - wrapper that places orbs, stripes and canvas.
 * All visuals are pointer-events-none and aria-hidden for accessibility.
 */
export default function AnimatedBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      {/* canvas flowing lines */}
      <FlowCanvas intensity={6} />

      {/* drifting large orbs */}
      <div className={styles.orbWrap}>
        <div className={styles.bigLeft}><OrbInteractive size={220} /></div>
        <div className={styles.bigRight}><OrbInteractive size={140} /></div>
        <div className={styles.smallA}><OrbInteractive size={72} /></div>
        <div className={styles.smallB}><OrbInteractive size={56} /></div>
      </div>

      {/* stripe lines */}
      <div className={styles.stripePosA}><StripeLine width={360} rotate={0} /></div>
      <div className={styles.stripePosB}><StripeLine width={240} rotate={14} /></div>
    </div>
  );
}
