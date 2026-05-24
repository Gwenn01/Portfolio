import { useState } from "react";
import { EDUCATION_ACHIEVEMENTS } from "../../data/portfolio";

function EducationCard({
  item,
  idx,
}: {
  item: (typeof EDUCATION_ACHIEVEMENTS)[0];
  idx: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{ animationDelay: `${idx * 80}ms` }}
      className="group relative overflow-hidden rounded-xl animate-[fadeSlideUp_0.5s_ease-out_both] transition-all duration-300"
    >
      <div
        className={[
          "relative overflow-hidden rounded-xl",
          "bg-white dark:bg-slate-900/60",
          "border border-slate-200 dark:border-white/8",
          "group-hover:border-blue-300/50 dark:group-hover:border-blue-500/20",
          "group-hover:shadow-md group-hover:shadow-blue-500/6",
          "transition-all duration-300",
        ].join(" ")}
      >
        {/* Top beam */}
        <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 transition-all duration-500 z-10 rounded-t-xl" />

        <div className="relative p-4">
          {/* Main row: icon + info + badges */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className={[
                "shrink-0 w-9 h-9 rounded-lg flex items-center justify-center",
                "bg-blue-50 dark:bg-blue-500/10",
                "border border-blue-100 dark:border-blue-500/20",
                "group-hover:border-blue-300 dark:group-hover:border-blue-400/30",
                "transition-colors duration-300",
              ].join(" ")}
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.subtitle}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500 dark:text-blue-400"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              {/* Left */}
              <div className="flex-1 min-w-0">
                <h3
                  className={[
                    "text-[10px] sm:text-[10.5px] md:text-xs",
                    "font-bold leading-tight",
                    "text-slate-800 dark:text-white",
                    "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                    "transition-colors duration-300 font-['Sora',sans-serif]",
                    "wrap-break-word",
                  ].join(" ")}
                >
                  {item.title}
                </h3>

                <p className="text-[9.5px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 mt-0.5 wrap-break-word">
                  {item.subtitle}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                {/* Date */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[8px] sm:text-[9.5px] font-bold tracking-wide uppercase font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.07] text-slate-400 dark:text-slate-500">
                  {item.date}
                </span>

                {/* Grade + Achievement */}
                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                  {item.grade && (
                    <span
                      className={[
                        "inline-flex items-center px-2 py-0.5 rounded-sm",
                        "text-[8px] sm:text-[10px]",
                        "font-semibold tracking-wider uppercase font-mono",
                        "bg-blue-50 dark:bg-blue-950/40",
                        "text-blue-600 dark:text-blue-400",
                        "border border-blue-100 dark:border-blue-900/30",
                      ].join(" ")}
                    >
                      Grade {item.grade}
                    </span>
                  )}

                  {item.achievements && (
                    <span className="text-[9px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      {item.grade && (
                        <span
                          className="text-slate-300 dark:text-slate-700"
                          aria-hidden="true"
                        >
                          •
                        </span>
                      )}

                      <span className="wrap-break-word">
                        {item.achievements}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Expandable description */}
          {item.description && (
            <div className="mt-3 pl-12">
              {expanded && (
                <p className="text-[11.5px] leading-relaxed text-slate-500 dark:text-slate-400 mb-2 animate-[fadeSlideUp_0.25s_ease-out_both]">
                  {item.description}
                </p>
              )}
              <button
                onClick={() => setExpanded((v) => !v)}
                className={[
                  "inline-flex items-center gap-1 text-[10.5px] font-semibold",
                  "text-blue-500 dark:text-blue-400",
                  "hover:text-blue-700 dark:hover:text-blue-300",
                  "transition-colors duration-150",
                ].join(" ")}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                {expanded ? "Hide details" : "View details"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutEducation() {
  return (
    <div className="space-y-2">
      {EDUCATION_ACHIEVEMENTS.map((item, idx) => (
        <EducationCard key={item.title} item={item} idx={idx} />
      ))}
    </div>
  );
}
