"use client";

import Link from "next/link";
import styles from "./styles/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Ready to Build Something Powerful?</h2>
      <p className={styles.p}>We deliver faster, smarter and more reliable systems.</p>

      <div className={styles.row}>
        <Link href="/contact" className={styles.primary}>
          Contact Us
        </Link>

        <Link href="/services" className={styles.secondary}>
          View Services
        </Link>
      </div>
    </section>
  );
}
