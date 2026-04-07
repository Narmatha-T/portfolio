"use client";

import { SKILL_GROUPS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function Skills() {
  const { lang } = useLang();
  const t = i18n[lang].skills;

  return (
    <section id="skills" className="section-padding border-t border-zinc-200/60 dark:border-zinc-800/60">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 100}>
              <div className="glass rounded-sm p-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  {t.categoryLabels[i] ?? group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/50 dark:border-zinc-700/50 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
