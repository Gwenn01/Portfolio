import { motion } from "framer-motion";
import { Tag } from "./ProjectTags";
import { Icon, PATHS } from "../ui";
import type { Project } from "../../data/portfolio";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: Props) {
  const abbr = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
      group relative overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/5 dark:bg-zinc-900/70
      backdrop-blur-xl
      transition-all duration-500
      hover:border-blue-400/40
      hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
      h-full flex flex-col
    "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute w-40 h-40 bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10" />
        <div className="absolute w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full -bottom-10 -right-10" />
      </div>

      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden border-b border-white/5 bg-linear-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-black text-blue-400/30 tracking-tight">
              {abbr}
            </span>
          </div>
        )}

        {project.featured && (
          <div
            className="
            absolute top-4 right-4
            px-3 py-1
            rounded-full
            text-[10px]
            bg-blue-500/15
            border border-blue-400/20
            text-blue-300
            backdrop-blur-md
            font-semibold
          "
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-zinc-400">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.category}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-5 flex-1">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-5 border-t border-white/5">
          <button
            onClick={() => onOpen(project)}
            className="
            flex-1 py-2.5 rounded-xl
            bg-blue-500/10
            border border-blue-400/20
            hover:bg-blue-500/20
            text-blue-300
            text-sm font-semibold
            transition-all duration-300
          "
          >
            View Details
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
              p-2.5 rounded-xl
              border border-white/10
              hover:border-blue-400/30
              hover:bg-blue-500/10
              transition-all duration-300
            "
            >
              <Icon path={PATHS.github} size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
