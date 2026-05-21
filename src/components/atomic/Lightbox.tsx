import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  activeIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, activeIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(activeIndex);

  useEffect(() => {
    setCurrent(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, images.length]);

  const goPrev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Cerrar"
        >
          <X size={28} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-white md:left-6"
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>

        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain md:max-w-[75vw]"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-white/60 transition-colors hover:bg-white/10 hover:text-white md:right-6"
          aria-label="Siguiente"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium uppercase tracking-widest text-white/50">
          {current + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
