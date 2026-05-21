import { testimonials } from "../data/portfolio";
import { SectionHeader, Avatar, Icon, PATHS, FadeIn } from "../components/ui";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-28 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader number="04" title="Kind Words" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.12}>
              <div className="bg-zinc-900/50 border border-white/8 rounded-2xl p-8 hover:border-violet-500/30 transition-colors duration-300">
                <Icon
                  path={PATHS.quote}
                  size={28}
                  className="text-violet-500/40 mb-5"
                />
                <p className="text-zinc-300 text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar initials={t.initials} size="sm" seed={i + 2} />
                  <div>
                    <p className="text-white font-bold text-sm">{t.author}</p>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
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
