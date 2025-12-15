// components/Footer.jsx
import styles from "./styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top section */}
        <div className={styles.topRow}>
          {/* Brand + tagline */}
          <div className={styles.brandBlock}>
            <div className={styles.brandName}>
              CaenyX <span>Quantum</span>
            </div>
            <p className={styles.tagline}>
              Digital intelligence engineered for scale.
            </p>
          </div>

          {/* Link columns */}
          <div className={styles.linkColumns}>
            <div className={styles.column}>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.column}>
              <h4>Legal</h4>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>

            <div className={styles.column}>
              <h4>Connect</h4>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {year} CaenyX Quantum. All rights reserved. Crafted with precision,
            delivered with excellence.
          </p>

          <div className={styles.bottomRight}>
            <div className={styles.statusPill}>
              Operational · 99.9% uptime
            </div>

            <div className={styles.bottomLinks}>
              <a href="/privacy">Privacy</a>
              <span>•</span>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
