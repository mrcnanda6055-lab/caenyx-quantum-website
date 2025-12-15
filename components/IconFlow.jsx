"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./styles/IconFlow.module.css";

/*
Place your Lottie JSON files inside /public/lottie/
recommended names: research.json, architect.json, design.json, code.json
Keep each file < 150 KB
*/

const steps = [
  { title: "Research", file: "/lottie/research.json" },
  { title: "Architect", file: "/lottie/architect.json" },
  { title: "Design", file: "/lottie/design.json" },
  { title: "Code", file: "/lottie/code.json" },
];

export default function IconFlow() {
  return (
    <section className={styles.wrap} aria-label="Work process">
      <div className={styles.grid}>
        {steps.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.anim}>
              <Player autoplay loop src={s.file} style={{ height: 120, width: 120 }} />
            </div>
            <div className={styles.title}>{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
