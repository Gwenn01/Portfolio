import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useState } from "react";

// ─── THEME TOGGLE ─────────────────────────────────────────────────────────────
// The template defaults to dark mode. To add light mode support,
// toggle the "dark" class on <html> and extend tailwind.config with darkMode: "class"
function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const toggle = () => {
    setDark((v) => !v);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-zinc-900 border border-white/15 shadow-xl flex items-center justify-center text-lg hover:scale-110 transition-transform"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
