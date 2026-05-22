import React from "react";
import { useInView } from "../hooks/useHooks";

// ─── SVG ICON ────────────────────────────────────────────────────────────────
export const PATHS = {
  github:
    "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
  linkedin:
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  twitter:
    "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
  external:
    "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6 M15 3h6v6 M10 14L21 3",
  arrow: "M5 12h14 M12 5l7 7-7 7",
  download: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  menu: "M3 12h18 M3 6h18 M3 18h18",
  close: "M18 6L6 18 M6 6l12 12",
  mapPin:
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z",
  quote:
    "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
  check: "M20 6L9 17l-5-5",
};

interface IconProps {
  path: string;
  size?: number;
  className?: string;
}
export function Icon({ path, size = 20, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}

// ─── TAG PILL ────────────────────────────────────────────────────────────────
export function Tag({ label }: { label: string }) {
  return (
    <span
      className={[
        "inline-flex items-center",
        "px-3 py-1 rounded-full",
        "text-[11px] font-medium tracking-wide",
        "transition-all duration-200",
        "border",

        // Light mode
        "bg-blue-50 text-blue-700 border-blue-200",

        // Dark mode
        "dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",

        // Hover
        "hover:bg-blue-100 dark:hover:bg-blue-500/20",
        "hover:border-blue-300 dark:hover:border-blue-400/40",
        "hover:text-blue-800 dark:hover:text-white",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

// ─── AVATAR ──────────────────────────────────────────────────────────────────
const AVATAR_GRADIENTS = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-500 to-blue-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-pink-500",
];

interface AvatarProps {
  src?: string;
  initials: string;
  size?: "sm" | "md" | "lg";
  seed?: number;
}
export function Avatar({ src, initials, size = "md", seed = 0 }: AvatarProps) {
  const gradient = AVATAR_GRADIENTS[seed % AVATAR_GRADIENTS.length];
  const sizeClass = {
    sm: "w-9 h-9 text-sm",
    md: "w-14 h-14 text-lg",
    lg: "w-20 h-20 text-2xl",
  }[size];

  if (src) {
    return (
      <img
        src={src}
        alt={initials}
        className={`${sizeClass} rounded-full object-cover shrink-0`}
      />
    );
  }
  return (
    <div
      className={`${sizeClass} rounded-full bg-linear-to-br ${gradient} flex items-center justify-center font-bold text-white shrink-0`}
    >
      {initials}
    </div>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  centered,
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mb-14",
        centered ? "flex flex-col items-center text-center" : "",
      ].join(" ")}
    >
      {/* Eyebrow row: line + number badge + line */}
      <div
        className={[
          "flex items-center gap-3 mb-5",
          centered ? "justify-center" : "",
        ].join(" ")}
      >
        <span className="h-px w-8 bg-blue-500/60" />

        <span
          className={[
            "inline-flex items-center gap-1.5",
            "px-2.5 py-1 rounded-full",
            "bg-blue-500/10 dark:bg-blue-500/10",
            "border border-blue-500/20 dark:border-blue-400/20",
            "text-[10.5px] font-bold tracking-[0.14em] uppercase font-mono",
            "text-blue-600 dark:text-blue-400",
          ].join(" ")}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          {number}
        </span>

        <span className="h-px flex-1 bg-linear-to-r from-blue-500/30 to-transparent" />
      </div>

      {/* Title */}
      <h2
        className={[
          "font-extrabold tracking-[-0.03em] leading-[1.08]",
          "text-3xl md:text-[2.75rem]",
          "text-slate-900 dark:text-white",
          // Subtle blue gradient on last word effect via a nested span
          "ont-['Sora',sans-serif]",
          centered ? "max-w-2xl" : "max-w-xl",
        ].join(" ")}
      >
        {title}
      </h2>

      {/* Underline accent */}
      <div
        className={[
          "mt-4 h-0.5 w-12 rounded-full bg-blue-500",
          centered ? "mx-auto" : "",
        ].join(" ")}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={[
            "mt-4 text-[15px] leading-relaxed",
            "text-slate-500 dark:text-slate-400",
            centered ? "max-w-lg" : "max-w-md",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
// ─── FADE IN WRAPPER ─────────────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
