"use client";

import React from "react";
import styles from "./styles/StripeLine.module.css";

/**
 * StripeLine
 * Props:
 *  - width: number (pixels)
 *  - rotate: number (deg)
 */
export default function StripeLine({ width = 360, rotate = 0 }) {
  return (
    <div className={styles.wrap} style={{ transform: `rotate(${rotate}deg)` }}>
      <svg width={width} height="28" viewBox={`0 0 ${width} 28`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(34,211,238,0)"/>
            <stop offset="50%" stopColor="#22D3EE"/>
            <stop offset="100%" stopColor="rgba(34,211,238,0)"/>
          </linearGradient>
        </defs>

        <path d={`M4 14 Q ${width / 2} 2 ${width - 4} 14`} stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" fill="none" strokeOpacity="0.9">
          <animate attributeName="stroke-dashoffset" from={width} to={-width} dur="4s" repeatCount="indefinite" />
        </path>

        <circle cx="20" cy="14" r="5" fill="#22D3EE">
          <animateMotion dur="4s" repeatCount="indefinite" path={`M0 0 Q ${width/2 - 20} -10 ${width - 40} 0`} />
        </circle>
      </svg>
    </div>
  );
}
