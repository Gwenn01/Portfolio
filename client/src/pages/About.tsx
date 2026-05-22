import { about, personal } from "../data/portfolio";
import { SectionHeader, FadeIn } from "../components/ui";
import AboutBio from "../components/About/Aboutbio";
import AboutStats from "../components/About/Aboutstats";
import AboutSkills from "../components/About/Aboutskills";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeIn>
          <SectionHeader number="01" title="About Me" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left col: bio + stats */}
          <FadeIn delay={0.1}>
            <div className="space-y-10">
              <AboutBio
                paragraphs={about.paragraphs}
                location={personal.location}
              />
              <AboutStats />
            </div>
          </FadeIn>

          {/* Right col: skills */}
          <FadeIn delay={0.2}>
            <AboutSkills skills={about.skills} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
