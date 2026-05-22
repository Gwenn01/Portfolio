import { STATS } from "../../data/portfolio";

export default function AboutStats() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {STATS.map(({ value, label, sub }) => (
        <div
          key={label}
          className={[
            "relative overflow-hidden rounded-2xl p-5 text-center",
            "bg-slate-50 dark:bg-white/3",
            "border border-slate-200 dark:border-white/[0.07]",
            "group hover:border-blue-300 dark:hover:border-blue-500/30",
            "hover:bg-blue-50/50 dark:hover:bg-blue-500/5",
            "transition-all duration-300",
          ].join(" ")}
        >
          {/* Subtle top accent line */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
            {value}
          </p>
          <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
            {label}
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-0.5">
            {sub}
          </p>
        </div>
      ))}
    </div>
  );
}
