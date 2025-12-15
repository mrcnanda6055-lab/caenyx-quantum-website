// components/FAQSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles/FAQSection.module.css";

const FAQ_ITEMS = [
  {
    tag: "AI Systems",
    question: "How do you actually use AI inside client systems?",
    answer:
      "We plug agents into repeatable workflows like approvals, inbox triage and reporting. Humans still own decisions, but AI handles the boring, structured work.",
  },
  {
    tag: "Multi-Agent Workflow",
    question: "What does your multi-agent workflow look like in practice?",
    answer:
      "Each agent owns a specific step: fetching data, cleaning it, updating tools, notifying your team. They’re orchestrated so you always see one clean result, not ten different bots shouting at you.",
  },
  {
    tag: "Fast Delivery",
    question: "How fast can you ship something usable?",
    answer:
      "Most builds ship in 2–4 weeks. We reuse internal patterns and components so you don’t pay for us reinventing basic dashboards, auth or integrations.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef(null);

  const activeAnswer = FAQ_ITEMS[activeIndex]?.answer ?? "";

  // Check browser speech support
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) {
      setIsSupported(false);
    }
  }, []);

  // If FAQ change → stop old speech
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setIsPlaying(false);
  }, [activeIndex]);

  const handlePlay = () => {
    if (!isSupported || !activeAnswer) return;
    const synth = window.speechSynthesis;

    // already playing → stop
    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(activeAnswer);
    utterance.rate = 1.05; // small speed boost
    utterance.pitch = 1.1;
    utterance.volume = 1;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    setIsPlaying(true);
    synth.speak(utterance);
  };

  const scrollToContact = () => {
    if (typeof document === "undefined") return;
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <p className={styles.kicker}>FAQ</p>
          <h2 className={styles.heading}>Questions people usually ask us</h2>
          <p className={styles.subheading}>
            If you&apos;re planning to work with us, these answers give clarity
            before we start.
          </p>

          {/* category chips */}
          <div className={styles.tagRow}>
            {FAQ_ITEMS.map((item, idx) => (
              <button
                key={item.tag}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`${styles.tagChip} ${
                  idx === activeIndex ? styles.tagChipActive : ""
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>

          {/* question list */}
          <div className={styles.qaList}>
            {FAQ_ITEMS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`${styles.qaItem} ${
                    isActive ? styles.qaItemActive : ""
                  }`}
                >
                  <div className={styles.qaQuestion}>{item.question}</div>
                  {isActive && (
                    <div className={styles.qaAnswer}>{item.answer}</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE – CX AI assistant */}
        <div className={styles.right}>
          <aside
            className={`${styles.agentCard} ${
              isPlaying ? styles.agentCardPlaying : ""
            }`}
          >
            <div className={styles.agentOrb}>
              <div className={styles.agentOrbGlow} />
              <div className={styles.agentOrbRingOuter} />
              <div className={styles.agentOrbRingInner} />
              <div className={styles.agentOrbCore}>
                <span>CX</span>
              </div>
            </div>

            <div className={styles.agentBody}>
              <p className={styles.agentLabel}>Still unsure?</p>
              <p className={styles.agentText}>
                Tap a question or let our AI agent read answers aloud.
              </p>

              <div className={styles.agentActions}>
                <button
                  type="button"
                  onClick={handlePlay}
                  disabled={!isSupported || !activeAnswer}
                  className={styles.playButton}
                >
                  <span className={styles.playIcon}>🔊</span>
                  {isPlaying ? "Stop current answer" : "Play current answer"}
                </button>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className={styles.askLink}
                >
                  Ask us
                </button>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className={styles.anythingLink}
              >
                anything →
              </button>

              {!isSupported && (
                <p className={styles.agentNote}>
                  Voice playback works best in modern browsers like Chrome or
                  Edge.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
