import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Lucía R.", text: "Las mejores burgers de la zona. Volvería mil veces." },
  { name: "Mateo G.", text: "El ambiente y la música son increíbles. Una experiencia distinta." },
  { name: "Camila P.", text: "La Atomic es una bomba. Imperdible." },
  { name: "Joaquín S.", text: "Calidad premium, atención de 10. Top absoluto." },
  { name: "Sofía L.", text: "Cada detalle suma. Visual, sabor, ambiente. Brutal." },
  { name: "Tomás M.", text: "Mejor cheeseburger que probé en mucho tiempo." },
];

export default function Reviews() {
  return (
    <section className="relative grain isolate overflow-hidden border-t border-border bg-background py-28 md:py-36">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-widest text-primary">
            <Star size={14} className="fill-primary" /> 5.0 · Reseñas reales
          </div>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
            LA <span className="text-primary text-glow">GENTE</span>
            <br />
            HABLA.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="rounded-2xl glass-dark p-7 transition-all hover:ring-glow"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                — {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
