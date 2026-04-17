"use client";

import { ExternalLink, GraduationCap } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "@/lib/data";
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

                    <a
                      href={exp.url ?? undefined}
                      target={exp.url ? "_blank" : undefined}
                      rel={exp.url ? "noopener noreferrer" : undefined}
                      className={`glass rounded-sm p-6 block transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700${exp.url ? " cursor-pointer group/card" : ""}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 inline-flex items-center gap-1">
                            {exp.company}
                            {exp.url && (
                              <ExternalLink size={11} className="opacity-0 group-hover/card:opacity-60 transition-opacity" />
                            )}
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
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="relative mt-24 pt-16 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <ScrollReveal>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
              {t.educationLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
              {t.educationHeading}
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

            <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                  {/* Period */}
                  <div className="md:text-right md:pr-10 flex-shrink-0">
                    <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">
                      {edu.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative pl-0 sm:pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950 hidden sm:block -translate-x-[1px]" />

                    <div className="glass rounded-sm p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-sm bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                          <GraduationCap size={16} className="text-zinc-500 dark:text-zinc-400" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            {edu.url ? (
                              <a href={edu.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group/edu">
                                {edu.institution}
                                <ExternalLink size={11} className="opacity-0 group-hover/edu:opacity-60 transition-opacity" />
                              </a>
                            ) : edu.institution}
                          </p>
                          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">
                            {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
