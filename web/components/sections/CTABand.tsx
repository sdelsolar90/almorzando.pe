import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type CTABandProps = {
  title: string;
  sub?: string;
  cta: { label: string; href: string };
  surface?: "arroz" | "tierra" | "huacatay";
};

export function CTABand({ title, sub, cta, surface = "arroz" }: CTABandProps) {
  const surfaces = {
    arroz: "bg-arroz text-tierra",
    tierra: "bg-tierra-90 text-arroz",
    huacatay: "bg-huacatay text-arroz",
  };
  const subColor = surface === "arroz" ? "text-tierra/70" : "text-arroz/70";
  const buttonVariant = surface === "arroz" ? "primary" : "primary";

  return (
    <section className={cn(surfaces[surface], "py-24 lg:py-32")}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="display-2 text-balance">{title}</h2>
            {sub && <p className={cn("mt-6 max-w-xl text-lg leading-relaxed", subColor)}>{sub}</p>}
          </div>
          <Button href={cta.href} variant={buttonVariant} size="lg">
            {cta.label}
            <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
