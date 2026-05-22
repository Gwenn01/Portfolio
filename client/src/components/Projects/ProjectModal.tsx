import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../data/portfolio";
import { Tag } from "./ProjectTags";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="
            fixed top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[92%] max-w-3xl
            max-h-[90vh] overflow-y-auto
            rounded-3xl
            border border-white/10
            bg-zinc-950/95
            backdrop-blur-2xl
            z-50 p-8
          "
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-sm text-blue-300 mb-2">
                  {project.year} • {project.category}
                </div>

                <h2 className="text-3xl font-black text-white leading-tight">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-8 whitespace-pre-line">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  px-5 py-3 rounded-xl
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-300
                  hover:bg-blue-500/20
                  transition-all duration-300
                "
                >
                  View Source Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  px-5 py-3 rounded-xl
                  border border-white/10
                  text-white
                  hover:border-blue-400/30
                  hover:bg-blue-500/10
                  transition-all duration-300
                "
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
