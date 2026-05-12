import { motion } from "motion/react";

const steps = [
  { title: "Relevamiento", desc: "Visita técnica para toma de medidas láser y análisis de asoleamiento." },
  { title: "Propuesta", desc: "Diseño a medida y presupuesto detallado con especificaciones textiles." },
  { title: "Fabricación", desc: "Producción artesanal con componentes europeos de alta precisión." },
  { title: "Instalación", desc: "Montaje profesional en seco, limpio y con configuración domótica." },
  { title: "Postventa", desc: "Garantía escrita de 5 años y soporte técnico permanente." },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-40 bg-brand-cement/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Metodología</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">Del plano a la realidad.</h2>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-brand-ink/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((s, idx) => (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-brand-bg lg:bg-transparent p-8 lg:p-0 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-full bg-brand-ink text-brand-bg flex items-center justify-center font-serif italic text-xl mb-8 lg:mx-auto lg:mb-12 shadow-xl">
                  {idx + 1}
                </div>
                <div className="lg:text-center">
                  <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
