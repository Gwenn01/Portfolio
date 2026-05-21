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
    // Example Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } })
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-28 px-6">
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
          <div className="bg-zinc-900/60 border border-white/8 rounded-2xl p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center py-10 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <Icon
                    path={PATHS.check}
                    size={28}
                    className="text-emerald-400"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-zinc-400 text-sm">
                  Thanks for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="juan@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none font-sans"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className={`w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 ${
                    status === "sending"
                      ? "bg-violet-600/50 cursor-not-allowed"
                      : "bg-violet-600 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/30"
                  }`}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Social row */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center items-center gap-8 mt-10">
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
                  className="flex items-center gap-2 text-zinc-500 hover:text-violet-400 text-sm font-medium transition-colors"
                >
                  <Icon path={path} size={15} />
                  {label}
                </a>
              ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
