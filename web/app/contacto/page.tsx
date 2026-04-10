import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos. Agenda una demo de 15 minutos y te armamos una propuesta para que tu equipo almuerce mejor.",
};

export default function ContactoPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Conversemos"
        title={"Agenda una demo\nde 15 minutos."}
        sub="Te contamos cómo funciona, te armamos una propuesta y respondemos todas tus dudas en una llamada corta."
        image={images.heroContacto}
        imageAlt="Mesa con plato peruano servido listo para comer"
      />
      <ContactBlock />
    </>
  );
}
