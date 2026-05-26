import { SiLeetcode } from "react-icons/si";
import { ExternalLink, Award, Sparkles } from "lucide-react";

export default function LeetCodeCard() {
  const stats = {
    totalSolved: 225,
    easy: 151,
    medium: 65,
    hard: 9,
    easyTotal: 820,
    mediumTotal: 1720,
    hardTotal: 740,
  };

  return (
    <div
      className={[
        "group/card relative overflow-hidden rounded-2xl md:rounded-3xl",
        "border border-zinc-200/80 dark:border-zinc-800/80",
        "bg-white dark:bg-zinc-900/40",
        "p-6 md:p-8",
        "transition-all duration-300 ease-out",
        "hover:border-zinc-300 dark:hover:border-zinc-700",
        "hover:shadow-lg hover:shadow-zinc-200/30 dark:hover:shadow-none",
      ].join(" ")}
    >
      {/* Brand-accurate ambient orange hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 bg-radial from-orange-500/5 to-transparent transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header Block */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 group-hover/card:border-orange-500/30 dark:group-hover/card:border-orange-500/20 transition-colors duration-300">
              <SiLeetcode className="text-[#FFA116] text-lg group-hover/card:scale-110 transition-transform duration-300" />
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase font-mono text-zinc-800 dark:text-zinc-200">
                LeetCode
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                swe.core // problem solving
              </p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/gwenn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 hover:text-[#FFA116] dark:hover:text-[#FFA116] hover:border-[#FFA116]/30 dark:hover:border-[#FFA116]/30 transition duration-200 group/btn"
          >
            <span>Profile</span>
            <ExternalLink
              size={12}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Main Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-1 flex items-baseline gap-2 cursor-default">
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 font-mono group-hover/card:text-orange-500 dark:group-hover/card:text-[#FFA116] transition-colors duration-300">
              {stats.totalSolved}
            </h1>
            <span className="text-xs font-bold tracking-widest font-mono uppercase text-zinc-400 dark:text-zinc-500">
              Solved
            </span>
          </div>

          <p className="md:col-span-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover/card:text-zinc-900 dark:group-hover/card:text-zinc-200 transition-colors duration-300">
            Focused on core software engineering foundations: algorithmic
            complexity, data structures, backend scaling logic, graphs,
            recursion, and dynamic programming optimization workflows.
          </p>
        </div>

        {/* Native LeetCode Horizontal Bar Indicators */}
        <div className="space-y-3.5 pt-2">
          {/* Easy Progress */}
          <div className="group/row space-y-1.5 cursor-default">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 group-hover/row:scale-105 transition-transform origin-left duration-200">
                Easy
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">
                {stats.easy}
                <span className="text-zinc-300 dark:text-zinc-700 font-normal">
                  {" "}
                  / {stats.easyTotal}
                </span>
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden border border-transparent group-hover/row:border-emerald-500/20 transition-all duration-200">
              <div
                className="h-full rounded-full bg-emerald-500 dark:bg-emerald-500/80 transition-all duration-500 shadow-[0_0_8px_rgba(16,185,129,0)] group-hover/row:shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                style={{ width: `${(stats.easy / stats.easyTotal) * 100}%` }}
              />
            </div>
          </div>

          {/* Medium Progress */}
          <div className="group/row space-y-1.5 cursor-default">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-amber-500 dark:text-amber-400 group-hover/row:scale-105 transition-transform origin-left duration-200">
                Medium
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">
                {stats.medium}
                <span className="text-zinc-300 dark:text-zinc-700 font-normal">
                  {" "}
                  / {stats.mediumTotal}
                </span>
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden border border-transparent group-hover/row:border-amber-500/20 transition-all duration-200">
              <div
                className="h-full rounded-full bg-amber-500 dark:bg-amber-500/80 transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0)] group-hover/row:shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                style={{
                  width: `${(stats.medium / stats.mediumTotal) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Hard Progress */}
          <div className="group/row space-y-1.5 cursor-default">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-rose-500 dark:text-rose-400 group-hover/row:scale-105 transition-transform origin-left duration-200">
                Hard
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">
                {stats.hard}
                <span className="text-zinc-300 dark:text-zinc-700 font-normal">
                  {" "}
                  / {stats.hardTotal}
                </span>
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden border border-transparent group-hover/row:border-rose-500/20 transition-all duration-200">
              <div
                className="h-full rounded-full bg-rose-500 dark:bg-rose-500/80 transition-all duration-500 shadow-[0_0_8px_rgba(239,68,68,0)] group-hover/row:shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                style={{ width: `${(stats.hard / stats.hardTotal) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-2 gap-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-4 mt-1">
          <div className="group/metric flex items-start gap-2.5 cursor-default">
            <Award
              size={16}
              className="text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5 group-hover/metric:text-amber-500 dark:group-hover/metric:text-amber-400 group-hover/metric:rotate-12 transition-all duration-300"
            />
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase font-mono group-hover/metric:text-zinc-500 dark:group-hover/metric:text-zinc-400 transition-colors">
                Badges
              </p>
              <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
                {stats.easy === 151 ? "2 Earned" : "2 Earned"}
              </h4>
            </div>
          </div>

          <div className="group/metric flex items-start gap-2.5 cursor-default">
            <Sparkles
              size={16}
              className="text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5 group-hover/metric:text-blue-500 dark:group-hover/metric:text-blue-400 group-hover/metric:scale-110 transition-all duration-300"
            />
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase font-mono group-hover/metric:text-zinc-500 dark:group-hover/metric:text-zinc-400 transition-colors">
                Latest Badge
              </p>
              <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-mono truncate max-w-37.5 sm:max-w-none">
                50 Days Badge 2024
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
