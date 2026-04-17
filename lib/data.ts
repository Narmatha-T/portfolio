import { Activity, Building2, Car, Cpu, Fish, Globe, Music, Palette, Recycle, ScanFace, Timer, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── Navigation ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Footer omits the "Contact" link since it lives inside the footer itself
export const FOOTER_NAV_LINKS = NAV_LINKS.filter(
  (link) => link.label !== "Contact"
);

// ── Summary highlights ────────────────────────────────────────────────────────

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: Cpu,
    title: "AI Systems Architect",
    description:
      "Designed and deployed 8+ production-grade AI systems across telecommunications, waste recycling, and public safety sectors — spanning CV pipelines, LLM/RAG applications, and edge inference.",
  },
  {
    icon: Users,
    title: "Team Lead & Bridge Engineer",
    description:
      "Leading a global team of 4 IIT engineers entirely in English at Akatsuki AI Technologies, while acting as technical bridge between Japanese enterprise clients and the team.",
  },
  {
    icon: Globe,
    title: "Multilingual Engineer",
    description:
      "Operates fluently in English (native) and Japanese (business-level, JLPT N3, targeting N2) — enabling direct collaboration with Japanese-market clients and stakeholders.",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow.js",
      "YOLO v8–v11",
      "YOLOX",
      "FaceNet512",
      "MobileSAM",
      "ConvNeXt",
      "Swin-Transformer",
      "GANs",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "COCO-SSD",
      "OpenCV",
      "MediaPipe",
      "Core ML",
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
      "AWS (ECS, RDS, S3)",
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
      "Figma",
      "Git / GitHub",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Languages",
    skills: ["English — Native", "Japanese — Business (JLPT N3, targeting N2)"],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  demo: string | null;
  category: string;
  featured: boolean;
  client?: { name: string; url: string };
};

