# Atomic Burger — Landing Page

Landing page para **Atomic Burger**, hamburguesería premium en Marcos Paz, Buenos Aires. Diseño dark cinematográfico con estética atómica y acentos en dorado nuclear.

## Tech Stack

- **Vite** 7 + **React** 19 + **TypeScript**
- **TanStack Router** (file-based routing, SPA)
- **Tailwind CSS** 4 + **shadcn/ui** components
- **Framer Motion** (animaciones)
- **Lucide React** (iconos)

## Scripts

```bash
npm run dev        # Dev server (localhost:5173)
npm run build      # Type check + production build
npm run build:dev  # Build en modo desarrollo
npm run preview    # Preview del build de producción
npm run lint       # ESLint
npm run format     # Prettier
```

## Estructura

```
src/
├── components/
│   ├── atomic/       # Componentes de la landing
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Menu.tsx
│   │   ├── Veggie.tsx
│   │   ├── Sharing.tsx
│   │   ├── Gallery.tsx
│   │   ├── Reviews.tsx
│   │   ├── Events.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Lightbox.tsx
│   └── ui/           # shadcn/ui components
├── routes/
│   ├── __root.tsx    # Root route
│   └── index.tsx     # Landing page
├── assets/           # Imágenes
├── lib/
│   └── utils.ts      # cn() helper
├── hooks/
│   └── use-mobile.tsx
├── styles.css        # Tailwind + custom theme
├── router.tsx        # TanStack Router setup
└── main.tsx          # Entry point
```

## Features

- **Navegación** — Scroll suave con offset para navbar fijo, menú responsive con animación
- **Hero** — Tipografía display animada, imagen atómica giratoria, CTAs con scroll suave
- **Menú** — Carousel horizontal en móvil con snap, grid 2/3 columnas en desktop
- **Galería** — Layout bento responsive, lightbox con navegación por teclado
- **Eventos** — Formulario con validación visual, borde dorado en móvil
- **Contacto** — Cards con links externos, mapa Google embebido con filtro dark
- **Scroll-to-top** — Botón flotante con animación fade/scale
- **WhatsApp** — Todos los CTAs con mensajes pre-llenados personalizados
- **Color system** — Tema dark con acento dorado `#f0b700`, glows y gradientes atómicos

## Deploy

Build de producción:

```bash
npm run build
```

El output va a `dist/`. Compatible con Vercel, Netlify, Cloudflare Pages, o cualquier hosting estático.
