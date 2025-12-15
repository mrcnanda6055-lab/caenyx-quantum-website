"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>

        {/* LOGO */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap} onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="CaenyX Quantum"
              className={styles.logo}
            />
            <div className={styles.brandText}>
              <div className={styles.title}>CaenyX Quantum</div>
              <div className={styles.subtitle}>
                AI-powered Dev &amp; Automation
              </div>
            </div>
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <Link href="/#contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link href="/#social" onClick={closeMenu}>
            Social
          </Link>

          <Link href="/#about" onClick={closeMenu}>
            About
          </Link>
        </nav>

        {/* CTA + BURGER */}
        <div className={styles.ctas}>
          <a
            className={styles.whatsapp}
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            WhatsApp
          </a>

          <button
            className={styles.burger}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </div>
    </header>
  );
}
