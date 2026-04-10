"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/cn";

export function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const current = testimonials[idx];

  return (
    <section className="bg-tierra-90 py-24 lg:py-32">
      <Container size="lg">
        <div className="flex flex-col items-start gap-12">
          <Quote size={40} className="text-aji" strokeWidth={1} />
          <blockquote className="display-3 max-w-3xl text-balance text-arroz">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="flex w-full items-end justify-between gap-6">
            <div>
              <p className="font-display text-xl text-arroz">{current.author}</p>
              <p className="mt-1 text-sm text-arroz/60">
                {current.role} · {current.company}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Ver testimonio ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === idx ? "w-8 bg-aji" : "w-1.5 bg-arroz/25",
                    )}
                  />
                ))}
              </div>
              <div className="ml-4 flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Testimonio anterior"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-arroz/20 text-arroz hover:border-aji hover:text-aji"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Siguiente testimonio"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-arroz/20 text-arroz hover:border-aji hover:text-aji"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
