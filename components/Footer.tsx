"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { FOOTER_NAV_LINKS } from "@/lib/data";
import Logo from "@/components/Logo";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLang();
  const t = i18n[lang].footer;
  const navLabels: Record<string, string> = {
    About: i18n[lang].nav.about,
    Skills: i18n[lang].nav.skills,
    Projects: i18n[lang].nav.projects,
    Experience: i18n[lang].nav.experience,
  };

  return (
    <footer
      id="contact"
      className="border-t border-zinc-200/60 dark:border-zinc-800/60 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo className="text-lg text-zinc-900 dark:text-white mb-3" />
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[220px]">
              {t.tagline}
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <MapPin size={11} className="text-zinc-400 dark:text-zinc-600" />
              <span className="text-xs text-zinc-400 dark:text-zinc-600">{t.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-4">
              {t.navHeading}
            </p>
            <nav className="flex flex-col gap-2">
              {FOOTER_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                >
                  {navLabels[link.label] ?? link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-4">
              {t.contactHeading}
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=thiyagarajannarmatha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors mb-3 block"
            >
              thiyagarajannarmatha@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&to=thiyagarajannarmatha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/narmatha-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://github.com/Narmatha-T"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://wa.me/8107091710377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-center">
          <p className="text-[11px] text-zinc-400 dark:text-zinc-600">
            {t.copyright(year)}
          </p>
        </div>
      </div>
    </footer>
  );
}
