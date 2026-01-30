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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-violet-400",
  },
  {
    label: "GitHub",
    value: "@JO-HEEJIN",
    href: "https://github.com/JO-HEEJIN",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    color: "text-gray-300",
  },
  {
    label: "LinkedIn",
    value: "m0i0d",
    href: "https://linkedin.com/in/m0i0d",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    label: "Location",
    value: "Seoul, South Korea",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
