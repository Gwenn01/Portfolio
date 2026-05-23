import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon, PATHS } from "../ui";
import type { Project } from "../../data/portfolio";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

// ── Inline SVG icons (no extra deps) ──────────────────────────────────────
function ChevronLeft({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function Expand({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}
function X({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(
    () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/85 backdrop-blur-md"
    >
      {/* Panel */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-[92vw] max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white/80">{title}</span>
            {images.length > 1 && (
              <span className="text-xs font-mono text-white/40">
                {idx + 1} / {images.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Image area */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center bg-[#0a0f1e] overflow-hidden">
          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4f8fff 1px,transparent 1px),linear-gradient(90deg,#4f8fff 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={images[idx]}
              src={images[idx]}
              alt={`${title} screenshot ${idx + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl shadow-black/50"
              style={{
                filter: "drop-shadow(0 8px 32px rgba(59,130,246,0.15))",
              }}
            />
          </AnimatePresence>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 z-20 w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all duration-150 hover:scale-105"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 z-20 w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all duration-150 hover:scale-105"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Dot strip + thumbnails */}
        {images.length > 1 && (
          <div className="shrink-0 flex items-center justify-center gap-2 py-3 px-5 border-t border-white/8 bg-slate-950/80 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setIdx(i)}
                className={[
                  "shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200",
                  i === idx
                    ? "border-blue-500 scale-105 shadow-md shadow-blue-500/30"
                    : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30",
                ].join(" ")}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ── Image Showcase (card thumbnail) ──────────────────────────────────────
function ImageShowcase({
  images,
  title,
  featured,
  onExpand,
}: {
  images: string[];
  title: string;
  featured: boolean;
  onExpand: (idx: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const hasMany = images.length > 1;

  // Auto-advance
  useEffect(() => {
    if (!hasMany || hovered) return;
    const t = setInterval(
      () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)),
      3000,
    );
    return () => clearInterval(t);
  }, [hasMany, hovered, images.length]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div
      className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background pattern — shows when image has transparency / is a mobile app */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/10 dark:to-black/30 pointer-events-none" />

      {/* Images — crossfade */}
      {images.map((img, i) => (
        <motion.img
          key={img}
          src={img}
          alt={`${title} screenshot ${i + 1}`}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.55 }}
          className={[
            "absolute inset-0 w-full h-full",
            // contain for mobile/app shots, cover for wide screenshots
            "object-contain p-2",
            "group-hover:scale-[1.03] transition-transform duration-700",
          ].join(" ")}
        />
      ))}

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-blue-100 border border-blue-200 text-blue-600 dark:bg-blue-500/10 dark:border-blue-400/20 dark:text-blue-300 backdrop-blur-md">
          <span className="text-blue-500">✦</span> Featured
        </div>
      )}

      {/* Expand button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onExpand(current);
        }}
        className={[
          "absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center",
          "rounded-lg bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/15",
          "text-slate-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400",
          "backdrop-blur-md transition-all duration-200",
          "opacity-0 group-hover:opacity-100",
        ].join(" ")}
        aria-label="View fullscreen"
      >
        <Expand size={12} />
      </button>

      {/* Slider prev / next (show on hover if multiple images) */}
      {hasMany && (
        <>
          <button
            onClick={prev}
            className={[
              "absolute left-2 top-1/2 -translate-y-1/2 z-10",
              "w-7 h-7 flex items-center justify-center rounded-lg",
              "bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/15",
              "text-slate-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400",
              "backdrop-blur-md transition-all duration-200",
              "opacity-0 group-hover:opacity-100 hover:scale-105",
            ].join(" ")}
            aria-label="Previous image"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            className={[
              "absolute right-2 top-1/2 -translate-y-1/2 z-10",
              "w-7 h-7 flex items-center justify-center rounded-lg",
              "bg-white/80 dark:bg-black/50 border border-white/60 dark:border-white/15",
              "text-slate-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400",
              "backdrop-blur-md transition-all duration-200",
              "opacity-0 group-hover:opacity-100 hover:scale-105",
            ].join(" ")}
            aria-label="Next image"
          >
            <ChevronRight size={14} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {hasMany && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300",
                i === current
                  ? "w-4 h-1.5 bg-blue-500"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {images.length === 0 && (
        <span className="text-5xl font-black tracking-tight text-blue-300/30 dark:text-blue-400/20 select-none">
          {title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </span>
      )}
    </div>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────────────
export default function ProjectCard({ project, onOpen }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = project.images ?? [];

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={[
          "group relative overflow-hidden",
          "rounded-2xl h-full flex flex-col",
          "border bg-white dark:bg-slate-900/80",
          "border-slate-200/80 dark:border-white/[0.07]",
          "shadow-sm",
          "hover:border-blue-300/60 dark:hover:border-blue-500/30",
          "hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-blue-500/12",
          "backdrop-blur-xl transition-all duration-300",
        ].join(" ")}
      >
        {/* Hover glow blobs */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute w-48 h-48 bg-blue-400/10 dark:bg-blue-500/15 blur-3xl rounded-full -top-12 -left-12" />
          <div className="absolute w-48 h-48 bg-blue-300/8 dark:bg-blue-400/10 blur-3xl rounded-full -bottom-12 -right-12" />
        </div>

        {/* Top beam on hover */}
        <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-blue-500 via-sky-400 to-blue-500 transition-all duration-500 ease-out rounded-t-2xl z-10" />

        {/* Image showcase */}
        <ImageShowcase
          images={images}
          title={project.title}
          featured={project.featured ?? false}
          onExpand={(idx) => setLightbox(idx)}
        />

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 relative z-10">
          {/* Meta */}
          <div className="mb-2.5 flex items-center gap-1.5 text-[10.5px] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 font-mono">
            <span>{project.year}</span>
            {project.category && (
              <>
                <span className="opacity-40">·</span>
                <span>{project.category}</span>
              </>
            )}
          </div>

          <h3 className="text-base font-bold leading-snug mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ont-['Sora',sans-serif]">
            {project.title}
          </h3>

          <p className="text-[13px] leading-relaxed line-clamp-3 mb-4 flex-1 text-slate-500 dark:text-slate-400">
            {project.shortDescription ?? project.fullDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className={[
                  "inline-flex items-center px-2 py-0.5 rounded-md",
                  "text-[11px] font-medium",
                  "bg-slate-100 dark:bg-white/6",
                  "border border-slate-200 dark:border-white/8",
                  "text-slate-600 dark:text-slate-300",
                  "hover:bg-blue-50 dark:hover:bg-blue-500/10",
                  "hover:text-blue-700 dark:hover:text-blue-400",
                  "hover:border-blue-200 dark:hover:border-blue-400/30",
                  "transition-all duration-150 cursor-default",
                ].join(" ")}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 ark:bg-white/4 border border-slate-200 dark:border-white/6">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* CTA row */}
          <div className="mt-auto flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-white/6">
            <button
              onClick={() => onOpen(project)}
              className={[
                "flex-1 py-2 rounded-xl text-[13px] font-semibold",
                "bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20",
                "border border-blue-200/60 hover:border-blue-300 dark:border-blue-400/20 dark:hover:border-blue-400/40",
                "text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200",
                "transition-all duration-200",
              ].join(" ")}
            >
              View Details
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={[
                  "p-2.5 rounded-xl transition-all duration-200",
                  "border border-slate-200 dark:border-white/10",
                  "hover:border-blue-300 hover:bg-blue-50",
                  "dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10",
                  "text-slate-500 hover:text-blue-600",
                  "dark:text-slate-400 dark:hover:text-blue-300",
                ].join(" ")}
              >
                <Icon path={PATHS.github} size={16} />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className={[
                  "p-2.5 rounded-xl transition-all duration-200",
                  "border border-slate-200 dark:border-white/10",
                  "hover:border-blue-300 hover:bg-blue-50",
                  "dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10",
                  "text-slate-500 hover:text-blue-600",
                  "dark:text-slate-400 dark:hover:text-blue-300",
                ].join(" ")}
              >
                <Icon path={PATHS.external} size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox portal */}
      <AnimatePresence>
        {lightbox !== null && images.length > 0 && (
          <Lightbox
            images={images}
            startIndex={lightbox}
            title={project.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
