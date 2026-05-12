import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Cuánto tiempo demora la fabricación?", a: "El plazo estándar es de 15 a 20 días hábiles desde la confirmación de medidas y seña." },
  { q: "¿Resisten vientos fuertes?", a: "Nuestros sistemas están certificados para Clase 2 de viento. Incluimos sensores que retraen el toldo automáticamente ante ráfagas peligrosas." },
  { q: "¿Qué garantía ofrecen?", a: "Ofrecemos 5 años de garantía escrita en los mecanismos y motorización, y 10 años en la solidez del color de los textiles." },
  { q: "¿Se pueden motorizar sistemas existentes?", a: "En la mayoría de los casos sí, siempre que la estructura original esté en buen estado técnico." },
  { q: "¿Realizan envíos al interior?", a: "Sí, realizamos envíos a todo el país con instructivos de instalación detallados para equipos locales." },
  { q: "¿Qué mantenimiento requieren?", a: "Mínimo. Solo limpieza periódica con agua y jabón neutro. No requieren lubricación externa." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Soporte</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="border-b border-brand-ink/5">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={`text-lg font-medium transition-colors ${openIdx === idx ? 'text-brand-ink' : 'text-brand-ink/60 group-hover:text-brand-ink'}`}>
                  {f.q}
                </span>
                {openIdx === idx ? <Minus size={20} /> : <Plus size={20} className="opacity-40" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-brand-ink/60 leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
