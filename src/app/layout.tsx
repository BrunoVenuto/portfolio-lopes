import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruno Lopes | Full Stack Developer",
  description:
    "Portfólio profissional de Bruno Lopes — desenvolvimento web moderno com Next.js, TypeScript e foco em conversão.",

  metadataBase: new URL("https://portfolio-fullstack-lopes.vercel.app"),

  openGraph: {
    title: "Bruno Lopes | Full Stack Developer",
    description:
      "Portfólio profissional com projetos reais, foco em performance, UI moderna e resultados para negócios.",
    url: "https://portfolio-fullstack-lopes.vercel.app",
    siteName: "Bruno Lopes",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 1024,
        alt: "Bruno Lopes Avatar",
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
    images: ["/og.png"],
  },
};
