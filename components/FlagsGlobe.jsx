// components/FlagsGlobe.jsx
"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles/FlagsGlobe.module.css";

const FLAGS = ["/flags/us.png","/flags/uk.png","/flags/in.png","/flags/de.png","/flags/ae.png","/flags/sg.png"];

export default function FlagsGlobe({ size = 360 }) {
  const wrap = useRef(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll("[data-flag]"));
    let t = 0;
    let raf;
    function step() {
      t += 0.01;
      const w = el.clientWidth/2, h = el.clientHeight/2;
      nodes.forEach((n,i)=>{
        const ang = (i / nodes.length) * Math.PI * 2 + t * (0.4 + i*0.02);
        const r = 80 + 40*Math.sin(t*0.3 + i);
        const x = w + Math.cos(ang)*r;
        const y = h + Math.sin(ang)*r*0.6;
        n.style.transform = `translate(${x - n.clientWidth/2}px, ${y - n.clientHeight/2}px)`;
      });
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrap} className={styles.wrap} style={{width:size, height:size}}>
      {FLAGS.map((f,i)=> (
        <img key={i} src={f} data-flag className={styles.flag} alt="country flag" />
      ))}
    </div>
  );
}
