// components/Certifications/CertCard.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import CertIssuerLogo from "./Certissuerlogo";
import type { Certificate } from "../../data/portfolio";
import { ChevronLeft, ChevronRight, X, Layers } from "lucide-react";

// ── Category color mapping ────────────────────────────────────────────────
const CATEGORY_COLORS: Record<
  string,
  { dot: string; bg: string; text: string; border: string }
> = {
  "AI & ML": {
    dot: "bg-violet-500",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-400",
    border: "border-violet-200 dark:border-violet-500/20",
  },
  "Web Dev": {
    dot: "bg-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/20",
  },
  Cloud: {
    dot: "bg-sky-500",
    bg: "bg-sky-50 dark:bg-sky-500/10",
    text: "text-sky-700 dark:text-sky-400",
    border: "border-sky-200 dark:border-sky-500/20",
  },
  Data: {
    dot: "bg-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-500/20",
  },
  Programming: {
    dot: "bg-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-500/20",
  },
  Networking: {
    dot: "bg-orange-500",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-500/20",
  },
  Academic: {
    dot: "bg-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-500/20",
  },
  Other: {
    dot: "bg-slate-400",
    bg: "bg-slate-100 dark:bg-white/[0.06]",
    text: "text-slate-600 dark:text-slate-400",
    border: "border-slate-200 dark:border-white/[0.08]",
  },
};

const DEFAULT_COLOR = CATEGORY_COLORS["Other"];

// ── Lightbox ──────────────────────────────────────────────────────────────

// Directional slide variants for the image slider
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

function CertLightbox({
  images,
  title,
  currentIndex,
  setCurrentIndex,
  onClose,
}: {
  images: string[];
  title: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  onClose: () => void;
}) {
  // Track direction to know which way to slide (-1 for left, 1 for right)
  const [[direction], setPage] = useState([currentIndex, 0]);

  const paginate = (newDirection: number) => {
    const nextIndex =
      (currentIndex + newDirection + images.length) % images.length;
    setPage([nextIndex, newDirection]);
    setCurrentIndex(nextIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-4 md:p-6"
    >
      <motion.div
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/50 backdrop-blur-xs z-10">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs font-bold tracking-wider font-mono uppercase text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              DOC
            </span>
            <span className="text-sm font-medium text-zinc-200 truncate">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Dynamic Sliding Image Track */}
        <div className="relative flex items-center justify-center bg-zinc-950 p-4 md:p-8 min-h-[50vh] sm:min-h-[65vh] h-[65vh] overflow-hidden select-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${title} view ${currentIndex + 1}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-h-full max-w-full object-contain rounded-lg shadow-xl pointer-events-none"
              />
            </AnimatePresence>
          </div>

          {/* Slider Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => paginate(-1)}
                className="absolute left-4 w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-zinc-900 shadow-lg backdrop-blur-xs transition group"
              >
                <ChevronLeft
                  size={18}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute right-4 w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-zinc-900 shadow-lg backdrop-blur-xs transition group"
              >
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </>
          )}
        </div>

        {/* Footer Meta Bar */}
        {images.length > 1 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800/80 bg-zinc-900/30">
            <div className="flex items-center gap-1.5 text-xs font-semibold font-mono tracking-wider text-zinc-500 uppercase">
              <Layers size={12} />
              <span>Attachments Gallery</span>
            </div>

            <div className="text-[11px] font-bold font-mono tracking-widest text-blue-400 bg-blue-500/5 px-2.5 py-1 rounded-full border border-blue-500/10">
              {currentIndex + 1} <span className="text-zinc-600">/</span>{" "}
              {images.length}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
// ── Main Card ─────────────────────────────────────────────────────────────
interface Props {
  cert: Certificate;
}

export default function CertCard({ cert }: Props) {
  const [lightbox, setLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const cc = CATEGORY_COLORS[cert.category] ?? DEFAULT_COLOR;

  const images = cert.images ?? [];

  // Auto slide
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  const abbr = cert.title
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="
          group relative flex flex-col overflow-hidden rounded-2xl
          bg-white dark:bg-slate-900/70
          border border-slate-200 dark:border-white/[0.07]
          shadow-sm hover:shadow-xl
          hover:border-blue-300/60 dark:hover:border-blue-500/25
          transition-all duration-300
        "
      >
        {/* Top beam */}
        <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 transition-all duration-500 z-10 rounded-t-2xl" />

        {/* Image */}
        <div
          className="
            relative h-52 overflow-hidden
            bg-slate-100 dark:bg-slate-950
            flex items-center justify-center
            border-b border-slate-100 dark:border-white/5
            cursor-pointer
          "
          onClick={() => images.length > 0 && setLightbox(true)}
        >
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImage]}
                alt={cert.title}
                className="
                  w-full h-full
                  object-contain
                  p-2
                  transition-transform duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-3 flex items-center gap-1.5">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImage
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/8 flex items-center justify-center">
                <span className="text-xl font-black text-blue-400/50">
                  {abbr}
                </span>
              </div>

              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Certificate
              </span>
            </div>
          )}

          {/* Featured */}
          {cert.featured && (
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase bg-blue-100 border border-blue-200 text-blue-600 dark:bg-blue-500/10 dark:border-blue-400/20 dark:text-blue-300">
              ✦ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          {/* Issuer */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/8 flex items-center justify-center overflow-hidden">
                <CertIssuerLogo
                  logo={cert.issuerLogo}
                  issuer={cert.issuer}
                  size={18}
                />
              </div>

              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                {cert.issuer}
              </span>
            </div>

            <span
              className={`
                shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md
                text-[9px] font-bold uppercase border
                ${cc.bg} ${cc.text} ${cc.border}
              `}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cc.dot}`} />
              {cert.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[14px] font-bold leading-snug text-slate-800 dark:text-white">
            {cert.title}
          </h3>

          {/* Date */}
          <div className="text-[11px] text-slate-400 dark:text-slate-500">
            Issued {cert.issuedMonth}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-3 border-t border-slate-100 dark:border-white/6 flex items-center gap-2">
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                  text-[12px] font-semibold
                  bg-blue-50 hover:bg-blue-100
                  dark:bg-blue-500/10 dark:hover:bg-blue-500/20
                  border border-blue-200/60 hover:border-blue-300
                  dark:border-blue-400/20 dark:hover:border-blue-400/40
                  text-blue-600 dark:text-blue-300
                "
              >
                Verify credential
              </a>
            ) : (
              <div
                className="
                  flex-1 flex items-center justify-center py-2 rounded-xl
                  text-[12px] font-semibold
                  bg-slate-50 dark:bg-white/3
                  border border-slate-200 dark:border-white/7
                  text-slate-400
                "
              >
                No public link
              </div>
            )}

            {images.length > 0 && (
              <button
                onClick={() => setLightbox(true)}
                className="
                  p-2 rounded-xl border
                  border-slate-200 dark:border-white/8
                  hover:border-blue-300 hover:bg-blue-50
                  dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10
                "
              >
                🖼
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && images.length > 0 && (
          <CertLightbox
            images={images}
            title={cert.title}
            currentIndex={currentImage}
            setCurrentIndex={setCurrentImage}
            onClose={() => setLightbox(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
