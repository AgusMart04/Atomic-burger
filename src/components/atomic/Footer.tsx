import { Instagram, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 80;
    const elPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: elPosition, behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer className="relative grain isolate overflow-hidden border-t border-border bg-background py-16">
      <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 bg-radial-glow opacity-30" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Atomic Burger"
                className="h-12 w-12 rounded-md object-cover ring-1 ring-white/10"
              />
              <span className="font-display text-2xl tracking-wider">
                ATOMIC<span className="text-primary">.</span>BURGER
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Burgers que explotan de sabor. Marcos Paz — desde la primera
              mordida hasta la última noche.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Navegar
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["experiencia", "Experiencia"],
                ["menu", "Menú"],
                ["galeria", "Galería"],
                ["eventos", "Eventos"],
                ["contacto", "Contacto"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Conectá
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/atomicburgerok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <Instagram size={16} /> @atomicburgerok
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491128342890?text=Hola%20Atomic%20Burger!%20Quiero%20info%20sobre%20el%20men%C3%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-foreground/80">
                <MapPin size={16} /> San Martín 341
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Atomic Burger · Marcos Paz</span>
          <span className="text-primary/90">
            Burgers que explotan de sabor.
          </span>
        </div>
      </div>
    </footer>
  );
}
