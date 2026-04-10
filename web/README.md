# almorzando.pe — web

Sitio de marketing de **almorzando.pe**, comida casera y saludable para empresas en Lima. Next.js 15 + Tailwind CSS v4 + TypeScript.

## Stack

- Next.js 15 (App Router, React Server Components, React 19)
- TypeScript (strict)
- Tailwind CSS v4 con tokens inline en `app/globals.css` vía `@theme`
- `next/font/google` para Fraunces, DM Sans y DM Mono
- `lucide-react` para iconografía
- `framer-motion` para micro-interacciones (acordeón FAQ)

## Correrlo

```bash
cd web
npm install
npm run dev   # http://localhost:3000
```

Otros scripts:

```bash
npm run build   # build de producción
npm run start   # servir build
npm run lint    # eslint
```

## Estructura

```
web/
├── app/                    # App Router: layout + 11 rutas estáticas
│   ├── layout.tsx          # Fonts, metadata, Header, Footer
│   ├── globals.css         # Tailwind v4 + @theme + base
│   ├── page.tsx            # Home
│   ├── menus/
│   ├── como-funciona/
│   ├── empresas/
│   ├── por-que/
│   ├── nutricion/
│   ├── faqs/
│   ├── contacto/
│   └── legal/{aviso-legal,cookies}
├── components/
│   ├── layout/             # Header, Footer, Container
│   ├── ui/                 # Button, Badge, Logo, SectionTitle
│   └── sections/           # Hero, BenefitsGrid, MenuGrid, ... (11 secciones)
├── content/                # Copy, menús, FAQs, imágenes — fuente única
├── lib/cn.ts               # clsx + tailwind-merge
└── public/                 # brand/ og/
```

## Tokens de marca

Definidos en `app/globals.css` con `@theme` (Tailwind v4). Cambiar ahí impacta todo el sitio:

```css
--color-tierra: #1A1A0F;    /* surface default dark */
--color-aji: #E8A020;       /* acento — nunca fondo */
--color-arroz: #F5F0E0;     /* surface claro */
--color-huacatay: #4A7C3F;  /* saludable / veggie */
--color-gris-lomo: #8C8C70;

--font-display: "Fraunces", serif;
--font-sans: "DM Sans", sans-serif;
--font-mono: "DM Mono", monospace;
```

Uso en clases: `bg-tierra`, `text-arroz`, `border-aji`, `font-display`, etc.

## Dónde editar qué

- **Copy de una página** → `content/home.ts`, `content/faqs.ts`, `content/steps.ts`, etc.
- **Menús y platos** → `content/menus.ts` (ojo con `dish.tags` y `dish.allergens`).
- **Formatos de menú y precios** → `content/formats.ts`.
- **Testimonios** → `content/testimonials.ts`.
- **Imágenes Unsplash** → `content/images.ts` (todas centralizadas).
- **Navegación header/footer** → `content/navigation.ts`.
- **Nuevas secciones** → crear en `components/sections/` y componer en la página.

## Imágenes

Todas las imágenes son fetches de Unsplash (`images.unsplash.com`), habilitadas en `next.config.ts`. Para cambiar una, edita la URL en `content/images.ts` — hay un helper `u(id, w)` que aplica `auto=format&fit=crop&w=...&q=80` por defecto.

Cuando haya shoot propio, reemplazar `content/images.ts` por rutas en `/public/media/` y apuntar `next/image` ahí.

## Reglas de marca críticas

- Ají (`#E8A020`) **solo** como acento de CTA, badge, subrayado. Nunca como fondo grande.
- H1/H2 siempre en Fraunces (`font-display`).
- Body/UI en DM Sans (`font-sans`).
- Precios, horarios, eyebrows en DM Mono (`font-mono`).
- Nada de iconografía andina folclórica.
- Voz cercana, sin corporativismo: *almuerzo, al toque, ya está, sin drama*. Evitar: *healthy, food service, experiencia culinaria premium*.

Resumen del manual en `../brand/manual-marca.md`.

## Fuera de alcance (v1)

- Ecommerce / carrito / checkout.
- Backend / API / auth.
- Blog.
- Multi-idioma (solo español Perú).
- Panel admin / reporting real.

Estas fases son hitos siguientes, no este release.

## Verificación rápida

1. `npm run dev` → `http://localhost:3000` sin errores de consola.
2. Recorrer: `/`, `/menus`, `/como-funciona`, `/empresas`, `/por-que`, `/nutricion`, `/faqs`, `/contacto`, `/legal/aviso-legal`, `/legal/cookies`.
3. `npm run build` → 13 rutas static, sin errores de tipos.
4. `npm run lint` → clean.
5. Lighthouse: Performance > 90, Accessibility > 95, SEO > 95.
