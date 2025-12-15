"use client";

import styles from "@/components/styles/ServicesPage.module.css"; 
// Reusing the same ultra-premium layout & styling

const PROJECTS = [
  {
    tag: "AI Automations · SaaS",
    title: "Support load reduced by 65%",
    desc: "Multi-channel AI triage bot + internal tools so humans only handle edge cases.",
    result: "65% fewer tickets · under 2 min first response",
    stack: "OpenAI · WhatsApp API · Next.js · Node.js"
  },
  {
    tag: "Analytics Dashboards · Finance",
    title: "Revenue command center",
    desc: "Unified CRM, billing and marketing data into one live KPI dashboard for leadership.",
    result: "Exec summary in seconds · no more spreadsheet chaos",
    stack: "Next.js · PostgreSQL · BI · Custom ETL"
  },
  {
    tag: "Web + WhatsApp Funnel · Education",
    title: "2.3× more qualified leads",
    desc: "High-conversion landing system + WhatsApp nurturing flows that qualify and follow up.",
    result: "2.3× more qualified leads in 30 days on same ad spend",
    stack: "Next.js · WhatsApp Cloud API · Razorpay · CRM"
  },
  {
    tag: "Brand + Website · B2B SaaS",
    title: "Premium AI-first brand presence",
    desc: "New visual identity + AI-native website that clearly explains a complex product.",
    result: "Higher trust · better demo bookings from organic & paid",
    stack: "Brand system · Figma · Next.js · Motion"
  },
  {
    tag: "Enterprise Tooling · Operations",
    title: "Internal ops automation cockpit",
    desc: "HR, finance and ops workflows moved from spreadsheets into one clean control panel.",
    result: "Saved 25+ hours per week for the ops team",
    stack: "Web app · Role-based access · Audit trails"
  }
];

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        {/* Back to home */}
        <div className={styles.backWrap}>
          <a href="/" className={styles.backBtn}>
            ← Back to Home
          </a>
        </div>

        {/* HEADER */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>CaenyX Quantum · Portfolio</p>
          <h1 className={styles.title}>AI-native systems we’ve shipped</h1>
          <p className={styles.subtitle}>
            A quick look at the kind of outcomes we focus on — less manual work,
            more visibility and smoother customer journeys. Every project mixes{" "}
            AI + strong engineering + clean UX.
          </p>
        </header>

        {/* PROJECT GRID */}
        <section className={styles.grid}>
          {PROJECTS.map((p, index) => {
            const number = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <article key={p.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardBadge}>{number}</div>

                  <div className={styles.cardTitleBlock}>
                    <h2 className={styles.cardTitle}>{p.title}</h2>
                    <p className={styles.cardTagline}>{p.tag}</p>
                  </div>

                  <button type="button" className={styles.cardToggle}>
                    <span className={styles.cardToggleIcon}>→</span>
                  </button>
                </div>

                {/* Always open details for portfolio */}
                <div className={styles.cardDetails + " " + styles.cardDetailsOpen}>
                  <p className={styles.pointItem}>{p.desc}</p>
                  <p className={styles.stackLabel}>
                    Result: <span>{p.result}</span>
                  </p>
                  {p.stack && (
                    <p className={styles.stackLabel}>
                      Stack: <span>{p.stack}</span>
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        {/* BOTTOM CTA */}
        <footer className={styles.footerCta}>
          <p className={styles.footerText}>
            Want a similar system for your product or business?
          </p>

          {/* Scroll to home page contact form */}
          <a href="/#contact" className={styles.footerButton}>
            Get a proposal for my project
          </a>
        </footer>
      </div>
    </main>
  );
}
