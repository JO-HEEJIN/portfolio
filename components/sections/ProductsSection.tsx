"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/constants";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Selected work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Data infrastructure, agent workflows, and products I have built and operated.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col bg-white dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                {project.status && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">{project.status}</span>}
              </div>
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-4">{project.subtitle}</p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tech) => <span key={tech} className="px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full">{tech}</span>)}
              </div>
              <ul className="list-disc pl-5 space-y-3 text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 marker:text-violet-500">
                {project.highlights.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="mt-auto pt-5 border-t border-gray-200 dark:border-zinc-700">
                {project.note && <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-4">{project.note}</p>}
                <div className="flex flex-wrap gap-5">
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">{project.id === "b2d-geo" ? "Explore the public case study" : "View code"} <span aria-hidden="true">↗</span></a>}
                  {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">Try the live map <span aria-hidden="true">↗</span></a>}
                  {project.id === "interviewmate" && <Link href="#deep-dives" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">Read the research <span aria-hidden="true">↓</span></Link>}
                </div>
                {project.readingLinks && <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                  {project.readingLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 underline underline-offset-4">{link.label}</a>)}
                </div>}
              </div>
            </motion.article>
          ))}
        </div>
        <Link href="/projects" className="inline-flex mt-10 text-base font-semibold text-violet-600 dark:text-violet-400 hover:underline">Explore all projects <span aria-hidden="true" className="ml-2">→</span></Link>
      </div>
    </section>
  );
}
