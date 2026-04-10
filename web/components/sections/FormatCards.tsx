import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { formats } from "@/content/formats";
import { cn } from "@/lib/cn";

export function FormatCards() {
  return (
    <section className="bg-arroz py-24 lg:py-32">
      <Container>
        <SectionTitle
          eyebrow="Cuatro formatos"
          title="Elige cómo almuerza tu equipo."
          sub="Porque no todos los días ni todos los hambres son iguales. Todos los formatos mantienen la calidad del día."
          tone="dark"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {formats.map((f) => (
            <article
              key={f.id}
              className={cn(
                "relative flex flex-col gap-6 rounded-[var(--radius-lg)] border p-7 transition",
                f.highlight
                  ? "border-aji bg-tierra text-arroz shadow-[0_24px_60px_rgba(26,26,15,0.18)]"
                  : "border-tierra/10 bg-arroz-warm text-tierra hover:border-tierra/30",
              )}
            >
              {f.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-aji px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-tierra">
                  Más pedido
                </span>
              )}
              <div>
                <h3 className="font-display text-3xl leading-tight">{f.name}</h3>
                <p className={cn("mt-3 text-[15px] leading-relaxed", f.highlight ? "text-arroz/70" : "text-tierra/70")}>
                  {f.description}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-sm opacity-60">S/</span>
                <span className="font-display text-5xl">{f.price}</span>
                <span className="font-mono text-xs opacity-60">/plato</span>
              </div>
              <ul className="flex flex-col gap-2.5 pt-4 border-t border-current/10">
                {f.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} strokeWidth={2.5} className={f.highlight ? "mt-0.5 text-aji" : "mt-0.5 text-huacatay"} />
                    <span className={f.highlight ? "text-arroz/85" : "text-tierra/80"}>{inc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
