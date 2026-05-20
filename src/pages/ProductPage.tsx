import { useParams, Link } from "react-router-dom";
import { categories } from "../data/products";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Check, Ruler, Palette, RotateCw, Layers, X } from "lucide-react";

export default function ProductPage() {
  const { productId } = useParams();
  
  const product = categories
    .flatMap(c => c.products)
    .find(p => p.id === productId);

  const [selectedSupport, setSelectedSupport] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSupport(product.specs.soportes[0]);
      setSelectedFabric(product.specs.telas[0]);
    }
  }, [product]);

  if (!product) return <div className="py-40 text-center">Producto no encontrado</div>;

  const colorHexMap: Record<string, string> = {
    "Black": "#1A1A1A",
    "White": "#FDFDFD",
    "Soltis 96 - Black": "#1A1A1A",
    "Soltis 96 - White": "#FDFDFD",
    "Soltis 96 - Grey": "#808080",
    "Screen Outdoor - Black/Brown": "#3b2f2f",
    "Screen Outdoor - White": "#FDFDFD",
    "Screen Outdoor - Grey": "#808080",
    "Acrílica Advance - Black": "#1A1A1A",
    "Acrílica Advance - Beige": "#F5F5DC",
    "Acrílica Advance - White": "#FDFDFD",
    "Acrílica Advance - Grey": "#808080"
  };

  const groupedTelas = product.specs.telas.reduce((acc, tela) => {
    const [category, color] = tela.split(" - ");
    if (!acc[category]) acc[category] = [];
    acc[category].push({ full: tela, colorName: color });
    return acc;
  }, {} as Record<string, { full: string, colorName: string }[]>);

  const formatName = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const expectedFilename = `toldo-${product.id}-${formatName(selectedFabric)}-${formatName(selectedSupport)}.png`;

  const galleryImages = product.gallery || [
    product.image,
    ...Array.from({ length: 5 }).map((_, i) => `https://picsum.photos/seed/${product.id}-gallery-${i}/800/600`)
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to={`/soluciones/${categories.find(c => c.products.some(p => p.id === productId))?.id}`} 
          className="inline-flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 transition-opacity mb-12"
        >
          <ArrowLeft size={16} />
          Volver a Categoría
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Dynamic Image and Gallery */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[500px] bg-brand-cement/20 rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center p-8"
            >
              <img 
                src={`/assets/${expectedFilename}`}
                alt={`Toldo ${product.name} en ${selectedSupport} y ${selectedFabric}`} 
                className="w-full h-full object-contain transition-opacity duration-300"
                onError={(e) => {
                  setImageError(true);
                  e.currentTarget.src = `https://picsum.photos/seed/${product.id}-${selectedSupport}-${selectedFabric}/800/800`;
                }}
                onLoad={() => setImageError(false)}
                referrerPolicy="no-referrer"
              />
              {imageError && (
                <div className="absolute top-4 left-4 right-4 bg-red-500/90 backdrop-blur z-50 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex flex-col gap-1 border border-red-400">
                  <span className="font-bold flex items-center justify-between">
                    <span>⚠️ Imagen no encontrada</span>
                    <button onClick={() => setImageError(false)} className="opacity-70 hover:opacity-100"><X size={14} /></button>
                  </span>
                  <span className="opacity-90">Por favor nombra tu archivo exactamente así y colócalo en public/assets/:</span>
                  <code className="font-mono bg-black/20 p-2 rounded-lg mt-1 select-all">{expectedFilename}</code>
                </div>
              )}
            </motion.div>

            {/* Controles visuales (Cerca de la imagen) */}
            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-brand-ink/5 space-y-8">
              {/* Soportes */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-cement flex items-center justify-center">
                    <Palette size={16} />
                  </div>
                  <h4 className="font-bold uppercase tracking-widest text-xs">Colores de Componentes</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.specs.soportes.map(s => (
                    <button
                      key={s}
                      onClick={() => setSelectedSupport(s)}
                      className={`group hover:z-50 relative w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedSupport === s 
                          ? "border-brand-accent scale-110 shadow-md" 
                          : "border-transparent hover:scale-105 shadow-sm"
                      }`}
                      style={{ backgroundColor: colorHexMap[s] || "#ccc" }}
                    >
                      {selectedSupport === s && (
                        <div className={`w-2.5 h-2.5 rounded-full ${s === 'White' ? 'bg-brand-ink' : 'bg-white'}`} />
                      )}
                      <span className="absolute -top-10 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 bg-white/95 backdrop-blur px-2 leading-none py-1.5 rounded-md shadow-md border border-brand-ink/10 text-brand-ink pointer-events-none translate-y-1 group-hover:translate-y-0">
                        {s}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Telas */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-cement flex items-center justify-center">
                    <Layers size={16} />
                  </div>
                  <h4 className="font-bold uppercase tracking-widest text-xs">Tela Recomendada</h4>
                </div>
                <div className="space-y-4">
                  {Object.entries(groupedTelas).map(([category, options]) => (
                    <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-60 w-auto sm:w-32 shrink-0 leading-tight">{category}</h5>
                      <div className="flex flex-wrap gap-2.5">
                        {options.map(opt => (
                          <button
                            key={opt.full}
                            onClick={() => setSelectedFabric(opt.full)}
                            className={`group hover:z-50 relative w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                              selectedFabric === opt.full 
                                ? "border-brand-accent scale-110 shadow-md" 
                                : "border-transparent hover:scale-105 shadow-sm"
                            }`}
                            style={{ backgroundColor: colorHexMap[opt.full] || "#ccc" }}
                          >
                            {selectedFabric === opt.full && (
                              <div className={`w-2 h-2 rounded-full ${opt.colorName === 'White' ? 'bg-brand-ink' : 'bg-white'}`} />
                            )}
                            <span className="absolute -top-10 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 bg-white/95 backdrop-blur px-2 leading-none py-1.5 rounded-md shadow-md border border-brand-ink/10 text-brand-ink pointer-events-none translate-y-1 group-hover:translate-y-0">
                              {opt.colorName}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setZoomedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} vista ${i + 1}`} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/${product.id}-gallery-fallback-${i}/800/600`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Sheet */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Ficha Técnica Premium</span>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6">{product.name}</h1>
              <p className="text-xl opacity-60 font-light leading-relaxed mb-12">{product.description}</p>

              {product.features && product.features.length > 0 && (
                <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-brand-accent mt-1 shrink-0" />
                      <p className="text-sm opacity-70">{feature}</p>
                    </div>
                  ))}
                </div>
              )}

             <div className="space-y-10">
                {/* Medidas */}
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-cement flex items-center justify-center">
                      <Ruler size={20} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm">Especificaciones</h4>
                  </div>
                  <div className="text-xl md:text-2xl font-medium tracking-tight flex flex-col gap-2">
                    {(() => {
                      const parts = product.specs.medidas.split('|').map(m => m.trim()).filter(Boolean);
                      const groups: string[] = [];
                      let currentGroup: string[] = [];
                      let currentPrefix = '';
                      
                      parts.forEach(part => {
                        const prefix = part.split(' ')[0].toLowerCase();
                        if (currentPrefix !== prefix) {
                          if (currentGroup.length > 0) {
                            groups.push(currentGroup.join(' | '));
                          }
                          currentGroup = [part];
                          currentPrefix = prefix;
                        } else {
                          currentGroup.push(part);
                        }
                      });
                      if (currentGroup.length > 0) {
                        groups.push(currentGroup.join(' | '));
                      }
                      
                      return groups.map((group, idx) => (
                        <span key={idx} className="block">{group}</span>
                      ));
                    })()}
                  </div>
                </div>

                {/* Accionamiento */}
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-cement flex items-center justify-center">
                      <RotateCw size={20} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm">Accionamiento</h4>
                  </div>
                  <p className="text-2xl font-medium tracking-tight">Manual o Motorizado</p>
                </div>


              </div>

              <div className="mt-16 pt-12 border-t border-brand-ink/5 flex flex-col sm:flex-row gap-6">
                <a 
                  href={`https://wa.me/5491100000000?text=Hola! Me interesa el ${product.name}.`}
                  className="flex-1 bg-brand-accent text-white py-5 rounded-2xl font-bold text-center shadow-xl shadow-brand-accent/20 hover:scale-105 transition-transform"
                >
                  Consultar Presupuesto
                </a>
                
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-lg mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light tracking-tight mb-4">Video de Funcionamiento</h3>
            <p className="text-brand-ink/60">Conoce en detalle cómo funciona el sistema {product.name}.</p>
          </div>
          <div className="relative w-full aspect-square bg-brand-ink rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center">
            <video 
              className="w-full h-full object-cover" 
              controls 
              muted
              playsInline
            >
              <source src={`/assets/toldo-${product.id}-video.mp4`} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </motion.div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-accent transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={zoomedImage} 
            alt="Zoomed view" 
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" 
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = `https://picsum.photos/seed/${product?.id}-gallery-fallback-zoom/800/800`;
            }}
          />
        </div>
      )}
    </div>
  );
}
