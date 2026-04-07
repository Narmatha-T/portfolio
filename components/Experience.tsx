"use client";

import { EXPERIENCE } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function Experience() {
  const { lang } = useLang();
  const t = i18n[lang].experience;
  const expHighlights = i18n[lang].experienceHighlights;

  return (
    <section
      id="experience"
      className="section-padding border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
            {t.heading}
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                  {/* Period */}
                  <div className="md:text-right md:pr-10 flex-shrink-0">
                    <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 mt-1 md:justify-end">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-green-700 dark:text-green-600 tracking-widest uppercase">
                          {t.current}
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative pl-0 sm:pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950 hidden sm:block -translate-x-[1px]" />

                    <div className="glass rounded-sm p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            {exp.company}
                          </p>
                          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {(expHighlights[i] ?? exp.highlights).map((point, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="flex-shrink-0 w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600 mt-[7px]" />
                            <span className="text-xs text-zinc-500 leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