export const PROJECTS: Project[] = [
  // ── Featured (latest first) ────────────────────────────────────────────────
  {
    id: "01",
    icon: Music,
    name: "CRAYON",
    tagline: "Multi-Tenant Event Ticketing & Entry Management System",
    description:
      "White-label ticketing and venue entry management platform for high-traffic events and fanclubs, built for entertainment agencies including those representing Ado. A hierarchical tenant model (Tenant → Fanclub → Event → Slot) enforces granular access control, restricting specific ticket types to verified fanclub members only. The core feature is a two-phase Numbered Ticket (整理券) flow: a pre-registration/lottery phase handles initial demand with automatic winner selection and serial code distribution; remaining capacity then shifts automatically to a real-time FCFS pool. Redis Lua scripts guarantee atomic acquisition, eliminating double-booking races under high-concurrency spikes. The staff entry portal manages live venue flow via Auto and Manual call modes — tickets progress through a protected status machine (Waiting → Queued → Ready → Used/Expired) with immutable terminal states to prevent accidental overrides, and capacity can be adjusted dynamically based on real-time venue conditions.",
    stack: ["Django", "Redis", "Celery", "AWS", "Figma"],
    demo: "https://www.jyp-reserve.jp/",
    category: "Full Stack SaaS",
    featured: true,
  },
  {
    id: "02",
    icon: Car,
    name: "MEGURU — Patrol System",
    tagline: "AI-Powered Parking Lot Patrol",
    description:
      "MEGURU is a smartphone-based patrol support system that uses AI image recognition to verify vehicle license plates during parking lot inspections — providing audio confirmation per vehicle, real-time dashboard reporting, missed patrol alerts, and blacklist monitoring for flagged vehicles. Built and fine-tuned custom models for number plate detection and recognition for Japanese regional plate formats, and deployed to Core ML for iPhone-compatible, zero-latency on-device inference.",
    stack: ["YOLO", "Core ML", "PyTorch", "iOS", "Python"],
    demo: "https://meguru.run/",
    category: "Computer Vision",
    featured: true,
  },
  {
    id: "03",
    icon: Building2,
    name: "SIP Wall Surface Classifier",
    tagline: "Real-Time Digital Inspection Application for Building Research Institute (BRI)",
    description:
      "Developed for Japan's Building Research Institute (BRI) under the Cabinet Office's Strategic Innovation Promotion Program (SIP) — a national initiative to digitise construction inspection and infrastructure lifecycle management. Developed a computer vision pipeline to classify wall surfaces: Sprayed, Rippled, Sandy, and Head-tamped across six stages of degradation, achieving 90%+ accuracy after researching and fine-tuning the ConvNeXt-based OSS model on a local machine with an NVIDIA RTX 4070 Ti graphics card. The system was then deployed to Sakura VPS for real-time inference and benchmarking.",
    stack: ["ConvNeXt", "PyTorch", "Python", "Ubuntu"],
    demo: null,
    category: "Computer Vision",
    featured: true,
    client: { name: "Building Research Institute", url: "https://www.kenken.go.jp/" },
  },
  {
    id: "04",
    icon: Users,
    name: "Real-time Crowd Monitor using SmartPhone",
    tagline: "AI-powered crowd density monitoring with embeddable web-widget distribution",
    description:
      "Designed to provide real-time occupancy intelligence for businesses like restaurants, offices, and clinics. By leveraging TensorFlow.js (COCO-SSD) to enable real-time, browser-based person detection without the need for expensive backend GPU resources for edge-based person detection, the system calculates a live congestion score relative to a user-defined maximum capacity (e.g., 5 or 50 people), ensuring the data is tailored to the specific scale of the environment. Integrated with LINE Login, the platform allows owners to monitor 5-day congestion trends and distribute live 'busy-ness' status to their own websites via customizable, embeddable web widgets. This end-to-end solution transforms standard camera feeds into actionable public data, helping customers avoid crowds while providing managers with essential operational analytics.",
    stack: ["COCO-SSD", "TensorFlow", "PHP", "Laravel", "MySQL", "LINE Login"],
    demo: "https://crowding.aicam.jp/",
    category: "AIoT",
    featured: true,
  },
  {
    id: "05",
    icon: Recycle,
    name: "Bottle Detection — Recycling",
    tagline: "AI-Powered Bottle Sorting on Industrial Conveyor Belt",
    description:
      "Built for a factory automation manufacturer specializing in environmental solutions. A USB camera captures live video of a recycling conveyor belt; a fine-tuned YOLO model detects and classifies clear (white) and brown glass bottles, distinguishing them from mixed waste including cans, PET bottles, and other coloured glass bottles. Detection coordinates are streamed to an Omron PLC, which actuates a robotic arm to pick and remove target bottles — fully automating a critical recycling step. Delivered across two project phases with a custom-annotated dataset.",
    stack: ["YOLO", "PyTorch", "Python", "OpenCV"],
    demo: "https://www.npcgroup.net/",
    category: "Computer Vision",
    featured: true,
  },
  {
    id: "06",
    icon: Timer,
    name: "Real-time Monitoring System",
    tagline: "ArUco Tracking + MobileSAM Segmentation Alert System",
    description:
      "Built to prevent frozen food wastage at Jonanjima Logistics Center (Ota City) — a 27,000-ton cold storage hub where offloading bottlenecks leave drivers waiting over hours to offload, leaving temperature-sensitive cargo at risk in non-refrigerated staging areas. ArUco markers are affixed on top of the frozen containers; the system detects each marker and starts a configurable countdown timer (e.g. 30–60 min). When the threshold is exceeded, an alert fires on a web dashboard prompting staff to move the container into the freezer. MobileSAM runs in parallel to segment and visually track each luggage item in the staging area.",
    stack: ["MobileSAM", "OpenCV", "ArUco", "PyTorch", "Python"],
    demo: "https://www.logi.umios.com/group_company_kanto/",
    category: "Computer Vision",
    featured: true,
  },
  // ── Additional ────────────────────────────────────────────────────────────
  {
    id: "07",
    icon: ScanFace,
    name: "MEGURU — Face Authentication",
    tagline: "Automated Patrol Staff Verification via Face Recognition",
    description:
      "Developed an automated face authentication layer to digitize and secure staff attendance for patrol operations. Previously, officers manually uploaded selfies before shifts — a process that was time-consuming, difficult to audit, and prone to bypass. This system now verifies identities in real-time by matching staff faces against a registered database using FaceNet512. To ensure high-speed performance on-site, I optimized the detection pipeline by replacing MTCNN with a YuNet and MediaPipe hybrid approach (utilizing a failover mechanism), achieving a 12.5× improvement in face detection latency.",
    stack: ["Python", "OpenCV","FaceNet512", "Yunet", "MediaPipe"],
    demo: "https://meguru.run/",
    category: "Computer Vision",
    featured: false,
  },
  {
    id: "08",
    icon: Fish,
    name: "AICam — Automatic Analysis of Fish Species and Size",
    tagline: "Fish Segmentation & Classifier",
    description:
      "To address labor shortages in the fishing industry, I developed a segmentation and classification model capable of identifying four key species (Black Sea Sprat, Gilt-Head Bream, Horse Mackerel, and Trout). This system automates classification and size estimation by simultaneously calculating physical length in centimeters. To ensure the system remains cost-effective and functional in remote, hardware-constrained environments, this model uses TensorFlow.js for client-side execution. This architecture achieves zero-server inference costs by performing all AI processing directly in the browser.",
    stack: ["OpenCV", "YOLO", "TensorFlow", "JavaScript"],
    demo: "https://aicam.jp/effectively/fish-classification",
    category: "AIoT",
    featured: false,
  },
  {
    id: "09",
    icon: Activity,
    name: "MEGURU — SIM Data Traffic Monitor",
    tagline: "Automated Mobile Plan Management",
    description:
      "An automated infrastructure tool designed to monitor and optimise contracted mobile data usage for patrol devices. I developed a predictive algorithm that estimates monthly consumption and autonomously scales mobile plans (100 MB ⇄ 1 GB) to ensure 100% service uptime while minimising operational costs. Built with Laravel and Goutte, the system provides real-time anomaly detection and automated audit logging for the entire fleet and integrated with Laravel Scheduler, the platform also monitors for traffic abnormalities and provides real-time alerts for plan changes.",
    stack: ["PHP", "Laravel", "Goutte", "Laravel Scheduler"],
    demo: "https://meguru.run/",
    category: "Infrastructure Automation",
    featured: false,
  },
  {
    id: "10",
    icon: Palette,
    name: "Kimono Texture Synthesis",
    tagline: "Deep Image Generation with GANs",
    description:
      "Developed as a Proof of Concept (PoC) to modernize traditional Japanese textile design, this project explored the intersection of Deep Image Synthesis and cultural heritage. I engineered a generative pipeline using pix2pix and TextureGAN to synthesize high-fidelity kimono patterns from hand-drawn sketches. By implementing a patch-based refinement strategy, I successfully demonstrated how Generative Adversarial Networks (GANs) could reproduce the intricate silk textures and complex embroidery details of traditional garments. This research proved the viability of using AI-driven texture synthesis to accelerate the digital prototyping of high-end fashion, reducing the design-to-production lifecycle while preserving traditional aesthetic standards.",
    stack: ["pix2pix", "TextureGAN", "PyTorch", "Python"],
    demo: null,
    category: "Generative AI",
    featured: false,
  },
];

