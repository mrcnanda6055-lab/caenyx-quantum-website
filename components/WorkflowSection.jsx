"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./styles/WorkflowSection.module.css";

/* 🔥 EXACT 12 WORKFLOWS (UNCHANGED DATA STRUCTURE) */
const WORKFLOWS = [
  {
    name: "Signal Probe",
    desc: [
      "We scan business, user, and system signals deeply.",
      "Hidden automation opportunities are identified.",
      "Noise is separated from real intent.",
      "User friction points are mapped clearly.",
      "Operational inefficiencies are highlighted.",
      "Signals are ranked by impact and feasibility.",
      "Business goals are tied to technical signals.",
      "Early risk and compliance checks are done.",
      "Assumptions are eliminated.",
      "Only real opportunities move forward.",
      "Clarity is achieved before building.",
      "This prevents wasted effort.",
      "Foundation for all next stages.",
      "Precision over guesswork.",
      "Everything starts here."
    ]
  },
  {
    name: "Hypothesis Lab",
    desc: [
      "Signals are converted into testable hypotheses.",
      "Each hypothesis has clear inputs and outputs.",
      "Success criteria are defined early.",
      "Edge cases are considered upfront.",
      "Human vs AI responsibility is decided.",
      "Low-value ideas are filtered out.",
      "Fast validation is prioritized.",
      "Risk is reduced before development.",
      "Confidence is built step by step.",
      "Complexity is controlled.",
      "Engineering waste is avoided.",
      "Only proven ideas move ahead.",
      "Execution becomes predictable.",
      "Decisions are data-backed.",
      "Momentum is preserved."
    ]
  },
  {
    name: "Data Alchemy",
    desc: [
      "Raw data is cleaned and unified.",
      "Data sources are normalized.",
      "Noise and duplication are removed.",
      "Schemas are standardized.",
      "Sensitive data is protected.",
      "AI-ready features are engineered.",
      "Data quality checks are enforced.",
      "Data lineage is maintained.",
      "Drift is monitored continuously.",
      "Observability is built in.",
      "Reliable data powers AI.",
      "Garbage-in is eliminated.",
      "Accuracy improves drastically.",
      "Trust in data increases.",
      "Insights become actionable."
    ]
  },
  {
    name: "System Foundry",
    desc: [
      "The full AI system architecture is designed.",
      "Agents and services are planned.",
      "Scalability is built from day one.",
      "Failure scenarios are anticipated.",
      "Security boundaries are defined.",
      "APIs are structured cleanly.",
      "Human override paths exist.",
      "System remains modular.",
      "Observability is embedded.",
      "Latency is optimized.",
      "Future expansion is easy.",
      "Technical debt is minimized.",
      "Architecture stays flexible.",
      "System becomes durable.",
      "This is the backbone."
    ]
  },
  {
    name: "Agent Forge",
    desc: [
      "AI agents are designed with clear roles.",
      "Each agent has strict boundaries.",
      "Agents collaborate safely.",
      "Memory and context are managed.",
      "Fallback logic is defined.",
      "Agents remain controllable.",
      "Human-in-the-loop where required.",
      "No runaway automation.",
      "Agents are production ready.",
      "Reliability is prioritized.",
      "Scalable agent design.",
      "Clear ownership exists.",
      "Automation becomes intelligent.",
      "Systems gain power.",
      "AI comes alive."
    ]
  },
  {
    name: "FlowWeave",
    desc: [
      "Agents and systems are connected.",
      "End-to-end workflows are built.",
      "Data flows are synchronized.",
      "Race conditions are avoided.",
      "Retries and recovery are defined.",
      "Failures are handled gracefully.",
      "Execution becomes smooth.",
      "Systems communicate reliably.",
      "Complexity is hidden.",
      "Automation feels natural.",
      "Operations stabilize.",
      "Predictability increases.",
      "Scale becomes easy.",
      "Everything flows.",
      "Order replaces chaos."
    ]
  },
  {
    name: "Sentinel QA",
    desc: [
      "Systems are thoroughly tested.",
      "Edge cases are validated.",
      "Failure paths are simulated.",
      "Load testing is performed.",
      "Security issues are checked.",
      "AI behavior is audited.",
      "Regression tests are automated.",
      "Quality gates are enforced.",
      "Confidence before launch.",
      "Surprises are eliminated.",
      "Reliability improves.",
      "Trust is built.",
      "Errors are reduced.",
      "Systems mature.",
      "Stability increases."
    ]
  },
  {
    name: "Resilience Forge",
    desc: [
      "Systems are hardened for failures.",
      "Fallback strategies are added.",
      "Graceful degradation is ensured.",
      "Monitoring is strengthened.",
      "Self-healing logic exists.",
      "Downtime impact is reduced.",
      "Operational risk decreases.",
      "Systems survive stress.",
      "Confidence under pressure.",
      "Stability becomes default.",
      "Operations mature.",
      "Business continuity improves.",
      "Trust grows.",
      "Reliability becomes norm.",
      "This is resilience."
    ]
  },
  {
    name: "Catalyst Launch",
    desc: [
      "Systems are deployed safely.",
      "Controlled rollouts are used.",
      "Metrics are monitored live.",
      "Issues are detected early.",
      "Feedback is captured quickly.",
      "Launch risks are minimized.",
      "Stakeholders stay aligned.",
      "No blind deployments.",
      "Confidence at go-live.",
      "Smooth production entry.",
      "Real-world validation begins.",
      "Performance is measured.",
      "Value is delivered.",
      "Momentum builds.",
      "Impact is visible."
    ]
  },
  {
    name: "Watchtower Ops",
    desc: [
      "Live systems are monitored.",
      "Operational metrics are tracked.",
      "AI behavior is observed.",
      "Anomalies are detected.",
      "Alerts are meaningful.",
      "False alarms are reduced.",
      "Incidents are resolved fast.",
      "Visibility is complete.",
      "Systems stay healthy.",
      "Performance remains stable.",
      "Ops teams stay calm.",
      "Control is maintained.",
      "Trust continues.",
      "No surprises occur.",
      "Operations stay smooth."
    ]
  },
  {
    name: "Learning Loop",
    desc: [
      "Systems learn from real usage.",
      "Feedback improves AI.",
      "Errors become insights.",
      "Performance improves continuously.",
      "Human feedback is integrated.",
      "Models adapt safely.",
      "No static intelligence.",
      "Accuracy increases.",
      "Automation gets smarter.",
      "Iteration is controlled.",
      "Learning compounds.",
      "Systems evolve.",
      "Value multiplies.",
      "Intelligence grows.",
      "Evolution never stops."
    ]
  },
  {
    name: "Governance & Ethics",
    desc: [
      "AI usage is governed responsibly.",
      "Compliance rules are enforced.",
      "Ethical boundaries are respected.",
      "Transparency is maintained.",
      "Audit trails are preserved.",
      "Human accountability remains.",
      "Risk is controlled.",
      "Trust is protected.",
      "Regulatory alignment exists.",
      "AI decisions are explainable.",
      "No black-box behavior.",
      "Long-term safety ensured.",
      "Responsible AI culture.",
      "Governance is continuous.",
      "Future is protected."
    ]
  }
];

