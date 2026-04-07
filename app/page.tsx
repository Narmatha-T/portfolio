import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-zinc-950 overflow-x-hidden">
      {/* Ambient grid background */}
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />

      <Navbar />
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
