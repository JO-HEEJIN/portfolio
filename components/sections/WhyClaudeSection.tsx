"use client";

import { motion } from "framer-motion";

export function WhyClaudeSection() {
  return (
    <section id="why-claude" className="py-24 px-6 bg-gradient-to-b from-violet-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Why I Build with Claude
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              When I was building Birth2Death - an AI mental health platform where user safety is
              literally life-or-death - I had to choose between GPT-4 and Claude. I chose Claude.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Not because it was trendy. Because when a vulnerable user is having a crisis at 3am,
              I need a model I can trust. Claude&apos;s safety, reliability, and steerability aren&apos;t
              marketing points to me. They&apos;re why my product works.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This is why I want to join Anthropic. I&apos;ve experienced firsthand how thoughtful AI
              safety decisions translate into real product benefits.
            </p>
          </div>

          {/* Technical decision highlight */}
          <div className="mt-10 p-6 bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Safety-First Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In healthcare AI, I implemented multi-layer safety guardrails: input validation,
                  response filtering, and human-in-the-loop escalation for high-risk scenarios.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
