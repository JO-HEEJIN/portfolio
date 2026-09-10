import { AWARDS, JOURNEY } from "@/lib/constants";

export function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">Experience</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">My path spans interactive art, medical imaging, and applied AI. Working with physicians, customers, and technical teams taught me to turn ambiguous needs into systems people can use.</p>
        </div>
        <div className="space-y-8">
          {JOURNEY.map((item) => (
            <article key={item.title} className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 border-t border-gray-200 dark:border-zinc-700 pt-8">
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{item.period}</p>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mt-1">{item.subtitle}</p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mt-3 max-w-3xl">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-16 pt-10 border-t border-gray-200 dark:border-zinc-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Education & selected admission</h3>
            <p className="font-medium text-gray-900 dark:text-white">Seoul Institute of the Arts</p>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-1">Digital Art / Interactive Art; Sound Design · 2015–2020</p>
            <p className="font-medium text-gray-900 dark:text-white mt-6">St. George&apos;s University School of Medicine</p>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-1">Admitted to the Doctor of Medicine (MD) program</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Selected awards</h3>
            <ul className="space-y-4">
              {AWARDS.map((award) => <li key={award.title}><p className="text-base font-medium text-gray-900 dark:text-white">{award.title}</p><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{award.place} · {award.year}</p></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
