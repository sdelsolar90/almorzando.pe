import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Benefit } from "@/content/benefits";

type BenefitsGridProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  items: Benefit[];
  surface?: "tierra" | "arroz" | "huacatay";
};

const surfaces = {
  tierra: "bg-tierra text-arroz",
  arroz: "bg-arroz text-tierra",
  huacatay: "bg-huacatay text-arroz",
};

export function BenefitsGrid({ eyebrow, title, sub, items, surface = "tierra" }: BenefitsGridProps) {
  const tone = surface === "arroz" ? "dark" : "light";
  const cardBg =
    surface === "arroz"
      ? "border-tierra/10 hover:border-tierra/30"
      : "border-arroz/10 hover:border-arroz/25";
  const iconBg = surface === "arroz" ? "bg-tierra text-aji" : "bg-aji/15 text-aji";
  const bodyColor = surface === "arroz" ? "text-tierra/70" : "text-arroz/70";

  return (
    <section className={`${surfaces[surface]} py-24 lg:py-32`}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} sub={sub} tone={tone} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex flex-col gap-5 rounded-[var(--radius-lg)] border p-8 transition ${cardBg}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                <p className={`text-[15px] leading-relaxed ${bodyColor}`}>{item.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
