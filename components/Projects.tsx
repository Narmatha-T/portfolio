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
                className="group glass rounded-sm p-6 flex flex-col gap-4 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden"
              >
                {/* CV Animations for specific projects (hidden until hover) */}
                {project.id === "01" && (
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                    <style>{`
                      @keyframes drive_car {
                        0% { transform: translateX(-50px); }
                        100% { transform: translateX(500px); }
                      }
                      @keyframes scan_flash {
                        0%, 35% { border-color: rgba(34,197,94,0); background: transparent; }
                        45%, 55% { border-color: rgba(34,197,94,0.8); background: rgba(34,197,94,0.1); }
                        65%, 100% { border-color: rgba(34,197,94,0); background: transparent; }
                      }
                      @keyframes info_flash {
                        0%, 35% { opacity: 0; }
                        45%, 55% { opacity: 1; }
                        65%, 100% { opacity: 0; }
                      }
                    `}</style>
                    <div className="absolute bottom-6 left-0 right-0 h-[80px] border-b border-zinc-800/50">
                      {/* Bounding box zone (fixed in center) */}
                      <div 
                        className="absolute left-[50%] top-6 w-[120px] h-[50px] -translate-x-[50%] border-2 rounded-sm"
                        style={{ animation: 'scan_flash 3s linear infinite' }}
                      >
                         <span 
                           className="absolute -top-5 left-0 text-[10px] font-mono text-green-400 font-bold tracking-wider whitespace-nowrap"
                           style={{ animation: 'info_flash 3s linear infinite' }}
                         >
                           [AUTH: ACCEPTED]
                         </span>
                      </div>
                      
                      {/* Car moving */}
                      <div 
                        className="absolute top-8 left-0 w-[80px] h-[40px] z-[-1]"
                        style={{ animation: 'drive_car 3s linear infinite' }}
                      >
                        <svg viewBox="0 0 24 24" className="w-full h-full text-zinc-500/60 drop-shadow-md" fill="currentColor">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === "02" && (
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_70%)]" />
                    {Array.from({length: 15}).map((_, i) => (
                      <div 
                        key={`dot-${i}`} 
                        className="absolute w-1 h-1 bg-sky-500/50 rounded-full animate-ping"
                        style={{ 
                          top: `${20 + ((i * 17) % 60)}%`, 
                          left: `${10 + ((i * 23) % 80)}%`,
                          animationDelay: `${(i * 0.3) % 2}s`,
                          animationDuration: `${1 + ((i * 0.7) % 2)}s`
                        }} 
                      />
                    ))}
                    <div className="absolute top-4 right-4 border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 rounded text-[8px] font-mono text-sky-400">DENSITY: HIGH</div>
                  </div>
                )}

                {project.id === "03" && (
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                    <style>{`
                      @keyframes swim {
                        0% { transform: translate(-50px, 10px) rotate(-10deg); }
                        50% { transform: translate(150px, -10px) rotate(10deg); }
                        100% { transform: translate(400px, 10px) rotate(-10deg); }
                      }
                      @keyframes scan_line {
                        0%, 100% { transform: translateX(0); }
                        50% { transform: translateX(100px); }
                      }
                    `}</style>
                    <div className="absolute top-1/3 left-0 w-[50px] h-[30px] animate-[swim_6s_ease-in-out_infinite]">
                      <Fish className="w-full h-full text-zinc-700/20" />
                      <div className="absolute inset-y-0 left-0 w-[2px] bg-cyan-400/50 shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-[scan_line_3s_linear_infinite]" />
                    </div>
                  </div>
                )}

                {/* Content Container ensures text remains readable over the background */}
                <div className="relative z-10 flex flex-col gap-4 h-full">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
