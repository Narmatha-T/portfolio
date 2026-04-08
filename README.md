# Narmatha Thiyagarajan — Portfolio

Personal portfolio website for Narmatha Thiyagarajan, AI Engineer based in Tokyo, Japan.

Built with **Next.js**, **Tailwind CSS**, and **TypeScript** — with bilingual support (English / Japanese) and scroll-reveal animations.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **i18n:** Custom context-based EN/JP translation
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composition
├── components/
│   ├── Navbar.tsx         # Sticky navigation bar with language toggle
│   ├── Hero.tsx           # Hero / above-the-fold section
│   ├── Summary.tsx        # Professional summary & highlights
│   ├── Skills.tsx         # Technical skills grid
│   ├── Projects.tsx       # Featured project cards
│   ├── Experience.tsx     # Career timeline
│   ├── Footer.tsx         # Footer with contact links
│   ├── Logo.tsx           # Logo component
│   ├── ScrollReveal.tsx   # Scroll-triggered reveal animations
│   └── WhatsAppButton.tsx # Fixed WhatsApp floating button
├── context/
│   └── LanguageContext.tsx # EN/JP language state provider
├── lib/
│   ├── data.ts            # All static content (projects, experience, skills)
│   └── i18n.ts            # English and Japanese translations
└── public/
    └── resume.pdf         # Resume PDF
```

## Content

All portfolio content lives in `lib/data.ts` — projects, experience highlights, skills, and nav links. Translations are managed in `lib/i18n.ts`.

## Deployment

Deployed on **Vercel**. To deploy your own fork:

1. Push to a GitHub repository
2. Import at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**
