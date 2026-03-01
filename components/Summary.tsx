"use client";

import { Cpu, Globe, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Cpu,
    title: "AI Systems Architect",
    description:
      "Designed and deployed 8+ production-grade AI systems across telecommunications, waste recycling, and public safety sectors.",
  },
  {
    icon: Users,
    title: "Team Lead & Bridge Engineer",
    description:
      "Leading cross-functional engineering teams at Akatsuki AI Technologies, bridging Japanese client communication with technical delivery.",
  },
  {
    icon: Globe,
    title: "Multilingual Engineer",
    description:
      "Operates fluently in English (native) and Japanese (business-level, JLPT N3) — enabling direct collaboration with Japanese-market clients.",
  },
];

export default function Summary() {
  return (
    <section id="about" className="section-padding border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
          00 — About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Summary text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight mb-6">
              Engineering AI that works
              <br />
              <span className="text-zinc-500">in production.</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
              <p>
                With over <span className="text-zinc-300">3 years</span> of
                hands-on experience, I specialize in turning complex AI research
                into reliable, scalable systems — from real-time computer vision
                pipelines to LLM-powered applications.
              </p>
              <p>
                My work spans the full stack: model selection, optimization,
                backend architecture (Django, Laravel, Redis, Docker), and
                cloud deployment on AWS. I don&apos;t just prototype — I build
                for resilience, maintainability, and scale.
              </p>
              <p>
                Based in Tokyo, I bridge Western engineering practices with
                Japanese market expectations, acting as both a technical lead
                and a bridge engineer for enterprise clients.
              </p>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass rounded-sm p-5 group hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Icon size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
