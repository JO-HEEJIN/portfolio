import { RESEARCH } from "@/lib/constants";

const researchFlow = ["Production failure", "Prompt isolation", "210 rollouts", "Activation evidence"];

export function DeepDivesSection() {
  return (
    <section id="deep-dives" className="atlas-section research-section aurora-research-section">
      <div className="aurora-haze" aria-hidden="true" />
      <div className="atlas-shell">
        <div className="atlas-heading atlas-heading-row">
          <div>
            <p className="systems-kicker">Research · 2026</p>
            <h2>Failure became evidence.</h2>
          </div>
          <span className="research-count">3 arXiv preprints</span>
        </div>

        <div className="research-flow" role="img" aria-label={researchFlow.join(" to ")}>
          {researchFlow.map((step, index) => (
            <div key={step}>
              <span>{step}</span>
              {index < researchFlow.length - 1 && <b aria-hidden="true">→</b>}
            </div>
          ))}
        </div>

        <div className="paper-grid">
          {RESEARCH.map((paper, index) => (
            <a
              key={paper.id}
              href={`https://arxiv.org/abs/${paper.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-card"
            >
              <div className="paper-card-top">
                <span>0{index + 1}</span>
                <span>arXiv:{paper.id} ↗</span>
              </div>
              <p>{paper.scope}</p>
              <h3>{paper.title}</h3>
              <small>{paper.subtitle}</small>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/JO-HEEJIN/interview_mate/tree/docs/car-wash-repro/car_wash/paper_4"
          target="_blank"
          rel="noopener noreferrer"
          className="systems-more"
        >
          Reproduction artifacts <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
