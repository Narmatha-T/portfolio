# Narmatha Thiyagarajan — AI Engineer Portfolio

A professional, high-performance portfolio website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Lucide React**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel-optimized

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
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
│   ├── Navbar.tsx         # Sticky navigation bar
│   ├── Hero.tsx           # Hero / above-the-fold section
│   ├── Summary.tsx        # Professional summary
│   ├── Skills.tsx         # Technical skills grid
│   ├── Projects.tsx       # Featured project cards
│   ├── Experience.tsx     # Career timeline
│   ├── Footer.tsx         # Footer with contact links
│   └── WhatsAppButton.tsx # Fixed WhatsApp floating button
├── public/
│   └── resume.pdf         # Place your resume PDF here
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Adding Your Resume

Place your resume PDF file in the `public/` directory as `resume.pdf`. The "Download Resume" button and navbar link will automatically serve it.

## Deployment

This project is optimized for **Vercel**:

1. Push to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

## WhatsApp Integration

The floating button in the bottom-right corner links to WhatsApp chat with `+81 070-9171-0377`. To update the number, edit `components/WhatsAppButton.tsx`:

```ts
const WHATSAPP_NUMBER = "8107091710377";
```
