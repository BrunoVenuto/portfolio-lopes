"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

export default function Header() {
  const { brand, nav, header } = siteConfig;
  const [open, setOpen] = useState(false);

  const items = useMemo(() => nav, [nav]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-black/40 text-[12px] font-bold text-white">
              {brand.logoText}
            </span>
            <div className="leading-tight">
              <div className="text-white font-bold tracking-wide">
                {brand.name}
              </div>
              <div className="text-[11px] text-yellow-400/90 tracking-[0.25em] uppercase">
                {brand.tagline}
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* ✅ BOTÃO AJUSTADO SOMENTE NO MOBILE */}
            <Button
              href={header.cta.href}
              pulse
              className="h-9 px-3 text-xs md:h-10 md:px-4 md:text-sm"
            >
              {header.cta.label}
            </Button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white/85 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-2">
                  {/* ✅ BOTÃO DO MENU MOBILE TAMBÉM AJUSTADO */}
                  <Button
                    href={header.cta.href}
                    pulse
                    className="w-full justify-center h-9 text-xs"
                  >
                    {header.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
