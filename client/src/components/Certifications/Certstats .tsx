// components/Certifications/CertStats.tsx
import { certificates } from "../../data/portfolio";

// Derive stats from data
const total = certificates.length;
const featured = certificates.filter((c) => c.featured).length;
const platforms = new Set(certificates.map((c) => c.issuer)).size;
const categories = new Set(certificates.map((c) => c.category)).size;

const STATS = [
  {
    value: `${total}`,
    label: "Certificates",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    value: `${platforms}`,
    label: "Platforms",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    value: `${categories}`,
    label: "Categories",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    value: `${featured}`,
    label: "Featured",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function CertStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {STATS.map(({ value, label, icon }) => (
        <div
          key={label}
          className={[
            "group flex items-center gap-3 px-4 py-3 rounded-xl cursor-default",
            "bg-white dark:bg-slate-900/60",
            "border border-slate-200 dark:border-white/8",
            "hover:border-blue-300/60 dark:hover:border-blue-500/25",
            "hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/8",
            "transition-all duration-200",
          ].join(" ")}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0 group-hover:border-blue-300 dark:group-hover:border-blue-400/30 transition-colors duration-200">
            {icon}
          </div>
          <div>
            <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-none">
              {value}
            </p>
            <p className="text-[10.5px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
