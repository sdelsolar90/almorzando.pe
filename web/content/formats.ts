import type { Course } from "./menus";

export type Format = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  courses: Course[];
  includes: string[];
  highlight?: boolean;
};

export const formats: Format[] = [
  {
    id: "completo",
    name: "Menú Completo",
    tagline: "El clásico bien hecho",
    price: 26,
    description: "Entrada, segundo y postre. El combo de toda la vida.",
    courses: ["entrada", "segundo", "postre"],
    includes: [
      "Entrada del día",
      "Segundo principal",
      "Guarnición (arroz, papa o ensalada)",
      "Postre casero",
      "Botella de agua",
    ],
    highlight: true,
  },
  {
    id: "dia",
    name: "Menú del Día",
    tagline: "Directo al plato fuerte",
    price: 22,
    description: "Entrada y segundo. Para cuando el día está cargado.",
    courses: ["entrada", "segundo"],
    includes: [
      "Entrada del día",
      "Segundo principal",
      "Guarnición",
      "Botella de agua",
    ],
  },
  {
    id: "medio",
    name: "Medio Menú",
    tagline: "Solo el fondo, al grano",
    price: 17,
    description: "Nada más que el segundo. Sabor criollo al cien.",
    courses: ["segundo"],
    includes: ["Segundo principal", "Guarnición"],
  },
  {
    id: "maxi",
    name: "Menú MAXI",
    tagline: "Para el hambre de verdad",
    price: 32,
    description: "Entrada, segundo XL, postre y bebida. Nosotros no juzgamos.",
    courses: ["entrada", "segundo", "postre", "bebida"],
    includes: [
      "Entrada del día",
      "Segundo en porción grande",
      "Guarnición doble",
      "Postre casero",
      "Bebida de casa (chicha o limonada)",
    ],
  },
];
