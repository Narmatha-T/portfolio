import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <NeuralBackground />

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
