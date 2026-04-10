import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal de almorzando.pe: responsable, condiciones de uso y términos del servicio.",
};

export default function AvisoLegalPage() {
  return (
    <article className="bg-arroz text-tierra">
      <Container size="md" className="py-28 lg:py-36">
        <span className="eyebrow text-aji-deep">Legal</span>
        <h1 className="display-2 mt-5 text-balance">Aviso legal</h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-tierra/50">
          Última actualización: [TBD]
        </p>

        <div className="mt-14 flex flex-col gap-10 text-[15px] leading-relaxed text-tierra/80">
          <section>
            <h2 className="font-display text-2xl text-tierra">1. Responsable del sitio</h2>
            <p className="mt-3">
              El presente sitio web es titularidad de <strong>almorzando.pe S.A.C.</strong>, con RUC [TBD] y domicilio fiscal en [TBD], Lima, Perú. Puedes contactarnos en <a className="text-aji-deep underline" href="mailto:marca@almorzando.pe">marca@almorzando.pe</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">2. Condiciones de uso</h2>
            <p className="mt-3">
              [texto legal pendiente] El acceso y uso de este sitio web implica la aceptación plena de las condiciones aquí descritas. El usuario se compromete a hacer un uso adecuado del sitio y no utilizarlo para fines ilícitos o contrarios a la buena fe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">3. Propiedad intelectual</h2>
            <p className="mt-3">
              [texto legal pendiente] Todos los contenidos del sitio (textos, imágenes, logotipos, marcas) son propiedad de almorzando.pe o de terceros debidamente autorizados. Queda prohibida su reproducción total o parcial sin consentimiento previo por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">4. Protección de datos</h2>
            <p className="mt-3">
              [texto legal pendiente] almorzando.pe trata los datos personales conforme a la Ley N° 29733 de Protección de Datos Personales del Perú. Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a <a className="text-aji-deep underline" href="mailto:marca@almorzando.pe">marca@almorzando.pe</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-tierra">5. Legislación aplicable</h2>
            <p className="mt-3">
              [texto legal pendiente] Las presentes condiciones se rigen por la legislación peruana. Cualquier controversia se someterá a los juzgados y tribunales competentes de Lima, Perú.
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
