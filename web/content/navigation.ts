export type NavLink = {
  href: string;
  label: string;
};

export const mainNav: NavLink[] = [
  { href: "/menus", label: "Menús" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/empresas", label: "Empresas" },
  { href: "/por-que", label: "Por qué" },
  { href: "/nutricion", label: "Nutrición" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contacto", label: "Contacto" },
];

export const footerNavAbout: NavLink[] = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/por-que", label: "Por qué" },
  { href: "/nutricion", label: "Nutrición" },
  { href: "/empresas", label: "Empresas" },
];

export const footerNavInfo: NavLink[] = [
  { href: "/menus", label: "Menús" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contacto", label: "Contacto" },
  { href: "/legal/aviso-legal", label: "Aviso legal" },
  { href: "/legal/cookies", label: "Política de cookies" },
];

export const socialLinks = [
  { href: "https://instagram.com/almorzando.pe", label: "Instagram" },
  { href: "https://linkedin.com/company/almorzando", label: "LinkedIn" },
  { href: "https://wa.me/51999999999", label: "WhatsApp" },
];
