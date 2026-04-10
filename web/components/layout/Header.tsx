"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "border-arroz/10 bg-tierra/90 backdrop-blur-md" : "border-transparent bg-tierra",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="almorzando.pe inicio" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-arroz/80 hover:text-arroz hover:bg-arroz/5",
                  active && "text-aji hover:text-aji",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contacto" size="sm">
            Agenda una demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-arroz/20 text-arroz lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-tierra lg:hidden">
          <Container className="flex h-full flex-col gap-10 pt-10">
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-4xl text-arroz hover:text-aji py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href="/contacto" size="lg" className="w-full">
              Agenda una demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
