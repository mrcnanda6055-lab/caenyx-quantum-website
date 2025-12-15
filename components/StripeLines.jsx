// components/StripeLines.jsx
"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/StripeLines.module.css";

export default function StripeLines(){
  const wrap = useRef(null);
  useEffect(()=>{
    const el = wrap.current;
    if(!el) return;
    let t = 0, raf;
    const stripes = Array.from(el.children);
    function anim(){
      t += 0.01;
      stripes.forEach((s,i)=>{
        const offset = Math.sin(t * (0.4 + i*0.06)) * 48;
        s.style.transform = `translateX(${offset}px)`;
      });
      raf = requestAnimationFrame(anim);
    }
    raf = requestAnimationFrame(anim);
    return ()=> cancelAnimationFrame(raf);
  },[]);
  return (
    <div ref={wrap} className={styles.wrap} aria-hidden>
      <div className={styles.s}></div>
      <div className={styles.s}></div>
      <div className={styles.s}></div>
      <div className={styles.s}></div>
      <div className={styles.s}></div>
    </div>
  );
}
