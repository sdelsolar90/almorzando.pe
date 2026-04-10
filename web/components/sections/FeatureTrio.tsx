import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type FeatureItem = {
  title: string;
  body: string;
  image: string;
};

type FeatureTrioProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  items: FeatureItem[];
};

export function FeatureTrio({ eyebrow, title, sub, items }: FeatureTrioProps) {
  return (
    <section className="bg-tierra py-24 lg:py-32">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} sub={sub} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-arroz/10 bg-tierra-90 transition hover:border-arroz/25"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl leading-tight text-arroz">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-arroz/70">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
