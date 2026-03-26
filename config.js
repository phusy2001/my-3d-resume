window.portfolioData = {
  about: {
    name:  "Alex Morgan",
    role:  "Full-Stack & Creative Developer",
    bio:   "I build fast, accessible, and visually rich web applications. Passionate about bridging design and engineering — from pixel-perfect interfaces to robust backend systems.",
    facts: ["5+ years experience", "20+ shipped products", "Open-source contributor", "Coffee-driven ☕"],
    links: [
      { label: "GitHub",     url: "https://github.com", type: "primary"   },
      { label: "Portfolio",  url: "#",                  type: "secondary"  },
      { label: "Resume PDF", url: "#",                  type: "secondary"  },
    ],
  },

  projects: [
    {
      name: "NovaDash",
      desc: "Real-time analytics dashboard with WebSocket streaming, D3 charts, and drag-and-drop layout builder.",
      tech: ["React", "Node.js", "WebSocket", "D3"],
    },
    {
      name: "ArcAPI",
      desc: "Type-safe REST & GraphQL gateway with auto-generated docs, rate-limiting, and OAuth2.",
      tech: ["TypeScript", "GraphQL", "PostgreSQL", "Redis"],
    },
    {
      name: "ShiftCMS",
      desc: "Headless CMS with live preview, multi-locale support, and a visual block editor.",
      tech: ["Next.js", "Prisma", "tRPC", "S3"],
    },
    {
      name: "LumaUI",
      desc: "Accessible component library (WCAG 2.1 AA) with zero-runtime CSS and Storybook docs.",
      tech: ["React", "Radix UI", "Vanilla Extract"],
    },
  ],

  skills: {
    frontend: ["React / Next.js", "TypeScript", "Three.js / WebGL", "Tailwind CSS", "Framer Motion", "Vite"],
    backend:  ["Node.js / Bun", "PostgreSQL", "Redis", "GraphQL", "Prisma", "Docker"],
    tools:    ["Git / GitHub", "Figma", "Vercel / AWS", "Playwright", "Storybook", "CI/CD"],
  },

  contact: {
    email:     "alex@example.dev",
    github:    "github.com/alexmorgan",
    linkedin:  "linkedin.com/in/alexmorgan",
    twitter:   "@alexmorgan_dev",
    location:  "San Francisco, CA",
    available: true,
  },
};
