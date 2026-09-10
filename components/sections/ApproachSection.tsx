"use client";

import { motion } from "framer-motion";

const principles = [
  {
    index: "01",
    label: "System ownership",
    keywords: ["Architecture", "Deployment", "Incident response"],
  },
  {
    index: "02",
    label: "Model behavior",
    keywords: ["Controlled trials", "Grader validation", "Regression checks"],
  },
  {
    index: "03",
    label: "Traceable evidence",
    keywords: ["Source metadata", "Deterministic checks", "Clear boundaries"],
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="atlas-section glass-section">
      <div className="atlas-shell">
        <div className="atlas-heading">
          <p className="systems-kicker">How I build</p>
          <h2>Own the system. Test the behavior.</h2>
        </div>

        <div className="approach-map">
          {principles.map((principle, index) => (
            <motion.div
              className="approach-node glass-card"
              key={principle.label}
              initial="rest"
              whileInView="lit"
              viewport={{ once: false, amount: 0.45 }}
            >
              <motion.span
                className="glass-reflection"
                aria-hidden="true"
                variants={{ rest: { x: "-200%", rotate: 18 }, lit: { x: "520%", rotate: 18 } }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              />
              <div className="approach-node-top">
                <span>{principle.index}</span>
                <h3>{principle.label}</h3>
              </div>
              <div className="approach-keywords">
                {principle.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
              </div>
              {index < principles.length - 1 && <b aria-hidden="true">→</b>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
