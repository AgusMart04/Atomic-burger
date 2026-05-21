import { motion } from "framer-motion";
import atomic from "@/assets/burger-atomic.jpg";
import mexican from "@/assets/burger-mexican.jpg";
import crispy from "@/assets/burger-crispy.jpg";

type Burger = {
  name: string;
  desc: string;
  ingredients: string;
  prices: { simple: number; doble: number; triple: number };
  image: string;
  badge?: string;
  featured?: boolean;
};

const BURGERS: Burger[] = [
  {
    name: "Atomic",
    desc: "La que lo empezó todo. Brutal, explosiva, irrepetible.",
    ingredients: "Doble carne · cheddar fundido · bacon · cebolla caramelizada · salsa atomic",
    prices: { simple: 7900, doble: 9500, triple: 11500 },
    image: atomic,
    badge: "MÁS VENDIDA",
    featured: true,
  },
  {
    name: "Oppenheimer",
    desc: "Una bomba de sabor. Con onda.",
    ingredients: "Carne smash · cheddar · cebolla crispy · panceta · BBQ ahumada",
    prices: { simple: 7600, doble: 9100, triple: 10900 },
    image: atomic,
    badge: "EXPLOSIVA",
  },
  {
    name: "Crispy Onion",
    desc: "Aros de cebolla dorados y queso al límite.",
    ingredients: "Carne · cheddar · aros crispy · mayo ahumada",
    prices: { simple: 7200, doble: 8600, triple: 10300 },
    image: crispy,
    badge: "FAVORITA",
  },
  {
    name: "Mexican",
    desc: "Picante, fresca, intensa.",
    ingredients: "Carne · cheddar · jalapeños · guacamole · nachos · pico de gallo",
    prices: { simple: 7500, doble: 9000, triple: 10800 },
    image: mexican,
    badge: "PREMIUM",
  },
  {
    name: "Provocativa",
    desc: "Dulce, salada, peligrosa.",
    ingredients: "Carne · cheddar · bacon caramelizado · cebolla morada · salsa tentadora",
    prices: { simple: 7400, doble: 8800, triple: 10600 },
    image: atomic,
  },
  {
    name: "Garrison",
    desc: "Para los que vienen con hambre real.",
    ingredients: "Carne · cheddar · bacon · huevo · cebolla grillada · salsa de la casa",
    prices: { simple: 7700, doble: 9200, triple: 11000 },
    image: crispy,
  },
  {
    name: "BM",
    desc: "Clásica con identidad atómica.",
    ingredients: "Carne · cheddar · lechuga · tomate · pickles · salsa BM",
    prices: { simple: 6900, doble: 8200, triple: 9800 },
    image: atomic,
  },
  {
    name: "Pampeana",
    desc: "Hecha con corazón argentino.",
    ingredients: "Carne · provolone · jamón · morrones grillados · chimichurri",
    prices: { simple: 7300, doble: 8700, triple: 10400 },
    image: mexican,
  },
  {
    name: "Classic",
    desc: "Pura, simple, perfecta.",
    ingredients: "Carne · cheddar · lechuga · tomate · cebolla · mayo",
    prices: { simple: 6500, doble: 7800, triple: 9300 },
    image: crispy,
  },
  {
    name: "Cheeseburger",
    desc: "Cheddar fundido sin culpa.",
    ingredients: "Carne · doble cheddar · pickles · mostaza · ketchup",
    prices: { simple: 6300, doble: 7500, triple: 9000 },
    image: atomic,
    badge: "NUEVA",
  },
];

const fmt = (n: number) => `$${n.toLocaleString("es-AR")}`;

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative grain isolate overflow-hidden border-t border-border bg-background py-28 md:py-40"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 bg-radial-glow opacity-40" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            El Menú
          </span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
            BURGERS QUE
            <br />
            <span className="text-primary text-glow">EXPLOTAN.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Elegí simple, doble o triple. Cada una pensada para detonar.
          </p>
          <div className="mt-5 flex items-center justify-center md:hidden">
            <div className="inline-flex items-center gap-3 rounded-full glass-dark px-5 py-3 ring-1 ring-primary/25">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/90">
                Deslizá para ver más
              </span>
              <svg
                className="h-5 w-5 animate-pulse text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-20 bg-gradient-to-l from-background to-transparent md:block lg:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent lg:hidden" />

          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
            {BURGERS.map((b, i) => (
              <motion.article
                key={b.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className={`group relative flex min-w-[85vw] snap-center flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:min-w-0 ${
                  b.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-56 overflow-hidden md:h-64">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {b.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm">
                      {b.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-3xl tracking-wide md:text-4xl">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  <p className="mt-4 text-xs leading-relaxed text-foreground/70">
                    {b.ingredients}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4 md:mt-6">
                    {(["simple", "doble", "triple"] as const).map((t) => (
                      <div key={t} className="text-center">
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {t}
                        </div>
                        <div className="mt-1 font-display text-lg text-primary">
                          {fmt(b.prices[t])}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
