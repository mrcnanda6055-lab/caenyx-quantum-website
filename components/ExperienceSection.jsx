// components/ExperienceSection.jsx
"use client";

import styles from "./styles/ExperienceSection.module.css";

const stats = [
  {
    label: "Projects shipped",
    value: "40+",
    note: "Websites, dashboards & automations now running in production.",
  },
  {
    label: "Avg. delivery time",
    value: "3–5 weeks",
    note: "From first brief to go-live for most builds.",
  },
  {
    label: "Industries served",
    value: "8+",
    note: "SaaS, finance, education, ops & more.",
  },
  {
    label: "Client retention",
    value: "92%",
    note: "Most teams stay for ongoing work & upgrades.",
  },
];

const projects = [
  {
    tag: "AI Automation · SaaS",
    title: "Reduced support load by 65%",
    desc: "AI triage bot + internal tools so humans only handle complex tickets.",
    result: "65% fewer tickets · < 2 min first response",
  },
  {
    tag: "Dashboards · Analytics",
    title: "Single source of truth for revenue",
    desc: "Merged CRM, billing and marketing data into one exec dashboard.",
    result: "Live insight in seconds, not spreadsheets.",
  },
  {
    tag: "Web + WhatsApp Funnel",
    title: "More leads without more ad spend",
    desc: "Redesigned site and added WhatsApp flows that qualify visitors automatically.",
    result: "2.3× more qualified leads in 30 days.",
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.kicker}>Experience &amp; Portfolio</p>
          <h2 className={styles.heading}>Proof that our systems work</h2>
          <p className={styles.subheading}>
            A quick look at the systems we&apos;ve shipped — AI-powered, battle
            tested, and wired into real teams, not just demo projects.
          </p>
        </div>

        {/* Metrics row */}
        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <article key={item.label} className={styles.statCard}>
              <div className={styles.statGlow} />
              <div className={styles.statInner}>
                <p className={styles.statLabel}>{item.label}</p>
                <p className={styles.statValue}>{item.value}</p>
                <p className={styles.statNote}>{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Projects row */}
        <div className={styles.projectsHeaderRow}>
          <h3 className={styles.projectsHeading}>Featured builds</h3>
          <p className={styles.projectsSub}>
            A few projects that show how we mix{" "}
            <span>AI + solid engineering</span> to get real business outcomes.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.projectCard}>
              <div className={styles.projectAccent} />
              <div className={styles.projectInner}>
                <p className={styles.projectTag}>{p.tag}</p>
                <h4 className={styles.projectTitle}>{p.title}</h4>
                <p className={styles.projectDesc}>{p.desc}</p>
                <p className={styles.projectResult}>{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
