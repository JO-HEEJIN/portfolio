import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Heejin Jo | Applied AI Engineer & Founder",
  description:
    "Applied AI engineer building production systems, agent workflows, retrieval, and evaluations. Explore b2d_geo, Welda with LangGraph and LangSmith, and model-behavior research.",
  keywords: [
    "AI Engineer",
    "LLM",
    "LangGraph",
    "LangSmith",
    "MCP",
    "Evaluation",
    "PostGIS",
    "Healthcare AI",
    "Technical Founder",
    "Production AI",
    "RAG",
    "Model Routing",
  ],
  authors: [{ name: "Heejin Jo" }],
  openGraph: {
    title: "Heejin Jo | Applied AI Engineer & Founder",
    description:
      "Production AI systems, agent workflows, provenance-aware data infrastructure, and model-behavior research.",
    url: "https://heejinjo.me",
    siteName: "Heejin Jo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heejin Jo | Applied AI Engineer & Founder",
    description:
      "Production AI systems, agent workflows, provenance-aware data infrastructure, and model-behavior research.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
