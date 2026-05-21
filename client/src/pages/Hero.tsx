import { personal } from "../data/portfolio";
import { Icon, PATHS, Avatar } from "../components/ui";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const SOCIALS = [
  { href: personal.social.github, path: PATHS.github, label: "GitHub" },
  { href: personal.social.linkedin, path: PATHS.linkedin, label: "LinkedIn" },
  { href: personal.social.twitter, path: PATHS.twitter, label: "Twitter" },
  { href: `mailto:${personal.email}`, path: PATHS.mail, label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/8 rounded-full blur-3xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6366f1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Available badge */}
        {personal.availableForWork && (
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for work
          </div>
        )}

        {/* Name row */}
        <div className="flex items-center gap-5 mb-6">
          <Avatar
            src={personal.avatar}
            initials={personal.initials}
            size="lg"
          />
          <div>
            <p className="text-zinc-500 text-sm font-medium mb-1 font-mono">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              {personal.name}
            </h1>
          </div>
        </div>

        {/* Title */}
        <p className="text-2xl md:text-3xl font-bold text-violet-400 mb-5 tracking-tight">
          {personal.title}
        </p>

        {/* Tagline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            View Projects
            <Icon path={PATHS.arrow} size={16} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/15 hover:border-violet-400 text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {SOCIALS.filter((s) => s.href).map(({ href, path, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 hover:text-violet-400 hover:border-violet-400/50 hover:bg-violet-400/5 transition-all duration-200"
            >
              <Icon path={path} size={18} />
            </a>
          ))}
          <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent ml-2" />
          <span className="text-zinc-600 text-sm font-mono">
            {personal.location}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
