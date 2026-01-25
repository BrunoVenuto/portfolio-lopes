import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site.config";

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <section id={skills.id} className="pt-10">
      <Container>
        <SectionTitle>{skills.title}</SectionTitle>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {skills.items.map((s) => (
            <div key={s.title} className="panel p-6">
              <div className="text-xl font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-white/70">{s.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
