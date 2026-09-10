"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Own the whole system",
    description: "I work from architecture through deployment and production debugging. Streaming, fallbacks, access control, observability, and incident resolution are part of the product—not cleanup after the model works.",
  },
  {
    title: "Test what the model actually does",
    description: "An InterviewMate reasoning failure led me to controlled prompt studies and activation probing. I combine repeated trials, human review, model-based graders, and regression checks to evaluate behavior.",
  },
  {
    title: "Preserve the evidence",
    description: "In b2d_geo, source metadata and deterministic validation make data inspectable. Factual retrieval has an explicit boundary: the system returns evidence, while people own the judgment.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">How I build</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I build beyond the happy path: owning the system, testing its behavior,
            and keeping enough evidence for someone else to understand the result.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={principle.title} className="border-t border-violet-300 dark:border-violet-800 pt-6">
              <p className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-4">0{index + 1}</p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{principle.title}</h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
