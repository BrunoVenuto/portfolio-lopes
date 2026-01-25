import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site.config";

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id={contact.id} className="pt-10 pb-16">
      <Container>
        <div className="panel p-8 md:p-10">
          <SectionTitle>{contact.title}</SectionTitle>
          <p className="mt-4 text-white/70 max-w-2xl">{contact.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {contact.buttons.map((b, i) => (
              <Button key={b.href} href={b.href} pulse={i === 0}>
                {b.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
