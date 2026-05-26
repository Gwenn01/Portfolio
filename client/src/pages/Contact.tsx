import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personal } from "../data/portfolio";
import { SectionHeader, Icon, PATHS, FadeIn } from "../components/ui";

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_vxd69mg"; // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_j0nt7dc"; // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "tEd5iWqPCi7GXWqap"; // e.g. "AbCdEfGhIjKlMnOp"

type Status = "idle" | "sending" | "sent" | "error";

// ── Facebook SVG path ─────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    // Basic email format check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          // Sent to you — make sure your template includes {{to_name}} if you want
          to_name: personal.name,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "Something went wrong. Please try again or email me directly.",
      );
      setStatus("error");
    }
  };

  const isFormValid =
    form.name.trim() && form.email.trim() && form.message.trim();

  const SOCIALS = [
    { href: personal.social.github, path: PATHS.github, label: "GitHub" },
    { href: personal.social.linkedin, path: PATHS.linkedin, label: "LinkedIn" },
    { href: personal.social.facebook, path: PATHS.facebook, label: "Facebook" },
    { href: `mailto:${personal.email}`, path: PATHS.mail, label: "Email" },
  ].filter((s) => s.href);

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
          <div
            className={[
              "relative overflow-hidden rounded-2xl sm:rounded-3xl",
              "border border-slate-200/80 dark:border-slate-800/60",
              "bg-white/70 dark:bg-slate-900/40",
              "backdrop-blur-md dark:backdrop-blur-xl",
              "p-6 sm:p-8 shadow-sm",
              "transition-all duration-300",
            ].join(" ")}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-blue-500/6 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-cyan-500/4 via-transparent to-transparent pointer-events-none" />
            {/* Top beam */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 via-sky-400 to-transparent" />

            {/* ── Success state ── */}
            {status === "sent" ? (
              <div className="flex flex-col items-center py-10 gap-5 text-center">
                <div
                  className={[
                    "w-16 h-16 rounded-2xl flex items-center justify-center",
                    "bg-emerald-50 dark:bg-emerald-500/10",
                    "border border-emerald-200 dark:border-emerald-500/20",
                    "shadow-sm animate-bounce",
                  ].join(" ")}
                >
                  <Icon
                    path={PATHS.check}
                    size={26}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
                    Thanks for reaching out,{" "}
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {form.name}
                    </span>
                    . I'll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className={[
                    "mt-1 px-6 py-2.5 rounded-xl",
                    "bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",
                    "text-white font-semibold text-sm",
                    "transition-all duration-200",
                    "hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="relative space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Your Name">
                    <input
                      type="text"
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      type="email"
                      placeholder="juan@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputCls}
                    />
                  </Field>
                </div>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputCls} resize-none font-sans`}
                  />
                </Field>

                {/* Error */}
                {status === "error" && errorMsg && (
                  <div
                    className={[
                      "flex items-start gap-2.5 px-4 py-3 rounded-xl",
                      "bg-red-50 dark:bg-red-500/10",
                      "border border-red-200 dark:border-red-500/20",
                      "text-red-600 dark:text-red-400 text-[12.5px] font-medium",
                    ].join(" ")}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !isFormValid}
                  className={[
                    "w-full py-3.5 rounded-xl font-bold text-sm tracking-wide",
                    "transition-all duration-200 flex items-center justify-center gap-2",
                    status === "sending"
                      ? "bg-blue-500/50 dark:bg-blue-500/40 text-white cursor-not-allowed"
                      : !isFormValid
                        ? "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        : [
                            "bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",
                            "text-white hover:shadow-lg hover:shadow-blue-500/25",
                            "active:scale-[0.99] hover:-translate-y-0.5",
                          ].join(" "),
                  ].join(" ")}
                >
                  {status === "sending" ? (
                    <>
                      {/* Spinner */}
                      <svg
                        className="animate-spin"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                {/* Reassurance note */}
                <p className="text-center text-[11px] text-slate-400 dark:text-slate-600">
                  Your message goes directly to my inbox. I typically reply
                  within 24 hours.
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Social pills */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
            {SOCIALS.map(({ href, path, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group flex items-center gap-2 px-4 py-2 rounded-xl",
                  "bg-slate-100 dark:bg-white/5",
                  "border border-slate-200 dark:border-white/8",
                  "text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold",
                  "hover:border-blue-300 dark:hover:border-blue-500/30",
                  "hover:bg-blue-50 dark:hover:bg-blue-500/10",
                  "hover:text-blue-600 dark:hover:text-blue-400",
                  "hover:-translate-y-0.5 transition-all duration-200",
                ].join(" ")}
              >
                <Icon
                  path={path}
                  size={14}
                  className="shrink-0 group-hover:scale-110 transition-transform duration-150"
                />
                {label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Shared input style ────────────────────────────────────────────────────
const inputCls = [
  "w-full px-4 py-3 rounded-xl text-sm",
  "bg-slate-50/50 dark:bg-slate-900/40",
  "border border-slate-200/80 dark:border-slate-800/80",
  "text-slate-900 dark:text-slate-50",
  "placeholder-slate-400 dark:placeholder-slate-600",
  "focus:outline-none",
  "focus:border-blue-500/60 dark:focus:border-blue-500/60",
  "focus:bg-white dark:focus:bg-slate-900/80",
  "focus:ring-4 focus:ring-blue-500/[0.08]",
  "transition-all duration-200",
].join(" ");

// ── Label wrapper ─────────────────────────────────────────────────────────
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group/field">
      <label className="block text-[10.5px] font-bold text-slate-500 dark:text-slate-400 mb-1.5 tracking-wider uppercase font-mono group-focus-within/field:text-blue-500 transition-colors duration-200">
        {label}
      </label>
      {children}
    </div>
  );
}
