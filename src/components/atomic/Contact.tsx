import { motion } from "framer-motion";
import { MapPin, MessageCircle, Instagram, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative grain isolate overflow-hidden border-t border-border bg-background py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
            VENÍ A <span className="text-primary text-glow">ATOMIC.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Card
            icon={<MapPin size={20} />}
            title="Dirección"
            content="Av. Gral. San Martín 341"
            sub="Marcos Paz, Buenos Aires"
            href="https://maps.google.com/?q=Av.+Gral.+San+Martin+341+Marcos+Paz"
            cta="Cómo llegar"
          />
          <Card
            icon={<MessageCircle size={20} />}
            title="WhatsApp"
            content="+54 9 11 2834-2890"
            sub="Pedidos · Reservas"
            href="https://wa.me/5491128342890?text=Hola%20Atomic%20Burger!%20Quiero%20hacer%20una%20consulta"
            cta="Escribir"
          />
          <Card
            icon={<Instagram size={20} />}
            title="Instagram"
            content="@atomicburgerok"
            sub="Detrás de escena · novedades"
            href="https://instagram.com/atomicburgerok"
            cta="Seguir"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-3xl ring-1 ring-border"
        >
          <div className="relative h-80 md:h-[420px]">
            <iframe
              title="Mapa Atomic Burger"
              src="https://www.google.com/maps?q=Av.+Gral.+San+Mart%C3%ADn+341,+Marcos+Paz&output=embed"
              className="h-full w-full grayscale contrast-125 invert"
              style={{ filter: "invert(0.92) hue-rotate(180deg) contrast(1.1) saturate(0.6)" }}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-primary/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  content,
  sub,
  href,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  sub: string;
  href: string;
  cta: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative block rounded-2xl glass-dark p-7 transition-all hover:-translate-y-1 hover:ring-glow"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
          {icon}
        </span>
        <ExternalLink
          size={16}
          className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
      <h3 className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </h3>
      <p className="mt-2 font-display text-3xl tracking-wide">{content}</p>
      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
      <span className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-primary">
        {cta} →
      </span>
    </motion.a>
  );
}
