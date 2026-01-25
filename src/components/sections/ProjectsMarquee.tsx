import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SmartImage from "@/components/ui/SmartImage";
import { siteConfig } from "@/config/site.config";

export default function ProjectsMarquee() {
  const { projects } = siteConfig;
  const items = [...projects.items, ...projects.items];

  return (
    <section id={projects.id} className="pt-10 overflow-hidden">
      <Container>
        <SectionTitle>{projects.title}</SectionTitle>
      </Container>

      <div className="mt-6">
        <div
          className="marquee flex gap-6 px-4"
          style={{
            ["--marquee-speed" as `--${string}`]: `${projects.speedSeconds}s`,
          }}
        >
          {items.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="min-w-[280px] md:min-w-[340px] panel overflow-hidden"
            >
              <div className="relative h-44">
                <SmartImage
                  src={p.image}
                  alt={p.title}
                  objectPosition={p.objectPosition ?? "50% 50%"}
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-4">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="text-white/60 text-sm">{p.subtitle}</div>

                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
