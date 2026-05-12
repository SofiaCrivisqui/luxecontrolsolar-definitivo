import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/hero-ares.png"
          alt="Toldo premium integrado en arquitectura contemporánea"
          className="w-full h-full object-cover object-[65%_50%] opacity-95"
          loading="eager"
        />

        {/* Overlay premium: más oscuro arriba (para menú), más limpio abajo (para producto) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/18 to-black/8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(0,0,0,0.30),rgba(0,0,0,0)_55%)]" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-left"
        >
          <h1 className="text-white font-medium tracking-tighter leading-[0.92] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Sombra, privacidad y{" "}
            <span className="font-serif italic font-medium text-white/95">
              arquitectura
            </span>{" "}
            en un solo gesto.
          </h1>

          <p className="text-white/75 font-light leading-relaxed mb-10 max-w-xl text-base sm:text-lg md:text-xl">
            Sistemas de control solar premium diseñados para integrarse a la
            fachada, transformando la experiencia del espacio exterior.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <a
              href="https://wa.me/5491100000000"
              className="group relative bg-brand-ink text-brand-bg px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 font-semibold tracking-tight">
                Cotización Inmediata
              </span>
              <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            <a
              href="#soluciones"
              className="text-sm uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors underline-grow"
            >
              Ver Soluciones
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">
          Deslizar
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}