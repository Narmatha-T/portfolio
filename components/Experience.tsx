"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Team Lead & Bridge Engineer",
    company: "Akatsuki AI Technologies",
    location: "Tokyo, Japan",
    current: true,
    skills: ["YOLO v11", "MobileSAM", "LLMs", "Team Lead", "Bridge Eng."],
    highlights: [
      "Leading a team of AI engineers building production-grade computer vision and LLM systems.",
      "Acting as technical bridge between Japanese enterprise clients and the engineering team.",
      "Overseeing architecture decisions, code reviews, and delivery timelines.",
      "Driving adoption of YOLO v11, MobileSAM, and advanced LLM pipelines.",
    ],
  },
  {
    period: "2022 — 2025",
    role: "AI Engineer",
    company: "SOHGA Co., Ltd.",
    location: "Tokyo, Japan",
    current: false,
    skills: ["Django", "Redis", "YOLO v8", "TensorFlow.js", "AWS", "Docker"],
    highlights: [
      "Built and deployed 8+ production AI systems across telecommunications, recycling, and safety sectors.",
      "Developed real-time object detection pipelines using YOLO v8–v11, COCO-SSD, and FaceNet512.",
      "Engineered high-concurrency backend systems (Django, Redis, Celery) handling thousands of simultaneous users.",
      "Implemented browser-side AI inference using TensorFlow.js for zero-latency edge applications.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-10"
        >
          03 — Experience
        </motion.p>

        <div className="space-y-4">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card card-hover p-6 md:p-8 group"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-base font-bold text-zinc-100">{exp.role}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 glow-dot" />
                        <span className="font-mono-label text-[9px] tracking-widest uppercase text-zinc-500">Current</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500">{exp.company}</p>
                  <p className="font-mono-label text-[10px] text-zinc-700 mt-0.5">{exp.location}</p>
                </div>
                <span className="font-mono-label text-[10px] text-zinc-700 tracking-widest shrink-0">{exp.period}</span>
              </div>

              {/* Skill tags — glow on card hover */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-label text-[9px] px-2.5 py-1 border border-zinc-900 text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400 transition-all duration-300"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5">
                {exp.highlights.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-mono-label text-[9px] text-zinc-700 mt-[3px]">—</span>
                    <span className="text-xs text-zinc-600 leading-relaxed group-hover:text-zinc-500 transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
