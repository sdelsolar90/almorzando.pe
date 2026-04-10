import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { FormatCards } from "@/components/sections/FormatCards";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTABand } from "@/components/sections/CTABand";
import { images } from "@/content/images";
import { corporateBenefits } from "@/content/benefits";
import { faqsEmpresasShort } from "@/content/faqs";
import { paymentMethods } from "@/content/company-logos";

export const metadata: Metadata = {
  title: "Almuerzo para empresas",
  description:
    "El menú de tu empresa, cada día, sin drama. Suscripción mensual, facturación corporativa, vales de alimentación y reportería para RRHH.",
};

export default function EmpresasPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Para equipos de 10 a 500 personas"
        title={"El menú de tu empresa,\ncada día, sin drama."}
        sub="Simplifica el beneficio de alimentación. Un solo proveedor, una sola factura, un equipo que come rico todos los días."
        image={images.heroEmpresas}
        imageAlt="Equipo de oficina almorzando en una mesa compartida en Lima"
        ctaPrimary={{ label: "Agenda una demo", href: "/contacto" }}
        ctaSecondary={{ label: "Ver formatos", href: "#formatos" }}
      />
      <BenefitsGrid
        eyebrow="Lo que ganan empresas como la tuya"
        title="Menos fricción, más equipo contento."
        items={corporateBenefits}
      />

      <section id="formatos">
        <FormatCards />
      </section>

      <section className="bg-tierra py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Integra tus beneficios"
            title="Aceptamos lo que tu equipo ya usa."
            sub="Vales de alimentación, tarjetas, transferencia o Yape: tú pones el modelo, nosotros lo procesamos."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {paymentMethods.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center rounded-[var(--radius-md)] border border-arroz/15 bg-tierra-90 px-6 py-8 font-display text-lg text-arroz/70 hover:border-aji/50 hover:text-arroz"
              >
                {p}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-arroz py-24 lg:py-32 text-tierra">
        <Container size="lg">
          <SectionTitle
            eyebrow="Preguntas comunes de RRHH"
            title="Resolvemos lo básico."
            sub="Si algo queda fuera, escríbenos y respondemos en persona."
            tone="dark"
          />
          <div className="mt-14">
            <FaqAccordion items={faqsEmpresasShort} tone="dark" />
          </div>
        </Container>
      </section>

      <CTABand
        surface="tierra"
        title="Agenda una demo de 15 minutos."
        sub="Te contamos cómo funciona, te armamos una propuesta y, si te gusta, arrancamos la semana siguiente."
        cta={{ label: "Quiero una demo", href: "/contacto" }}
      />
    </>
  );
}
