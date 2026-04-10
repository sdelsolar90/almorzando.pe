import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StepsTimeline } from "@/components/sections/StepsTimeline";
import { ImageTextBlock } from "@/components/sections/ImageTextBlock";
import { CTABand } from "@/components/sections/CTABand";
import { images } from "@/content/images";
import { steps } from "@/content/steps";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Así trabaja almorzando.pe: tu equipo pide antes de las 11, cocinamos fresco y entregamos entre 12:30 y 13:00 en tu oficina en Lima.",
};

export default function ComoFuncionaPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Siete pasos, cero complicación"
        title={"Así funciona\nalmorzando.pe."}
        sub="Del pedido al reciclaje del envase, todo pensado para que tu equipo coma rico sin perder tiempo."
        image={images.heroComoFunciona}
        imageAlt="Cocineros preparando platos en una cocina profesional"
      />
      <StepsTimeline title="El camino de tu almuerzo" items={steps} />
      <ImageTextBlock
        eyebrow="Packaging responsable"
        title="Envases que vuelven a la tierra."
        body="Usamos caña de azúcar, cartón reciclado y bioplásticos compostables. Al día siguiente los recogemos y se van directo al compostaje municipal."
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
