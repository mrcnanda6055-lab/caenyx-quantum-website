// components/SocialSection.jsx
"use client";

import Link from "next/link";
import styles from "./styles/SocialSection.module.css";

const SOCIAL_LINKS = [
  { label: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { label: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
  { label: "X (Twitter)", icon: "/icons/x.svg", href: "#" },
  { label: "YouTube", icon: "/icons/youtube.svg", href: "#" },
  { label: "GitHub", icon: "/icons/github.svg", href: "#" },
];

export default function SocialSection() {
  return (
    <section id="social" className={styles.section}>
      <div className={styles.glowBar} />

      <div className={styles.container}>
        {/* TOP: heading + social chips */}
        <div className={styles.top}>
          <div className={styles.headingBlock}>
            <h2 className={styles.heading}>Connect with CaenyX</h2>
            <p className={styles.subheading}>
              Launch announcements, case studies, AI experiments and
              behind-the-scenes builds — in your feed, not buried in PDFs.
            </p>
          </div>

          <div className={styles.socialRow}>
            {SOCIAL_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.socialButton}
                aria-label={item.label}
              >
                <span className={styles.socialInner}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={styles.socialIcon}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMNS */}
        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.columnTitle}>Services</p>
            <Link href="#services" className={styles.link}>
              Web Development
            </Link>
            <Link href="#services" className={styles.link}>
              AI Automation
            </Link>
            <Link href="#services" className={styles.link}>
              Dashboards
            </Link>
            <Link href="#services" className={styles.link}>
              WhatsApp Bots
            </Link>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Company</p>
            <Link href="#about" className={styles.link}>
              About Us
            </Link>
            <Link href="#experience" className={styles.link}>
              Portfolio
            </Link>
            <Link href="#career" className={styles.link}>
              Careers
            </Link>
            <Link href="#contact" className={styles.link}>
              Contact
            </Link>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Support</p>
            <Link href="#faq" className={styles.link}>
              Help Center
            </Link>
            <Link href="#faq" className={styles.link}>
              FAQ
            </Link>
            <Link href="#" className={styles.link}>
              Privacy Policy
            </Link>
            <Link href="#" className={styles.link}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className={styles.footerLine}>
          <p>Built for speed. Powered by AI. Crafted for modern businesses.</p>
        </div>
      </div>
    </section>
  );
}
