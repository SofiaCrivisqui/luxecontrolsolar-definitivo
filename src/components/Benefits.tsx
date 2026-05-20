import { motion } from "motion/react";
import { Thermometer, Shield, Eye, Clock, Zap, Settings, Layout, Award } from "lucide-react";

const benefits = [
  { icon: Thermometer, title: "Confort térmico", desc: "Reduce la ganancia de calor solar hasta un 90%." },
  { icon: Shield, title: "Protección UV", desc: "Preserva muebles y pisos del desgaste solar." },
  { icon: Eye, title: "Control visual", desc: "Regula la visibilidad y reduce la exposición del espacio." },
  { icon: Award, title: "Durabilidad exterior", desc: "Materiales resistentes a la corrosión y rayos UV." },
  { icon: Zap, title: "Maniobra suave", desc: "Sistemas motorizados con tecnología Somfy." },
  { icon: Settings, title: "Cero mantenimiento", desc: "Diseñados para durar décadas sin intervenciones." },
  { icon: Layout, title: "Integración estética", desc: "Perfiles minimalistas que no alteran la fachada." },
  { icon: Clock, title: "Instalación profesional", desc: "Equipo propio especializado en obras de alta gama." },
];

export default function Benefits() {
  return (
    <section className="py-24 md:py-40 bg-brand-ink text-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Excelencia Técnica</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">
            Ingeniería que <br />
            <span className="font-serif italic">respeta</span> el diseño.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {benefits.map((b, idx) => (
            <motion.div 
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <motion.div 
                initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)", color: "rgba(255, 255, 255, 1)" }}
                whileInView={{ backgroundColor: "rgba(255, 90, 0, 0.2)", color: "#FF5A00" }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                className="mb-6 inline-block p-4 rounded-2xl transition-colors"
              >
                <b.icon size={24} />
              </motion.div>
              <h4 className="text-xl font-medium mb-3">{b.title}</h4>
              <p className="text-sm opacity-50 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
