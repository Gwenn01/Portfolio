import { useState, useEffect } from "react";
import { Tag } from "../ui";
import {
  Briefcase,
  Eye,
  ExternalLink,
  X,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  document?: string | null;
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // Prevent background scroll leaking when lightbox is deployed on mobile touch screens
  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  return (
    <>
      <div className="group/item relative flex gap-4 md:gap-6 items-start">
        {/* Left Side Rail Track */}
        <div className="relative flex flex-col items-center self-stretch hidden sm:flex shrink-0 w-10">
          {/* Timeline Node Base Badge Indicator */}
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 shadow-xs group-hover/item:border-blue-500/40 dark:group-hover/item:border-blue-500/30 group-hover/item:shadow-sm group-hover/item:shadow-blue-500/5 transition-all duration-300 z-10">
            <Briefcase className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 group-hover/item:scale-110 transition-all duration-300" />
          </div>
          {/* Vertical Track Spline Connection Pin */}
          <div className="absolute top-10 bottom-0 w-px bg-zinc-200/60 dark:bg-zinc-800/60 group-hover/item:bg-blue-500/10 transition-colors duration-300" />
        </div>

        {/* Core Narrative Entry Box Container */}
        <div
          className={[
            "relative flex-1 overflow-hidden rounded-2xl md:rounded-3xl",
            "border border-zinc-200/80 dark:border-zinc-800/80",
            "bg-white dark:bg-zinc-900/30",
            "p-5 sm:p-6 md:p-8",
            "transition-all duration-300 ease-out",
            "hover:border-blue-200/60 dark:hover:border-blue-900/40",
            "hover:bg-linear-to-b hover:from-white hover:to-zinc-50/30 dark:hover:from-zinc-900/40 dark:hover:to-zinc-900/20",
            "hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-none",
          ].join(" ")}
        >
          {/* Subtle Ambient Branding Backdrop Glow */}
          <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 bg-radial from-blue-500/3 to-transparent transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            {/* Header Layout Grid Frame */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200">
                  {experience.role}
                </h3>

                <div className="flex items-center gap-2 flex-wrap text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  <span className="text-blue-600 dark:text-blue-400/90">
                    {experience.company}
                  </span>
                  {/* Inline Period Pin only visible during compressed single-column mobile view layouts */}
                  <span className="sm:hidden inline-flex items-center gap-1 text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    {experience.period}
                  </span>
                </div>
              </div>

              {/* Precise Monospaced Desktop Temporal Ribbon Badge */}
              <div className="hidden sm:block shrink-0">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider font-mono uppercase text-blue-700 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/30 px-3 py-1 rounded-lg">
                  <Calendar size={11} className="text-blue-500/70" />
                  {experience.period}
                </span>
              </div>
            </div>

            {/* Mobile View Toggle Action Button Trigger (Controls ONLY the text content blocks) */}
            <button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className="flex sm:hidden items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-bold text-zinc-700 dark:text-zinc-300 transition active:bg-zinc-100 dark:active:bg-zinc-800/80"
            >
              <span>
                {isMobileExpanded ? "Hide Description" : "View Details"}
              </span>
              {isMobileExpanded ? (
                <ChevronUp size={14} className="text-zinc-400" />
              ) : (
                <ChevronDown size={14} className="text-zinc-400" />
              )}
            </button>

            {/* Collapsible Content Block (Description & Tags) */}
            <div
              className={`${isMobileExpanded ? "flex" : "hidden sm:flex"} flex-col gap-4`}
            >
              <p className="text-sm md:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                {experience.description}
              </p>

              {/* Technology Integration Footing Row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {experience.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>

            {/* Document Thumbnail Component (Always visible outside the text details toggle) */}
            {experience.document && (
              <div className="pt-1 max-w-sm w-full">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="group/thumb relative aspect-16/10 w-full rounded-xl overflow-hidden cursor-zoom-in text-left bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs transition-all duration-300 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:shadow-md"
                >
                  <img
                    src={experience.document}
                    alt="Certificate document thumbnail"
                    className="w-full h-full object-cover opacity-95 dark:opacity-90 group-hover/thumb:scale-102 group-hover/thumb:opacity-90 transition-all duration-500"
                    loading="lazy"
                  />

                  {/* Clean Bottom Header Strip Overlay Layer */}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 pt-8 flex items-center justify-between gap-4">
                    <span className="text-[11px] font-bold tracking-wider font-mono uppercase text-zinc-100 truncate">
                      Certificate of Employment
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-blue-400 dark:text-blue-400 bg-white/10 dark:bg-zinc-950/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 shrink-0 opacity-90 group-hover/thumb:opacity-100 transition-opacity">
                      <Eye size={10} />
                      <span>PREVIEW</span>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upgraded Immersive Scrollable Tap-to-Dismiss Lightbox Module */}
      <AnimatePresence>
        {isPreviewOpen && experience.document && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
            className="fixed inset-0 bg-zinc-950/98应用 z-9999 backdrop-blur-md overflow-y-auto flex flex-col justify-start items-center select-none cursor-zoom-out"
          >
            {/* Absolute Fixed Sticky Top Control HUD Bar */}
            <div className="sticky top-0 inset-x-0 h-16 bg-zinc-950/95 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 z-50 border-b border-zinc-900/60 w-full shrink-0">
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold tracking-widest font-mono uppercase text-blue-400">
                  DOC_VIEWER // ATTACHMENT
                </span>
                <span className="text-xs font-semibold text-zinc-300 truncate max-w-55 sm:max-w-xs">
                  {experience.company}
                </span>
              </div>

              <button
                onClick={() => setIsPreviewOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 active:scale-95 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Presentation Card Wrapper */}
            <motion.div
              initial={{ scale: 0.97, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 12 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-4xl flex flex-col justify-start bg-transparent sm:bg-zinc-900/30 sm:border sm:border-zinc-800/50 sm:rounded-2xl sm:p-2 my-4 sm:my-8 overflow-hidden cursor-default"
            >
              {/* Primary Image Presenter (Tapping the image frame itself also dismisses the window seamlessly) */}
              <div
                className="w-full flex items-center justify-center p-4 sm:p-6 min-h-[60vh] sm:min-h-0 cursor-zoom-out"
                onClick={() => setIsPreviewOpen(false)}
              >
                <img
                  src={experience.document}
                  alt="Certificate of Employment Full Resolution View"
                  className="w-full h-auto max-w-full object-contain rounded-xl shadow-2xl pointer-events-none"
                />
              </div>

              {/* Bottom Action Sheet Footer */}
              <div className="bg-zinc-950 p-5 sm:p-4 flex flex-col sm:flex-row gap-4 items-center sm:justify-between border-t border-zinc-900 rounded-b-xl w-full">
                <div className="text-center sm:text-left space-y-0.5 w-full sm:w-auto">
                  <h5 className="text-sm font-bold text-zinc-100 font-mono tracking-wide uppercase">
                    Certificate of Employment
                  </h5>
                  <p className="text-xs text-zinc-500">{experience.company}</p>
                </div>

                <a
                  href={experience.document}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/10 hover:bg-blue-500 active:scale-98 transition duration-200"
                >
                  <ExternalLink size={13} />
                  <span>Open Full Resolution</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
