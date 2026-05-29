import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import LegalPages from "./pages/LegalPages";
import { motion, useScroll, useSpring } from "motion/react";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative">
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-brand-ink z-[60] origin-left" 
          style={{ scaleX }} 
        />

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soluciones/:categoryId" element={<CategoryPage />} />
          <Route path="/producto/:productId" element={<ProductPage />} />
          <Route path="/legal/:docId" element={<LegalPages />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}