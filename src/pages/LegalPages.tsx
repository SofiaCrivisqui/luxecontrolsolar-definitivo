import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function LegalPage() {
  const { docId } = useParams();

  const content = {
    'privacidad': {
      title: 'Política de Privacidad',
      text: 'Tu privacidad es importante para nosotros. En Luxe Control Solar nos compromemos a proteger la información personal que compartes a través de nuestro sitio web. Los datos recopilados se utilizan exclusivamente para mejorar tu experiencia, enviar cotizaciones solicitadas y ofrecer nuestros servicios de instalación y asesoramiento técnico. No compartimos tu información con terceros sin tu consentimiento explícito. Al utilizar nuestros canales de contacto, aceptas el uso de tus datos para dichos fines.'
    },
    'terminos': {
      title: 'Términos y Condiciones',
      text: 'Al acceder y utilizar este sitio web, aceptas nuestros Términos y Condiciones. Todos los contenidos, diseños, fotografías y logotipos son propiedad intelectual exclusiva de Luxe Control Solar. El uso no autorizado o reproducción de estos materiales está estrictamente prohibido. Toda la información técnica o presupuestaria provista está sujeta a verificación en obra por parte de nuestro equipo. Nos reservamos el derecho de modificar estos términos en cualquier momento.'
    },
    'cookies': {
      title: 'Política de Cookies',
      text: 'Utilizamos cookies y tecnologías similares para personalizar tu experiencia, analizar el tráfico del sitio, recordar tus preferencias y brindarte un mejor servicio general. Al continuar navegando, aceptas nuestro uso de cookies. Puedes configurar tu navegador para rechazar todas o algunas cookies, aunque esto podría afectar negativamente la funcionalidad y fluidez de algunas partes y animaciones del sitio.'
    }
  };

  const key = docId as keyof typeof content;
  const currentDoc = content[key] || {
    title: 'Documento no encontrado',
    text: 'La sección legal que buscas no está disponible o ha sido movida.'
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft size={16} />
          Volver a Inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-medium tracking-tighter mb-12">{currentDoc.title}</h1>
          <div className="prose prose-neutral max-w-none">
            <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed mb-6 gap-6">
              {currentDoc.text}
            </p>
            <div className="h-px w-full bg-brand-ink/10 my-12" />
            <p className="text-sm font-medium tracking-widest uppercase opacity-40">
              Última actualización: Mayo 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
