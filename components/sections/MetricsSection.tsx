import { CAPABILITIES } from "@/lib/constants";

export function MetricsSection() {
  return (
    <section id="capabilities" className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">What I work with</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {CAPABILITIES.map((capability) => (
            <div key={capability.title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{capability.title}</h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">{capability.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