export default function WorkflowSection() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState([]);
  const cardRef = useRef(null);

  /* 🔤 EXACT SAME TYPING LOGIC */
  useEffect(() => {
    let line = 0;
    let char = 0;
    let buffer = [];

    setTyped([""]);

    const timer = setInterval(() => {
      if (line >= WORKFLOWS[active].desc.length) {
        clearInterval(timer);
        return;
      }

      const text = WORKFLOWS[active].desc[line];
      buffer[line] = text.slice(0, char + 1);
      setTyped([...buffer]);

      char++;
      if (char === text.length) {
        char = 0;
        line++;
        buffer.push("");
      }
    }, 18);

    return () => clearInterval(timer);
  }, [active]);

  /* 🧊 3D TILT (UNCHANGED) */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -8;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 8;

      el.style.transform = `
        perspective(1200px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
      `;
    };

    const reset = () => {
      el.style.transform =
        "perspective(1200px) rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div ref={cardRef} className={styles.container}>
        {/* LEFT = DETAILS */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            {WORKFLOWS[active].name}
          </h2>

          <ul className={styles.list}>
            {typed.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT = WORKFLOW STEPS */}
        <div className={styles.right}>
          {WORKFLOWS.map((wf, i) => (
            <button
              key={i}
              className={`${styles.step} ${
                i === active ? styles.active : ""
              }`}
              onClick={() => setActive(i)}
            >
              <span className={styles.index}>{i + 1}</span>
              <span className={styles.name}>{wf.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
