import { motion } from "motion/react";
import { useState, MouseEvent, TouchEvent } from "react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="py-24 md:py-40 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold opacity-40 mb-4 block">Transformación</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8">
              Coherencia formal, <br />
              <span className="font-serif italic">plano limpio.</span>
            </h2>
            <p className="text-lg opacity-70 font-light leading-relaxed mb-10">
              Nuestros sistemas eliminan el volumen visual innecesario. 
              Logramos una integración perfecta donde la tecnología se vuelve invisible 
              cuando no está en uso.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-4xl font-serif italic opacity-20">01</div>
                <div>
                  <h4 className="font-bold mb-2">Sin obra invasiva</h4>
                  <p className="text-sm opacity-60">Instalación precisa sobre fachadas existentes o nuevas.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif italic opacity-20">02</div>
                <div>
                  <h4 className="font-bold mb-2">Eficiencia Térmica</h4>
                  <p className="text-sm opacity-60">Reducción de hasta 8°C en interiores sin aire acondicionado.</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <img 
                src="/assets/after.jpg" 
                alt="Después" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-brand-bg/90 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">Con Luxe Control Solar</div>
            </div>

            {/* Before Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src="/assets/before.jpg"
                alt="Antes" 
                className="w-full h-full object-cover"
                style={{ width: `calc(100 * (100 / ${sliderPos})%)` }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-brand-ink/90 text-brand-bg px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">Estado Original</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-px bg-white z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-brand-ink rounded-full" />
                  <div className="w-1 h-1 bg-brand-ink rounded-full" />
                  <div className="w-1 h-1 bg-brand-ink rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
