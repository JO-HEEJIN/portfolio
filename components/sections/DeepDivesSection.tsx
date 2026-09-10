"use client";

import { motion } from "framer-motion";
import { RESEARCH } from "@/lib/constants";

export function DeepDivesSection() {
  return (
    <section id="deep-dives" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12">
          <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">Research · arXiv preprints · 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">From production failures to research</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">An unexpected reasoning failure in InterviewMate became a series of experiments: isolate the prompt variables, test them against production complexity, then investigate the model&apos;s internal behavior.</p>
        </motion.div>
        <div className="space-y-6">
          {RESEARCH.map((paper) => (
            <article key={paper.id} className="grid md:grid-cols-[1fr_1.2fr] gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div>
                <p className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-3">{paper.scope}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{paper.title}</h3>
                <p className="text-base text-gray-500 dark:text-gray-400">{paper.subtitle}</p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-5">{paper.detail}</p>
                <a href={`https://arxiv.org/abs/${paper.id}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">Read preprint <span aria-hidden="true">↗</span><span className="sr-only">: {paper.title}</span></a>
              </div>
            </article>
          ))}
        </div>
        <a href="https://github.com/JO-HEEJIN/interview_mate/tree/docs/car-wash-repro/car_wash/paper_4" target="_blank" rel="noopener noreferrer" className="inline-flex mt-8 text-base font-semibold text-violet-600 dark:text-violet-400 hover:underline">Reproduction code and experimental artifacts <span aria-hidden="true" className="ml-2">↗</span></a>
      </div>
    </section>
  );
}
