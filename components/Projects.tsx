"use client";

import { ExternalLink, Shield, Users, Fish, Music } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    icon: Shield,
    name: "Meguru",
    tagline: "Number Plate & Face Authentication System",
    description:
      "End-to-end biometric access control platform combining YOLO-based license plate detection with FaceNet512 facial recognition. Deployed for enterprise security workflows.",
    stack: ["YOLO v8", "FaceNet512", "Django", "Redis", "AWS"],
    demo: "https://meguru.run/",
    category: "Computer Vision",
  },
  {
    id: "02",
    icon: Users,
    name: "Crowd Monitor",
    tagline: "Real-time Crowd Density Estimation",
    description:
      "Live web-based crowd surveillance using COCO-SSD for person detection and density heatmap generation. Handles high-frequency inference with minimal latency.",
    stack: ["COCO-SSD", "TensorFlow.js", "WebSocket", "React"],
    demo: "https://crowding.aicam.jp/",
    category: "Real-time AI",
  },
  {
    id: "03",
    icon: Fish,
    name: "Fish Classifier",
    tagline: "Browser-based Real-time Fish Classification",
    description:
      "In-browser AI model for marine species identification running entirely client-side via TensorFlow.js — zero server inference cost.",
    stack: ["TensorFlow.js", "MobileNet", "Next.js", "JavaScript"],
    demo: "https://aicam.jp/effectively/fish-classification",
    category: "Edge AI",
  },
  {
    id: "04",
    icon: Music,
    name: "CRAYON",
    tagline: "High-Concurrency Multi-Tenant Concert System",
    description:
      "Architected a resilient ticketing and access management platform for major concert events. Supports thousands of concurrent users with Redis-based queue management.",
    stack: ["Django", "Redis", "Celery", "PostgreSQL", "Docker", "AWS"],
    demo: null,
    category: "Backend Systems",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
          02 — Projects
        </p>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Featured Work
          </h2>
          <span className="hidden sm:block text-xs text-zinc-600 tracking-widest uppercase">
            {PROJECTS.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group glass rounded-sm p-6 flex flex-col gap-4 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                      <Icon size={16} className="text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 tracking-widest uppercase">
                        {project.id} — {project.category}
                      </p>
                      <h3 className="text-base font-bold text-zinc-100">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300 transition-all"
                      aria-label={`View ${project.name} demo`}
                    >
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="flex-shrink-0 px-2 py-1 text-[10px] tracking-widest uppercase text-zinc-600 border border-zinc-800 rounded-sm">
                      Private
                    </span>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-xs font-medium text-zinc-400">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-zinc-800/60 text-zinc-500 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
