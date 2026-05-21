import { motion } from "framer-motion";
import { useState } from "react";
import grill from "@/assets/gallery-grill.jpg";

export default function Events() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="eventos"
      className="relative grain isolate overflow-hidden border-t border-border py-28 md:py-40"
    >
      <img
        src={grill}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-radial-glow opacity-40" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Eventos
          </span>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
            ATOMIC <br />
            <span className="text-primary text-glow">EN TU EVENTO.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Cumpleaños. Eventos privados. Empresas. Noches especiales.
            Llevamos la experiencia Atomic donde quieras.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            {["Catering premium", "Estación de burgers en vivo", "Bartender opcional", "Branding del evento"].map(
              (i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-sm" />
                  {i}
                </li>
              )
            )}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl ring-1 ring-primary/30 glass-dark p-8 md:ring-0 md:p-10"
        >
          <h3 className="font-display text-3xl tracking-wider">
            Contanos tu evento
          </h3>
          <div className="mt-6 space-y-4">
            <Field label="Nombre" name="name" />
            <Field label="WhatsApp" name="phone" />
            <Field label="Tipo de evento" name="event" />
            <Field label="Mensaje" name="msg" textarea />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02] animate-pulse-glow"
          >
            {sent ? "Recibido — te escribimos pronto" : "Enviar Consulta"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  textarea,
}: {
  label: string;
  name: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={3} className={`${cls} resize-none`} />
      ) : (
        <input name={name} type="text" className={cls} />
      )}
    </label>
  );
}
