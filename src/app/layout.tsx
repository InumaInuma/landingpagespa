import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evyface.vercel.app"),
  title: "Evy Face · Centro Terapéutico y Estético | Armonización Facial & Rejuvenecimiento Celular",
  description: "Fusión de ciencia estética y bioseguridad clínica. Especialistas en Toxina Botulínica, Ácido Hialurónico y Sueroterapia de Vitamina C. Contamos con profesionales certificados.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Evy Face",
    "Armonización Facial",
    "Toxina Botulínica",
    "Bótox",
    "Ácido Hialurónico",
    "Sueroterapia",
    "Vitamina C Intravenosa",
    "Rejuvenecimiento Celular",
    "Centro Médico Estético"
  ],
  openGraph: {
    title: "Evy Face · Centro Terapéutico y Estético",
    description: "Armonización Facial & Rejuvenecimiento Celular con Bioseguridad Clínica.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1024,
        height: 1024,
        alt: "EvyFace Centro Terapéutico y Estético"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/evyspa_opt.webp" type="image/webp" />
      </head>
      <body className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#D4AF37]/20 selection:text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
