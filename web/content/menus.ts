import { images } from "./images";

export type Allergen = "gluten" | "lactosa" | "pescado" | "mariscos" | "maní" | "soya" | "huevo";

export type Diet = "Vegano" | "Vegetariano" | "Sin gluten" | "Sin lactosa";

export type Course = "entrada" | "segundo" | "postre" | "bebida";

export type MenuItem = {
  id: string;
  course: Course;
  name: string;
  description: string;
  image?: string;
  category: string;
  allergens: Allergen[];
  diets?: Diet[];
  tag?: string;
};

export const courseOrder: Course[] = ["entrada", "segundo", "postre", "bebida"];

export const courseMeta: Record<
  Course,
  { label: string; eyebrow: string; title: string; hint: string }
> = {
  entrada: {
    label: "Entrada",
    eyebrow: "Paso 01",
    title: "Elige tu entrada",
    hint: "Para abrir el apetito, sin llenarte antes del fondo.",
  },
  segundo: {
    label: "Segundo",
    eyebrow: "Paso 02",
    title: "Elige tu segundo",
    hint: "El protagonista del almuerzo.",
  },
  postre: {
    label: "Postre",
    eyebrow: "Paso 03",
    title: "Elige tu postre",
    hint: "Un cierre dulce, pensado para que vuelvas al trabajo sin pesadez.",
  },
  bebida: {
    label: "Bebida",
    eyebrow: "Paso 04",
    title: "Elige tu bebida",
    hint: "Algo fresco, casero y sin azúcar industrial.",
  },
};

export const courseCategories: Record<Course, string[]> = {
  entrada: ["Todas", "Criolla", "Chifa", "Saludable", "Norteña"],
  segundo: ["Todos", "Criollo", "Chifa", "Saludable", "Veggie", "Del norte"],
  postre: ["Todos", "Tradicional", "Ligero"],
  bebida: ["Todas", "Natural", "Tradicional", "Caliente"],
};

export const entradas: MenuItem[] = [
  {
    id: "crema-choclo",
    course: "entrada",
    name: "Crema de choclo",
    description: "Maíz tierno, crocante de camote y un toque de ají amarillo.",
    image: images.cremaChoclo,
    category: "Criolla",
    allergens: ["lactosa"],
    diets: ["Vegetariano", "Sin gluten"],
  },
  {
    id: "ensalada-quinoa",
    course: "entrada",
    name: "Ensalada tibia de quinoa",
    description: "Quinoa andina, palta, tomate cherry y vinagreta de limón.",
    image: images.ensaladaQuinoa,
    category: "Saludable",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "causa-atun",
    course: "entrada",
    name: "Causa de atún",
    description: "Papa amarilla prensada con ají, palta y atún del Pacífico.",
    image: images.causaAtun,
    category: "Criolla",
    allergens: ["pescado", "huevo"],
  },
  {
    id: "papa-huancaina",
    course: "entrada",
    name: "Papa a la huancaína",
    description: "Papa blanca con salsa cremosa de ají amarillo y queso fresco.",
    image: images.papaAHuancaina,
    category: "Criolla",
    allergens: ["lactosa", "huevo"],
    diets: ["Vegetariano", "Sin gluten"],
  },
  {
    id: "crema-zapallo",
    course: "entrada",
    name: "Crema de zapallo loche",
    description: "Zapallo loche norteño, jengibre y un toque de leche de coco.",
    image: images.cremaZapallo,
    category: "Norteña",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "wantan-veggie",
    course: "entrada",
    name: "Wantán de verduras",
    description: "Masa crocante rellena de champiñones y salsa agridulce de casa.",
    image: images.wantanVeggie,
    category: "Chifa",
    allergens: ["gluten", "soya", "huevo"],
    diets: ["Vegetariano"],
  },
];

