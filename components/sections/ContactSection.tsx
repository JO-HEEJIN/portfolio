"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const contactCards = [
  {
    label: "Email (Personal)",
    value: "midmost44@gmail.com",
    href: "mailto:midmost44@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    label: "Email (Business)",
    value: "info@birth2death.com",
    href: "mailto:info@birth2death.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "text-violet-400",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-12">
            Let&apos;s collaborate on your next project
          </p>

          {/* Contact Card */}
          <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <p className="text-gray-300 mb-8">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-violet-500 transition-colors group"
                    >
                      <div className={`p-3 bg-zinc-700/50 rounded-xl ${card.color}`}>
                        {card.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-500">{card.label}</p>
                        <p className="text-white font-medium group-hover:text-violet-400 transition-colors">
                          {card.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                      <div className={`p-3 bg-zinc-700/50 rounded-xl ${card.color}`}>
                        {card.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-500">{card.label}</p>
                        <p className="text-white font-medium">{card.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Open to relocation note */}
            <p className="text-sm text-gray-500 mt-6">
              Open to relocation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
