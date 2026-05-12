import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import BeforeAfter from "../components/BeforeAfter";
import Benefits from "../components/Benefits";
import ArchitectsSection from "../components/ArchitectsSection";
import Materials from "../components/Materials";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Solutions />
      </motion.div>

      <BeforeAfter />
      
      <Benefits />
      
      <ArchitectsSection />
      
      <Materials />
      
      <Process />
      
      <FAQ />

      <Contact />
    </main>
  );
}
