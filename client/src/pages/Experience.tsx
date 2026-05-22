import { experiences } from "../data/portfolio";
import { SectionHeader, FadeIn } from "../components/ui";
import ExperienceCard from "../components/Experience/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-linear-to-b from-transparent to-blue-950/5"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            number="02"
            title="Experience"
            subtitle="Professional internships, development projects, and technical contributions."
          />
        </FadeIn>

        <div className="relative mt-14 pl-8 md:pl-12">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/70 via-blue-500/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.08}>
                <ExperienceCard experience={exp} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
