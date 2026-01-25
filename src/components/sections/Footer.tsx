import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  const { brand, nav, header } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-white/10 bg-black/60">
      <Container>
        <div className="py-10">
          {/* Card premium */}
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-black/55 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur md:p-10">
            {/* brilho/wood vibe */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl" />
              <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl" />
            </div>

            {/* moldura dourada */}
            <div className="pointer-events-none absolute inset-3 rounded-2xl border border-yellow-500/10" />

            <div className="relative grid gap-10 md:grid-cols-12 md:items-start">
              {/* Brand + CTA */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/40 text-[12px] font-extrabold text-white">
                    {brand.logoText}
                  </span>

                  <div className="leading-tight">
                    <div className="text-white font-extrabold tracking-wide">
                      {brand.name}
                    </div>
                    <div className="text-[11px] text-yellow-400/90 tracking-[0.28em] uppercase">
                      {brand.tagline}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm text-white/70 leading-relaxed">
                  Soluções digitais sob medida: landing pages, sistemas SaaS,
                  APIs e integrações. Foco em performance, clareza e resultado.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    href={header.cta.href}
                    pulse={!!header.cta.pulse}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 text-sm"
                  >
                    {header.cta.label}
                  </Button>

                  <a
                    href="#projetos"
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                  >
                    Ver projetos
                  </a>
                </div>

                <div className="mt-5 text-xs text-white/50">
                  Resposta rápida no WhatsApp • Orçamento sem compromisso
                </div>
              </div>

              {/* Links */}
              <div className="md:col-span-4">
                <div className="text-xs text-white/55 tracking-[0.28em] uppercase">
                  Navegação
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials + mini-cta */}
              <div className="md:col-span-3">
                <div className="text-xs text-white/55 tracking-[0.28em] uppercase">
                  Redes
                </div>

                <div className="mt-4 grid gap-2">
                  {header.socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-yellow-500/15 bg-yellow-500/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Precisa de orçamento?
                  </div>
                  <div className="mt-1 text-xs text-white/70">
                    Clique e já abre uma mensagem pronta.
                  </div>

                  <a
                    href={header.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition animate-pulse"
                  >
                    Solicitar agora
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-6 flex flex-col gap-3 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <div>
              © {year} {brand.name}. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-3">
              <a href="#top" className="hover:text-white transition">
                Voltar ao topo ↑
              </a>
              <span className="text-white/20">•</span>
              <a
                href={header.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
