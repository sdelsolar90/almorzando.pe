export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pasamos de coordinar tres apps distintas a un solo pedido para todo el equipo. Y todos comen contentos. Ganamos tiempo y buena vibra.",
    author: "Valeria Cárdenas",
    role: "People Ops",
    company: "Nodos Lab",
  },
  {
    quote:
      "El menú cambia cada semana y siempre hay algo criollo. Mi equipo lo espera. Eso antes no pasaba con los otros proveedores.",
    author: "Diego Mendoza",
    role: "Head of Admin",
    company: "Puma Tech",
  },
  {
    quote:
      "Pedimos lomo saltado un lunes y me dijeron 'este es el mejor que comí en la oficina'. A eso apostamos.",
    author: "Rocío Terán",
    role: "Office Manager",
    company: "Llama Finance",
  },
];
