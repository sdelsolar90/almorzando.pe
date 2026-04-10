import { images } from "./images";

export const home = {
  hero: {
    eyebrow: "Comida casera para oficinas",
    title: "Tu equipo,\nsiempre almorzando.",
    sub: "Cocina del día para empresas en Lima. Fresco, rico y al toque, sin drama logístico ni sorpresas en la factura.",
    image: images.heroHome,
    imageAlt: "Plato peruano servido con guarnición fresca",
    ctaPrimary: { label: "Ver menú de hoy", href: "/menus" },
    ctaSecondary: { label: "Lo quiero para mi empresa", href: "/empresas" },
  },
  intro: {
    eyebrow: "Así de simple",
    title: "Comida de verdad, en el escritorio de tu equipo.",
    sub: "Un solo proveedor, un solo pedido, todos almorzando contentos.",
  },
  diferenciadores: {
    eyebrow: "Lo que nos mueve",
    title: "Hecho en Lima, pensado para tu equipo.",
    items: [
      {
        title: "Producto real y fresco",
        body: "Mercado local, ingredientes de temporada y cero conservantes raros. Si lo comemos nosotros, lo comes tú.",
        image: images.freshVegetables,
      },
      {
        title: "Cuidamos Lima",
        body: "Empaques compostables, rutas optimizadas y compra a productores peruanos. Menos huella, más sabor.",
        image: images.packaging,
      },
      {
        title: "Hecho por peruanos",
        body: "Cocineros, repartidores, equipo: todos de acá. Sabemos cómo almuerza tu equipo porque somos tu equipo.",
        image: images.kitchenTeam,
      },
    ],
  },
  ctaBand: {
    title: "¿Que tu equipo almuerce mejor?",
    sub: "Agenda una demo de 15 minutos y te armamos una propuesta a la medida.",
    cta: { label: "Agenda una demo", href: "/contacto" },
  },
};
