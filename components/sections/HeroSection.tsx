import Link from "next/link";
import { AuroraBackground } from "@/components/hero/AuroraBackground";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-visual">
        <AuroraBackground />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Heejin Jo</p>
        <h1 className="hero-title">
          <span className="hero-title-line">Reliable AI starts</span>
          <span className="hero-title-line">where benchmarks end.</span>
        </h1>
        <p className="hero-intro">I build and evaluate AI systems under real production constraints.</p>
        <div className="hero-actions">
          <Link href="#products" className="hero-primary-cta">Selected work <span aria-hidden="true">↘</span></Link>
          <Link href="#deep-dives" className="hero-secondary-cta">Research</Link>
        </div>
      </div>
    </section>
  );
}
