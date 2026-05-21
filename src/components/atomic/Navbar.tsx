import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const LINKS = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#menu", label: "Menú" },
  { href: "#compartir", label: "Para Compartir" },
  { href: "#galeria", label: "Galería" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contacto", label: "Contacto" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 80;
    const elPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: elPosition, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollToSection(href), 350);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 glass-dark" : "py-4 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" onClick={() => scrollToSection("#top")} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Atomic Burger"
            className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10"
          />
          <span className="font-display text-xl tracking-wider md:text-2xl">
            ATOMIC<span className="text-primary">.</span>BURGER
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(l.href);
                }}
                className="group relative text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5491128342890?text=Hola%20Atomic%20Burger!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8D%94"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105 hover:shadow-glow-sm lg:inline-flex"
        >
          Pedir Online
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-md p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass-dark"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleLinkClick(l.href)}
                    className="block w-full text-left py-3 font-display text-2xl tracking-wider text-foreground"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <a
                href="https://wa.me/5491128342890?text=Hola%20Atomic%20Burger!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8D%94"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                Pedir Online
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
