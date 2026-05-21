import { motion } from "framer-motion";
import { ArrowDown, Flame } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import neon from "@/assets/gallery-neon.jpg";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 80;
    const elPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: elPosition, behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grain isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* BG image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBurger}
          alt="Burger Atómica"
          className="h-full w-full object-cover opacity-60"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
      </div>

      {/* Floating radioactive symbol */}
      <motion.img
        src={neon}
        alt=""
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="pointer-events-none absolute -right-10 top-1/4 -z-10 h-[200px] w-[200px] animate-spin-slow rounded-full object-cover opacity-20 mix-blend-screen md:-right-20 md:h-[480px] md:w-[480px] md:opacity-35"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary"
          >
            <Flame size={14} /> Marcos Paz · Experiencia Premium
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[14vw] leading-[0.85] tracking-tight md:text-[8.5rem] lg:text-[10rem]"
          >
            HAMBURGUESAS
            <br />
            <span className="text-primary text-glow animate-flicker">ATÓMICAS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Blend premium, luces nocturnas y burgers que explotan de sabor.
            Bienvenido a la experiencia más brutal de Marcos Paz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection("menu")}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:scale-[1.03] animate-pulse-glow"
            >
              Ver Menú
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </button>
            <a
              href="https://wa.me/5491128342890?text=Hola%20Atomic%20Burger!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8D%94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full glass-dark px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-white/10 hover:ring-glow"
            >
              Pedir Online
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <div>
              <div className="font-display text-3xl text-foreground">5.0</div>
              Rating
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">10+</div>
              Burgers
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">24/7</div>
              Atomic Vibes
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
