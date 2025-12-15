"use client";

import { useEffect } from "react";

export default function ParallaxController() {
  useEffect(() => {
    const layers = document.querySelectorAll("[data-parallax]");
    
    function onScroll() {
      const scrollY = window.scrollY;

      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-parallax") || 0.2;
        const translateY = scrollY * speed;

        layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
