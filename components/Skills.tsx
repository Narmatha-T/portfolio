"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow.js", "YOLO v8–v11", "FaceNet512", "MobileSAM", "GANs", "LLMs", "COCO-SSD", "OpenCV", "MediaPipe"],
  },
  {
    category: "Backend & Infra",
    skills: ["Python", "Django", "PHP (Laravel)", "Redis", "Celery", "WebSocket", "REST APIs", "Docker", "AWS EC2/S3", "Nginx"],
  },
  {
    category: "Frontend & Tools",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git / GitHub", "PostgreSQL", "MySQL"],
  },
  {
    category: "Languages",
    skills: ["English — Native", "Japanese — JLPT N3"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-10"
        >
          01 — Technical Skills
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6"
            >
              <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-zinc-600 mb-5 pb-3 border-b border-zinc-900">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-label text-[10px] px-2.5 py-1 bg-zinc-900/80 text-zinc-500 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
