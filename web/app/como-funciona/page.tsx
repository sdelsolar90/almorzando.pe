import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { PromiseStrip } from "@/components/sections/PromiseStrip";
import { ImageTextBlock } from "@/components/sections/ImageTextBlock";
import { CTABand } from "@/components/sections/CTABand";
import { images } from "@/content/images";
import { journey } from "@/content/journey";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Un día completo con almorzando.pe: del mercado a las 7:30 hasta el almuerzo en tu oficina a las 13:00. Así cocinamos, entregamos y cerramos el ciclo.",
};

const promises = [
  {
    label: "Elegir tu plato",
    value: "30 s",
    detail:
      "Tu equipo arma entrada, segundo, postre y bebida en menos de medio minuto, desde el celular o el navegador.",
  },
  {
    label: "Ventana de entrega",
    value: "12:30 – 13:00",
    detail:
      "Llegamos puntual a tu oficina, con todos los pedidos etiquetados por persona y por equipo.",
  },
  {
    label: "Apps para instalar",
    value: "0",
    detail:
      "Sin apps raras, sin cuentas nuevas, sin contraseñas olvidadas. Solo un link y listo.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Un día con almorzando.pe"
        title={"De la madrugada\nal almuerzo puntual."}
        sub="Mientras tu equipo trabaja, una cocina entera se mueve para que a las 13:00 estés comiendo algo fresco, rico y bien pensado."
        image={images.heroComoFunciona}
        imageAlt="Cocineros preparando platos en una cocina profesional"
      />
      <PromiseStrip items={promises} />
      <JourneyTimeline
        eyebrow="Paso a paso, hora por hora"
        title="Dos equipos, un mismo almuerzo."
        sub="Lo que pasa en tu oficina y lo que pasa en nuestra cocina, al mismo tiempo, cada día de lunes a viernes."
        steps={journey}
      />
      <ImageTextBlock
        eyebrow="Packaging responsable"
        title="Envases que vuelven a la tierra."
        body="Caña de azúcar, cartón reciclado y bioplásticos compostables. Al día siguiente los recogemos y van directo al compostaje municipal."
        bullets={[
          "100% libre de plásticos de un solo uso",
          "Envases aptos para microondas",
          "Recojo y reciclaje incluidos en la suscripción",
          "Alianza con productores limeños de insumos compostables",
        ]}
        image={images.packaging}
        imageAlt="Envases compostables apilados sobre superficie de madera"
      />
      <CTABand
        title="Listos cuando tú digas."
        sub="En 48 horas desde la firma, tu equipo ya está almorzando con nosotros."
        cta={{ label: "Hablemos", href: "/contacto" }}
      />
    </>
  );
}
