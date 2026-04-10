import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type HeroProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  image: string;
  imageAlt: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: "full" | "compact";
};

export function Hero({
  eyebrow,
  title,
  sub,
  image,
  imageAlt,
  ctaPrimary,
  ctaSecondary,
  variant = "full",
}: HeroProps) {
  const isFull = variant === "full";
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        isFull ? "min-h-[92vh]" : "min-h-[60vh]",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-tierra/75 via-tierra/55 to-tierra" />
      <div className="absolute inset-0 bg-gradient-to-r from-tierra/60 via-transparent to-transparent" />

      <Container className="relative flex min-h-[inherit] flex-col justify-end pb-20 pt-28 lg:pb-28 lg:pt-40">
        <div className="max-w-4xl fade-up">
          {eyebrow && (
            <span className="eyebrow mb-6 inline-flex items-center gap-3 text-aji">
              <span className="h-px w-10 bg-aji" />
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              isFull ? "display-1" : "display-2",
              "text-balance text-arroz",
            )}
          >
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          {sub && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-arroz/80 lg:text-xl">
              {sub}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {ctaPrimary && (
                <Button href={ctaPrimary.href} size="lg">
                  {ctaPrimary.label}
                  <ArrowRight size={18} />
                </Button>
              )}
              {ctaSecondary && (
                <Button href={ctaSecondary.href} variant="ghost" size="lg">
                  {ctaSecondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
