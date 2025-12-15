// components/AboutSection.jsx 
"use client";

import styles from "./styles/AboutSection.module.css";
import OrbInteractive from "./OrbInteractive";

const VALUES = [
  {
    label: "Speed",
    title: "Ship fast, without chaos",
    desc: "We design systems and processes so work moves in hours and days, not weeks.",
  },
  {
    label: "Clarity",
    title: "No jargon, just signal",
    desc: "You always know what we’re building, why, and what happens next.",
  },
  {
    label: "Reliability",
    title: "Production, not prototypes",
    desc: "We prefer stable systems over flashy demos that break under real users.",
  },
  {
    label: "AI-first",
    title: "Agents, not manual toil",
    desc: "Where it makes sense, agents handle grunt work so humans can think.",
  },
  {
    label: "User empathy",
    title: "Humans at the center",
    desc: "Interfaces and flows feel natural for the people who actually use them.",
  },
  {
    label: "Precision",
    title: "Engineering with taste",
    desc: "We sweat the edge cases, state handling, and failure modes.",
  },
];

const TIMELINE = [
  {
    year: "2023",
    title: "CaenyX started",
    desc: "Launched with a simple idea: systems shouldn’t take months to ship.",
  },
  {
    year: "2024",
    title: "20+ builds live",
    desc: "Websites, dashboards and automations shipped for teams in multiple industries.",
  },
  {
    year: "2025",
    title: "Multi-agent engine",
    desc: "Our internal AIOps engine orchestrates 8+ agents per project.",
  },
  {
    year: "Next",
    title: "Your system",
    desc: "The next build on this timeline is the one you’re about to start.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* HERO ROW */}
        <div className={styles.heroRow}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>About CaenyX</p>
            <h2 className={styles.heading}>
              We build AI-powered systems that feel effortless to use.
            </h2>
            <p className={styles.subheading}>
              CaenyX is a small, focused team that treats every project like an
              internal product. We combine agents, automation and clean design
              so your systems feel fast, predictable and calm to work in.
            </p>

            <div className={styles.heroBadges}>
              <span className={styles.badge}>AI-first</span>
              <span className={styles.badge}>3–10× faster delivery</span>
              <span className={styles.badge}>Full-stack + automation</span>
            </div>
          </div>

          {/* AI ORBIT VISUAL */}
          <div className={styles.heroViz}>
            <OrbInteractive />

            <p className={styles.vizCaption}>
              One system, many moving parts — orchestrated like a single AI
              machine.
            </p>
          </div>
        </div>

        {/* MISSION BLOCK */}
        <div className={styles.missionBlock}>
          <p className={styles.missionLabel}>What we&apos;re here to do</p>

          <h3 className={styles.missionTitle}>
            Build systems with the speed of agents
            <span> and the care of a product team.</span>
          </h3>

          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <p className={styles.missionTag}>Build fast</p>
              <p className={styles.missionText}>
                Multi-agent workflows, internal templates and proven patterns
                mean you get weeks of work in days.
              </p>
            </div>

            <div className={styles.missionCard}>
              <p className={styles.missionTag}>Build right</p>
              <p className={styles.missionText}>
                We obsess over flows, edge cases and reliability so your team
                trusts the system from day one.
              </p>
            </div>

            <div className={styles.missionCard}>
              <p className={styles.missionTag}>Build future-ready</p>
              <p className={styles.missionText}>
                Your system is built to add new agents, integrations and
                automations without starting from scratch.
              </p>
            </div>
          </div>
        </div>

        {/* STORY ROW */}
        <div className={styles.storyRow}>
          <div className={styles.storyCard}>
            <p className={styles.storyLabel}>Why CaenyX exists</p>

            <h3 className={styles.storyHeading}>
              Software shouldn&apos;t take months to ship or years to fix.
            </h3>

            <p className={styles.storyBody}>
              Most teams are stuck between bloated agencies and random
              freelancers. We started CaenyX to be the third option: a small
              crew that knows how to ship, can talk to your business and can
              actually wire AI into your workflows — without turning everything
              into an experiment.
            </p>

            <p className={styles.storyBody}>
              The goal is simple: if you give us a clear outcome, we give you a
              system that quietly delivers it — and a team that&apos;s on call
              when you&apos;re ready to push it further.
            </p>
          </div>
        </div>

        {/* VALUES GRID */}
        <div className={styles.valuesBlock}>
          <div className={styles.valuesHeader}>
            <p className={styles.valuesLabel}>How we work</p>

            <h3 className={styles.valuesHeading}>Principles that drive builds</h3>

            <p className={styles.valuesSub}>
              These are the filters we use for every decision — from which
              features to cut to which integrations we recommend.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <p className={styles.valueChip}>{v.label}</p>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className={styles.timelineBlock}>
          <div className={styles.timelineHeader}>
            <p className={styles.timelineLabel}>Timeline</p>

            <h3 className={styles.timelineHeading}>
              From idea to AI-powered systems
            </h3>
          </div>

          <div className={styles.timelineRail}>
            {TIMELINE.map((t, idx) => (
              <div key={t.year} className={styles.timelineItem}>
                <div className={styles.timelineDotWrap}>
                  <div
                    className={`${styles.timelineDot} ${
                      idx === TIMELINE.length - 1
                        ? styles.timelineDotActive
                        : ""
                    }`}
                  />
                </div>

                <div className={styles.timelineContent}>
                  <p className={styles.timelineYear}>{t.year}</p>
                  <p className={styles.timelineTitle}>{t.title}</p>
                  <p className={styles.timelineDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className={styles.ctaBlock}>
          <div className={styles.ctaText}>
            <h3>Ready to make your systems feel like this?</h3>
            <p>
              Share what you&apos;re trying to build — we&apos;ll show you how
              an AI-powered system can handle the work quietly in the
              background.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.primaryCta}>
              Get a proposal
            </a>

            <a href="#workflow" className={styles.secondaryCta}>
              See our 12-agent workflow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
