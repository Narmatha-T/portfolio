"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

function TokyoTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono-label text-[10px] text-zinc-700">
      Tokyo, Japan 🇯🇵 &nbsp;{time} JST
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-zinc-900 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-zinc-400 mb-3">
              NT<span className="text-zinc-700">_</span>
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">
              Building responsibly, delivering end-to-end AI solutions.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="font-mono-label text-[9px] tracking-[0.25em] uppercase text-zinc-700 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono-label text-[10px] tracking-widest uppercase text-zinc-600 hover:text-zinc-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-mono-label text-[9px] tracking-[0.25em] uppercase text-zinc-700 mb-4">
              Get in Touch
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&to=thiyagarajannarmatha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 transition-all"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/narmatha-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://github.com/Narmatha-T"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 transition-all"
                aria-label="GitHub"
              >
                <Github size={14} />
              </a>
              <a
                href="https://wa.me/8107091710377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono-label text-[10px] text-zinc-700">
            &copy; {year} Narmatha Thiyagarajan. All rights reserved.
          </p>
          <TokyoTime />
        </div>
      </div>
    </footer>
  );
}
