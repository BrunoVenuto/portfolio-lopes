import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SmartImage from "@/components/ui/SmartImage";
import { siteConfig } from "@/config/site.config";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id={about.id} className="pt-10">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="frame">
            <div className="relative h-[320px] md:h-full min-h-[320px]">
              <SmartImage
                src={about.image}
                alt="Bruno Lopes no PC"
                objectPosition={about.imageObjectPosition}
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>
          </div>

          <div className="panel p-7 md:p-9">
            <SectionTitle>Sobre mim</SectionTitle>
            <div className="mt-4 space-y-4 text-white/80">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
