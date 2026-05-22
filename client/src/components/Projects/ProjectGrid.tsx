import type { Project } from "../../data/portfolio";
import { FadeIn } from "../ui";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onOpen: (project: Project) => void;
}

export function ProjectGrid({ projects, onOpen }: ProjectGridProps) {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-7
      items-stretch
      "
    >
      {projects.map((project, index) => (
        <FadeIn key={project.id} delay={index * 0.08}>
          <div className="h-full">
            <ProjectCard project={project} onOpen={onOpen} />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
