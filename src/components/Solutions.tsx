import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Toldos Verticales",
    description: "Protección solar vertical con sistema ZIP o guías, ideal para balcones y galerías.",
    image: "/assets/toldo-vertical.jpg",
    features: ["Sistema ZIP anti-viento", "Tejidos Screen", "Privacidad total"],
    id: "toldos-verticales"
  },
  {
    title: "Toldos Proyectantes",
    description: "Brazos invisibles que extienden la sombra sin obstáculos, perfectos para terrazas.",
    image: "/assets/toldo-proyectante.jpg",
    features: ["Brazos articulados", "Cofre de aluminio", "Gran cobertura"],
    id: "toldos-proyectantes"
  },
  {
    title: "Toldos Punto Recto",
    description: "Diseño clásico y robusto con brazos pivotantes para ventanas y locales comerciales.",
    image: "/assets/toldo-recto.jpg",
    features: ["Tensión constante", "Estética tradicional", "Fácil maniobra"],
    id: "toldos-punto-recto"
  }
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 md:py-40 bg-brand-cement/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Catálogo 2026</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none">
              Soluciones que <br />
              <span className="font-serif italic">elevan</span> el estándar.
            </h2>
          </div>
          <p className="text-lg opacity-60 max-w-sm font-light">
            Cada sistema es fabricado a medida con componentes europeos y textiles de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((item, idx) => (
            <Link 
              key={item.id}
              to={`/soluciones/${item.id}`}
              className="group block"
            >
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/0 transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-medium mb-4 flex items-center justify-between">
                  {item.title}
                  <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                
                <p className="text-brand-ink/60 mb-6 font-light leading-relaxed">
                  {item.description}
                </p>
                
                <ul className="space-y-3">
                  {item.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium opacity-80">
                      <div className="w-5 h-5 rounded-full bg-brand-ink/5 flex items-center justify-center">
                        <Check size={12} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-brand-ink/5">
                  <span className="text-xs uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">Ver modelos y fichas técnicas</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
