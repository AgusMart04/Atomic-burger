import { motion } from "framer-motion";
import veggie from "@/assets/burger-veggie.jpg";

export default function Veggie() {
  return (
    <section className="relative grain isolate overflow-hidden border-t border-border py-24 md:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(120, 220, 130, 0.18), transparent 60%), #050505",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="absolute -inset-4 rounded-3xl"
            style={{ boxShadow: "0 0 80px rgba(120,220,130,0.25)" }}
          />
          <img
            src={veggie}
            alt="Burger Veggie"
            loading="lazy"
            className="relative rounded-3xl ring-1 ring-white/10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "oklch(0.80 0.20 145)" }}
          >
            Línea Veggie
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] md:text-7xl">
            VEGGIE,
            <br />
            <span style={{ color: "oklch(0.85 0.20 145)" }}>MISMO NIVEL</span>
            <br />
            DE LOCURA.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Opciones veggie con el mismo nivel de obsesión. Portobello grillado,
            palta, vegetales asados y panes premium. Sin perder ni un gramo de
            sabor atómico.
          </p>
          <a
            href="https://wa.me/5491128342890?text=Hola%20Atomic%20Burger!%20Quiero%20pedir%20un%20men%C3%BA%20Veggie"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
            style={{
              borderColor: "oklch(0.80 0.20 145)",
              color: "oklch(0.85 0.20 145)",
            }}
          >
            Pedir Veggie
          </a>
        </motion.div>
      </div>
    </section>
  );
}
