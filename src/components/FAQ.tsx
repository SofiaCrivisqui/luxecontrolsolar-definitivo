import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Cuánto tiempo demora la Instalación?", a: "El plazo estándar es de 15 a 20 días hábiles desde la confirmación de medidas y seña." },
  { q: "¿Resisten vientos fuertes?", a: "La resistencia al viento depende del modelo de toldo y de sus medidas. Según la configuración, algunos sistemas cuentan con clasificación Clase 2, apta para vientos de hasta 38 km/h, mientras que otros modelos ofrecen mayor resistencia. Además, contamos con la opción de incorporar sensor de viento, que permite retraer el toldo automáticamente ante ráfagas fuertes para proteger el sistema." },
  { q: "¿Qué garantía ofrecen?", a: "Ofrecemos 1 año de garantía escrita en los mecanismos y motorización." },
  { q: "¿Se pueden motorizar sistemas existentes?", a: "En la mayoría de los casos sí, siempre que la estructura original esté en buen estado técnico y pertenezcan a nuestra marca." },
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
