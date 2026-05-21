export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute top-1/3 left-0 w-120 h-120 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="absolute bottom-1/4 right-0 w-95 h-95 bg-fuchsia-500/8 dark:bg-fuchsia-600/8 rounded-full blur-3xl translate-x-1/3" />

      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}
