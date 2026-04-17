import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
  icons: { icon: "/icon.svg" },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme by setting class before paint */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');if(s==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
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
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