export const segundos: MenuItem[] = [
  {
    id: "lomo-saltado",
    course: "segundo",
    name: "Lomo saltado clásico",
    description: "Res salteada al wok con cebolla, tomate, arroz blanco y papas doradas.",
    image: images.lomoSaltado,
    category: "Criollo",
    allergens: ["gluten", "soya"],
    tag: "Estrella",
  },
  {
    id: "aji-de-gallina",
    course: "segundo",
    name: "Ají de gallina",
    description: "Pollo deshilachado en salsa cremosa de ají amarillo, pan y nueces.",
    image: images.ajiDeGallina,
    category: "Criollo",
    allergens: ["gluten", "lactosa", "huevo"],
  },
  {
    id: "arroz-con-pollo",
    course: "segundo",
    name: "Arroz con pollo norteño",
    description: "Arroz verde al culantro, pollo guisado y salsa criolla hecha en casa.",
    image: images.arrozConPollo,
    category: "Del norte",
    allergens: ["gluten"],
  },
  {
    id: "tallarin-saltado",
    course: "segundo",
    name: "Tallarín saltado de pollo",
    description: "Fideos al wok estilo chifa con vegetales crocantes y sillao de casa.",
    image: images.tallarinSaltado,
    category: "Chifa",
    allergens: ["gluten", "soya", "huevo"],
  },
  {
    id: "salmon-parrilla",
    course: "segundo",
    name: "Salmón a la parrilla",
    description: "Salmón del Pacífico, quinoa tricolor y vegetales asados del día.",
    image: images.salmonParrilla,
    category: "Saludable",
    allergens: ["pescado"],
    diets: ["Sin gluten"],
  },
  {
    id: "ceviche-dia",
    course: "segundo",
    name: "Ceviche del día",
    description: "Pescado fresco marinado en leche de tigre, camote y canchita.",
    image: images.ceviche,
    category: "Del norte",
    allergens: ["pescado", "mariscos"],
    diets: ["Sin gluten"],
  },
  {
    id: "parrilla-criolla",
    course: "segundo",
    name: "Parrilla criolla",
    description: "Anticuchos de corazón, chorizo artesanal, papa dorada y choclo.",
    image: images.anticuchos,
    category: "Criollo",
    allergens: ["maní", "soya"],
  },
  {
    id: "bowl-veggie",
    course: "segundo",
    name: "Bowl veggie de la huerta",
    description: "Quinoa, hongos salteados, palta, zanahoria horneada y tahini.",
    image: images.bowlVeggie,
    category: "Veggie",
    allergens: ["soya"],
    diets: ["Vegano", "Sin gluten"],
  },
];

export const postres: MenuItem[] = [
  {
    id: "mazamorra-morada",
    course: "postre",
    name: "Mazamorra morada",
    description: "Maíz morado cocido lento con guindones, piña y canela.",
    image: images.mazamorraMorada,
    category: "Tradicional",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "arroz-con-leche",
    course: "postre",
    name: "Arroz con leche",
    description: "Arroz cocido con leche entera, canela y cáscara de naranja.",
    image: images.arrozConLeche,
    category: "Tradicional",
    allergens: ["lactosa"],
    diets: ["Vegetariano", "Sin gluten"],
  },
  {
    id: "ensalada-frutas",
    course: "postre",
    name: "Ensalada de frutas frescas",
    description: "Mango, piña, plátano, fresas y un chorrito de miel de caña.",
    image: images.ensaladaFrutas,
    category: "Ligero",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "suspiro-limena",
    course: "postre",
    name: "Suspiro a la limeña",
    description: "Manjar blanco sobre merengue italiano con un toque de oporto.",
    image: images.suspiroLimena,
    category: "Tradicional",
    allergens: ["lactosa", "huevo"],
    diets: ["Vegetariano"],
  },
  {
    id: "yogur-granola",
    course: "postre",
    name: "Yogur natural con granola",
    description: "Yogur peruano sin azúcar, granola artesanal y fruta de estación.",
    image: images.yogurGranola,
    category: "Ligero",
    allergens: ["lactosa", "gluten"],
    diets: ["Vegetariano"],
  },
];

export const bebidas: MenuItem[] = [
  {
    id: "chicha-morada",
    course: "bebida",
    name: "Chicha morada de casa",
    description: "Maíz morado, piña, canela y clavo. Sin azúcar añadida.",
    image: images.chichaMorada,
    category: "Tradicional",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "limonada-hierbabuena",
    course: "bebida",
    name: "Limonada de hierbabuena",
    description: "Limón fresco exprimido al momento con hojas de hierbabuena.",
    image: images.limonadaHierbabuena,
    category: "Natural",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "maracuya-frozen",
    course: "bebida",
    name: "Maracuyá frozen",
    description: "Pulpa de maracuyá, hielo granizado y una pizca de stevia.",
    image: images.maracuyaFrozen,
    category: "Natural",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "emoliente",
    course: "bebida",
    name: "Emoliente peruano",
    description: "Infusión caliente de cebada, cola de caballo, linaza y limón.",
    image: images.emoliente,
    category: "Caliente",
    allergens: [],
    diets: ["Vegano"],
  },
  {
    id: "te-muna",
    course: "bebida",
    name: "Infusión de muña andina",
    description: "Hierba serrana digestiva, servida caliente con miel opcional.",
    image: images.teMuna,
    category: "Caliente",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
  {
    id: "refresco-carambola",
    course: "bebida",
    name: "Refresco de carambola",
    description: "Carambola fresca licuada con un toque de jengibre y limón.",
    image: images.refrescoCarambola,
    category: "Natural",
    allergens: [],
    diets: ["Vegano", "Sin gluten"],
  },
];

export const menuPrice = 24;
