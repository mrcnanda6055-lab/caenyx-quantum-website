"use client";

import { useState } from "react";
import styles from "./styles.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    console.log("New Lead:", data);

    // here later you can call your API / Supabase / email service
    setTimeout(() => {
      setStatus("success");
    }, 800);
  }

  return (
    <main className={styles.wrapper}>
      {/* CONTACT FORM BLOCK */}
      <section className={styles.contactSection}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>
          Fill this form and we&apos;ll get back with a clear plan and next steps.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" required placeholder="Your Name" />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Button styled via .submitBtn (NO plain `button {}` in CSS) */}
          <button type="submit" className={styles.submitBtn}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className={styles.successMsg}>
              Message sent successfully! We&apos;ll contact you shortly.
            </p>
          )}

          {status === "error" && (
            <p className={styles.errorMsg}>Something went wrong. Try again.</p>
          )}
        </form>
      </section>

      {/* SOCIAL / LINKS BLOCK UNDER FORM */}
      <section className={styles.socialSection}>
        <h2 className={styles.socialHeading}>Connect with CaenyX</h2>
        <p className={styles.socialText}>
          Prefer chat instead of forms? Reach us on any of these channels.
        </p>

        <div className={styles.socialRow}>
          <a
            className={styles.socialLink}
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className={styles.socialLink}
            href="mailto:hello@caenyx.com"
          >
            Email
          </a>
          <a
            className={styles.socialLink}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className={styles.socialLink}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
