import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/content/images";
import { faqGroups } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Todo lo que necesitas saber sobre pedidos, entrega, pago, menús y almuerzos corporativos con almorzando.pe.",
};

export default function FaqsPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Sin letras chicas"
        title="Preguntas frecuentes."
        sub="Lo que nos preguntan todo el tiempo, respondido sin vueltas."
        image={images.heroFaqs}
        imageAlt="Ingredientes coloridos sobre mesa de trabajo en cocina"
      />

      <section className="bg-tierra py-24 lg:py-32">
        <Container size="lg">
          <div className="flex flex-col gap-20">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <SectionTitle eyebrow={group.category} title={`Sobre ${group.category.toLowerCase()}`} />
                <div className="mt-10">
                  <FaqAccordion items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-arroz py-24 text-tierra">
        <Container size="md">
          <div className="flex flex-col items-start gap-6">
            <span className="eyebrow text-aji-deep">¿No la encuentras?</span>
            <h2 className="display-2 text-balance">Escríbenos y te respondemos personalmente.</h2>
            <Link
              href="/contacto"
              className="mt-4 inline-flex items-center gap-2 border-b border-tierra pb-1 font-sans text-lg hover:text-aji-deep hover:border-aji-deep"
            >
              Ir a contacto →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
