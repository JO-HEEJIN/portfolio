"use client";

import { motion } from "framer-motion";
import { LIVE_PRODUCTS } from "@/lib/constants";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Proof I ship. Real users, real systems, real consequences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {LIVE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 p-8 hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                      {product.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{product.oneLiner}</p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievement */}
              {product.achievement && (
                <div className="flex items-center gap-2 mb-6 text-sm text-violet-600 dark:text-violet-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  {product.achievement}
                </div>
              )}

              {/* Metric highlight */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl mb-6">
                <span className="text-sm text-gray-600 dark:text-gray-400">{product.metrics.label}</span>
                <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                  {product.metrics.value}
                </span>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg text-center transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={product.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-900 dark:text-white text-sm font-medium rounded-lg text-center transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
