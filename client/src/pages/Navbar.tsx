import { useState } from "react";
import { personal } from "../data/portfolio";
import { Icon, PATHS } from "../components/ui";
import { useScrollSpy, useScrolled } from "../hooks/useHooks";

const NAV_ITEMS = ["about", "experience", "projects", "contact"] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const active = useScrollSpy([...NAV_ITEMS]);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-lg text-violet-400 tracking-tight hover:text-violet-300 transition-colors font-mono"
        >
          {personal.initials}
          <span className="text-white">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`capitalize text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                active === id
                  ? "text-violet-400 bg-violet-400/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {id}
            </button>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <Icon path={PATHS.download} size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-zinc-400 hover:text-white p-2 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon path={open ? PATHS.close : PATHS.menu} size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id);
                setOpen(false);
              }}
              className={`capitalize text-sm font-medium px-4 py-3 rounded-lg text-left transition-colors ${
                active === id
                  ? "text-violet-400 bg-violet-400/10"
                  : "text-zinc-400"
              }`}
            >
              {id}
            </button>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg bg-violet-600 text-white text-sm font-semibold"
          >
            <Icon path={PATHS.download} size={14} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
