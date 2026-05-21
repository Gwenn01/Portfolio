import { personal } from "../../data/portfolio";

export default function HeroPhoto() {
  return (
    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 blur-xl" />

        {/* Decorative corners */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-xl" />

        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-xl" />

        {/* Photo frame */}
        <div
          className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-120 rounded-2xl overflow-hidden
          border-2 border-white/10 dark:border-white/10
          shadow-2xl shadow-blue-500/10"
        >
          {personal.picture ? (
            <img
              src={personal.picture}
              alt={personal.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center
              bg-linear-to-br from-blue-500 to-cyan-600"
            >
              <span className="text-8xl font-black text-white/80 tracking-tight">
                {personal.initials}
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24
            bg-linear-to-t from-black/30 to-transparent"
          />

          {/* Name tag */}
          <div
            className="absolute bottom-4 left-4 right-4
            bg-white/10 dark:bg-black/30 backdrop-blur-md
            border border-white/20 rounded-xl px-4 py-3"
          >
            <p className="text-white font-bold text-sm leading-tight">
              {personal.name}
            </p>

            <p className="text-white/60 text-xs font-mono mt-0.5">
              {personal.title}
            </p>
          </div>
        </div>

        {/* Experience Card */}
        <div
          className="absolute -left-8 top-12 hidden lg:block
          bg-white dark:bg-zinc-900
          border border-blue-100 dark:border-blue-500/20
          rounded-2xl px-4 py-3 shadow-xl"
        >
          <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
            {personal.experience}
          </p>

          <p className="text-xs text-zinc-400 font-medium">Years Experience</p>
        </div>

        {/* Projects Card */}
        <div
          className="absolute -right-8 bottom-20 hidden lg:block
          bg-white dark:bg-zinc-900
          border border-blue-100 dark:border-blue-500/20
          rounded-2xl px-4 py-3 shadow-xl"
        >
          <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
            {personal.projects}
          </p>

          <p className="text-xs text-zinc-400 font-medium">Projects Built</p>
        </div>
      </div>
    </div>
  );
}
