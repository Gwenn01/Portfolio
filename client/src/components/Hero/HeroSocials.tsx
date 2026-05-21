import { personal } from "../../data/portfolio";
import { Icon, PATHS } from "../ui";

const SOCIALS = [
  { href: personal.social.github, path: PATHS.github, label: "GitHub" },
  { href: personal.social.linkedin, path: PATHS.linkedin, label: "LinkedIn" },
  { href: personal.social.twitter, path: PATHS.twitter, label: "Twitter" },
  { href: `mailto:${personal.email}`, path: PATHS.mail, label: "Email" },
];

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-2">
      {SOCIALS.filter((s) => s.href).map(({ href, path, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-lg flex items-center justify-center"
        >
          <Icon path={path} size={17} />
        </a>
      ))}

      <div className="mx-3 h-5 w-px bg-zinc-200 dark:bg-white/10" />

      <div
        className="flex items-center gap-1.5 text-xs font-mono
        text-zinc-400 dark:text-zinc-600"
      >
        <Icon path={PATHS.mapPin} size={13} className="text-blue-400" />

        {personal.location}
      </div>
    </div>
  );
}
