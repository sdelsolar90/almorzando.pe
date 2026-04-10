import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type ImageTextBlockProps = {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  surface?: "tierra" | "arroz" | "huacatay";
};

const surfaces = {
  tierra: "bg-tierra text-arroz",
  arroz: "bg-arroz text-tierra",
  huacatay: "bg-huacatay text-arroz",
};

export function ImageTextBlock({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
  surface = "tierra",
}: ImageTextBlockProps) {
  const eyebrowColor = surface === "arroz" ? "text-aji-deep" : "text-aji";
  const bodyColor = surface === "arroz" ? "text-tierra/75" : "text-arroz/75";

  return (
    <section className={`${surfaces[surface]} py-20 lg:py-28`}>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className={cn("order-1", reverse && "lg:order-2")}>
            {eyebrow && (
              <span className={`eyebrow mb-5 inline-flex items-center gap-3 ${eyebrowColor}`}>
                <span className="h-px w-8 bg-current opacity-60" />
                {eyebrow}
              </span>
            )}
            <h2 className="display-3 mb-6 max-w-xl text-balance">{title}</h2>
            <p className={`max-w-xl text-lg leading-relaxed ${bodyColor}`}>{body}</p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-8 flex flex-col gap-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-aji text-tierra">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className={`${bodyColor} leading-relaxed`}>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={cn("order-2 relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)]", reverse && "lg:order-1")}>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
