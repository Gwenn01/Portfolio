import { useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { SectionHeader, Tag, Icon, PATHS, FadeIn } from "../components/ui";

// Map accent name → Tailwind-compatible color values
const ACCENT_MAP: Record<
  string,
  { glow: string; border: string; text: string; bg: string; thumb: string }
> = {
  violet: {
    glow: "shadow-violet-500/20",
    border: "border-violet-500/50",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    thumb: "from-violet-500/20 to-violet-900/30",
  },
  cyan: {
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/50",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    thumb: "from-cyan-500/20 to-cyan-900/30",
  },
  amber: {
    glow: "shadow-amber-500/20",
    border: "border-amber-500/50",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    thumb: "from-amber-500/20 to-amber-900/30",
  },
  emerald: {
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/50",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    thumb: "from-emerald-500/20 to-emerald-900/30",
  },
  rose: {
    glow: "shadow-rose-500/20",
    border: "border-rose-500/50",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    thumb: "from-rose-500/20 to-rose-900/30",
  },
};

function ProjectCard({ project }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const accent = ACCENT_MAP[project.accentColor] ?? ACCENT_MAP.violet;
  const abbr = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex flex-col bg-zinc-900/60 rounded-2xl border overflow-hidden transition-all duration-300 ${
        hovered
          ? `${accent.border} -translate-y-2 shadow-2xl ${accent.glow}`
          : "border-white/8"
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 flex items-center justify-center bg-linear-to-br ${accent.thumb} border-b border-white/5`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            className={`text-5xl font-black tracking-tight opacity-30 ${accent.text}`}
          >
            {abbr}
          </span>
        )}
        {project.featured && (
          <div
            className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${accent.bg} ${accent.text} border ${accent.border}`}
          >
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-white text-xs font-semibold transition-colors"
            >
              <Icon path={PATHS.github} size={14} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${accent.text} text-xs font-semibold`}
            >
              <Icon path={PATHS.external} size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            number="03"
            title="Projects"
            subtitle="A selection of things I've shipped."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </FadeIn>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-8 py-3 rounded-xl border-2 border-white/15 hover:border-violet-400 text-white font-bold text-sm transition-all duration-200 hover:bg-violet-400/5"
            >
              {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
