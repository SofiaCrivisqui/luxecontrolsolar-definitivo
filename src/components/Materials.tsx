import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

const componentFinishes = [
  { name: "Black", color: "#1A1A1A", type: "Pintura Electrostática" },
  { name: "White", color: "#FDFDFD", type: "Pintura Electrostática" },
];

const fabricTypes = [
  {
    category: "Soltis 96 Microperforada",
    description: "Tejido técnico microperforado que bloquea el calor manteniendo la visibilidad.",
    options: [
      { name: "Black", color: "#222222" },
      { name: "White", color: "#F5F5F5" },
      { name: "Grey", color: "#808080" },
    ]
  },
  {
    category: "Screen Outdoor",
    description: "Tejido de alta tenacidad diseñado para soportar las inclemencias del exterior.",
    options: [
      { name: "Black / Brown", color: "#3b2f2f" },
      { name: "White", color: "#FAFAFA" },
      { name: "Grey", color: "#9E9E9E" },
    ]
  },
  {
    category: "Acrílica Sólida Advance",
    description: "Lona acrílica tintada en masa, máxima resistencia a la decoloración y repelente al agua.",
    options: [
      { name: "Black", color: "#111111" },
      { name: "Beige", color: "#D2B48C" },
      { name: "White", color: "#FFFFFF" },
      { name: "Grey", color: "#757575" },
    ]
  }
];

export default function Materials() {
  const formatName = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <section className="py-24 md:py-40 bg-white text-brand-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Materialidad</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
            Acabados y <span className="font-serif italic text-brand-accent">Texturas</span>
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto font-light">
            Selección de materiales premium diseñados para resistir el paso del tiempo y las condiciones más exigentes.
          </p>
        </div>

        {/* Component Finishes */}
        <div className="mb-32">
          <h3 className="text-2xl font-medium mb-12 text-center tracking-tight">Acabados de los Componentes</h3>
          <div className="flex flex-wrap justify-center gap-16">
            {componentFinishes.map((f, idx) => (
              <motion.div 
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 shadow-lg border border-brand-ink/10 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden"
                  style={{ backgroundColor: f.color }}
                >
                  <img 
                    src={`/assets/acabado-${formatName(f.name)}.jpg`}
                    alt={`Acabado ${f.name}`}
                    className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
                    onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-sm font-bold mb-1 uppercase tracking-widest">{f.name}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-medium">{f.type}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fabric Types */}
        <div>
          <h3 className="text-2xl font-medium mb-16 text-center tracking-tight">Tipos de Telas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {fabricTypes.map((fabric, categoryIdx) => (
              <motion.div 
                key={fabric.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIdx * 0.2 }}
                className="flex flex-col"
              >
                <h4 className="text-xl font-bold mb-3 tracking-tight">{fabric.category}</h4>
                <p className="text-sm opacity-60 mb-8 min-h-[40px] leading-relaxed">{fabric.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {fabric.options.map((opt, idx) => (
                    <div key={opt.name} className="flex flex-col group">
                      <div 
                        className="w-full aspect-square rounded-xl mb-3 shadow-sm border border-brand-ink/10 relative overflow-hidden group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: opt.color }}
                      >
                        <img 
                          src={`/assets/tela-${formatName(fabric.category)}-${formatName(opt.name)}.jpg`}
                          alt={`Tela ${fabric.category} ${opt.name}`}
                          className="w-full h-full object-cover absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
                          title={`Sugerencia de nombre archivo: tela-${formatName(fabric.category)}-${formatName(opt.name)}.jpg`}
                          onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Subtle texture overlay to simulate fabric */}
                        <div className="absolute inset-0 opacity-20 mix-blend-multiply z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
                      </div>
                      <div className="flex flex-col text-center">
                        <span className="text-xs font-bold uppercase tracking-wider">{opt.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}