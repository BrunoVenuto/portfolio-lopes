import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { siteConfig } from "@/config/site.config";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="pt-6">
      <Container>
        <div className="frame">
          <div className="relative min-h-[460px] md:min-h-[560px]">
            <SmartImage
              src={hero.image}
              alt="Bruno Lopes"
              priority
              objectPosition={hero.imageObjectPosition}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 p-8 md:p-12 flex min-h-[460px] md:min-h-[560px] items-center">
              <div className="max-w-2xl">
                <div className="text-yellow-400 tracking-[0.25em] uppercase text-xs md:text-sm">
                  {hero.kicker}
                </div>

                <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white">
                  {hero.title}
                </h1>

                <p className="mt-4 text-white/80 text-base md:text-lg">
                  {hero.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {hero.ctas.map((c) => (
                    <Button
                      key={c.href}
                      href={c.href}
                      variant={c.variant}
                      pulse={!!c.pulse}
                    >
                      {c.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
