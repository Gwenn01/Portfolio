import { experiences } from "../data/portfolio";
import { SectionHeader, Tag, FadeIn } from "../components/ui";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            number="02"
            title="Experience"
            subtitle="Where I've worked and what I've built."
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-linear-to-b from-violet-500/60 via-violet-500/20 to-transparent" />

          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.1}>
              <div className="relative mb-10 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-7.5 top-6 w-3 h-3 rounded-full bg-violet-500 border-2 border-zinc-950 shadow-lg shadow-violet-500/50" />

                <div className="group bg-zinc-900/50 border border-white/8 rounded-2xl p-7 hover:border-violet-500/40 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-white mb-1 group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-violet-400 font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
