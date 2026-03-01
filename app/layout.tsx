import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Narmatha Thiyagarajan — AI Engineer",
  description:
    "AI Engineer based in Tokyo, Japan. Specialized in Computer Vision, LLMs, and Scalable Backend Systems. Team Lead at Akatsuki AI Technologies.",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "LLM",
    "Machine Learning",
    "Tokyo",
    "Narmatha Thiyagarajan",
  ],
  authors: [{ name: "Narmatha Thiyagarajan" }],
  openGraph: {
    title: "Narmatha Thiyagarajan — AI Engineer",
    description:
      "Building responsibly, delivering end-to-end AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
