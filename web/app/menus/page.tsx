import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MenuGrid } from "@/components/sections/MenuGrid";
import { CTABand } from "@/components/sections/CTABand";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Menús de la semana",
  description:
    "Revisa el menú de esta semana en almorzando.pe: criollo, chifa, saludable, veggie y más. Cocina fresca, hecha hoy en Lima.",
};

export default function MenusPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Esta semana en la cocina"
        title={"El menú de la semana,\nsiempre fresco."}
        sub="Cada lunes estrenamos platos nuevos. Cada día cocinamos en el momento. Así es como comemos nosotros."
        image={images.heroMenus}
        imageAlt="Mesa peruana con platos listos para servir"
      />
      <MenuGrid />
      <CTABand
        title="¿Quieres este menú en tu oficina?"
        sub="Contrata la suscripción mensual y asegúrate de que tu equipo no vuelva a pedir la misma hamburguesa tres veces por semana."
        cta={{ label: "Agenda una demo", href: "/contacto" }}
      />
    </>
  );
}
