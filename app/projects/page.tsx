"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import projectsData from "@/data/projects.json";

const CATEGORY_COLORS: Record<string, string> = {
  AR_VR: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  AI_ML: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  WEB: "bg-green-500/10 text-green-400 border-green-500/30",
  HEALTHCARE: "bg-red-500/10 text-red-400 border-red-500/30",
  BLOCKCHAIN: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  DESIGN: "bg-pink-500/10 text-pink-400 border-pink-500/30",
};

const CATEGORY_LABELS: Record<string, string> = {
  AR_VR: "AR/VR",
  AI_ML: "AI/ML",
  WEB: "Web",
  HEALTHCARE: "Healthcare",
  BLOCKCHAIN: "Blockchain",
  DESIGN: "Design",
};

export default function ProjectsPage() {
  const { projects } = projectsData;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of my work across AR/VR, AI/ML, Healthcare, and more.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden hover:border-violet-500 dark:hover:border-violet-500 transition-all group"
            >
              {/* Category Badge */}
              <div className="p-4 pb-0">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${
                    CATEGORY_COLORS[project.category] || "bg-gray-500/10 text-gray-400"
                  }`}
                >
                  {CATEGORY_LABELS[project.category] || project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Awards */}
                {project.awards && project.awards.length > 0 && (
                  <div className="mb-4">
                    {project.awards.map((award, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        {award}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium rounded text-center transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded text-center transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded text-center transition-colors"
                    >
                      Video
                    </a>
                  )}
                </div>

                {/* Press Links */}
                {project.pressLinks && project.pressLinks.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">Press Coverage:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.pressLinks.map((press, i) => (
                        <a
                          key={i}
                          href={press.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-violet-600 dark:text-violet-400 hover:underline"
                        >
                          {press.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
