export default function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2
      text-zinc-300 dark:text-zinc-600"
    >
      <span className="text-[10px] font-mono tracking-widest uppercase">
        scroll
      </span>

      <div className="w-px h-8 bg-linear-to-b from-zinc-300 dark:from-zinc-600 to-transparent" />
    </div>
  );
}
