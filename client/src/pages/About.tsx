import { about, personal } from "../data/portfolio";
import { SectionHeader, FadeIn } from "../components/ui";
import AboutBio from "../components/About/Aboutbio";
import LeetCodeCard from "../components/About/LeetCode";
import AboutEducation from "../components/About/Abouteducation";
import AboutSkills from "../components/About/Aboutskills";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        <FadeIn>
          <SectionHeader number="01" title="About Me" />
        </FadeIn>

        {/* ── Row 1: Bio (full width) ── */}
        <FadeIn delay={0.1}>
          <AboutBio
            paragraphs={about.paragraphs}
            location={personal.location}
          />
          <LeetCodeCard />
        </FadeIn>

        {/* ── Row 2: Education (left) + Skills (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 items-start">
          <FadeIn delay={0.15}>
            {/* Section eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="h-px w-6 bg-blue-500/60" />
              <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-blue-500 dark:text-blue-400 font-mono">
                Education
              </span>
            </div>
            <AboutEducation />
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Section eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="h-px w-6 bg-blue-500/60" />
              <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-blue-500 dark:text-blue-400 font-mono">
                Skills
              </span>
            </div>
            <AboutSkills skills={about.skills} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
