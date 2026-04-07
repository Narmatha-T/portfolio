"use client";

import { HIGHLIGHTS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function Summary() {
  const { lang } = useLang();
  const t = i18n[lang].about;
  const highlights = i18n[lang].highlights;

  return (
    <section id="about" className="section-padding border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
            {t.label}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Summary text */}
          <ScrollReveal delay={100}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-6">
                {t.headline1}
                <br />
                <span className="text-zinc-400 dark:text-zinc-500">{t.headline2}</span>
              </h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                <p>
                  {t.p1prefix}<span className="text-zinc-700 dark:text-zinc-300">{t.p1highlight}</span>{t.p1suffix}
                </p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon }, i) => (
              <ScrollReveal key={highlights[i].title} delay={200 + i * 100}>
                <div className="glass rounded-sm p-5 group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 transition-colors">
                      <Icon size={16} className="text-zinc-500 dark:text-zinc-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                        {highlights[i].title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {highlights[i].description}
                      </p>
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
