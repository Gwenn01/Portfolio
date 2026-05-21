import { personal } from "../../data/portfolio";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div className="order-2 lg:order-1 flex flex-col">
      {personal.availableForWork && (
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full w-fit
  bg-blue-500/10 border border-blue-500/25
  text-blue-600 dark:text-blue-400 text-sm font-semibold"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />

            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
          </span>
          Available for work
        </div>
      )}

      <p
        className="text-sm font-semibold tracking-widest uppercase font-mono mb-3
        text-zinc-400 dark:text-zinc-500"
      >
        Hello, I'm
      </p>

      <h1
        className="font-black tracking-tight leading-[0.95] mb-4
        text-5xl sm:text-6xl xl:text-7xl
        text-zinc-900 dark:text-white"
      >
        {personal.firstName}
        <br />

        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500">
          {personal.name.split(" ").slice(1).join(" ")}
        </span>
      </h1>

      <div
        className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-1.5 rounded-full
  bg-blue-100 dark:bg-blue-500/10
  border border-blue-200 dark:border-blue-500/20"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />

        <span className="text-sm font-bold text-blue-700 dark:text-blue-300 tracking-wide">
          {personal.title}
        </span>
      </div>

      <p
        className="text-base md:text-lg leading-relaxed mb-10 max-w-lg
        text-zinc-500 dark:text-zinc-400"
      >
        {personal.tagline}
      </p>

      <HeroButtons />

      <HeroSocials />
    </div>
  );
}
