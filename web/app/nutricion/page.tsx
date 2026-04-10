import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ImageTextBlock } from "@/components/sections/ImageTextBlock";
import { FormatCards } from "@/components/sections/FormatCards";
import { Container } from "@/components/layout/Container";
import { CTABand } from "@/components/sections/CTABand";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Nutrición y menús",
  description:
    "Menús semanales rotativos con entrada, fondo y postre. Equilibrados de verdad, pensados para oficina. Rico, sano y ya está.",
};

export default function NutricionPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Rico, sano, ya está"
        title={"Cocina del día,\nequilibrada de verdad."}
        sub="Cada plato sale de una misma regla: que lo disfrutes, que te nutra y que te deje con energía para la tarde."
        image={images.heroNutricion}
        imageAlt="Plato saludable con verduras, proteína y carbohidratos"
      />

      <ImageTextBlock
        eyebrow="Menú semanal rotativo"
        title="Siete días, siempre distintos."
        body="El menú cambia cada lunes y rota por completo cada 6 semanas. Mezclamos clásicos criollos, cocina chifa, opciones saludables y veggies. Nunca el mismo plato dos veces en la semana."
        bullets={[
          "Publicamos el menú completo el viernes previo",
          "Alternamos proteína animal y vegetal",
          "Siempre al menos una opción vegana",
          "Rotación total cada 6 semanas",
        ]}
        image={images.categorySaludable}
        imageAlt="Bowl saludable con quinoa, vegetales y pollo a la plancha"
      />

      <ImageTextBlock
        eyebrow="Cómo armamos cada plato"
        title="Entrada, fondo, postre. Equilibrio real."
        body="Nuestros chefs trabajan con una nutricionista para que cada menú tenga la proporción correcta de proteína, carbohidratos, grasas saludables y vegetales. Sabor primero, nutrición de cerca."
        bullets={[
          "Entrada ligera para abrir el apetito",
          "Fondo con proteína, carbohidrato y vegetal",
          "Postre casero, no industrial",
          "Porciones medidas para rendir hasta la tarde",
        ]}
        image={images.ajiDeGallina}
        imageAlt="Plato de ají de gallina servido con papa y aceituna"
        reverse
      />

      <FormatCards />

      <section className="bg-tierra py-20 text-arroz">
        <Container size="md">
          <div className="rounded-[var(--radius-lg)] border border-arroz/15 bg-tierra-90 p-10 lg:p-14">
            <span className="eyebrow text-aji">Alergias y dietas especiales</span>
            <h3 className="display-3 mt-5 text-balance">
              Nos adaptamos a tu equipo.
            </h3>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-arroz/70">
              Cada plato viene con sus alérgenos marcados (gluten, lactosa, pescado, maní, soya, huevo). Si en tu equipo hay alguien con alergia severa o dieta especial, nos avisas al registrar la empresa y adaptamos recetas. Cocina real, no cortar y pegar.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        title="Prueba el menú con tu equipo."
        sub="Te armamos una degustación para 5 personas y decides si somos los indicados."
        cta={{ label: "Agenda una prueba", href: "/contacto" }}
      />
    </>
  );
}
