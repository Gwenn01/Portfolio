import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-white dark:bg-zinc-900
        text-black dark:text-white
        border border-black/10 dark:border-white/20
        shadow-lg
        flex items-center justify-center
        hover:scale-110
        transition-all duration-300
      "
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}

export default function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white text-black
        dark:bg-zinc-900 dark:text-white
        transition-colors duration-300
      "
    >
      <Navbar />

      {/* Wider modern layout */}
      <main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
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
