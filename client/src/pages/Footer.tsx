import { personal } from "../data/portfolio";
import { Icon, PATHS } from "../components/ui";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Safely map social links based on assumed portfolio data structure
  // Adjust the href properties if your portfolio schema uses different keys
  const socialLinks = [
    { name: "GitHub", path: PATHS.github, href: personal.social.github },
    { name: "LinkedIn", path: PATHS.linkedin, href: personal.social.linkedin },
    { name: "Facebook", path: PATHS.facebook, href: personal.social.facebook },
    {
      name: "Email",
      path: PATHS.mail ? `mailto:${personal.email}` : undefined,
    },
  ].filter((link) => link.href);

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* ── Top Section: Brand & Navigation ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-100 dark:border-white/5">
          {/* Logo & Brief Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
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
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center md:text-left">
              Building clean, intentional digital experiences.
            </p>
          </div>

          {/* Footer Links (Reuses Navbar Logic) */}
          <div className="flex flex-wrap justify-center items-center gap-1">
            {NAV_ITEMS.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="capitalize text-sm font-semibold px-3 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* ── Bottom Section: Copyright & Socials ── */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8">
          {/* Copyright notice */}
          <div className="text-xs text-slate-400 dark:text-slate-500 text-center md:text-left">
            © {currentYear} {personal.name || personal.initials}. All rights
            reserved.
          </div>

          {/* Social Icons with Smooth Hover Accents */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
              >
                {social.path && <Icon path={social.path} size={16} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