// ── Publications ──────────────────────────────────────────────────────────────

export type PublicationEntry = {
  title: string;
  venue: string;
  date: string;
  authors: string;
  stack: string[];
  downloadUrl: string;
};

export const PUBLICATIONS: PublicationEntry[] = [
  {
    title: "Intelligent Driver Alert System on Pothole Detection using Deep Learning Techniques",
    venue: "International Journal of Research Publication and Reviews, Vol. 1, Issue 1",
    date: "March 2023",
    authors: "Narmatha Thiyagarajan et al.",
    stack: ["YOLO", "CNN", "OpenCV", "VGG16", "Transfer Learning"],
    downloadUrl: "/Intelligent Driver Alert System Research Paper.pdf",
  },
];

// ── Education ─────────────────────────────────────────────────────────────────

export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  location: string;
  url?: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    period: "2019 – 2023",
    degree: "BTech, Computer Science",
    institution: "Dayananda Sagar University",
    location: "Bangalore, India",
    url: "https://www.dsu.edu.in/",
  },
  {
    period: "2017 – 2019",
    degree: "CBSE, Science",
    institution: "Sri Chaitanya College of Education",
    location: "Bangalore, India",
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  url?: string;
  location: string;
  current: boolean;
  highlights: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "Nov 2025 — Present",
    role: "AI Engineer and Team Lead",
    company: "Akatsuki AI Technologies",
    url: "https://aktsk.jp/",
    location: "Tokyo, Japan",
    current: true,
    highlights: [
      "Leading a global team of 4 IIT engineers building production-grade computer vision and LLM/RAG systems, with all communication conducted in English.",
      "Architected the CRAYON white-label concert platform for major artists including Ado, supporting tens of thousands of concurrent attendees using Redis Lua scripts for atomic inventory management.",
      "Acting as technical bridge between Japanese enterprise clients and the engineering team — owning requirements, architecture decisions, and delivery timelines.",
      "Driving UI/UX design in Figma and full-stack implementation across Django 5, AWS ECS/RDS/S3 infrastructure.",
    ],
  },
  {
    period: "Sep 2022 — Oct 2025",
    role: "AI Engineer",
    company: "SOHGA Co., Ltd.",
    url: "https://www.sohga.jp/",
    location: "Tokyo, Japan",
    current: false,
    highlights: [
      "Built and deployed 8+ production AI systems across telecommunications, recycling, and public safety — from initial PoC to live deployment — over a 3-year tenure.",
      "Re-engineered the MEGURU security pipeline by replacing legacy models with a YuNet + MediaPipe hybrid, achieving a 12.5× improvement in face detection speed for real-time mobile use.",
      "Built a wall deterioration classifier for Japan's Building Research Institute (BRI) under the Cabinet Office's SIP program, reaching 90%+ accuracy with a ConvNeXt / Swin-Transformer ensemble.",
      "Designed YOLOX-based PET bottle sorting for an industrial recycling line and MobileSAM-driven cargo tracking for a 27,000-ton cold-storage logistics hub.",
      "Conducted PoC research on Kimono texture synthesis using pix2pix + TextureGAN GANs; built a zero-server-cost crowd monitoring platform using TensorFlow.js and COCO-SSD.",
    ],
  },
];
