"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-zinc-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="font-mono-label text-xs tracking-[0.3em] text-zinc-500 hover:text-zinc-300 transition-colors uppercase">
          NT<span className="text-zinc-700">_</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-label text-[11px] tracking-[0.2em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 font-mono-label text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-all"
        >
          Resume.pdf
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-500 hover:text-zinc-300 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-900">
          <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono-label text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" download className="font-mono-label text-xs tracking-widest uppercase text-zinc-600">
              Resume.pdf
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
