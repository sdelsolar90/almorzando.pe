import { Flame, Timer, MousePointerClick, Microwave } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const benefits: Benefit[] = [
  {
    icon: Flame,
    title: "Cocina del día",
    body: "Todo se cocina esa misma mañana. Ni congelados ni recalentados de ayer.",
  },
  {
    icon: Timer,
    title: "Entregamos al toque",
    body: "Llegamos entre 12:30 y 13:00 a tu oficina. Puntualidad limeña de verdad.",
  },
  {
    icon: MousePointerClick,
    title: "Pedido en 30 segundos",
    body: "Tu equipo elige en el celular antes de las 11. Así de fácil.",
  },
  {
    icon: Microwave,
    title: "Calienta y listo",
    body: "Envase que va directo al microondas. 90 segundos y a disfrutar.",
  },
];

export const corporateBenefits: Benefit[] = [
  {
    icon: Flame,
    title: "Retienes talento",
    body: "Un buen almuerzo dice más que un meme corporativo. Tu equipo lo nota y se queda.",
  },
  {
    icon: Timer,
    title: "Menos fricción para RRHH",
    body: "Un proveedor, una factura, un contacto. Olvídate de la ruleta de delivery diaria.",
  },
  {
    icon: MousePointerClick,
    title: "Control y reportería",
    body: "Dashboard mensual con pedidos, consumo y preferencias. Decisiones basadas en data.",
  },
  {
    icon: Microwave,
    title: "Integra tus beneficios",
    body: "Aceptamos Sodexo, Pluxee, Ticket Restaurante y pago directo. Tú decides el modelo.",
  },
];
