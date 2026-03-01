"use client";

import { motion } from "framer-motion";

const PILLARS = [
  { label: "Computer Vision", detail: "YOLO v8–v11 · FaceNet512 · MobileSAM · OpenCV" },
  { label: "LLM Engineering", detail: "RAG pipelines · Prompt engineering · Fine-tuning" },
  { label: "Backend Systems", detail: "Django · Redis · Celery · Docker · AWS" },
  { label: "Bridge Engineering", detail: "JP ↔ EN · JLPT N3 · Enterprise clients" },
];

export default function Summary() {
  return (
    <section id="about" className="section-padding border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-10"
        >
          00 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight mb-6 tracking-tight">
              Engineering AI that ships
              <br />
              <span className="text-zinc-700">in production.</span>
            </h2>
            <div className="space-y-4 text-zinc-500 leading-relaxed text-sm">
              <p>
                3+ years turning complex AI research into resilient, scalable systems —
                from real-time computer vision pipelines to LLM-powered applications.
                I don&apos;t prototype; I build for <span className="text-zinc-300">production</span>.
              </p>
              <p>
                Based in <span className="text-zinc-300">Tokyo</span>, I bridge Western engineering
                practice with Japanese market expectations — acting as both technical lead
                and Bridge Engineer for enterprise clients.
              </p>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card card-hover p-4 group"
              >
                <p className="text-xs font-semibold text-zinc-300 mb-2">{p.label}</p>
                <p className="font-mono-label text-[10px] text-zinc-600 leading-relaxed">{p.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
