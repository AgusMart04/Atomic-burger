import { motion } from "framer-motion";
import interior from "@/assets/local-interior.jpg";
import grill from "@/assets/gallery-grill.jpg";
import bar from "@/assets/gallery-bar.jpg";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative grain isolate overflow-hidden border-t border-border bg-background py-28 md:py-40"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            La Experiencia
          </span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-7xl lg:text-8xl">
            BURGERS,
            <br />
            <span className="text-primary text-glow">FUEGO</span> Y NOCHE.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              Atomic Burger nació para romper lo típico. Burgers enormes.
              Ingredientes brutales. Música. Noche. Fuego.
            </p>
            <p>
              Una experiencia distinta desde el primer bocado — entre ladrillo
              oscuro, neones blancos y el glow nuclear del símbolo que nos define.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "Blend", v: "Premium" },
              { k: "Cocina", v: "Abierta" },
              { k: "Ambiente", v: "Nocturno" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-border bg-card/40 p-4 backdrop-blur"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-1 font-display text-2xl text-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[520px] md:h-[640px]"
        >
          <img
            src={interior}
            alt="Interior Atomic Burger"
            loading="lazy"
            className="col-span-4 row-span-4 h-full w-full rounded-2xl object-cover shadow-elevated ring-1 ring-white/10"
          />
          <img
            src={bar}
            alt="Barra del local"
            loading="lazy"
            className="col-span-2 row-span-4 col-start-5 row-start-1 h-full w-full rounded-2xl object-cover shadow-elevated ring-1 ring-white/10"
          />
          <div className="col-span-6 row-span-2 col-start-1 row-start-5 relative overflow-hidden rounded-2xl shadow-elevated ring-1 ring-primary/20">
            <img
              src={grill}
              alt="Cocina en acción"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 px-4 py-2 ring-1 ring-primary/30 backdrop-blur">
                <span className="font-display text-2xl text-primary text-glow leading-none tracking-wider">
                  ATOMIC VIBE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
