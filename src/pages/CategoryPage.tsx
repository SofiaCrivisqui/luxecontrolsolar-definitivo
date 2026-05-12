import { useParams, Link } from "react-router-dom";
import { categories } from "../data/products";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);

  if (!category) return <div className="py-40 text-center">Categoría no encontrada</div>;

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft size={16} />
          Volver a Inicio
        </Link>

        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">{category.title}</h1>
          <p className="text-xl opacity-60 font-light leading-relaxed">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {category.products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/producto/${product.id}`}>
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-brand-ink/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/0 transition-colors" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-medium mb-2 tracking-tight">{product.name}</h3>
                    <p className="text-brand-ink/60 font-light">{product.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
