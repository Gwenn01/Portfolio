import {
  Code2,
  Database,
  Wrench,
  BrainCircuit,
  Globe,
  Cpu,
  Terminal,
  Layers,
  Braces,
} from "lucide-react";

interface SkillGroup {
  category: string;
  items: string[];
}

interface Props {
  skills: SkillGroup[];
}

// 1. Icon Map
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Globe size={13} />,
  Backend: <Database size={13} />,
  Tools: <Wrench size={13} />,
  "AI & Machine Learning, Deep Learning": <BrainCircuit size={13} />,
  Languages: <Code2 size={13} />,
  Default: <Cpu size={13} />,
};

// 2. Color-Coding System (Dynamic Theme mapping per category)
interface ColorTheme {
  bgGlow: string; // Row hover ambient background
  iconText: string; // Color of the category icon
  tagBorder: string; // Hover state border for skills
  tagBg: string; // Hover state bg color for skills
  tagText: string; // Hover state text color for skills
  indicatorText: string; // Color of the small inner skill icon
}

const CATEGORY_THEMES: Record<string, ColorTheme> = {
  Frontend: {
    bgGlow: "from-cyan-500/5 via-transparent to-transparent",
    iconText: "text-cyan-500 dark:text-cyan-400 border-cyan-500/20",
    tagBorder: "hover:border-cyan-500/30 dark:hover:border-cyan-500/40",
    tagBg: "hover:bg-cyan-50/50 dark:hover:bg-cyan-500/10",
    tagText: "hover:text-cyan-600 dark:hover:text-cyan-400",
    indicatorText:
      "text-cyan-400 group-hover/tag:text-cyan-500 dark:group-hover/tag:text-cyan-400",
  },
  Backend: {
    bgGlow: "from-blue-500/5 via-transparent to-transparent",
    iconText: "text-blue-500 dark:text-blue-400 border-blue-500/20",
    tagBorder: "hover:border-blue-500/30 dark:hover:border-blue-500/40",
    tagBg: "hover:bg-blue-50/50 dark:hover:bg-blue-500/10",
    tagText: "hover:text-blue-600 dark:hover:text-blue-400",
    indicatorText:
      "text-blue-400 group-hover/tag:text-blue-500 dark:group-hover/tag:text-blue-400",
  },
  "AI & Machine Learning, Deep Learning": {
    bgGlow: "from-indigo-500/5 via-transparent to-transparent",
    iconText: "text-indigo-500 dark:text-indigo-400 border-indigo-500/20",
    tagBorder: "hover:border-indigo-500/30 dark:hover:border-indigo-500/40",
    tagBg: "hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10",
    tagText: "hover:text-indigo-600 dark:hover:text-indigo-400",
    indicatorText:
      "text-indigo-400 group-hover/tag:text-indigo-500 dark:group-hover/tag:text-indigo-400",
  },
  Languages: {
    bgGlow: "from-sky-500/5 via-transparent to-transparent",
    iconText: "text-sky-500 dark:text-sky-400 border-sky-500/20",
    tagBorder: "hover:border-sky-500/30 dark:hover:border-sky-500/40",
    tagBg: "hover:bg-sky-50/50 dark:hover:bg-sky-500/10",
    tagText: "hover:text-sky-600 dark:hover:text-sky-400",
    indicatorText:
      "text-sky-400 group-hover/tag:text-sky-500 dark:group-hover/tag:text-sky-400",
  },
  Default: {
    bgGlow: "from-zinc-500/5 via-transparent to-transparent",
    iconText: "text-zinc-500 dark:text-zinc-400 border-zinc-500/20",
    tagBorder: "hover:border-zinc-500/30 dark:hover:border-zinc-500/40",
    tagBg: "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
    tagText: "hover:text-zinc-900 dark:hover:text-zinc-200",
    indicatorText:
      "text-zinc-400 group-hover/tag:text-zinc-500 dark:group-hover/tag:text-zinc-400",
  },
};

