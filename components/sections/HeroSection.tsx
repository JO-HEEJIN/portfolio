"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "@/components/hero/AuroraBackground";

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden bg-gray-950">
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-violet-300 mb-6">
            Heejin Jo · Applied AI Engineer & Founder
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            I build AI systems that hold up in production.
          </h1>
        </motion.div>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          From agent workflows and retrieval to evaluation and reliable data infrastructure.
          I own the path from architecture to deployment—and learn from what fails.
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#products"
            className="px-8 py-3 bg-gradient-to-r from-teal-700 via-blue-700 to-violet-700 hover:brightness-110 text-white font-medium rounded-lg transition-[filter] shadow-lg shadow-cyan-900/30"
          >
            Explore Selected Work
          </Link>
          <Link
            href="#deep-dives"
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
          >
            Read My Research
          </Link>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div>
            <div className="text-lg font-semibold text-violet-300">Agents & Retrieval</div>
            <div className="text-sm text-gray-400 mt-1">LangGraph · LangSmith · MCP</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-violet-300">Evaluation & Research</div>
            <div className="text-sm text-gray-400 mt-1">Failure reproduction · Model behavior</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-violet-300">Production Systems</div>
            <div className="text-sm text-gray-400 mt-1">Python · Go · PostgreSQL / PostGIS</div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={reducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
            transition={reducedMotion ? { duration: 0 } : { duration: 1.5, repeat: Infinity }}
            className="text-gray-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
