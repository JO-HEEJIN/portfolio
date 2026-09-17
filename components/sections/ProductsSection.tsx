"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const systemFlow = ["Practice audio", "Streaming STT", "Prepared-answer match", "User-scoped retrieval", "Streamed suggestion"];
const productFlow = ["Documents", "Task decomposition", "Study workflow", "Notifications"];

function Flow({ items }: { items: string[] }) {
  return (
    <div className="system-flow" role="img" aria-label={items.join(" to ")}>
      {items.map((item, index) => (
        <div className="system-flow-step" key={item}>
          <span>{item}</span>
          {index < items.length - 1 && <b aria-hidden="true">→</b>}
        </div>
      ))}
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="systems-section">
      <div className="systems-shell">
        <motion.header
          className="systems-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="systems-kicker">Selected work</p>
          <h2>Systems I built and operated.</h2>
          <div className="keyword-line" aria-label="Core areas">
            <span>Production infrastructure</span>
            <span>Real-time AI</span>
            <span>Model evaluation</span>
          </div>
        </motion.header>

        <motion.article
          className="system-card system-card-featured"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="system-card-topline">
            <div>
              <p className="systems-kicker">01 · Deployed data infrastructure</p>
              <h3>b2d_geo</h3>
            </div>
            <div className="system-links">
              <a href="https://github.com/JO-HEEJIN/b2d_geo_public" target="_blank" rel="noopener noreferrer">Case study ↗</a>
              <a href="https://api.birth2death.com/map.html" target="_blank" rel="noopener noreferrer">Live map ↗</a>
            </div>
          </div>

          <figure className="architecture-figure">
            <Image
              src="/images/b2d-geo-architecture.png"
              alt="b2d_geo architecture: Korean public data flows through ETL into PostGIS, a Go REST API, MCP tools, and client applications."
              width={2190}
              height={1542}
              sizes="(max-width: 800px) 900px, 1152px"
            />
          </figure>

          <div className="system-stats" aria-label="b2d_geo scale">
            <div><strong>39.7M</strong><span>parcels</span></div>
            <div><strong>222M</strong><span>land-use records</span></div>
            <div><strong>15 + 7</strong><span>REST routes · MCP tools</span></div>
            <div><strong>Go · PostGIS</strong><span>production stack</span></div>
          </div>
        </motion.article>

        <motion.article
          className="system-card system-card-interview"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="system-card-topline">
            <div>
              <p className="systems-kicker">02 · Live product · interview preparation</p>
              <h3>InterviewMate</h3>
            </div>
            <div className="system-links">
              <a href="https://interviewmate.tech/" target="_blank" rel="noopener noreferrer">Live product ↗</a>
              <a href="https://interviewmate.tech/engineering" target="_blank" rel="noopener noreferrer">Engineering ↗</a>
              <Link href="#deep-dives">Research ↓</Link>
            </div>
          </div>

          <div className="diagram-panel">
            <p className="diagram-label">Real-time inference path</p>
            <Flow items={systemFlow} />
            <div className="diagram-tech">
              <span>WebSocket</span><span>FFmpeg</span><span>Deepgram</span><span>Qdrant</span><span>Claude API</span>
            </div>
          </div>

          <div className="research-path" role="img" aria-label="A production answer led to controlled studies and activation probing">
            <span>Production anomaly</span><b aria-hidden="true">→</b><span>Controlled studies</span><b aria-hidden="true">→</b><span>Activation probing</span>
          </div>
        </motion.article>

        <motion.article
          className="system-card system-card-compact system-card-taskflow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="system-card-topline">
            <div>
              <p className="systems-kicker">03 · Shipped product</p>
              <h3>TaskFlow AI</h3>
            </div>
            <div className="keyword-line keyword-line-small">
              <a href="https://youtu.be/qbt1-FH1qtw?si=_478xcvTFMr2fndD" target="_blank" rel="noopener noreferrer">Demo video ↗</a>
              <span>Azure</span><span>Next.js</span>
            </div>
          </div>
          <div className="diagram-panel diagram-panel-compact">
            <Flow items={productFlow} />
          </div>
        </motion.article>

        <Link href="/projects" className="systems-more">All projects <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
