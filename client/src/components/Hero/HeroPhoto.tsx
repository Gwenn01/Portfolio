import { useRef, useEffect, useState } from "react";
import { personal } from "../../data/portfolio";

// ── Count-up number ───────────────────────────────────────────────────────
function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const num = parseInt(target.replace(/\D/g, ""), 10);
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (triggered || isNaN(num)) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setTriggered(true);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered, num]);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const dur = 1200;
    const frame = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * num));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [triggered, num]);

  return (
    <p
      ref={ref}
      className="text-2xl font-black text-blue-600 dark:text-blue-400 tabular-nums"
    >
      {isNaN(num) ? target : `${count}${suffix}`}
    </p>
  );
}

// ── Floating stat card ────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  icon,
  suffix = "+",
  position,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  position: string;
}) {
  return (
    <div
      className={[
        "absolute hidden lg:flex items-center gap-3",
        "bg-white dark:bg-slate-900",
        "border border-blue-100 dark:border-blue-500/20",
        "rounded-2xl px-4 py-3 shadow-xl shadow-blue-500/10",
        "hover:shadow-blue-500/25 hover:border-blue-300 dark:hover:border-blue-400/40",
        "hover:-translate-y-1 hover:scale-[1.04]",
        "transition-all duration-300 cursor-default",
        position,
      ].join(" ")}
      style={{ animation: "floatCard 4s ease-in-out infinite" }}
    >
      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
        {icon}
      </div>
      <div>
        <CountUp target={value} suffix={suffix} />
        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium leading-tight">
          {label}
        </p>
      </div>
    </div>
  );
}

// ── Main HeroPhoto ────────────────────────────────────────────────────────
export default function HeroPhoto() {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: .25; transform: scale(1); }
          50%       { opacity: .45; transform: scale(1.06); }
        }
        @keyframes spinCorner {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLine {
          0%   { top: 0%; opacity: .7; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      <div
        className="order-1 lg:order-2 flex justify-center lg:justify-end"
        style={{ animation: "fadeSlideUp .7s ease-out .2s both" }}
      >
        <div className="relative">
          {/* ── Ambient glow (pulsing) ── */}
          <div
            className="absolute -inset-6 rounded-3xl bg-linear-to-br from-blue-500/25 to-cyan-500/20 blur-2xl"
            style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
          />

          {/* ── Orbit rings ── */}
          {/* Ring track 1 */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              width: "110%",
              height: "110%",
              top: "-5%",
              left: "-5%",
              border: "1px dashed rgba(59,130,246,0.18)",
              borderRadius: "50%",
            }}
          />
          {/* Ring track 2 */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "130%",
              height: "130%",
              top: "-15%",
              left: "-15%",
              border: "1px dashed rgba(34,211,238,0.12)",
              borderRadius: "50%",
            }}
          />

          {/* Orbit dot 1 — clockwise blue */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "110%",
              height: "110%",
              top: "-5%",
              left: "-5%",
              animation: "orbit 8s linear infinite",
            }}
          >
            <div
              className="absolute rounded-full bg-blue-500"
              style={{
                width: 8,
                height: 8,
                top: "50%",
                left: 0,
                marginTop: -4,
                boxShadow: "0 0 12px #3b82f6, 0 0 24px #3b82f6",
              }}
            />
          </div>

          {/* Orbit dot 2 — counter-clockwise cyan */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "130%",
              height: "130%",
              top: "-15%",
              left: "-15%",
              animation: "orbitReverse 12s linear infinite",
            }}
          >
            <div
              className="absolute rounded-full bg-cyan-400"
              style={{
                width: 6,
                height: 6,
                top: "50%",
                right: 0,
                marginTop: -3,
                boxShadow: "0 0 10px #22d3ee, 0 0 20px #22d3ee",
              }}
            />
          </div>

          {/* ── Decorative corner brackets ── */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-xl" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-xl" />
          {/* Extra subtle corners */}
          <div className="absolute -top-3 -right-3 w-5 h-5 border-t border-r border-blue-400/40 rounded-tr-lg" />
          <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l border-cyan-400/40 rounded-bl-lg" />

          {/* ── Photo frame ── */}
          <div
            className={[
              "relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-120 rounded-2xl overflow-hidden",
              "border-2 border-white/10 dark:border-white/10",
              "shadow-2xl shadow-blue-500/15",
              "transition-all duration-500",
              imgHovered
                ? "shadow-blue-500/30 border-blue-400/30 scale-[1.02]"
                : "",
            ].join(" ")}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            {personal.picture ? (
              <img
                src={personal.picture}
                alt={personal.name}
                className={[
                  "w-full h-full object-cover object-top",
                  "transition-transform duration-700",
                  imgHovered ? "scale-105" : "scale-100",
                ].join(" ")}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-600 to-cyan-600">
                <span className="text-8xl font-black text-white/80 tracking-tight">
                  {personal.initials}
                </span>
              </div>
            )}

            {/* Scan line — loops over photo */}
            <div
              className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue-400/60 to-transparent pointer-events-none"
              style={{ animation: "scanLine 3.5s linear infinite" }}
            />

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-black/50 to-transparent" />

            {/* Hover shimmer overlay */}
            <div
              className={[
                "absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-cyan-500/10",
                "transition-opacity duration-500",
                imgHovered ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />

            {/* Name tag */}
            <div
              className={[
                "absolute bottom-4 left-4 right-4",
                "bg-white/10 dark:bg-black/40 backdrop-blur-md",
                "border border-white/20 rounded-xl px-4 py-3",
                "transition-all duration-300",
                imgHovered ? "bottom-5" : "bottom-4",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm leading-tight">
                    {personal.name}
                  </p>
                  <p className="text-white/60 text-xs font-mono mt-0.5">
                    {personal.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Experience stat card ── */}
          <StatCard
            value={personal.experience ?? "3"}
            label="Years Experience"
            suffix="+"
            position="-left-10 top-10"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
            }
          />

          {/* ── Projects stat card ── */}
          <StatCard
            value={personal.projects ?? "20"}
            label="Projects Built"
            suffix="+"
            position="-right-10 bottom-24"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
}
