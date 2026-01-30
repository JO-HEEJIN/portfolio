import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heejin Jo | I build AI products that ship",
  description:
    "Technical Founder with production LLM experience. Building TaskFlow AI and InterviewMate. 92.6% API cost reduction through model routing. Healthcare AI with Claude.",
  keywords: [
    "AI Engineer",
    "LLM",
    "Claude",
    "Anthropic",
    "Healthcare AI",
    "Technical Founder",
    "Production AI",
    "RAG",
    "Model Routing",
  ],
  authors: [{ name: "Heejin Jo" }],
  openGraph: {
    title: "Heejin Jo | I build AI products that ship",
    description:
      "Technical Founder with production LLM experience. Building TaskFlow AI and InterviewMate.",
    url: "https://heejinjo.me",
    siteName: "Heejin Jo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heejin Jo | I build AI products that ship",
    description:
      "Technical Founder with production LLM experience. Building TaskFlow AI and InterviewMate.",
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
