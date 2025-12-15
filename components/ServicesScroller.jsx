// components/ServicesScroller.jsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./styles/ServicesScroller.module.css";

// 🔥 Top row: first 6 of your services
const TOP_SERVICES = [
  {
    label: "AI & Automation",
    title: "Workflows, agents & bots",
    desc: "AI workflows, chatbots and automations that remove manual work.",
  },
  {
    label: "WhatsApp Systems",
    title: "Funnels, bots & CRM journeys",
    desc: "Click-to-WhatsApp funnels, AI bots and CRM-connected messaging flows.",
  },
  {
    label: "Dashboards & Analytics",
    title: "KPI, sales & performance",
    desc: "KPI, revenue and performance dashboards with AI-powered insights.",
  },
  {
    label: "Web Development",
    title: "Next.js apps & websites",
    desc: "Landing pages, web apps, admin panels and business tools.",
  },
  {
    label: "Mobile App Development",
    title: "Android, iOS & cross-platform",
    desc: "Kotlin, Swift or cross-platform apps with smooth, native UX.",
  },
  {
    label: "Cloud & DevOps",
    title: "CI/CD & auto-scaling infra",
    desc: "Pipelines, monitoring, AIOps and cost-optimised cloud setups.",
  },
];

// 🔥 Bottom row: remaining 6 services
const BOTTOM_SERVICES = [
  {
    label: "Integrations",
    title: "APIs, CRMs & payments",
    desc: "OpenAI, WhatsApp, payment gateways and CRM integrations wired cleanly.",
  },
  {
    label: "Branding & UI/UX",
    title: "Premium brand & product UI",
    desc: "Logo, brand identity and modern product interfaces for your apps.",
  },
  {
    label: "Marketing",
    title: "SEO & performance growth",
    desc: "SEO, Google Ads, social and content with clear ROI tracking.",
  },
  {
    label: "Enterprise Software",
    title: "HRM, CRM, ERP & more",
    desc: "HR, CRM, ERP, inventory, booking and real-estate systems.",
  },
  {
    label: "Support & Maintenance",
    title: "Care, fixes & hardening",
    desc: "Automation support, website AMC, bug fixing and performance tuning.",
  },
  {
    label: "White-Label Services",
    title: "Silent team for agencies",
    desc: "Automations and web development delivered fully white-label.",
  },
];

export default function ServicesScroller() {
  const sectionRef = useRef(null);

  // 🔥 Scroll-based center scaling
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(`.${styles.card}`);

    function applyScale() {
      const center = window.innerWidth / 2;

      cards.forEach((c) => {
        const rect = c.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - center);

        const maxDist = window.innerWidth * 0.6;
        const t = Math.min(dist / maxDist, 1);
        const scale = 1 + (1 - t) * 0.18;

        c.style.setProperty("--scale", scale.toString());
      });
    }

    applyScale();
    window.addEventListener("scroll", applyScale);
    window.addEventListener("resize", applyScale);

    return () => {
      window.removeEventListener("scroll", applyScale);
      window.removeEventListener("resize", applyScale);
    };
  }, []);

  const renderRow = (items, direction) => (
    <div
      className={`${styles.row} ${
        direction === "left" ? styles.rowLeft : styles.rowRight
      }`}
    >
      <div
        className={`${styles.track} ${
          direction === "left" ? styles.trackLeft : styles.trackRight
        }`}
      >
        {[0, 1].map((loop) =>
          items.map((item, idx) => (
            <article
              key={`${direction}-${loop}-${idx}`}
              className={styles.card}
            >
              <div className={styles.cardHalo} />
              <div className={styles.cardInner}>
                <p className={styles.label}>{item.label}</p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );

  return (
    <section className={styles.section} id="services" ref={sectionRef}>
      <div className={styles.inner}>
        {/* Heading */}
        <div className={styles.headingRow}>
          <p className={styles.kicker}>What we build</p>
          <h2 className={styles.heading}>
            Systems that ship with AI, WhatsApp, dashboards & apps built-in.
          </h2>
          <p className={styles.subheading}>
            From AI workflows and WhatsApp funnels to dashboards, apps and
            cloud infra — everything is designed to feel fast, premium and
            effortless for your users.
          </p>
        </div>

        {/* 🔒 Trust + tech strip */}
        <div className={styles.trustRow}>
          <div className={styles.logosBlock}>
            <p className={styles.logosLabel}>Trusted by teams at</p>
            <div className={styles.logosRow}>
              <div className={styles.logoPill}>Acme Labs</div>
              <div className={styles.logoPill}>Northwind CX</div>
              <div className={styles.logoPill}>Nova Finance</div>
              <div className={styles.logoPill}>Vertex SaaS</div>
              <div className={styles.logoPill}>Orbit Education</div>
            </div>
          </div>

          <div className={styles.stackBlock}>
            <p className={styles.stackLabel}>Tech stack &amp; capabilities</p>
            <div className={styles.stackChips}>
              <span>Python</span>
              <span>TypeScript/JavaScript</span>
              <span>Java&SpringBoot</span>
              <span>Go</span>
              <span>Rust</span>
              <span>React</span>
              <span>Kotlin (Android)</span>
              <span>Swift (iOS)</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>OpenAI</span>
              <span>WhatsApp API</span>
              <span>AWS</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>Cloudflare Zero Trust</span>
            </div>
          </div>
        </div>

        {/* Marquee rows */}
        <div className={styles.marqueeShell}>
          {renderRow(TOP_SERVICES, "left")}
          {renderRow(BOTTOM_SERVICES, "right")}
        </div>
      </div>
    </section>
  );
}
