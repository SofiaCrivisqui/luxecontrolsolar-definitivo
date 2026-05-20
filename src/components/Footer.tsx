import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <img src="/assets/logo.png" alt="Luxe Control Solar" className="h-10" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
              <div className="hidden text-2xl font-semibold tracking-tighter flex items-center gap-2">
                <span className="w-10 h-10 bg-brand-bg text-brand-ink flex items-center justify-center rounded-sm text-sm font-bold">L</span>
                LUXE <span className="font-light opacity-60">CONTROL SOLAR</span>
              </div>
            </Link>
            <p className="text-sm opacity-50 leading-relaxed max-w-xs">
              Líderes en soluciones de control solar premium para arquitectura contemporánea en Argentina.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 opacity-40">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/#soluciones" className="opacity-60 hover:opacity-100 transition-opacity">Soluciones</Link></li>
              <li><Link to="/#arquitectos" className="opacity-60 hover:opacity-100 transition-opacity">Arquitectos</Link></li>
              <li><Link to="/#proceso" className="opacity-60 hover:opacity-100 transition-opacity">Proceso</Link></li>
              <li><Link to="/#contacto" className="opacity-60 hover:opacity-100 transition-opacity">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 opacity-40">Productos</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/soluciones/toldos-proyectantes" className="opacity-60 hover:opacity-100 transition-opacity">Toldos proyectantes</Link></li>
              <li><Link to="/soluciones/toldos-verticales" className="opacity-60 hover:opacity-100 transition-opacity">Toldos verticales</Link></li>
              <li><Link to="/soluciones/toldos-punto-recto" className="opacity-60 hover:opacity-100 transition-opacity">Toldos punto recto</Link></li>
              <li><Link to="/#soluciones" className="opacity-60 hover:opacity-100 transition-opacity">Ver todas las soluciones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 opacity-40">Social</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://www.instagram.com/luxecontrolsolar?igsh=czA4cDk5N2pleHV3" className="opacity-60 hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="https://www.facebook.com/luxecontrolsolar" className="opacity-60 hover:opacity-100 transition-opacity">Pinterest</a></li>
              <li><a href="#" className="opacity-60 hover:opacity-100 transition-opacity">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest opacity-30">
            © 2026 Luxe Control Solar. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-30">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacidad</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Términos</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a 
          href="https://wa.me/5493517660196"
          className="flex items-center justify-center gap-3 bg-brand-accent text-white py-5 rounded-2xl font-bold shadow-2xl shadow-brand-accent/40"
        >
          <MessageCircle size={20} />
          Cotización Inmediata
        </a>
      </div>
    </footer>
  );
}