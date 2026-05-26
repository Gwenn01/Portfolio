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
          <div className="flex items-start gap-3">
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

            {/* All text — always left-aligned, full width */}
            <div className="flex-1 min-w-0 space-y-1.5">
              {/* Row 1: title */}
              <h3
                className={[
                  "text-[12px] sm:text-[12.5px]",
                  "font-bold leading-snug wrap-break-words",
                  "text-slate-800 dark:text-white",
                  "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                  "transition-colors duration-300 font-['Sora',sans-serif]",
                ].join(" ")}
              >
                {item.title}
              </h3>

              {/* Row 2: school */}
              <p className="text-[10.5px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 wrap-break-words">
                {item.subtitle}
              </p>

              {/* Row 3: date + grade + achievement — all left, wrap naturally */}
              <div className="flex flex-wrap items-center gap-1.5">
                {/* Date — always first, always left */}
                <span
                  className={[
                    "inline-flex items-center gap-1",
                    "px-2 py-0.5 rounded-md",
                    "text-[9px] sm:text-[9.5px] font-bold tracking-wide uppercase font-mono",
                    "bg-slate-100 dark:bg-white/5",
                    "border border-slate-200 dark:border-white/[0.07]",
                    "text-slate-400 dark:text-slate-500",
                  ].join(" ")}
                >
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {item.date}
                </span>

                {/* Grade */}
                {item.grade && (
                  <span
                    className={[
                      "inline-flex items-center gap-1",
                      "px-2 py-0.5 rounded-md",
                      "text-[9px] sm:text-[9.5px] font-bold font-mono",
                      "bg-emerald-50 dark:bg-emerald-500/10",
                      "border border-emerald-200 dark:border-emerald-500/20",
                      "text-emerald-700 dark:text-emerald-400",
                    ].join(" ")}
                  >
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                    {item.grade}
                  </span>
                )}

                {/* Achievement */}
                {item.achievements && (
                  <span
                    className={[
                      "inline-flex items-center gap-1",
                      "px-2 py-0.5 rounded-md",
                      "text-[9px] sm:text-[9.5px] font-semibold",
                      "bg-amber-50 dark:bg-amber-500/10",
                      "border border-amber-200 dark:border-amber-500/20",
                      "text-amber-700 dark:text-amber-400",
                    ].join(" ")}
                  >
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    {item.achievements}
                  </span>
                )}
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
