import { Container } from "@/components/layout/Container";

type PromiseItem = {
  value: string;
  label: string;
  detail: string;
};

type PromiseStripProps = {
  items: PromiseItem[];
};

export function PromiseStrip({ items }: PromiseStripProps) {
  return (
    <section className="relative border-y border-arroz/10 bg-tierra-90">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-arroz/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <li
              key={item.label}
              className="group relative px-4 py-10 md:px-10 md:py-14"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-aji">
                {item.label}
              </div>
              <div className="mt-4 font-display text-5xl tabular-nums text-arroz lg:text-6xl">
                {item.value}
              </div>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-arroz/65">
                {item.detail}
              </p>
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-aji transition-[width] duration-500 ease-out group-hover:w-full md:left-auto md:right-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
