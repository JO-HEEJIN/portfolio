"use client";

import { motion } from "framer-motion";

const capabilityGroups = [
  {
    title: "Production systems",
    items: ["Architecture", "Streaming", "Fallbacks", "Access control", "Observability", "CI/CD"],
  },
  {
    title: "Model behavior",
    items: ["Evaluation", "Human review", "Model graders", "Regression tests", "Activation probing"],
  },
  {
    title: "Backend & data",
    items: ["Python", "Go", "TypeScript", "FastAPI", "PostgreSQL / PostGIS", "Redis", "ETL"],
  },
  {
    title: "Retrieval & agents",
    items: ["RAG", "Qdrant", "Chroma", "Neo4j", "LangGraph", "LangSmith", "MCP"],
  },
];

export function MetricsSection() {
  return (
    <section id="capabilities" className="atlas-section glass-section research-tone-section">
      <div className="atlas-shell">
        <div className="atlas-heading">
          <p className="systems-kicker">System range</p>
          <h2>From data layer to model behavior.</h2>
        </div>

        <div className="capability-map">
          {capabilityGroups.map((group, index) => (
            <motion.div
              className="capability-cluster glass-card"
              key={group.title}
              initial="rest"
              whileInView="lit"
              viewport={{ once: false, amount: 0.35 }}
            >
              <motion.span
                className="glass-reflection"
                aria-hidden="true"
                variants={{ rest: { x: "-200%", rotate: 18 }, lit: { x: "520%", rotate: 18 } }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
              />
              <span className="capability-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://github.com/JO-HEEJIN/welda-rag-chatbot-prototype"
          target="_blank"
          rel="noopener noreferrer"
          className="capability-proof"
        >
          LangGraph + LangSmith implementation proof: Welda prototype <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
