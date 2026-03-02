"use client";

import { ArrowDown, Download, ExternalLink, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32"
    >
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm mb-8">
          <MapPin size={12} className="text-zinc-500" />
          <span className="text-xs font-medium text-zinc-400 tracking-widest uppercase">
            Tokyo, Japan
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1" />
        </div>

        {/* Name */}
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
          Narmatha Thiyagarajan
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1] mb-6">
          Building responsibly,{" "}
          <span className="text-zinc-500">delivering</span>
          <br />
          end-to-end AI solutions.
        </h1>

        {/* Sub-headline */}
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light">
          AI Engineer specialized in{" "}
          <span className="text-zinc-300 font-medium">Computer Vision</span>,{" "}
          <span className="text-zinc-300 font-medium">LLMs</span>, and{" "}
          <span className="text-zinc-300 font-medium">
            Scalable Backend Systems
          </span>
          . Currently Team Lead &amp; Bridge Engineer at{" "}
          <span className="text-zinc-300 font-medium">
            Akatsuki AI Technologies
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 text-sm font-semibold rounded-sm hover:bg-zinc-200 transition-all duration-200"
          >
            View Projects
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-sm hover:border-zinc-500 hover:text-white transition-all duration-200"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-zinc-800/60">
          {[
            { value: "3+", label: "Years in AI" },
            { value: "8+", label: "Production Systems" },
            { value: "JLPT N3", label: "Japanese Proficiency" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-zinc-100">{stat.value}</p>
              <p className="text-xs text-zinc-500 tracking-widest uppercase mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
