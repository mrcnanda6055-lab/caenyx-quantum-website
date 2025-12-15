"use client";

import { useState } from "react";
import styles from "@/components/styles/ServicesPage.module.css";

const SERVICES = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    tagline: "End-to-end AI systems that remove manual work.",
    points: [
      "AI Workflows",
      "AI Chatbots (Support & Sales)",
      "AI Agents (Voice, Text, WhatsApp)",
      "AI Email Automation",
      "AI Document Processing (RAG Systems)",
      "Lead & Sales Automations",
      "Support Ticket Automations",
      "HR & Finance Automations"
    ],
    stack: "OpenAI, Node.js, Python, Zapier/Make, Webhooks"
  },
  {
    id: "whatsapp-systems",
    title: "WhatsApp Systems",
    tagline: "Full-funnel WhatsApp journeys from lead capture to sales.",
    points: [
      "WhatsApp Funnels (Lead, Sales, Course, Real Estate)",
      "WhatsApp AI Bots",
      "WhatsApp Drip Campaigns",
      "WhatsApp CRM Integrations",
      "WhatsApp Appointment Systems",
      "Click-to-WhatsApp Ad Funnels"
    ],
    stack: "WhatsApp Cloud API, 360Dialog, CRM integrations, OpenAI"
  },
  {
    id: "dashboards-analytics",
    title: "Dashboards & Analytics",
    tagline: "See your KPIs, revenue and performance in one place.",
    points: [
      "KPI Dashboards",
      "Sale & Revenue Dashboards",
      "Marketing Analytics",
      "AI-Powered Insights",
      "Custom BI Boards (PowerBI / Looker / Notion)",
      "CRM & Performance Dashboards"
    ],
    stack: "Next.js, PostgreSQL, PowerBI, Looker, Notion, Analytics tools"
  },
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Modern, fast and conversion-focused web experiences.",
    points: [
      "Next.js Web Apps",
      "Landing Pages",
      "E-commerce Websites",
      "Admin Panels",
      "Business Tools & Web Platforms"
    ],
    stack: "React, Next.js, Node.js, PostgreSQL, Tailwind CSS"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    tagline: "Native and cross-platform apps that feel smooth and fast.",
    points: [
      "Android Apps (Kotlin)",
      "iOS Apps (Swift)",
      "Cross-platform Apps"
    ],
    stack: "Kotlin, Swift, React Native / Flutter, REST/GraphQL APIs"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Infra that auto-scales, self-heals and stays observable.",
    points: [
      "CI/CD Automation",
      "Serverless Deployments",
      "Cloud Monitoring & Alerts",
      "Auto-scaling Systems",
      "AIOps (AI + Operations)",
      "Cloud Cost Optimization"
    ],
    stack: "AWS, Docker, Kubernetes, Cloudflare, GitHub Actions"
  },
  {
    id: "integrations",
    title: "Integrations",
    tagline: "Make all your tools and systems talk to each other.",
    points: [
      "OpenAI API",
      "WhatsApp API",
      "Payment Gateways (Stripe, Razorpay, PayPal)",
      "CRM Integrations (HubSpot, Zoho, Notion)",
      "Third-party API Integrations",
      "Webhooks"
    ],
    stack: "REST/GraphQL APIs, Webhooks, iPaaS, custom integrations"
  },
  {
    id: "branding-uiux",
    title: "Branding & UI/UX",
    tagline: "Brand and product design that actually feels premium.",
    points: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Creative Social Media Design"
    ],
    stack: "Figma, design systems, prototyping"
  },
  {
    id: "marketing",
    title: "Marketing",
    tagline: "Performance-first marketing with clear ROI tracking.",
    points: [
      "SEO",
      "Performance Marketing",
      "Google Ads",
      "Social Media Management",
      "Content Strategy"
    ],
    stack: "Google Ads, Meta Ads, SEO, analytics & tracking"
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    tagline: "Serious business systems for teams and operations.",
    points: [
      "HR Management Systems",
      "CRM Systems",
      "ERP Systems",
      "Inventory/Billing Systems",
      "Appointment Booking Systems",
      "Real Estate CRM"
    ],
    stack: "Web apps, relational databases, role-based access, reporting"
  },
  {
    id: "support-maintenance",
    title: "Support & Maintenance",
    tagline: "We keep your sites and automations healthy 24/7.",
    points: [
      "Automation Support",
      "Website AMC",
      "Bug Fixing",
      "Performance Optimization",
      "Security Hardening"
    ],
    stack: "Monitoring, audits, on-call support, patch management"
  },
  {
    id: "white-label",
    title: "White-Label Services",
    tagline: "Silent backend team for agencies and studios.",
    points: [
      "White-Label Automations",
      "White-Label Web Development",
      "Agency Partnerships"
    ],
    stack: "NDA-based delivery, shared playbooks, partner workflows"
  }
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        {/* Back to home button */}
        <div className={styles.backWrap}>
          <a href="/" className={styles.backBtn}>
            ← Back to Home
          </a>
        </div>

        <header className={styles.header}>
          <p className={styles.eyebrow}>CaenyX Quantum · Services</p>
          <h1 className={styles.title}>What we build for you</h1>
          <p className={styles.subtitle}>
            12 ultra-focused services, designed for speed, scale and AI-native products.
            Pick what you need—or let us design the full stack.
          </p>
        </header>

        <section className={styles.grid}>
          {SERVICES.map((service, index) => {
            const isActive = activeId === service.id;
            const label =
              index + 1 < 10 ? "0" + (index + 1) : "" + (index + 1);

            return (
              <article
                key={service.id}
                className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                onClick={() =>
                  setActiveId((current) =>
                    current === service.id ? null : service.id
                  )
                }
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardBadge}>{label}</div>

                  <div className={styles.cardTitleBlock}>
                    <h2 className={styles.cardTitle}>{service.title}</h2>
                    <p className={styles.cardTagline}>{service.tagline}</p>
                  </div>

                  <button
                    type="button"
                    className={styles.cardToggle}
                    aria-label={isActive ? "Collapse" : "Expand"}
                  >
                    <span className={styles.cardToggleIcon}>
                      {isActive ? "–" : "+"}
                    </span>
                  </button>
                </div>

                <div
                  className={`${styles.cardDetails} ${
                    isActive ? styles.cardDetailsOpen : ""
                  }`}
                >
                  <ul className={styles.points}>
                    {service.points.map((point) => (
                      <li key={point} className={styles.pointItem}>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.stackLabel}>
                    Tech we love: <span>{service.stack}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </section>

        <footer className={styles.footerCta}>
          <p className={styles.footerText}>
            Have a project in mind but not sure which services you need?
          </p>

          {/* Contact form on home page */}
          <a href="/#contact" className={styles.footerButton}>
            Get a proposal for my project
          </a>
        </footer>
      </div>
    </main>
  );
}
