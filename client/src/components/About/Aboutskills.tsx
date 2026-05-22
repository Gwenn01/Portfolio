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
  Frontend: <Globe size={16} />,
  Backend: <Database size={16} />,
  Tools: <Wrench size={16} />,
  "AI & Machine Learning, Deep Learning": <BrainCircuit size={16} />,
  Languages: <Code2 size={16} />,
  Default: <Cpu size={16} />,
};

const CATEGORY_GRADIENTS = [
  "from-blue-500/15 to-cyan-500/10",
  "from-indigo-500/15 to-blue-500/10",
  "from-sky-500/15 to-cyan-500/10",
  "from-violet-500/15 to-indigo-500/10",
];

export default function AboutSkills({ skills }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((group, idx) => (
        <SkillCard
          key={group.category}
          category={group.category}
          items={group.items}
          gradient={CATEGORY_GRADIENTS[idx % CATEGORY_GRADIENTS.length]}
        />
      ))}
    </div>
  );
}

function SkillCard({
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
        "group relative overflow-hidden rounded-3xl",
        "border border-slate-200/70 dark:border-white/10",
        "bg-white/80 dark:bg-white/3",
        "backdrop-blur-xl",
        "shadow-sm hover:shadow-xl",
        "transition-all duration-300",
        "hover:-translate-y-1",
      ].join(" ")}
    >
      {/* Glow background */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br ${gradient} transition-opacity duration-300`}
      />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={[
                "flex items-center justify-center",
                "w-10 h-10 rounded-2xl",
                "bg-slate-100 dark:bg-white/5",
                "text-blue-600 dark:text-blue-400",
                "border border-slate-200 dark:border-white/10",
              ].join(" ")}
            >
              {CATEGORY_ICONS[category] || CATEGORY_ICONS.Default}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                {category}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {items.length} technologies
              </p>
            </div>
          </div>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <SkillTag key={item} label={item} />
          ))}
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
        "px-3 py-1.5 rounded-xl",
        "text-[12px] font-medium",
        "border border-slate-200 dark:border-white/10",
        "bg-slate-50 dark:bg-white/3",
        "text-slate-700 dark:text-slate-300",
        "hover:border-blue-400/40 dark:hover:border-blue-500/30",
        "hover:bg-blue-50 dark:hover:bg-blue-500/10",
        "hover:text-blue-700 dark:hover:text-blue-300",
        "transition-all duration-200",
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 opacity-70 group-hover/tag:opacity-100" />
      {label}
    </span>
  );
}
