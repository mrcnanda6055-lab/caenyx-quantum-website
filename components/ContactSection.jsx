// components/ContactSection.jsx
"use client";

import styles from "./styles/ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        {/* LEFT – Copy + contact details */}
        <div className={styles.left}>
          <p className={styles.kicker}>Contact us</p>
          <h2 className={styles.heading}>Let&apos;s build your next system</h2>
          <p className={styles.subheading}>
            Tell us what you&apos;re trying to ship. We&apos;ll come back with a
            clear plan, timeline and ballpark pricing — usually within 24 hours.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaBlock}>
              <p className={styles.metaLabel}>Email</p>
              <p className={styles.metaValue}>chythanya1754@gmail.com</p>
              <p className={styles.metaNote}>Best for detailed briefs.</p>
            </div>

            <div className={styles.metaBlock}>
              <p className={styles.metaLabel}>WhatsApp</p>
              <p className={styles.metaValue}>+91-99XX-XX-XXXX</p>
              <p className={styles.metaNote}>
                Quick questions, voice notes, updates.
              </p>
            </div>

            <div className={styles.metaBlock}>
              <p className={styles.metaLabel}>Location</p>
              <p className={styles.metaValue}>Hyderabad · Remote friendly</p>
              <p className={styles.metaNote}>
                We work with teams across time zones.
              </p>
            </div>

            <div className={styles.metaBlock}>
              <p className={styles.metaLabel}>Typical response</p>
              <p className={styles.metaValue}>Under 24 hours</p>
              <p className={styles.metaNote}>
                Often faster on weekdays and launches.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – Form card */}
        <div className={styles.right}>
          <div className={styles.formShell}>
            <div className={styles.formHalo} />

            <form className={styles.form}>
              <div className={styles.formHeader}>
                <h3>Share a bit about your project</h3>
                <p>No spam. No pushy sales. Just a clear, honest assessment.</p>
              </div>

              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label htmlFor="name">Full name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Company / Brand</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label htmlFor="email">Work email*</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">WhatsApp / Phone*</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91..."
                    />
                  </div>
              </div>

              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label htmlFor="need">What do you need most right now?*</label>
                  <select id="need" name="need" defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="website">Website / Landing page</option>
                    <option value="dashboard">Dashboard / Internal tool</option>
                    <option value="automation">AI / Workflow automation</option>
                    <option value="whatsapp">WhatsApp funnels / Bots</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="budget">Rough budget (INR)</label>
                  <select id="budget" name="budget" defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="5-10">₹5–10L</option>
                    <option value="10-25">₹10–25L</option>
                    <option value="25-50">₹25–50L</option>
                    <option value="50+">₹50L+</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="brief">
                  Tell us a bit about the project*{" "}
                  <span className={styles.optionalHint}>(links are welcome)</span>
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={4}
                  placeholder="Example: We want an AI-assisted dashboard for our sales team + a marketing site that can be updated easily."
                />
              </div>

              <button type="submit" className={styles.submit}>
                Send project details
              </button>

              <p className={styles.footnote}>
                By submitting, you agree to let us contact you about this
                project.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
