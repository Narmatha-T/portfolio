"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { lang } = useLang();
  const t = i18n[lang].hero;

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scanDown {
          0%   { top: 0%;   opacity: 0.9; }
          85%  { opacity: 0.6; }
          100% { top: 100%; opacity: 0;   }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.9;  }
        }
        @keyframes labelFade {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 0.9; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .img-skeleton {
          background: linear-gradient(90deg, #e4e4e7 25%, #f4f4f5 50%, #e4e4e7 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .dark .img-skeleton {
          background: linear-gradient(90deg, #27272a 25%, #3f3f46 50%, #27272a 75%);
          background-size: 200% 100%;
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center section-padding pt-32"
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 w-full">

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur-sm mb-8">
              <MapPin size={12} className="text-zinc-400 dark:text-zinc-500" />
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 tracking-widest uppercase">
                {t.location}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse ml-1" />
            </div>

            {/* Name — monospace + blinking cursor */}
            <p className="text-sm font-mono tracking-[0.25em] uppercase text-green-600/80 dark:text-green-400/80 mb-4">
              Narmatha Thiyagarajan
              <span
                className="ml-1 inline-block w-[0.55em] h-[1em] bg-green-600/70 dark:bg-green-400/70 align-middle"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-6">
              {t.headline1}{" "}
              <span className="text-zinc-400 dark:text-zinc-500">{t.headline2accent}</span>
              <br />
              {t.headline2}
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light">
              {t.subPrefix}{" "}
              <span className="text-green-600 dark:text-green-400/80 font-medium">{t.subCV}</span>,{" "}
              <span className="text-green-600 dark:text-green-400/80 font-medium">{t.subLLMs}</span>,{" "}
              {lang === "en" ? "and " : ""}
              <span className="text-green-600 dark:text-green-400/80 font-medium">
                {t.subBackend}
              </span>
              {lang === "en" ? ". " : "。"}{t.subSuffix}{" "}
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                {t.subCompany}
              </span>
              {lang === "en" ? "." : "に在籍。"}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-green-500 dark:bg-green-400 text-white dark:text-zinc-900 text-sm font-semibold rounded-sm hover:bg-green-600 dark:hover:bg-green-300 transition-all duration-200"
              >
                {t.ctaProjects}
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{stat.value}</p>
                  <p className="text-xs text-zinc-500 tracking-widest uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile image inside CV detection box ── */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] shrink-0 lg:-mt-40">

            {/* Corner brackets — pulsing staggered */}
            <span
              className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-green-600/70 dark:border-green-400/70 z-20"
              style={{ animation: "cornerPulse 2.4s ease-in-out infinite 0s" }}
            />
            <span
              className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-600/70 dark:border-green-400/70 z-20"
              style={{ animation: "cornerPulse 2.4s ease-in-out infinite 0.6s" }}
            />
            <span
              className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-600/70 dark:border-green-400/70 z-20"
              style={{ animation: "cornerPulse 2.4s ease-in-out infinite 1.2s" }}
            />
            <span
              className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-green-600/70 dark:border-green-400/70 z-20"
              style={{ animation: "cornerPulse 2.4s ease-in-out infinite 1.8s" }}
            />

            {/* Top label */}
            <span
              className="absolute -top-6 left-0 z-20 font-mono text-[9px] tracking-[0.2em] text-green-600/60 dark:text-green-400/60 uppercase"
              style={{ animation: "labelFade 2.4s ease-in-out infinite" }}
            >
              FACE_DETECTED ✓
            </span>
            {/* Bottom label */}
            <span
              className="absolute -bottom-6 right-0 z-20 font-mono text-[9px] tracking-[0.2em] text-green-600/60 dark:text-green-400/60 uppercase"
              style={{ animation: "labelFade 2.4s ease-in-out infinite 1.2s" }}
            >
              CONF: 99.8%
            </span>

            {/* Scan line sweeping inside a clipped circle */}
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 pointer-events-none">
              <div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-700/90 dark:via-green-700/80 to-transparent"
                style={{ top: 0, animation: "scanDown 3s linear infinite" }}
              />
            </div>

            {/* Image with loading skeleton */}
            <div className="relative w-full h-full rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/40 dark:bg-zinc-900/40 overflow-hidden">
              {!imageLoaded && (
                <div className="absolute inset-0 img-skeleton" />
              )}
              <Image
                src="/photo-1.png"
                alt="Narmatha Thiyagarajan"
                fill
                style={{ objectPosition: '50% 45%' }}
                className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
