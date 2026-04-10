import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en almorzando.pe y cómo puedes configurarlas.",
};

export default function CookiesPage() {
  return (
    <article className="bg-arroz text-tierra">
      <Container size="md" className="py-28 lg:py-36">
        <span className="eyebrow text-aji-deep">Legal</span>
        <h1 className="display-2 mt-5 text-balance">Política de cookies</h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-tierra/50">
          Última actualización: [TBD]
        </p>

        <div className="mt-14 flex flex-col gap-10 text-[15px] leading-relaxed text-tierra/80">
          <section>
            <h2 className="font-display text-2xl text-tierra">1. ¿Qué son las cookies?</h2>
            <p className="mt-3">
              [texto legal pendiente] Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo cuando lo visitas. Permiten que el sitio recuerde información sobre tu visita, como tu idioma preferido o tus preferencias de navegación.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">2. Tipos de cookies que usamos</h2>
            <p className="mt-3">
              [texto legal pendiente] almorzando.pe utiliza cookies técnicas necesarias para el funcionamiento del sitio, cookies de análisis para entender cómo lo usas y, en caso afirmativo, cookies de marketing para mostrarte contenido relevante.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">3. Cómo configurar las cookies</h2>
            <p className="mt-3">
              [texto legal pendiente] Puedes aceptar, rechazar o configurar las cookies desde el banner de consentimiento o directamente en la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">4. Cambios en esta política</h2>
            <p className="mt-3">
              [texto legal pendiente] Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Cualquier cambio se reflejará en esta página con la fecha de última actualización.
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
