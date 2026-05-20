import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-40 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Estamos aquí para <span className="italic opacity-70">asesorarlo.</span>
          </h2>
          <p className="text-lg opacity-60">
            Contáctenos para recibir atención personalizada sobre nuestras soluciones de control solar premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-ink/5 p-10 rounded-3xl text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-ink text-brand-bg rounded-full flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Showroom</h3>
            <p className="opacity-60 text-sm leading-relaxed">
              Av. del Libertador 1234<br />
              CABA, Argentina<br />
              Lunes a Viernes de 10 a 18hs
            </p>
          </div>

          <div className="bg-brand-ink/5 p-10 rounded-3xl text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-ink text-brand-bg rounded-full flex items-center justify-center mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Teléfono</h3>
            <p className="opacity-60 text-sm leading-relaxed">
              +54 9 351225-9762<br />
              +54 9 351 766-0196
            </p>
          </div>

          <div className="bg-brand-ink/5 p-10 rounded-3xl text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-ink text-brand-bg rounded-full flex items-center justify-center mb-6">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">Email & Redes</h3>
            <p className="opacity-60 text-sm leading-relaxed mb-4">
              info@luxecontrolsolar.com.ar
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/luxecontrolsolar?igsh=czA4cDk5N2pleHV3" className="w-10 h-10 bg-brand-ink/10 rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/luxecontrolsolar" className="w-10 h-10 bg-brand-ink/10 rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-brand-ink text-brand-bg p-10 md:p-16 rounded-3xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-medium mb-4">¿Necesita una cotización rápida?</h3>
          <p className="opacity-60 mb-8 max-w-xl mx-auto">
            Nuestro equipo de especialistas está disponible en WhatsApp para brindarle una respuesta inmediata y asesoramiento técnico.
          </p>
          <a 
            href="https://wa.me/5493517660196" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-accent text-white py-4 px-8 rounded-full font-bold hover:scale-105 transition-transform"
          >
            <MessageCircle size={20} />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
