import { useState } from "react";
import { personal } from "../data/portfolio";
import { Icon, PATHS } from "../components/ui";
import { useScrollSpy, useScrolled } from "../hooks/useHooks";

const NAV_ITEMS = [
  "about",
  "experience",
  "projects",
  "certificates",
  "contact",
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// SVG chevron inline — avoids PATHS dependency for a missing key
function ChevronRight({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Navbar() {
  const active = useScrollSpy([...NAV_ITEMS]);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-black/40"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      {/* ── Main bar ── */}
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100 hover:opacity-70 transition-opacity"
        >
          <span className="text-blue-600 dark:text-blue-400 text-xl font-black">
            {"{"}
          </span>
          <span className="font-black">{personal.initials}</span>
          <span className="text-blue-600 dark:text-blue-400 text-xl font-black">
            {"}"}
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((id) => (
            <NavLink
              key={id}
              id={id}
              isActive={active === id}
              onClick={() => scrollTo(id)}
            />
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-px h-5 bg-slate-200 dark:bg-white/10 mx-1" />
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
          >
            <Icon path={PATHS.download} size={13} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/8 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Icon path={open ? PATHS.close : PATHS.menu} size={18} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-100 dark:border-white/5 px-5 pt-3 pb-5 flex flex-col gap-1">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id);
                setOpen(false);
              }}
              className={[
                "flex items-center justify-between w-full text-left capitalize text-sm font-semibold px-3.5 py-3 rounded-xl transition-colors duration-150",
                active === id
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-white/5",
              ].join(" ")}
            >
              {id}
              <span className="opacity-30">
                <ChevronRight size={14} />
              </span>
            </button>
          ))}

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
          >
            <Icon path={PATHS.download} size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Extracted to avoid dynamic class strings in map ──
function NavLink({
  id,
  isActive,
  onClick,
}: {
  id: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "relative capitalize text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200",
        isActive
          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5",
      ].join(" ")}
    >
      {id}
      {isActive && (
        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
      )}
    </button>
  );
}
