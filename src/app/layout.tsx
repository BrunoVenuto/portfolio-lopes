import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description: siteConfig.hero.subtitle,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
