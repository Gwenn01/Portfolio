import { useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { FadeIn, SectionHeader } from "../components/ui";
import ProjectCard from "../components/Projects/ProjectCard";
import ProjectModal from "../components/Projects/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = [...projects]
    .filter((p) => p.featured)
    .sort(
      (a, b) =>
        Number(b.id.replace("proj-", "")) - Number(a.id.replace("proj-", "")),
    );

  const otherProjects = [...projects]
    .filter((p) => !p.featured)
    .sort(
      (a, b) =>
        Number(b.id.replace("proj-", "")) - Number(a.id.replace("proj-", "")),
    );

  const visibleOthers = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <SectionHeader
            number="03"
            title="Recent Project Showcase"
            subtitle="Selected projects focused on AI, full-stack systems, blockchain, and automation."
          />
        </FadeIn>

        {/* Featured */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-blue-400" />
            <h2 className="text-xl font-bold text-white">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>

        {/* Others */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-cyan-400" />
            <h2 className="text-xl font-bold text-white">Other Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {visibleOthers.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>

        {otherProjects.length > 3 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="
              px-8 py-3 rounded-2xl
              border border-blue-400/20
              bg-blue-500/10
              text-blue-300
              hover:bg-blue-500/20
              hover:border-blue-400/40
              transition-all duration-300
              font-semibold
            "
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
