"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Logo from "@/components/Logo";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { lang, toggleLang } = useLang();
  const t = i18n[lang].nav;

  const NAV_LABELS: Record<string, string> = {
    About: t.about,
    Skills: t.skills,
    Projects: t.projects,
    Experience: t.experience,
    Contact: t.contact,
  };

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60"
          : "bg-white dark:bg-zinc-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center md:-ml-4 hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <Logo className="text-xl text-zinc-900 dark:text-white" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {NAV_LABELS[link.label] ?? link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="px-3 py-2 rounded-sm border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all text-xs font-semibold tracking-widest text-zinc-900 dark:text-zinc-100"
          >
            {lang === "en" ? "日本語" : "English"}
          </button>
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                backgroundColor: isDark ? '#27272a' : '#f4f4f5',
                transition: 'background-color 0.5s ease',
              }}
              className="relative w-14 h-7 rounded-full overflow-hidden cursor-pointer flex-shrink-0"
            >
              {/* Stars (night) */}
              <span className="absolute w-[3px] h-[3px] rounded-full bg-white" style={{ top: 5, left: 10, opacity: isDark ? 0.9 : 0, transition: 'opacity 0.3s' }} />
              <span className="absolute w-[2px] h-[2px] rounded-full bg-white" style={{ top: 11, left: 8, opacity: isDark ? 0.6 : 0, transition: 'opacity 0.3s' }} />
              <span className="absolute w-[2px] h-[2px] rounded-full bg-white" style={{ top: 6, left: 19, opacity: isDark ? 0.7 : 0, transition: 'opacity 0.3s' }} />
              {/* Clouds (day) */}
              <span className="absolute bg-white" style={{ width: 14, height: 6, top: 6, left: 26, borderRadius: 3, opacity: isDark ? 0 : 1, transition: 'opacity 0.3s' }} />
              <span className="absolute bg-white" style={{ width: 10, height: 5, top: 14, left: 30, borderRadius: 3, opacity: isDark ? 0 : 1, transition: 'opacity 0.3s' }} />
              {/* Sun / Moon dot */}
              <span
                className="absolute w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  top: 4,
                  left: isDark ? 32 : 4,
                  backgroundColor: isDark ? '#3f3f46' : '#16a34a',
                  boxShadow: isDark ? '0 1px 4px rgba(0,0,0,0.4)' : '0 1px 4px rgba(22,163,74,0.4)',
                  transition: 'left 0.45s ease, background-color 0.45s ease, box-shadow 0.45s ease',
                }}
              >
                {isDark ? <Moon size={13} strokeWidth={2} color="white" fill="white" /> : <Sun size={13} strokeWidth={2} color="white" fill="white" />}
              </span>
            </button>
          )}
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                backgroundColor: isDark ? '#27272a' : '#f4f4f5',
                transition: 'background-color 0.5s ease',
              }}
              className="relative w-12 h-6 rounded-full overflow-hidden cursor-pointer flex-shrink-0"
            >
              {/* Stars (night) */}
              <span className="absolute w-[2px] h-[2px] rounded-full bg-white" style={{ top: 4, left: 8, opacity: isDark ? 0.9 : 0, transition: 'opacity 0.3s' }} />
              <span className="absolute w-[2px] h-[2px] rounded-full bg-white" style={{ top: 9, left: 6, opacity: isDark ? 0.6 : 0, transition: 'opacity 0.3s' }} />
              <span className="absolute w-[2px] h-[2px] rounded-full bg-white" style={{ top: 5, left: 16, opacity: isDark ? 0.7 : 0, transition: 'opacity 0.3s' }} />
              {/* Clouds (day) */}
              <span className="absolute bg-white" style={{ width: 12, height: 5, top: 5, left: 22, borderRadius: 3, opacity: isDark ? 0 : 1, transition: 'opacity 0.3s' }} />
              <span className="absolute bg-white" style={{ width: 8, height: 4, top: 12, left: 26, borderRadius: 3, opacity: isDark ? 0 : 1, transition: 'opacity 0.3s' }} />
              {/* Sun / Moon dot */}
              <span
                className="absolute w-[18px] h-[18px] rounded-full flex items-center justify-center"
                style={{
                  top: 3,
                  left: isDark ? 27 : 3,
                  backgroundColor: isDark ? '#3f3f46' : '#16a34a',
                  boxShadow: isDark ? '0 1px 4px rgba(0,0,0,0.4)' : '0 1px 3px rgba(22,163,74,0.4)',
                  transition: 'left 0.45s ease, background-color 0.45s ease, box-shadow 0.45s ease',
                }}
              >
                {isDark ? <Moon size={12} strokeWidth={2} color="white" fill="white" /> : <Sun size={12} strokeWidth={2} color="white" fill="white" />}
              </span>
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
              >
                {NAV_LABELS[link.label] ?? link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="text-left text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-1"
            >
              {lang === "en" ? "日本語" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
