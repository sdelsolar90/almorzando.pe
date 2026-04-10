import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-tierra">
      <Container size="md" className="text-center">
        <span className="eyebrow text-aji">Error 404</span>
        <h1 className="display-1 mt-6 text-balance">
          Este plato no está en el menú.
        </h1>
        <p className="mt-6 text-lg text-arroz/70">
          La página que buscas no existe, se mudó o nunca llegó a cocinarse. Vuelve al inicio y te servimos algo rico.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-aji px-8 py-4 font-sans text-base font-medium text-tierra"
        >
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}
