import { personal } from "../../data/portfolio";
import { Icon, PATHS } from "../ui";

const FACEBOOK_PATH =
  "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z";

const SOCIALS = [
  { href: personal.social.github, path: PATHS.github, label: "GitHub" },
  { href: personal.social.linkedin, path: PATHS.linkedin, label: "LinkedIn" },
  { href: personal.social.facebook, path: FACEBOOK_PATH, label: "Facebook" },
  { href: `mailto:${personal.email}`, path: PATHS.mail, label: "Email" },
];

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-1.5">
      {SOCIALS.filter((s) => s.href).map(({ href, path, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={[
            "group relative flex items-center justify-center w-9 h-9 rounded-xl",
            "transition-all duration-200 ease-out",
            // light
            "bg-slate-100 text-slate-500",
            "border border-slate-200",
            // dark — single consolidated dark:border value, no duplication
            "dark:bg-white/6 dark:text-slate-400",
            "dark:border dark:border-white/8",
            // hover light
            "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200",
            "hover:-translate-y-0.5",
            // hover dark
            "dark:hover:text-blue-400 dark:hover:bg-blue-500/10 dark:hover:border-blue-500/25",
          ].join(" ")}
        >
          <Icon path={path} size={16} />

          {/* Tooltip */}
          <span
            className={[
              "absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none",
              "px-2 py-1 rounded-md whitespace-nowrap",
              "text-[10px] font-semibold tracking-wide text-white",
              "bg-slate-900 dark:bg-slate-700",
              "opacity-0 scale-90",
              "group-hover:opacity-100 group-hover:scale-100",
              "transition-all duration-150",
            ].join(" ")}
          >
            {label}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700" />
          </span>
        </a>
      ))}

      {/* Divider — single bg value per mode, no conflict */}
      <div className="mx-2 h-5 w-px rounded-full bg-slate-200 dark:bg-white/8" />

      {/* Location chip */}
      <div
        className={[
          "flex items-center gap-2 px-3 py-1.5 rounded-xl",
          "text-[11px] font-medium tracking-wide",
          // light
          "bg-slate-100 border border-slate-200 text-slate-500",
          // dark — one consolidated dark:border
          "dark:bg-white/5 dark:border dark:border-white/8 dark:text-slate-400",
        ].join(" ")}
      >
        {/* Pulsing dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
        </span>
        {personal.location}
      </div>
    </div>
  );
}
