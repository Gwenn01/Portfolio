import { useState } from "react";
import { personal } from "../data/portfolio";
import { SectionHeader, Icon, PATHS, FadeIn } from "../components/ui";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // TODO: Replace with your backend / Formspree / EmailJS
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  const isFormValid = form.name && form.email && form.message;

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 w-full transition-colors duration-300"
    >
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <SectionHeader
            number="05"
            title="Get In Touch"
            subtitle="Have a project in mind or just want to say hi? My inbox is always open."
            centered
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Main Card Container: Adaptive Border, Backgrounds, and Glow Effects */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-md dark:backdrop-blur-xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-blue-500/1 transition-all duration-300">
            {/* Soft Ambient Background Light Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-500/5 dark:from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            {status === "sent" ? (
              <div className="flex flex-col items-center py-8 gap-4 text-center">
                {/* Micro-animated success container */}
                <div className="w-14 h-14 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center shadow-xs animate-bounce">
                  <Icon
                    path={PATHS.check}
                    size={24}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">
                    Thanks for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="group/field">
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-2 tracking-wider uppercase font-mono group-focus-within/field:text-blue-500 transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/60 dark:focus:border-blue-500/60 focus:bg-white dark:focus:bg-zinc-900/80 focus:ring-4 focus:ring-blue-500/5 transition-all duration-200"
                    />
                  </div>
                  <div className="group/field">
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-2 tracking-wider uppercase font-mono group-focus-within/field:text-blue-500 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="juan@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/60 dark:focus:border-blue-500/60 focus:bg-white dark:focus:bg-zinc-900/80 focus:ring-4 focus:ring-blue-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group/field">
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-2 tracking-wider uppercase font-mono group-focus-within/field:text-blue-500 transition-colors">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/60 dark:focus:border-blue-500/60 focus:bg-white dark:focus:bg-zinc-900/80 focus:ring-4 focus:ring-blue-500/5 transition-all duration-200 resize-none font-sans"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !isFormValid}
                  className={`w-full py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transform transition-all duration-200 ${
                    status === "sending"
                      ? "bg-blue-600/50 dark:bg-blue-500/50 cursor-not-allowed scale-100"
                      : !isFormValid
                        ? "bg-zinc-300 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.99] hover:-translate-y-0.5"
                  }`}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Premium Social Pills Row */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-12">
            {[
              {
                href: personal.social.github,
                path: PATHS.github,
                label: "GitHub",
              },
              {
                href: personal.social.linkedin,
                path: PATHS.linkedin,
                label: "LinkedIn",
              },
              {
                href: `mailto:${personal.email}`,
                path: PATHS.mail,
                label: "Email",
              },
            ]
              .filter((s) => s.href)
              .map(({ href, path, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "flex items-center gap-2 px-4 py-2 rounded-xl",
                    "bg-zinc-100/60 dark:bg-zinc-900/40",
                    "border border-zinc-200 dark:border-zinc-800/60",
                    "text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium",
                    "hover:border-blue-500/30 dark:hover:border-blue-500/30",
                    "hover:bg-zinc-50 dark:hover:bg-zinc-900/80",
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    "transform hover:-translate-y-0.5",
                    "transition-all duration-200 ease-out",
                  ].join(" ")}
                >
                  <Icon path={path} size={14} className="shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
