export function Tag({ label }: { label: string }) {
  return (
    <span
      className="
      px-2.5 py-1
      text-[10px]
      rounded-full
      border border-blue-400/20
      bg-blue-500/10
      text-blue-300
      dark:text-blue-200
      whitespace-nowrap
      leading-none
      font-medium
      transition-all duration-300
      group-hover:border-blue-300/40
    "
    >
      {label}
    </span>
  );
}
