import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerNavAbout, footerNavInfo } from "@/content/navigation";
import { paymentMethods } from "@/content/company-logos";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-arroz/10 bg-tierra">
      <Container className="grid gap-14 py-20 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-arroz/70">
            Cocina del día, hecha en Lima, entregada al toque en tu oficina. Sin drama, sin congelados, sin corporativismo.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/almorzando.pe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-arroz/20 text-arroz/80 hover:border-aji hover:text-aji"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com/company/almorzando"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-arroz/20 text-arroz/80 hover:border-aji hover:text-aji"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-arroz/20 text-arroz/80 hover:border-aji hover:text-aji"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h3 className="eyebrow text-arroz/50">Sobre almorzando</h3>
          <ul className="flex flex-col gap-2.5">
            {footerNavAbout.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-arroz/80 hover:text-aji">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h3 className="eyebrow text-arroz/50">Información</h3>
          <ul className="flex flex-col gap-2.5">
            {footerNavInfo.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-arroz/80 hover:text-aji">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4">
          <h3 className="eyebrow text-arroz/50">Recetas al correo</h3>
          <p className="text-sm text-arroz/70">
            Recibe el menú de la semana y algún tip de cocina peruana. Cero spam, lo prometemos.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="tu@correo.pe"
              className="w-full rounded-full border border-arroz/20 bg-tierra-90 px-5 py-3 text-sm text-arroz placeholder:text-arroz/40 focus:border-aji focus:outline-none"
            />
            <Button type="submit" size="sm" className="sm:shrink-0">
              Suscribirme
            </Button>
          </form>
          <label className="flex items-start gap-2 text-xs text-arroz/50">
            <input type="checkbox" required className="mt-0.5 accent-aji" />
            Acepto la política de privacidad y el tratamiento de mis datos.
          </label>
        </div>
      </Container>

      <div className="border-t border-arroz/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-8 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-arroz/40 font-mono">
            <span>Aceptamos:</span>
            {paymentMethods.map((p) => (
              <span key={p} className="rounded border border-arroz/15 px-2 py-1">
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-arroz/50 font-mono">
            © {year} almorzando.pe — Hecho en Lima
          </p>
        </Container>
      </div>
    </footer>
  );
}
