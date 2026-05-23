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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="
        group relative overflow-hidden
        rounded-2xl h-full flex flex-col
        border
        bg-white border-slate-200/80
        shadow-sm hover:shadow-blue-200/60 hover:shadow-xl
        hover:border-blue-300/70
        dark:bg-zinc-900/80 dark:border-white/[0.07]
        dark:hover:border-blue-400/30
        dark:hover:shadow-blue-500/10 dark:hover:shadow-2xl
        backdrop-blur-xl transition-all duration-300
      "
    >
      {/* Light mode hover glow */}
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500 pointer-events-none dark:hidden
      "
      >
        <div className="absolute w-48 h-48 bg-blue-400/10 blur-3xl rounded-full -top-12 -left-12" />
        <div className="absolute w-48 h-48 bg-blue-300/10 blur-3xl rounded-full -bottom-12 -right-12" />
      </div>

      {/* Dark mode hover glow */}
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500 pointer-events-none
        hidden dark:block
      "
      >
        <div className="absolute w-40 h-40 bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10" />
        <div className="absolute w-40 h-40 bg-blue-400/15 blur-3xl rounded-full -bottom-10 -right-10" />
      </div>

      {/* Thumbnail */}
      <div
        className="
        relative h-48 overflow-hidden
        border-b border-slate-100 dark:border-white/6
        bg-linear-to-br from-blue-50 to-sky-50
        dark:from-blue-500/10 dark:to-sky-500/10
        flex items-center justify-center
      "
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center select-none">
            <span className="text-6xl font-black tracking-tight text-blue-300/40 dark:text-blue-400/25">
              {abbr}
            </span>
          </div>
        )}

        {project.featured && (
          <div
            className="
            absolute top-3 right-3
            px-2.5 py-1 rounded-full
            text-[10px] font-semibold tracking-wide uppercase
            bg-blue-100 border border-blue-200
            text-blue-600
            dark:bg-blue-500/10 dark:border-blue-400/20 dark:text-blue-300
            backdrop-blur-md
          "
          >
            ✦ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta row */}
        <div
          className="
          mb-3 flex items-center gap-1.5
          text-[11px] font-medium tracking-widest uppercase
          text-slate-400 dark:text-zinc-500
        "
        >
          <span>{project.year}</span>
          <span className="opacity-40">·</span>
          <span>{project.category}</span>
        </div>

        <h3 className="text-lg font-bold leading-snug mb-2 text-slate-800 dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed line-clamp-3 mb-4 flex-1 text-slate-500 dark:text-zinc-400">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-white/6">
          <button
            onClick={() => onOpen(project)}
            className="
              flex-1 py-2.5 rounded-xl text-sm font-semibold
              transition-all duration-200
              bg-blue-50 hover:bg-blue-100
              border border-blue-200/60 hover:border-blue-300
              text-blue-600 hover:text-blue-700
              dark:bg-blue-500/10 dark:hover:bg-blue-500/20
              dark:border-blue-400/20 dark:hover:border-blue-400/40
              dark:text-blue-300 dark:hover:text-blue-200
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
                p-2.5 rounded-xl transition-all duration-200
                border border-slate-200 hover:border-blue-300 hover:bg-blue-50
                text-slate-500 hover:text-blue-600
                dark:border-white/10 dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10
                dark:text-zinc-400 dark:hover:text-blue-300
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
