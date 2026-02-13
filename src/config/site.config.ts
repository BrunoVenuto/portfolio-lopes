export type NavItem = { label: string; href: string };

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  pulse?: boolean;
  external?: boolean;
};

export type SkillGroup = {
  title: string;
  description: string;
  tags: string[];
};

export type BuildItem = {
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
};

export type Project = {
  title: string;
  subtitle: string;
  href?: string;
  image: string;
  objectPosition?: string;
  tags?: string[];
};

export const WHATSAPP_URL =
  "https://wa.me/5531995453632?text=Ol%C3%A1%20Bruno!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20sistema.";

export const siteConfig = {
  brand: {
    name: "BRUNO LOPES",
    tagline: "DESENVOLVEDOR FULL STACK",
    logoText: "BL",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "O que eu construo", href: "#build" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ] satisfies NavItem[],

  header: {
    cta: {
      label: "Falar comigo",
      href: WHATSAPP_URL,
      external: true,
      pulse: true,
    } satisfies CTA,
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/BrunoVenuto",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/seuuser",
        external: true,
      },
    ] satisfies LinkItem[],
  },

  hero: {
    kicker: "DESENVOLVEDOR FULL STACK",
    title: "BRUNO LOPES",
    subtitle:
      "Construo sistemas, SaaS e soluções completas — do backend ao frontend.",
    image: "/images/hero.jpg",
    imageObjectPosition: "60% 29%",
    ctas: [
      {
        label: "Falar comigo",
        href: WHATSAPP_URL,
        variant: "primary",
        pulse: true,
        external: true,
      },
      {
        label: "Ver projetos",
        href: "#projetos",
        variant: "ghost",
      },
    ] satisfies CTA[],
  },

  about: {
    id: "sobre",
    title: "Sobre mim",
    body: [
      "Sou Bruno Lopes, desenvolvedor Full Stack focado em criar sistemas e produtos digitais completos, do zero até produção.",
      "Trabalho com SaaS, integrações e automações, sempre pensando em performance, clareza e resultado de negócio.",
    ],
    image: "/images/about.jpg",
    imageObjectPosition: "60% 40%",
  },

  skills: {
    id: "skills",
    title: "O que eu faço como Full Stack",
    items: [
      {
        title: "Frontend",
        description:
          "Interfaces modernas, rápidas e focadas em conversão e usabilidade.",
        tags: ["React", "Next.js", "Tailwind", "UX/UI"],
      },
      {
        title: "Backend",
        description:
          "APIs, autenticação, regras de negócio e integrações robustas.",
        tags: ["Node.js", "Supabase", "PostgreSQL", "REST"],
      },
      {
        title: "Produto / SaaS",
        description: "Arquitetura completa: do MVP até produção e escala.",
        tags: ["Arquitetura", "MVP", "Escala", "Automação"],
      },
    ] satisfies SkillGroup[],
  },

  build: {
    id: "build",
    title: "O que eu construo",
    items: [
      {
        title: "Sistemas SaaS",
        description: "Plataformas completas com foco em negócio.",
        image: "/images/build-1.jpg",
        objectPosition: "55% 35%",
      },
      {
        title: "APIs e Backends",
        description: "Estruturas robustas, seguras e escaláveis.",
        image: "/images/build-2.jpg",
        objectPosition: "45% 25%",
      },
      {
        title: "Dashboards e Painéis",
        description: "Interfaces administrativas claras e eficientes.",
        image: "/images/build-3.jpg",
        objectPosition: "55% 35%",
      },
    ] satisfies BuildItem[],
  },

  projects: {
    id: "projetos",
    title: "Projetos em Produção",
    speedSeconds: 38,
    items: [
      {
        title: "Barber Premium",
        subtitle: "Agenda e gestão para barbearias",
        href: "#",
        image: "/images/project-1.jpg",
        objectPosition: "50% 45%",
        tags: ["SaaS", "Next.js", "Supabase"],
      },
      {
        title: "Sistema de Gestão",
        subtitle: "Plataforma administrativa sob medida",
        href: "#",
        image: "/images/project-2.jpg",
        objectPosition: "50% 45%",
        tags: ["Dashboard", "Full Stack"],
      },
      {
        title: "Landing Page Advocacia",
        subtitle: "Página de conversão otimizada",
        href: "#",
        image: "/images/project-3.jpg",
        objectPosition: "50% 45%",
        tags: ["Frontend", "SEO"],
      },
      {
        title: "E-commerce Customizado",
        subtitle: "Página de conversão otimizada",
        href: "#",
        image: "/images/project-4.jpg",
        objectPosition: "50% 45%",
        tags: ["Frontend", "SEO"],
      },
      {
        title: "Brutal-Barber-Shop",
        subtitle: "Gestão para barbearias",
        href: "#",
        image: "/images/brutal-baber.png",
        objectPosition: "50% 45%",
        tags: ["SaaS", "Next.js"],
      },
      {
        title: "Barber Flow",
        subtitle: "SaaS de agendamento de barbearias",
        href: "#",
        image: "/images/brutal flow.png",
        objectPosition: "50% 45%",
        tags: ["SaaS", "Next.js"],
      },
    ] satisfies Project[],
  },

  contact: {
    id: "contato",
    title: "Vamos construir seu sistema?",
    subtitle:
      "Se você quer um sistema com cara de produto profissional, vamos conversar.",
    buttons: [
      {
        label: "Falar no WhatsApp",
        href: WHATSAPP_URL,
        external: true,
        pulse: true,
      } satisfies CTA,
      {
        label: "Enviar Email",
        href: "mailto:brunovlviana41@gmail.com",
        external: true,
      } satisfies CTA,
    ],
  },

  theme: {
    accent: "#f5c400",
    backgroundImage: "/images/wood.jpg",
  },
} as const;
