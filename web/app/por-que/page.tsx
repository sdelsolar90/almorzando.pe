import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ImageTextBlock } from "@/components/sections/ImageTextBlock";
import { Container } from "@/components/layout/Container";
import { CTABand } from "@/components/sections/CTABand";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Por qué almorzando.pe",
  description:
    "Comida real, cocinada en Lima, con empaques responsables y un equipo 100% peruano. Esto es lo que nos mueve.",
};

const stats = [
  { value: "+180.000", label: "Platos servidos" },
  { value: "+40", label: "Empresas cliente" },
  { value: "93%", label: "Equipos que repiten" },
  { value: "0", label: "Platos congelados" },
];

export default function PorQuePage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Nuestra razón de ser"
        title={"Comida de verdad,\nhecha en Lima."}
        sub="No inventamos una cocina nueva: cocinamos la que ya conoces, pero bien. Con mercado fresco, sin drama corporativo y con gente local."
        image={images.heroPorQue}
        imageAlt="Ingredientes frescos del mercado limeño sobre mesa de madera"
      />

      <ImageTextBlock
        eyebrow="Comida real"
        title="Ingredientes que reconoces al verlos."
        body="Compramos en mercados limeños todas las mañanas. Nada viene etiquetado por máquinas, nada dura seis meses en la alacena. Si tu abuela no lo reconoce, nosotros tampoco lo usamos."
        bullets={[
          "Mercado local cada mañana",
          "Cero conservantes industriales",
          "Recetas probadas en casa antes de entrar al menú",
        ]}
        image={images.marketLima}
        imageAlt="Mercado peruano con frutas y verduras de temporada"
      />

      <ImageTextBlock
        eyebrow="Cuidamos Lima"
        title="Cocinamos mirando la ciudad."
        body="Cada decisión tiene un impacto. Elegimos compostable en vez de plástico, ruta eficiente en vez de carro por carro, proveedores peruanos en vez de importados."
        bullets={[
          "Empaques 100% compostables",
          "Rutas de entrega optimizadas por zona",
          "Alianza con productores agrícolas de la sierra central",
          "Programa de recojo y reciclaje posconsumo",
        ]}
        image={images.packaging}
        imageAlt="Envases compostables con logos de almorzando.pe"
        reverse
      />

      <ImageTextBlock
        eyebrow="Equipo peruano"
        title="Hecho por gente que almuerza contigo."
        body="Cocineros, repartidores, administración: todos somos peruanos. Sabemos cómo se almuerza en Lima porque así almorzamos nosotros. Esa es nuestra ventaja injusta."
        bullets={[
          "Cocineros con experiencia en hoteles y casas limeñas",
          "Repartidores propios, no plataformas",
          "Sueldo digno, planilla y beneficios completos",
        ]}
        image={images.chefCooking}
        imageAlt="Chef peruano cocinando en una cocina profesional"
      />

      <section className="bg-huacatay py-24 lg:py-32 text-arroz">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-3 border-t border-arroz/20 pt-6">
                <span className="font-display text-5xl leading-none lg:text-6xl">{s.value}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-arroz/70">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="¿Llevamos este sabor a tu oficina?"
        sub="Agenda una demo y te contamos cómo lo hacemos todos los días."
        cta={{ label: "Hablemos", href: "/contacto" }}
      />
    </>
  );
}
