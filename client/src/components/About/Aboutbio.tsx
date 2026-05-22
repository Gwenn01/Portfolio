interface Props {
  paragraphs: string[];
  location: string;
}

export default function AboutBio({ paragraphs, location }: Props) {
  return (
    <div className="space-y-6">
      {/* Eyebrow label */}
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-blue-500" />
        <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-500 font-mono">
          Who I Am
        </span>
      </div>

      {/* Paragraphs */}
      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]"
          >
            {p}
          </p>
        ))}
      </div>

      {/* Location pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 text-[12px] font-medium text-slate-500 dark:text-slate-400">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
        </span>
        {location}
      </div>
    </div>
  );
}
