// components/Certifications/CertFilter.tsx
import { certificates } from "../../data/portfolio";

const ALL = "All";

// Derive unique categories from data
const CATEGORIES = [
  ALL,
  ...Array.from(new Set(certificates.map((c) => c.category))),
];

interface Props {
  active: string;
  onChange: (cat: string) => void;
  counts: Record<string, number>;
}

export default function CertFilter({ active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        const count = cat === ALL ? certificates.length : (counts[cat] ?? 0);

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={[
              "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl",
              "text-[12px] font-semibold transition-all duration-200",
              isActive
                ? "bg-blue-600 dark:bg-blue-500 text-white border border-blue-600 dark:border-blue-500 shadow-sm shadow-blue-500/25"
                : [
                    "bg-slate-100 dark:bg-white/5",
                    "border border-slate-200 dark:border-white/8",
                    "text-slate-500 dark:text-slate-400",
                    "hover:border-blue-300 dark:hover:border-blue-500/30",
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    "hover:bg-blue-50 dark:hover:bg-blue-500/10",
                  ].join(" "),
            ].join(" ")}
          >
            {cat}
            <span
              className={[
                "inline-flex items-center justify-center w-4 h-4 rounded-full text-[9.5px] font-bold",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 dark:bg-white/8 text-slate-500 dark:text-slate-400",
              ].join(" ")}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
