import { Container } from "@/components/layout/Container";
import { companyLogos } from "@/content/company-logos";

export function LogoWall() {
  return (
    <section className="border-y border-arroz/10 bg-tierra py-16">
      <Container>
        <p className="eyebrow text-center text-arroz/50">Equipos que ya almuerzan con nosotros</p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {companyLogos.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center font-display text-xl text-arroz/40 transition hover:text-arroz/70"
            >
              {c.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
