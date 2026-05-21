import { motion } from "framer-motion";
import fries from "@/assets/sides-fries.jpg";
import tenders from "@/assets/sides-tenders.jpg";
import rings from "@/assets/sides-rings.jpg";

const ITEMS = [
  { name: "Papas Americanas", desc: "Crocantes con cheddar y bacon.", img: fries, price: "$5.900" },
  { name: "Papas Alemanas", desc: "Cremosas, salsa de la casa.", img: fries, price: "$5.500" },
  { name: "Bastones de Mozzarella", desc: "Empanados, queso fundido.", img: tenders, price: "$4.800" },
  { name: "Chicken Tenders", desc: "Pollo crispy con dips premium.", img: tenders, price: "$6.200" },
  { name: "Tequeños", desc: "Estilo venezolano con queso brutal.", img: tenders, price: "$4.500" },
  { name: "Aros de Cebolla", desc: "Dorados, gigantes, adictivos.", img: rings, price: "$4.900" },
  { name: "Nuggets", desc: "Clásicos, con la dosis exacta de crocancia.", img: tenders, price: "$5.300" },
];

export default function Sharing() {
  return (
    <section
      id="compartir"
      className="relative grain isolate overflow-hidden border-t border-border bg-background py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Para Compartir
            </span>
            <h2 className="mt-3 font-display text-6xl leading-[0.9] md:text-8xl">
              STREET <span className="text-primary text-glow">FOOD</span>
              <br />
              PREMIUM.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            La previa, el centro o el cierre de la noche. Pensado para que la
            mesa explote.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-border transition-all hover:ring-primary/40"
            >
              <img
                src={it.img}
                alt={it.name}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl tracking-wider">
                      {it.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {it.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
