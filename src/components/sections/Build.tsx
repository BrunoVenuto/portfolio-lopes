import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SmartImage from "@/components/ui/SmartImage";
import { siteConfig } from "@/config/site.config";

export default function Build() {
  const { build } = siteConfig;

  return (
    <section id={build.id} className="pt-10">
      <Container>
        <SectionTitle>{build.title}</SectionTitle>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {build.items.map((item) => (
            <div key={item.title} className="panel overflow-hidden">
              <div className="relative h-44">
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  objectPosition={item.objectPosition ?? "50% 50%"}
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-5">
                <div className="text-lg font-semibold text-white">{item.title}</div>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
