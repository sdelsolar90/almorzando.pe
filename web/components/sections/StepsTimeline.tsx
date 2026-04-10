import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Step } from "@/content/steps";

type StepsTimelineProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  items: Step[];
};

export function StepsTimeline({ eyebrow, title, sub, items }: StepsTimelineProps) {
  return (
    <section className="bg-tierra py-24 lg:py-32">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} sub={sub} />
        <ol className="mt-20 relative">
          <span
            aria-hidden
            className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-aji/70 via-arroz/15 to-transparent"
          />
          {items.map((step, idx) => (
            <li key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-aji/40 bg-tierra-90 font-mono text-sm font-medium text-aji">
                {step.number}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display text-2xl leading-tight text-arroz lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-arroz/70">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
