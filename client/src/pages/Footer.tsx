import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-zinc-600 text-sm">
        Designed & built by{" "}
        <span className="text-violet-400 font-semibold">{personal.name}</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
