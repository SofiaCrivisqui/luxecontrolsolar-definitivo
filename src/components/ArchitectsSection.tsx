import { motion } from "motion/react";
import { FileText, Users, Construction, ArrowRight } from "lucide-react";

export default function ArchitectsSection() {
  return (
    <section id="arquitectos" className="py-24 md:py-40 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-brand-cement rounded-[40px] p-8 md:p-20 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Canal Profesional</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8">
              Aliados en la <br />
              <span className="font-serif italic">especificación.</span>
            </h2>
            <p className="text-lg opacity-70 font-light leading-relaxed mb-10">
              Entendemos el lenguaje de la arquitectura. Brindamos soporte técnico desde el anteproyecto 
              hasta la entrega de obra, asegurando que el control solar sea una virtud del diseño.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/50 p-6 rounded-2xl backdrop-blur-sm">
                <FileText className="mb-4 opacity-40" />
                <h4 className="font-bold mb-1">Fichas Técnicas</h4>
                <p className="text-xs opacity-60">Detalles CAD/BIM para integrar a tus planos.</p>
              </div>
              <div className="bg-white/50 p-6 rounded-2xl backdrop-blur-sm">
                <Construction className="mb-4 opacity-40" />
                <h4 className="font-bold mb-1">Visita a Obra</h4>
                <p className="text-xs opacity-60">Relevamiento técnico y asesoramiento en sitio.</p>
              </div>
            </div>

           <a 
              href="https://wa.me/5493517660196?text=Hola! Me interesa hablar con un asesor técnico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-ink text-brand-bg px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Hablar con asesor técnico
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2">
              <img 
                src="/assets/arquitectos.jpg"
                alt="Colaboración con arquitectos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-sand/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-ink/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
