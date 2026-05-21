import { useState } from "react";
import { motion } from "framer-motion";
import bar from "@/assets/gallery-bar.jpg";
import grill from "@/assets/gallery-grill.jpg";
import neon from "@/assets/gallery-neon.jpg";
import interior from "@/assets/local-interior.jpg";
import burger from "@/assets/burger-atomic.jpg";
import Lightbox from "./Lightbox";

const GALLERY_IMAGES = [
  { src: bar, alt: "Barra del local" },
  { src: grill, alt: "Cocina en acción" },
  { src: neon, alt: "Luces neón" },
  { src: interior, alt: "Interior del local" },
  { src: burger, alt: "Burger atómica" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const tiles = [
    { src: bar, cls: "col-span-2 h-[280px] md:col-span-2 md:row-span-2 md:h-[480px]" },
    { src: grill, cls: "h-[200px] md:h-[240px]" },
    { src: neon, cls: "h-[200px] md:h-[240px]" },
    { src: interior, cls: "h-[200px] md:col-span-2 md:h-[240px]" },
    { src: burger, cls: "h-[200px] md:col-span-4 md:h-[300px]" },
  ];

  return (
    <section
      id="galeria"
      className="relative grain isolate overflow-hidden border-t border-border bg-background py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Galería
          </span>
          <h2 className="mt-3 font-display text-6xl leading-[0.9] md:text-8xl">
            NOCHE <span className="text-primary text-glow">ATOMIC.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Un ambiente íntimo, oscuro y cinematográfico — pensado para vivirse.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setActiveIndex(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ring-1 ring-border transition-all hover:ring-primary/40 ${t.cls}`}
            >
              <img
                src={t.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
