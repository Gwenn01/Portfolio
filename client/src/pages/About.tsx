import { about, personal } from "../data/portfolio";
import { SectionHeader, Tag, Icon, PATHS, FadeIn } from "../components/ui";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader number="01" title="About Me" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed text-base">
                  {p}
                </p>
              ))}

              <div className="flex items-center gap-2 pt-2 text-zinc-500 text-sm">
                <Icon
                  path={PATHS.mapPin}
                  size={15}
                  className="text-violet-400"
                />
                <span>{personal.location}</span>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "3+", label: "Years exp." },
                  { value: "20+", label: "Projects" },
                  { value: "100%", label: "Committed" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/3 border border-white/8 rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl font-black text-white mb-1">
                      {value}
                    </p>
                    <p className="text-xs text-zinc-500 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              {about.skills.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs font-bold tracking-widest text-violet-400 uppercase font-mono mb-3">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
