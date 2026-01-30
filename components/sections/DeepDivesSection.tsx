"use client";

import { motion } from "framer-motion";
import { DEEP_DIVES } from "@/lib/constants";

const IconMap: Record<string, React.ReactNode> = {
  route: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export function DeepDivesSection() {
  return (
    <section id="deep-dives" className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Deep Dives
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            How I think, not just what I built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEEP_DIVES.map((dive, index) => (
            <motion.div
              key={dive.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 p-6 hover:border-violet-500 dark:hover:border-violet-500 transition-all cursor-pointer"
            >
              <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-xl w-fit mb-4 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                {IconMap[dive.icon]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {dive.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {dive.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Model Routing Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Model Routing: 92.6% Cost Reduction
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Problem</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Using GPT-4 for every request was burning through API costs. But downgrading
                everything to a cheaper model hurt quality. I needed smart routing.
              </p>

              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">My Approach</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400 mt-1">1.</span>
                  <span>Classify task complexity (simple, medium, complex)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400 mt-1">2.</span>
                  <span>Route to appropriate model tier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 dark:text-violet-400 mt-1">3.</span>
                  <span>Implement semantic caching for repeated queries</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Code</h4>
              <pre className="bg-gray-900 dark:bg-zinc-950 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`// Triple-tier model routing
function selectModel(task: Task): Model {
  const complexity = analyzeComplexity(task);

  if (complexity === 'simple') {
    return 'gpt-3.5-turbo';  // $0.002/1K
  }
  if (complexity === 'medium') {
    return 'gpt-4-turbo';    // $0.01/1K
  }
  return 'gpt-4';            // $0.03/1K
}

// Result: 92.6% cost reduction
// Quality maintained at 98.2%`}</code>
              </pre>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl">
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">92.6%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl">
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">98.2%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Quality Maintained</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl">
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">30%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cache Hit Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
