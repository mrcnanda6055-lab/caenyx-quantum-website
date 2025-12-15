// components/MagneticCursor.jsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./styles/MagneticCursor.module.css";

export default function MagneticCursor() {
  const cursor = useRef(null);
  const follower = useRef(null);
  useEffect(() => {
    const c = cursor.current;
    const f = follower.current;
    if (!c || !f) return;

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const speed = 0.16; // lower = smoother lag

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      c.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    function animate() {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      f.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestAnimationFrame(animate);
    }

    function onHoverEnter(e) {
      const el = e.target.closest("[data-magnetic]");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      c.classList.add(styles.hover);
      f.classList.add(styles.hover);
      // scale and offset towards element center
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      c.style.transform = `translate3d(${cx}px, ${cy}px, 0) scale(0.9)`;
    }

    function onHoverLeave() {
      c.classList.remove(styles.hover);
      f.classList.remove(styles.hover);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", animate);
    document.addEventListener("pointerover", onHoverEnter);
    document.addEventListener("pointerout", onHoverLeave);

    // hide default cursor
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", animate);
      document.removeEventListener("pointerover", onHoverEnter);
      document.removeEventListener("pointerout", onHoverLeave);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={follower} className={styles.follower} />
      <div ref={cursor} className={styles.cursor} />
    </>
  );
}