export default function AboutSkills({ skills }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl">
      {skills.map((group) => {
        // Fallback to default theme if key does not match precisely
        const theme =
          CATEGORY_THEMES[group.category] || CATEGORY_THEMES.Default;

        return (
          <SkillRow
            key={group.category}
            category={group.category}
            items={group.items}
            theme={theme}
          />
        );
      })}
    </div>
  );
}

function SkillRow({
  category,
  items,
  theme,
}: {
  category: string;
  items: string[];
  theme: ColorTheme;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-xl",
        "border border-zinc-200/60 dark:border-zinc-800/50",
        "bg-white/50 dark:bg-zinc-900/20",
        "backdrop-blur-xs",
        "transition-all duration-300 ease-out",
        "hover:border-zinc-300 dark:hover:border-zinc-700",
        "hover:bg-white/80 dark:hover:bg-zinc-900/40",
      ].join(" ")}
    >
      {/* Color-coded ambient background row glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r ${theme.bgGlow} transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10 p-2 sm:p-2.5 px-4">
        <div className="flex flex-row items-center justify-between gap-4">
          {/* Category block */}
          <div className="flex items-center gap-2.5 min-w-35 sm:min-w-40 shrink-0 cursor-default">
            {/* Styled color-coded icon container */}
            <div
              className={[
                "flex items-center justify-center",
                "w-7 h-7 rounded-lg",
                "bg-zinc-100 dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "transition-all duration-300 group-hover:scale-105",
                theme.iconText, // Apply theme specific text color
              ].join(" ")}
            >
              {CATEGORY_ICONS[category] || CATEGORY_ICONS.Default}
            </div>

            <div className="min-w-0">
              <h3 className="text-[11px] font-bold tracking-wide text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200 truncate">
                {category}
              </h3>
            </div>
          </div>

          {/* Compact skills layout mapping */}
          <div className="flex flex-wrap items-center gap-1.5 justify-end w-full">
            {items.map((item) => (
              <SkillTag key={item} label={item} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillTag({ label, theme }: { label: string; theme: ColorTheme }) {
  const getSkillIcon = (tech: string) => {
    const lowercaseTech = tech.toLowerCase();
    if (
      lowercaseTech.includes("python") ||
      lowercaseTech.includes("django") ||
      lowercaseTech.includes("flask")
    )
      return <Terminal size={10} />;
    if (
      lowercaseTech.includes("react") ||
      lowercaseTech.includes("native") ||
      lowercaseTech.includes("expo")
    )
      return <Layers size={10} />;
    if (
      lowercaseTech.includes("sql") ||
      lowercaseTech.includes("database") ||
      lowercaseTech.includes("mysql")
    )
      return <Database size={10} />;
    if (
      lowercaseTech.includes("bert") ||
      lowercaseTech.includes("machine") ||
      lowercaseTech.includes("ai")
    )
      return <BrainCircuit size={10} />;
    if (
      lowercaseTech.includes("js") ||
      lowercaseTech.includes("javascript") ||
      lowercaseTech.includes("ts")
    )
      return <Braces size={10} />;
    return <Code2 size={10} />;
  };

  return (
    <span
      className={[
        "group/tag inline-flex items-center gap-1",
        "px-2 py-0.5 rounded-lg",
        "text-[10px] font-medium font-mono",
        "border border-zinc-200 dark:border-zinc-800/60",
        "bg-zinc-50/40 dark:bg-zinc-900/30",
        "text-zinc-500 dark:text-zinc-400",
        "transform hover:-translate-y-0.5",
        "transition-all duration-150 ease-out",
        "cursor-default select-none whitespace-nowrap",
        theme.tagBorder, // Custom theme variables applied here
        theme.tagBg,
        theme.tagText,
      ].join(" ")}
    >
      <span
        className={["transition-colors duration-150", theme.indicatorText].join(
          " ",
        )}
      >
        {getSkillIcon(label)}
      </span>
      {label}
    </span>
  );
}
