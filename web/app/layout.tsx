import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almorzando.pe"),
  title: {
    default: "almorzando.pe — Comida del día para empresas en Lima",
    template: "%s · almorzando.pe",
  },
  description:
    "Comida casera y saludable para empresas en Lima. Cocina del día, fresca y peruana, entregada al toque en tu oficina. Sin drama.",
  keywords: [
    "almuerzo empresas Lima",
    "comida casera oficinas Lima",
    "comida saludable corporativa Perú",
    "catering oficinas Lima",
    "menú del día oficinas",
  ],
  openGraph: {
    title: "almorzando.pe — Tu equipo, siempre almorzando.",
    description:
      "Cocina del día para empresas en Lima. Fresco, rico y al toque. Pedidos en 30 segundos, entrega entre 12:30 y 13:00.",
    url: "https://almorzando.pe",
    siteName: "almorzando.pe",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "almorzando.pe — Tu equipo, siempre almorzando.",
    description: "Cocina del día para empresas en Lima. Fresco, rico y al toque.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
