import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Build from "@/components/sections/Build";
import ProjectsMarquee from "@/components/sections/ProjectsMarquee";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/config/site.config";

export default function Page() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: `url(${siteConfig.theme.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen bg-black/65">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Build />
        <ProjectsMarquee />
        <Contact />
        <div className="h-10" />
      </div>
    </main>
  );
}
