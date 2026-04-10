"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function ContactBlock() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    // eslint-disable-next-line no-console
    console.log("contact form", payload);
    setSent(true);
  };

  return (
    <section className="bg-tierra py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow text-aji">Hablemos</span>
            <h2 className="display-2 mt-5 text-balance">
              Cuéntanos de tu equipo.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-arroz/70">
              Déjanos tus datos y te escribimos en menos de 24 horas con una propuesta a la medida. Sin letras chicas.
            </p>

            <form onSubmit={onSubmit} className="mt-12 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" required />
                <Field label="Empresa" name="empresa" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Teléfono" name="telefono" type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="font-mono text-[11px] uppercase tracking-[0.15em] text-arroz/50">
                  Cuéntanos más
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="¿Cuántos son? ¿Dónde están? ¿Qué necesitan?"
                  className="resize-none rounded-[var(--radius-md)] border border-arroz/15 bg-tierra-90 px-5 py-4 text-[15px] text-arroz placeholder:text-arroz/30 focus:border-aji focus:outline-none"
                />
              </div>
              <label className="flex items-start gap-3 text-sm text-arroz/60">
                <input type="checkbox" required className="mt-1 accent-aji" />
                <span>
                  Acepto la política de privacidad y el tratamiento de mis datos para ser contactado.
                </span>
              </label>
              <div className="pt-2">
                <Button type="submit" size="lg">
                  {sent ? "¡Recibido! Te escribimos pronto" : "Enviar mensaje"}
                </Button>
              </div>
            </form>
          </div>

          <aside className="flex flex-col gap-8 rounded-[var(--radius-lg)] border border-arroz/10 bg-tierra-90 p-8 lg:p-10">
            <div>
              <span className="eyebrow text-aji">Datos directos</span>
              <h3 className="display-3 mt-4">Escríbenos por donde prefieras.</h3>
            </div>
            <ul className="flex flex-col gap-5">
              <ContactRow icon={<Mail size={16} />} label="Email" value="marca@almorzando.pe" href="mailto:marca@almorzando.pe" />
              <ContactRow icon={<Phone size={16} />} label="WhatsApp" value="+51 999 999 999" href="https://wa.me/51999999999" />
              <ContactRow icon={<MapPin size={16} />} label="Cocina" value="Lima, Perú · [TBD]" />
              <ContactRow icon={<Clock size={16} />} label="Horario" value="Lun a Vie · 8:00 – 18:00" />
            </ul>
            <div className="mt-auto overflow-hidden rounded-[var(--radius-md)] border border-arroz/10">
              <iframe
                title="Ubicación almorzando.pe"
                src="https://www.google.com/maps?q=Miraflores+Lima+Peru&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="border-0"
              />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-[0.15em] text-arroz/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-[var(--radius-md)] border border-arroz/15 bg-tierra-90 px-5 py-3.5 text-[15px] text-arroz placeholder:text-arroz/30 focus:border-aji focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-aji/15 text-aji">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-arroz/50">{label}</p>
        <p className="mt-1 text-[15px] text-arroz">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block hover:opacity-80" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
