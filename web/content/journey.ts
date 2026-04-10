export type JourneySide = "team" | "kitchen";

export type JourneyIcon =
  | "Sunrise"
  | "Coffee"
  | "Flame"
  | "Bell"
  | "MousePointerClick"
  | "ClipboardList"
  | "Package"
  | "Truck"
  | "Utensils"
  | "Smile"
  | "Recycle";

export type JourneyStep = {
  time: string;
  side: JourneySide;
  icon: JourneyIcon;
  title: string;
  body: string;
};

export const journey: JourneyStep[] = [
  {
    time: "07:30",
    side: "kitchen",
    icon: "Sunrise",
    title: "Llega el mercado",
    body: "Verduras, pescado del día y frutas de temporada entran por la puerta de nuestras cocinas en Lima. Todo empieza con producto fresco.",
  },
  {
    time: "09:00",
    side: "team",
    icon: "Coffee",
    title: "Tu equipo arranca el día",
    body: "Mientras tu gente prende la laptop y toma el primer café, el menú del día ya está publicado y listo para elegir.",
  },
  {
    time: "10:00",
    side: "kitchen",
    icon: "Flame",
    title: "A la olla",
    body: "Empieza la cocción. Todo se hace esta misma mañana: sin refrigeradores de tres días, sin comida recalentada.",
  },
  {
    time: "10:45",
    side: "team",
    icon: "Bell",
    title: "Un aviso amable",
    body: "Recordatorio por Slack, WhatsApp o email: el menú de hoy está listo y solo toma 30 segundos elegir.",
  },
  {
    time: "11:00",
    side: "team",
    icon: "MousePointerClick",
    title: "Cada quien arma su plato",
    body: "Entrada, segundo, postre, bebida. Cada persona elige según su hambre, sus alergias y su día. Sin apps nuevas que instalar.",
  },
  {
    time: "11:15",
    side: "kitchen",
    icon: "ClipboardList",
    title: "Cerramos pedidos",
    body: "Consolidamos todo por oficina, por área y por nombre. Cada plato sale con su etiqueta personalizada.",
  },
  {
    time: "12:15",
    side: "kitchen",
    icon: "Package",
    title: "Empacamos y salimos",
    body: "Envases compostables, sellado caliente y rutas optimizadas por zona. Las motos salen con cronómetro en mano.",
  },
  {
    time: "12:45",
    side: "kitchen",
    icon: "Truck",
    title: "Llegamos puntual",
    body: "Entre 12:30 y 13:00 estamos en tu oficina. Entregamos todo ordenado por equipo para que la repartición sea al toque.",
  },
  {
    time: "13:00",
    side: "team",
    icon: "Utensils",
    title: "A almorzar",
    body: "Microondas 90 segundos y listo. Sin colas, sin pedir delivery, sin discutir el mismo chifa de siempre.",
  },
  {
    time: "14:00",
    side: "team",
    icon: "Smile",
    title: "Vuelven sin pesadez",
    body: "Porciones pensadas para que tu equipo regrese a trabajar, no a dormir la siesta del tupper.",
  },
  {
    time: "Día sgte.",
    side: "kitchen",
    icon: "Recycle",
    title: "Cerramos el ciclo",
    body: "Recogemos los envases vacíos y los llevamos al compostaje municipal. Cero plástico de un solo uso, cero culpa.",
  },
];
