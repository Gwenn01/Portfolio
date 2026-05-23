import { useEffect, useState } from "react";
import { personal } from "../../data/portfolio";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { Icon, PATHS } from "../ui";

// ── Typewriter for the title role badge ───────────────────────────────────
function useTypewriter(texts: string[], speed = 60, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let delay = deleting ? speed / 2 : speed;

    if (!deleting && charIdx === current.length) {
      delay = pause;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
      return;
    }

    const t = setTimeout(() => {
      setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)));
      setCharIdx((c) => c + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return displayed;
}

// ── Floating particles behind the name ───────────────────────────────────
function FloatingParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: [5, 4, 6, 3, 5, 4][i],
    x: [12, 78, 35, 90, 55, 22][i],
    delay: [0, 1.2, 0.6, 1.8, 0.3, 2.1][i],
    duration: [4, 5, 3.5, 4.5, 6, 3.8][i],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400/30 dark:bg-blue-500/25"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: "60%",
            animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ── Animated greeting label ───────────────────────────────────────────────
function GreetingLabel() {
  return (
    <p
      className={[
        "text-sm font-semibold tracking-widest uppercase font-mono mb-3",
        "text-zinc-400 dark:text-zinc-500",
        "flex items-center gap-2.5 w-fit cursor-default select-none",
        "animate-[fadeSlideUp_0.5s_ease-out_0.1s_both]",
        "group transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400",
      ].join(" ")}
    >
      {/* Lucide Icon Wrapper — Loops the wave animation & pops on hover */}
      <span
        className="inline-block origin-[70%_80%] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
        style={{ animation: "wave 2.4s ease-in-out 1.5s infinite" }}
        aria-hidden="true"
      >
        <Icon path={PATHS.hand} size={16} />
      </span>

      {/* Text with subtle horizontal slide on hover */}
      <span className="transition-transform duration-300 inline-block group-hover:translate-x-0.5">
        Hello, I'm
      </span>
    </p>
  );
}

// ── Available badge ───────────────────────────────────────────────────────
// function AvailableBadge() {
//   return (
//     <div
//       className={[
//         "inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full w-fit",
//         "bg-blue-500/10 border border-blue-500/25",
//         "text-blue-600 dark:text-blue-400 text-sm font-semibold",
//         "hover:bg-blue-500/15 hover:border-blue-500/40 hover:scale-[1.02]",
//         "transition-all duration-200 cursor-default",
//         "animate-[fadeSlideUp_0.5s_ease-out_both]",
//       ].join(" ")}
//     >
//       {/* Double-ring ping */}
//       <span className="relative flex h-2.5 w-2.5 shrink-0">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30 delay-300" />
//         <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
//       </span>
//       Available for work
//     </div>
//   );
// }

// ── Name heading with shimmer sweep ──────────────────────────────────────
function HeroName({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <h1
      className={[
        "font-black tracking-tight leading-[0.95] mb-4",
        "text-5xl sm:text-6xl xl:text-7xl",
        "text-zinc-900 dark:text-white",
        "animate-[fadeSlideUp_0.6s_ease-out_0.15s_both]",
      ].join(" ")}
    >
      {/* First name — hover lifts slightly */}
      <span className="inline-block hover:-translate-y-0.5 transition-transform duration-200">
        {firstName}
      </span>
      <br />

      {/* Last name — gradient + shimmer sweep on loop */}
      <span className="relative inline-block">
        <span
          className={[
            "text-transparent bg-clip-text",
            "bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500",
            "bg-size-[200%_auto]",
          ].join(" ")}
          style={{ animation: "shimmer 3.5s linear infinite" }}
        >
          {lastName}
        </span>
      </span>
    </h1>
  );
}

// ── Role badge with typewriter ────────────────────────────────────────────
function RoleBadge({ roles }: { roles: string[] }) {
  const typed = useTypewriter(roles);

  return (
    <div
      className={[
        "inline-flex items-center gap-2 mb-6 w-fit px-4 py-1.5 rounded-full",
        "bg-blue-100 dark:bg-blue-500/10",
        "border border-blue-200 dark:border-blue-500/20",
        "hover:border-blue-400 dark:hover:border-blue-400/40 hover:bg-blue-50 dark:hover:bg-blue-500/15",
        "transition-all duration-200 cursor-default",
        "animate-[fadeSlideUp_0.6s_ease-out_0.25s_both]",
      ].join(" ")}
    >
      {/* Rotating code icon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-500 dark:text-blue-400 shrink-0"
        style={{ animation: "spinSlow 8s linear infinite" }}
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>

      <span className="text-sm font-bold text-blue-700 dark:text-blue-300 tracking-wide font-mono min-w-45">
        {typed}
        {/* Blinking cursor */}
        <span
          className="inline-block w-0.5 h-[1em] bg-blue-500 dark:bg-blue-400 ml-0.5 align-middle"
          style={{ animation: "blink 1s step-end infinite" }}
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

// ── Tagline with subtle word highlight ───────────────────────────────────
function Tagline({ text }: { text: string }) {
  return (
    <p
      className={[
        "text-base md:text-lg leading-relaxed mb-10 max-w-lg",
        "text-zinc-500 dark:text-zinc-400",
        "animate-[fadeSlideUp_0.6s_ease-out_0.35s_both]",
      ].join(" ")}
    >
      {text}
    </p>
  );
}

// ── Main HeroContent ──────────────────────────────────────────────────────
export default function HeroContent() {
  const [lastName] = useState(personal.name.split(" ").slice(1).join(" "));

  return (
    <>
      {/* Global keyframes injected once */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes wave {
          0%,100% { transform: rotate(0deg); }
          20%      { transform: rotate(-10deg); }
          40%      { transform: rotate(14deg); }
          60%      { transform: rotate(-8deg); }
          80%      { transform: rotate(10deg); }
        }
        @keyframes floatUp {
          0%,100% { transform: translateY(0) scale(1);   opacity: 0; }
          10%      { opacity: 1; }
          90%      { opacity: 0.4; }
          50%      { transform: translateY(-60px) scale(1.2); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      <div className="order-2 lg:order-1 flex flex-col relative">
        {/* Floating ambient particles */}
        <FloatingParticles />

        {/* Available badge */}
        {/* {personal.availableForWork && <AvailableBadge />} */}

        {/* Greeting */}
        <GreetingLabel />

        {/* Name */}
        <HeroName firstName={personal.firstName} lastName={lastName} />

        {/* Role typewriter badge */}
        <RoleBadge roles={personal.roles} />

        {/* Tagline */}
        <Tagline text={personal.tagline} />

        {/* Buttons */}
        <div className="animate-[fadeSlideUp_0.6s_ease-out_0.45s_both]">
          <HeroButtons />
        </div>

        {/* Socials */}
        <div className="animate-[fadeSlideUp_0.6s_ease-out_0.55s_both]">
          <HeroSocials />
        </div>
      </div>
    </>
  );
}
