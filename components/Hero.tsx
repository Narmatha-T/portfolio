"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const METRICS = [
  { value: "8+", label: "Deployed Systems", sub: "production-grade" },
  { value: "3+", label: "Years Experience", sub: "in AI engineering" },
  { value: "JLPT N3", label: "Japanese Level", sub: "business proficiency" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-28"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-400 glow-dot" />
          <span className="font-mono-label text-[11px] tracking-[0.25em] uppercase text-zinc-500">
            Available for projects
          </span>
        </motion.div>

        {/* Big typographic hero */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-extrabold leading-none tracking-tighter text-zinc-100"
          >
            NARMATHA.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-extrabold leading-none tracking-tighter text-zinc-600"
          >
            AI ENGINEER.
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-extrabold leading-none tracking-tighter text-zinc-800"
          >
            TOKYO.
          </motion.h2>
        </div>

        {/* Sub line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed mb-10"
        >
          Team Lead &amp; Bridge Engineer at{" "}
          <span className="text-zinc-400">Akatsuki AI Technologies</span>.
          Specialized in{" "}
          <span className="text-zinc-400">Computer Vision</span>,{" "}
          <span className="text-zinc-400">LLMs</span>, and{" "}
          <span className="text-zinc-400">Scalable Backend Systems</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <a
            href="#projects"
            className="font-mono-label text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 bg-zinc-100 text-black hover:bg-white transition-colors"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="font-mono-label text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-all"
          >
            <Download size={12} />
            Resume.pdf
          </a>
        </motion.div>

        {/* AI Impact metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid grid-cols-3 gap-px border border-zinc-900 bg-zinc-900 max-w-xl"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="bg-black px-5 py-4">
              <p className="text-xl md:text-2xl font-bold text-zinc-200 leading-none mb-1">
                {m.value}
              </p>
              <p className="font-mono-label text-[10px] tracking-widest uppercase text-zinc-500">
                {m.label}
              </p>
              <p className="font-mono-label text-[9px] text-zinc-700 mt-0.5">
                {m.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700 hover:text-zinc-500 transition-colors"
      >
        <span className="font-mono-label text-[9px] tracking-[0.3em] uppercase">scroll</span>
        <ArrowDown size={12} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
