"use client";

const SKILL_GROUPS = [
  {
    category: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow.js",
      "YOLO v8–v11",
      "FaceNet512",
      "MobileSAM",
      "GANs",
      "LLMs",
      "COCO-SSD",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    category: "Backend & Infra",
    skills: [
      "Python",
      "Django",
      "PHP (Laravel)",
      "Redis",
      "Celery",
      "WebSocket",
      "REST APIs",
      "Docker",
      "AWS (EC2, S3)",
      "Nginx",
    ],
  },
  {
    category: "Frontend & Tools",
    skills: [
      "Next.js",
      "React",
      "JavaScript / TypeScript",
      "Tailwind CSS",
      "Git / GitHub",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Languages",
    skills: [
      "English — Native",
      "Japanese — Business (JLPT N3)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
          01 — Technical Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12">
          Tools &amp; Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="glass rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-5 pb-3 border-b border-zinc-800">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
