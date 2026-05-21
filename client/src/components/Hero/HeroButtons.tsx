import { personal } from "../../data/portfolio";
import { Icon, PATHS } from "../ui";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {/* Projects Button */}
      <button
        onClick={() => scrollTo("projects")}
        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm
        bg-blue-600 hover:bg-blue-500 text-white
        shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
        hover:-translate-y-0.5 transition-all duration-200"
      >
        View Projects
        <Icon path={PATHS.arrow} size={15} />
      </button>

      {/* Resume Button */}
      <a
        href={personal.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm
        border-2 border-zinc-200 dark:border-white/15
        hover:border-blue-400 dark:hover:border-blue-400
        text-zinc-700 dark:text-white
        hover:-translate-y-0.5 transition-all duration-200"
      >
        <Icon path={PATHS.download} size={15} />
        Resume
      </a>

      {/* Contact Button */}
      <button
        onClick={() => scrollTo("contact")}
        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm
        bg-blue-100 dark:bg-blue-500/10
        hover:bg-blue-200 dark:hover:bg-blue-500/20
        text-blue-700 dark:text-blue-300
        hover:-translate-y-0.5 transition-all duration-200"
      >
        Get In Touch
      </button>
    </div>
  );
}
