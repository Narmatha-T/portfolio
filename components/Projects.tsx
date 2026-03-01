"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    name: "Meguru",
    tagline: "Biometric Access Control",
    description:
      "Enterprise-grade number plate & face authentication system. YOLO-based license plate detection fused with FaceNet512 facial recognition.",
    stack: ["YOLO v8", "FaceNet512", "Django", "Redis", "AWS"],
    demo: "https://meguru.run/",
    category: "Computer Vision",
    accent: "col-span-12 md:col-span-7",
    rowSpan: "row-span-1",
    imageBg: "from-zinc-900 to-black",
  },
  {
    id: "02",
    name: "Crowd Monitor",
    tagline: "Real-time Density Estimation",
    description:
      "Live crowd surveillance using COCO-SSD. Heatmap generation at high-frequency inference.",
    stack: ["COCO-SSD", "TensorFlow.js", "WebSocket"],
    demo: "https://crowding.aicam.jp/",
    category: "Real-time AI",
    accent: "col-span-12 md:col-span-5",
    rowSpan: "row-span-1",
    imageBg: "from-zinc-950 to-zinc-900",
  },
  {
    id: "03",
    name: "Fish Classifier",
    tagline: "Edge AI in the Browser",
    description:
      "In-browser real-time marine species identification via TensorFlow.js. Zero server inference cost.",
    stack: ["TensorFlow.js", "MobileNet", "Next.js"],
    demo: "https://aicam.jp/effectively/fish-classification",
    category: "Edge AI",
    accent: "col-span-12 md:col-span-5",
    rowSpan: "row-span-1",
    imageBg: "from-zinc-900 to-black",
  },
  {
    id: "04",
    name: "CRAYON",
    tagline: "High-Concurrency Concert Platform",
    description:
      "Multi-tenant ticketing & access system for major Japanese concerts. Redis queue handles thousands of concurrent users.",
    stack: ["Django", "Redis", "Celery", "PostgreSQL", "Docker", "AWS"],
    demo: null,
    category: "Backend Systems",
    accent: "col-span-12 md:col-span-7",
    rowSpan: "row-span-1",
    imageBg: "from-zinc-950 to-zinc-900",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-10"
        >
          02 — The Work
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-3 auto-rows-[260px]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${project.accent} group relative overflow-hidden card`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.imageBg} opacity-80`} />

              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />

              {/* Tech stack overlay on hover */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-20">
                <div className="text-center">
                  <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-label text-[10px] px-2.5 py-1 border border-zinc-700 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 font-mono-label text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white border border-zinc-700 px-4 py-2 transition-colors"
                    >
                      View Live <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono-label text-[9px] tracking-[0.25em] uppercase text-zinc-600">
                    {project.id} — {project.category}
                  </span>
                  {!project.demo && (
                    <span className="font-mono-label text-[9px] px-2 py-0.5 border border-zinc-800 text-zinc-700">
                      Private
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 tracking-tight leading-none mb-1">
                    {project.name}
                  </h3>
                  <p className="font-mono-label text-[10px] text-zinc-500 mb-3">{project.tagline}</p>
                  <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
