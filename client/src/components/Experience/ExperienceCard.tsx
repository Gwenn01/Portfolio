import { Tag } from "../ui";
import { Briefcase } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="relative group">
      {/* Icon acting as the timeline junction */}
      <div className="w-10 h-10 mb-4 rounded-xl flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md group-hover:border-blue-500 transition-all duration-300">
        <Briefcase className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500" />
      </div>

      <div
        className={[
          "relative overflow-hidden rounded-2xl md:rounded-3xl",
          "border border-zinc-200/80 dark:border-zinc-800/50",
          "bg-white/70 dark:bg-zinc-900/30",
          "backdrop-blur-md dark:backdrop-blur-xl",
          "p-6 md:p-8",
          "transition-all duration-300 ease-out",
          "hover:border-blue-500/40 dark:hover:border-blue-500/30",
          "hover:bg-white dark:hover:bg-zinc-900/40",
          "hover:-translate-y-1.5",
          "hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",
        ].join(" ")}
      >
        {/* Ambient Hover Gradient Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/5" />

        <div className="relative z-10 flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {experience.role}
              </h3>

              <p className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
                {experience.company}
              </p>
            </div>

            {/* Modern Badge for Period */}
            <span
              className={[
                "w-fit text-[11px] md:text-xs font-semibold tracking-wider uppercase",
                "text-blue-700 dark:text-blue-300",
                "bg-blue-50 dark:bg-blue-950/40",
                "border border-blue-100 dark:border-blue-900/30",
                "px-3 py-1 rounded-lg md:rounded-xl",
                "shadow-xs",
              ].join(" ")}
            >
              {experience.period}
            </span>
          </div>

          {/* Cleaned Modern Description */}
          <p className="text-sm md:text-[15px] leading-relaxed tracking-normal font-normal text-zinc-600 dark:text-zinc-400">
            {experience.description}
          </p>

          {/* Tech Stack Tags container */}
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
