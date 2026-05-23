import { EDUCATION_ACHIEVEMENTS } from "../../data/portfolio";

export default function AboutStats() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-4xl">
      {EDUCATION_ACHIEVEMENTS.map((item, idx) => (
        <div
          key={item.title}
          style={{ animationDelay: `${idx * 75}ms` }}
          className="
            group relative overflow-hidden rounded-xl
            px-4 py-3
            bg-white/60 dark:bg-zinc-900/20
            border border-zinc-200/70 dark:border-zinc-800/60
            backdrop-blur-xs
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-blue-500/30
          "
        >
          <span className="absolute top-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">
                  {item.year}
                </span>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {item.subtitle}
              </p>

              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
