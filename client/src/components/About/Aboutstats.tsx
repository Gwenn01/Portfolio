import { STATS } from "../../data/portfolio";

export default function AboutStats() {
  return (
    // Swaps from 1 column on tiny phones, to 2 on small screens, to 3 on tablets/desktops
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3.5 w-full max-w-4xl">
      {STATS.map(({ value, label, sub }, idx) => (
        <div
          key={label}
          style={{ animationDelay: `${idx * 75}ms` }}
          className={[
            "group relative overflow-hidden rounded-2xl p-5 md:p-6",
            "bg-white/60 dark:bg-zinc-900/20",
            "border border-zinc-200/70 dark:border-zinc-800/60",
            "backdrop-blur-xs",
            "flex flex-col justify-between items-start text-left", // Left-aligned looks cleaner & more professional than centered text
            "transform hover:-translate-y-1",
            "transition-all duration-300 ease-out",
            "hover:border-blue-500/30 dark:hover:border-blue-500/40",
            "hover:bg-white dark:hover:bg-zinc-900/50",
            "hover:shadow-lg hover:shadow-blue-500/2 dark:hover:shadow-blue-500/1",
          ].join(" ")}
        >
          {/* Ambient Corner Neon Glow Indicator */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-500/5 dark:from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Sleek dynamic top border accent */}
          <span className="absolute top-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out" />

          <div>
            {/* Value Display */}
            <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-mono leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {value}
            </h4>

            {/* Main Label */}
            <p className="text-xs md:text-[13px] font-bold tracking-wide text-zinc-700 dark:text-zinc-300 mt-2.5 mb-1">
              {label}
            </p>
          </div>

          {/* Subtitle / Contextual Meta Info */}
          <p className="text-[11px] font-medium font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors duration-300 mt-2">
            // {sub}
          </p>
        </div>
      ))}
    </div>
  );
}
