import {
  Code2,
  Database,
  Wrench,
  BrainCircuit,
  Globe,
  Cpu,
} from "lucide-react";

interface SkillGroup {
  category: string;
  items: string[];
}

interface Props {
  skills: SkillGroup[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Globe size={14} />,
  Backend: <Database size={14} />,
  Tools: <Wrench size={14} />,
  "AI & Machine Learning, Deep Learning": <BrainCircuit size={14} />,
  Languages: <Code2 size={14} />,
  Default: <Cpu size={14} />,
};

const CATEGORY_GRADIENTS = [
  "from-blue-500/15 to-cyan-500/10",
  "from-indigo-500/15 to-blue-500/10",
  "from-sky-500/15 to-cyan-500/10",
  "from-violet-500/15 to-indigo-500/10",
];

export default function AboutSkills({ skills }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {skills.map((group, idx) => (
        <SkillRow
          key={group.category}
          category={group.category}
          items={group.items}
          gradient={CATEGORY_GRADIENTS[idx % CATEGORY_GRADIENTS.length]}
        />
      ))}
    </div>
  );
}

function SkillRow({
  category,
  items,
  gradient,
}: {
  category: string;
  items: string[];
  gradient: string;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl",
        "border border-slate-200/70 dark:border-white/10",
        "bg-white/80 dark:bg-white/3",
        "backdrop-blur-xl",
        "shadow-sm hover:shadow-lg",
        "transition-all duration-300",
      ].join(" ")}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br ${gradient} transition-opacity duration-300`}
      />

      <div className="relative z-10 p-3 md:p-4">
        <div className="flex flex-col md:flex-row md:items-start gap-3">
          {/* Category */}
          <div className="flex items-center gap-2 min-w-42.5">
            <div
              className={[
                "flex items-center justify-center",
                "w-8 h-8 rounded-xl",
                "bg-slate-100 dark:bg-white/5",
                "border border-slate-200 dark:border-white/10",
                "text-blue-600 dark:text-blue-400",
              ].join(" ")}
            >
              {CATEGORY_ICONS[category] || CATEGORY_ICONS.Default}
            </div>

            <div className="min-w-0">
              <h3 className="text-xs font-semibold text-slate-800 dark:text-white truncate">
                {category}
              </h3>

              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                {items.length} tech
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <SkillTag key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className={[
        "group/tag inline-flex items-center",
        "px-2.5 py-1 rounded-xl",
        "text-[10px] md:text-[11px] font-medium",
        "border border-slate-200 dark:border-white/10",
        "bg-slate-50/80 dark:bg-white/3",
        "text-slate-700 dark:text-slate-300",
        "hover:border-blue-400/40 dark:hover:border-blue-500/30",
        "hover:bg-blue-50 dark:hover:bg-blue-500/10",
        "hover:text-blue-700 dark:hover:text-blue-300",
        "transition-all duration-200",
        "whitespace-nowrap",
      ].join(" ")}
    >
      <span className="h-1 w-1 rounded-full bg-blue-500 mr-1.5 opacity-70 group-hover/tag:opacity-100" />
      {label}
    </span>
  );
}
