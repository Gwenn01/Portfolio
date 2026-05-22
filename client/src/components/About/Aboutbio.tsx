import { MapPin, User } from "lucide-react";

interface Props {
  paragraphs: string[];
  location: string;
}

export default function AboutBio({ paragraphs, location }: Props) {
  return (
    <div className="space-y-6 max-w-2xl group/bio">
      {/* Eyebrow label with interactive sliding line */}
      <div className="flex items-center gap-2 group/label cursor-default w-fit">
        <span className="h-px w-8 bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover/bio:w-12" />
        <div className="flex items-center gap-1.5">
          <User className="w-3 h-3 text-blue-600 dark:text-blue-500" />
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-blue-600 dark:text-blue-500 font-mono">
            Who I Am
          </span>
        </div>
      </div>

      {/* Paragraphs with high-readability layout */}
      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={[
              "text-[15px] leading-relaxed tracking-normal font-normal",
              "text-zinc-600 dark:text-zinc-400",
              "hover:text-zinc-900 dark:hover:text-zinc-200",
              "transition-colors duration-300 ease-out",
            ].join(" ")}
          >
            {p}
          </p>
        ))}
      </div>

      {/* Modern Premium Location Widget */}
      <div
        className={[
          "inline-flex items-center gap-2.5 px-4 py-2 rounded-xl",
          "bg-zinc-100/80 dark:bg-zinc-900/40",
          "border border-zinc-200 dark:border-zinc-800/60",
          "backdrop-blur-xs",
          "text-[13px] font-medium tracking-wide",
          "text-zinc-600 dark:text-zinc-400",
          "hover:border-blue-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/80",
          "hover:text-zinc-900 dark:hover:text-zinc-200",
          "hover:shadow-lg hover:shadow-blue-500/20",
          "transform hover:-translate-y-0.5",
          "transition-all duration-300 ease-out",
          "cursor-default",
        ].join(" ")}
      >
        {/* Dynamic Glowing Live Status Dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500/60 dark:bg-blue-400/60 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />
        </span>

        {/* Subtle Map Pin Icon */}
        <MapPin className="w-3.5 h-3.5 opacity-70 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 transition-colors duration-300" />

        <span>{location}</span>
      </div>
    </div>
  );
}
