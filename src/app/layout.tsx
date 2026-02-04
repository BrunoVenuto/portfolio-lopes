import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-fullstack-lopes.vercel.app"),

  title: "Bruno Lopes | Full Stack Developer",
  description:
    "Portfólio profissional de Bruno Lopes — desenvolvimento web moderno com Next.js, TypeScript e foco em performance e conversão.",

  applicationName: "Bruno Lopes Portfolio",

  openGraph: {
    title: "Bruno Lopes | Full Stack Developer",
    description:
      "Portfólio profissional com projetos reais, UI moderna, alta performance e foco em resultados para negócios.",
    url: "https://portfolio-fullstack-lopes.vercel.app/",
    siteName: "Bruno Lopes",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bruno Lopes | Full Stack Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bruno Lopes | Full Stack Developer",
    description:
      "Portfólio profissional com Next.js, TypeScript e foco em performance.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0C0B4D",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
