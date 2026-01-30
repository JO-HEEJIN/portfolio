"use client";

import { motion } from "framer-motion";
import { JOURNEY } from "@/lib/constants";

export function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            From Arts to AI to Medicine (and back to AI)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My unusual path is my strength. I can translate between technical and non-technical,
            between art and science, between builders and users.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-700 transform md:-translate-x-1/2" />

          {JOURNEY.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-600 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}
              >
                <div className="bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 p-6">
                  <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 italic">
                    {item.description}
                  </p>
                  {/* LLC Document Link */}
                  {"documentUrl" in item && item.documentUrl && (
                    <a
                      href={item.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 mt-3 text-xs text-violet-600 dark:text-violet-400 hover:underline ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View LLC Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
