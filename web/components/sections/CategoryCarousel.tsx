import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/content/images";

type Category = {
  title: string;
  sub: string;
  image: string;
};

const categories: Category[] = [
  { title: "Criollo clásico", sub: "Lomo saltado, ají de gallina, seco de res", image: images.categoryCriollo },
  { title: "Chifa", sub: "Tallarín saltado, arroz chaufa, wantán", image: images.categoryChifa },
  { title: "Saludable", sub: "Bowls de quinoa, pescado a la plancha", image: images.categorySaludable },
  { title: "Veggie", sub: "Causa de palta, risotto de hongos", image: images.categoryVeggie },
  { title: "Comfort", sub: "Carapulcra, puré, estofados", image: images.categoryComfort },
  { title: "Del norte", sub: "Arroz con pato, ceviche, sudado", image: images.categoryNorte },
];

export function CategoryCarousel() {
  return (
    <section className="bg-tierra-90 py-24 lg:py-32">
      <Container>
        <SectionTitle
          eyebrow="Conoce nuestra cocina"
          title="Seis universos, una sola cocina."
          sub="Rotamos sabores toda la semana. Siempre hay algo criollo, algo nuevo y algo para el que cuida su salud."
        />
      </Container>

      <div className="mt-16 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 sm:px-8 lg:px-12 pb-4">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group relative h-[420px] w-[300px] flex-none overflow-hidden rounded-[var(--radius-lg)] border border-arroz/10"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="300px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tierra via-tierra/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl leading-tight text-arroz">{cat.title}</h3>
                <p className="mt-2 text-sm text-arroz/70">{cat.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
