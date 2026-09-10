import { AWARDS, JOURNEY } from "@/lib/constants";

const journeyKeywords: Record<string, string[]> = {
  InterviewMate: ["Real-time AI", "Evaluation", "Research"],
  "Birth2Death LLC": ["Founder", "AI products", "Data infrastructure"],
  "Lime Friends": ["On-premise NLP", "Healthcare", "Privacy"],
  SKIA: ["Medical imaging", "Computer vision", "XR"],
};

export function JourneySection() {
  return (
    <section id="journey" className="atlas-section journey-section">
      <div className="atlas-shell">
        <div className="atlas-heading">
          <p className="systems-kicker">Experience</p>
          <h2>Art → medicine → AI systems.</h2>
        </div>

        <div className="journey-rail">
          {JOURNEY.map((item) => (
            <article key={item.title} className="journey-stop">
              <span className="journey-dot" aria-hidden="true" />
              <p>{item.period}</p>
              <div>
                <h3>{item.title}</h3>
                <small>{item.subtitle}</small>
              </div>
              <div className="journey-keywords">
                {journeyKeywords[item.title]?.map((keyword) => <span key={keyword}>{keyword}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="credentials-grid">
          <div>
            <p className="systems-kicker">Education</p>
            <strong>Seoul Institute of the Arts</strong>
            <span>Digital Art · Sound Design</span>
            <strong>St. George&apos;s University</strong>
            <span>Admitted · MD program</span>
          </div>
          <div>
            <p className="systems-kicker">Selected awards</p>
            {AWARDS.map((award) => (
              <div className="award-row" key={award.title}>
                <span>{award.title}</span>
                <strong>{award.place} · {award.year}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
