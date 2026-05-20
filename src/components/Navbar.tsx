import { motion } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Soluciones", href: "/#soluciones" },
    { name: "Arquitectos", href: "/#arquitectos" },
    { name: "Proceso", href: "/#proceso" },
    { name: "Contacto", href: "/#contacto" },
  ];
  const linkClass = isScrolled
  ? "text-brand-ink/70 hover:text-brand-ink"
  : "text-white/85 hover:text-white";

const brandClass = isScrolled ? "text-brand-ink" : "text-white";
const subBrandClass = isScrolled ? "text-brand-ink/60" : "text-white/60";
const iconClass = isScrolled ? "text-brand-ink" : "text-white";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-brand-bg/80 backdrop-blur-md py-4 border-b border-brand-ink/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 py-1">
  <img
  src="/assets/logo-2.png"
  alt="Luxe Control Solar"
  className="h-9 md:h-10 w-auto max-w-[160px] object-contain origin-left scale-[1.25] md:scale-[1.35]"
  loading="eager"
/>
  <span className="sr-only">Luxe Control Solar</span>
</a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity underline-grow"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5493517660196" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-brand-accent/20"
          >
            <MessageCircle size={18} />
            Cotización
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-ink/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium border-b border-brand-ink/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5493517660196" 
            className="flex items-center justify-center gap-2 bg-brand-accent text-white py-4 rounded-xl font-bold"
          >
            <MessageCircle size={20} />
            WhatsApp Directo
          </a>
        </motion.div>
      )}
    </nav>
  );
}
