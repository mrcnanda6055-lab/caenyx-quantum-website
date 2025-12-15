"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles/UltraHypothesisLab.module.css";

/* 🔥 12 WORKFLOWS + DATA */
const WORKFLOWS = [
  {
    title: "Signal Probe",
    points: [
      "Business, user & system signals ingested",
      "Hidden automation opportunities detected",
      "Noise separated from real intent",
      "Signals ranked by impact",
    ],
  },
  {
    title: "Intent Mapping",
    points: [
      "User intent clusters extracted",
      "Behavioral patterns identified",
      "Decision triggers mapped",
      "False positives removed",
    ],
  },
  {
    title: "Hypothesis Lab",
    points: [
      "Hypotheses converted into testable logic",
      "Inputs and outputs defined",
      "Success metrics locked",
      "Risk assumptions eliminated",
    ],
  },
  {
    title: "Data Alchemy",
    points: [
      "Raw data normalized",
      "Contextual enrichment applied",
      "Missing signals reconstructed",
      "Pipelines stabilized",
    ],
  },
  {
    title: "Logic Modeling",
    points: [
      "Decision trees modeled",
      "Rule engines designed",
      "AI vs Human boundaries defined",
      "Edge cases simulated",
    ],
  },
  {
    title: "System Foundry",
    points: [
      "Core system architecture finalized",
      "Scalable modules designed",
      "Cloud & infra aligned",
      "Security enforced",
    ],
  },
  {
    title: "Agent Forge",
    points: [
      "AI agents forged",
      "Role-based intelligence assigned",
      "Autonomy levels configured",
      "Failure handling added",
    ],
  },
  {
    title: "FlowWeave",
    points: [
      "Workflow orchestration connected",
      "System-to-system flows built",
      "Latency optimized",
      "Fallback paths added",
    ],
  },
  {
    title: "Automation Spine",
    points: [
      "End-to-end automation spine created",
      "Triggers & actions linked",
      "Human override points added",
      "Observability enabled",
    ],
  },
  {
    title: "Sentinel QA",
    points: [
      "Edge cases guarded",
      "Failure simulations executed",
      "Regression checks added",
      "AI drift monitored",
    ],
  },
  {
    title: "Optimization Loop",
    points: [
      "Performance bottlenecks identified",
      "Execution optimized",
      "Costs reduced",
      "Efficiency improved",
    ],
  },
  {
    title: "Production Launch",
    points: [
      "System launched to production",
      "Monitoring enabled",
      "Real-time metrics tracked",
      "Continuous improvements started",
    ],
  },
];

export default function UltraHypothesisLab() {
  const cardRef = useRef(null);
  const [active, setActive] = useState(2);
  const [visiblePoints, setVisiblePoints] = useState([]);

  /* 🧠 TYPING / TERMINAL EFFECT */
  useEffect(() => {
    let i = 0;
    setVisiblePoints([]);

    const interval = setInterval(() => {
      setVisiblePoints((prev) => [
        ...prev,
        WORKFLOWS[active].points[i],
      ]);
      i++;
      if (i >= WORKFLOWS[active].points.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className={styles.section}>
      <div ref={cardRef} className={styles.core}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2>
            {WORKFLOWS[active].title.split(" ")[0]}{" "}
            <span>{WORKFLOWS[active].title.split(" ")[1]}</span>
          </h2>

          <ul className={styles.terminal}>
            {visiblePoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.steps}>
          {WORKFLOWS.map((wf, i) => (
            <button
              key={wf.title}
              className={i === active ? styles.active : ""}
              onClick={() => setActive(i)}
            >
              <span>{i + 1}</span>
              {wf.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
