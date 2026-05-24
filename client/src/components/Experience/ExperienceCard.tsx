import { useState } from "react";
import { Tag } from "../ui";
import { Briefcase, Eye, ExternalLink, X } from "lucide-react";

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

  return (
    <>
      <div className="relative group">
        {/* Timeline structural line accent */}
        <div className="absolute left-5 top-10 -bottom-2.5 w-px bg-zinc-100 dark:bg-zinc-800 pointer-events-none" />

        {/* Timeline node icon */}
        <div className="absolute left-0 top-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md group-hover:border-blue-500/50 dark:group-hover:border-blue-500/30 transition-all duration-300 z-10">
          <Briefcase className="w-5 h-5 text-zinc-500 group-hover:text-blue-500 transition-colors" />
        </div>

        <div
          className={[
            "ml-16 relative overflow-hidden rounded-2xl md:rounded-3xl",
            "border border-zinc-200/80 dark:border-zinc-800/80",
            "bg-white dark:bg-zinc-900/40",
            "p-6 md:p-8",
            "transition-all duration-300 ease-out",
            "hover:border-blue-100 dark:hover:border-blue-900/30",
            "hover:bg-white dark:hover:bg-zinc-900/60",
            "hover:-translate-y-1",
            "hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-none",
          ].join(" ")}
        >
          {/* Ambient light ring on card hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-radial from-blue-500/5 to-transparent transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            {/* Header Identity Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {experience.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {experience.company}
                </p>
              </div>

              {/* Temporal Badge */}
              <span
                className={[
                  "w-fit text-[11px] md:text-xs font-semibold tracking-wider uppercase font-mono",
                  "text-blue-700 dark:text-blue-300",
                  "bg-blue-50/70 dark:bg-blue-950/40",
                  "border border-blue-100 dark:border-blue-900/30",
                  "px-3 py-1 rounded-lg",
                ].join(" ")}
              >
                {experience.period}
              </span>
            </div>

            {/* Role Narrative Description */}
            <p className="text-sm md:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {experience.description}
            </p>

            {/* Single Visual Document Attachment Section */}
            {experience.document && (
              <div className="pt-2 max-w-md w-full">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className={[
                    "group/img relative aspect-16/10 w-full rounded-xl overflow-hidden cursor-zoom-in text-left",
                    "bg-zinc-50 dark:bg-zinc-900",
                    "border border-zinc-200/80 dark:border-zinc-800/80",
                    "transition-all duration-300 hover:border-blue-400/60 dark:hover:border-blue-400/40",
                  ].join(" ")}
                >
                  <img
                    src={experience.document}
                    alt="Certificate of Employment Preview"
                    className="w-full h-full object-cover opacity-95 group-hover/img:opacity-75 transition-opacity duration-300"
                    loading="lazy"
                  />

                  {/* Absolute Overlay Control HUD */}
                  <div className="absolute inset-0 flex flex-col justify-between p-3 bg-linear-to-t from-black/60 via-transparent to-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <div className="self-end rounded-md bg-zinc-900/80 backdrop-blur-xs p-1.5 border border-zinc-700/50">
                      <Eye size={14} className="text-zinc-200" />
                    </div>

                    <span className="text-[11px] font-bold tracking-wider font-mono uppercase text-white drop-shadow-xs">
                      Certificate of Employment
                    </span>
                  </div>
                </button>
              </div>
            )}

            {/* Technologies Applied Tags container */}
            <div className="flex flex-wrap gap-2 pt-2">
              {experience.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Lightbox Portal */}
      {isPreviewOpen && experience.document && (
        <div
          className="fixed inset-0 bg-black/85 z-50 p-4 backdrop-blur-md flex flex-col items-center justify-center cursor-zoom-out"
          onClick={() => setIsPreviewOpen(false)}
        >
          {/* Escape / Close Handle */}
          <div className="absolute top-4 right-4 z-51">
            <button className="text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-900/50 backdrop-blur-xs border border-zinc-800">
              <X size={20} />
            </button>
          </div>

          <div
            className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={experience.document}
              alt="Certificate of Employment Full View"
              className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-xl"
            />

            <div className="p-4 flex items-center justify-between border-t border-zinc-900 bg-zinc-950 mt-1 rounded-b-xl">
              <div className="space-y-0.5">
                <h5 className="text-sm font-bold text-zinc-100 font-mono tracking-wide uppercase">
                  Certificate of Employment
                </h5>
                <p className="text-xs text-zinc-500">{experience.company}</p>
              </div>
              <a
                href={experience.document}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
              >
                <ExternalLink size={12} /> View Raw Image
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
