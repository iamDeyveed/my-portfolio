export type ProjectCategory = "Branding" | "Illustration" | "Digital" | "Web / Product";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  services: string[];
  shortDescription: string;
  cover: ProjectImage;
  thumbnail: ProjectImage;
  gallery: ProjectImage[];
  videos: { src: string; poster: string }[];
  accent: string;
  background: string;
  foreground: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  size: "wide" | "tall" | "standard";
};

export type ProjectPreview = Pick<
  Project,
  "slug" | "title" | "year" | "category" | "services" | "thumbnail" | "accent" | "order" | "size"
>;

export const projects: Project[] = [
  {
    slug: "zypp-protocol",
    title: "Zypp Protocol",
    client: "Zypp Protocol",
    year: "2025",
    category: "Branding",
    services: ["Brand identity", "Art direction", "Digital campaign"],
    shortDescription:
      "A sharper identity for a protocol built around fast, secure movement. The system turns a simple Z and keyhole into an assertive digital world.",
    cover: {
      src: "/images/zypp rebranded 1.png",
      alt: "Zypp Protocol rebrand announcement on a green-lit newspaper",
      width: 994,
      height: 994,
    },
    thumbnail: {
      src: "/images/zypp rebranded 1.png",
      alt: "Zypp Protocol rebrand announcement",
      width: 994,
      height: 994,
    },
    gallery: [
      {
        src: "/images/zypp rebranded 1.png",
        alt: "Zypp Protocol rebrand announcement on a green-lit newspaper",
        width: 994,
        height: 994,
      },
      {
        src: "/images/zypp cover letter 1.png",
        alt: "Zypp Protocol campaign with a glowing keyhole symbol",
        width: 1136,
        height: 378,
      },
    ],
    videos: [],
    accent: "oklch(0.72 0.22 149)",
    background: "oklch(0.15 0.035 158)",
    foreground: "oklch(0.96 0.012 86)",
    featured: true,
    order: 1,
    size: "wide",
  },
  {
    slug: "stacko-stories",
    title: "Stacko Stories",
    client: "Stacko",
    year: "2026",
    category: "Illustration",
    services: ["Illustration", "Character", "Visual storytelling"],
    shortDescription:
      "A bright illustration series built from everyday rituals, sport, food, and movement. Strong silhouettes and saturated color keep each scene immediate.",
    cover: {
      src: "/images/stackko-1080x1080.png",
      alt: "Illustrated shopper holding colorful groceries",
      width: 1080,
      height: 1080,
    },
    thumbnail: {
      src: "/images/stacko-illustration (11).png",
      alt: "Illustrated hand holding two tacos",
      width: 1024,
      height: 1536,
    },
    gallery: [
      {
        src: "/images/stackko-1080x1080.png",
        alt: "Illustrated shopper holding colorful groceries",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/stacko-illustration (10).png",
        alt: "Illustration of a footballer seen through the goal net",
        width: 1024,
        height: 1536,
      },
      {
        src: "/images/stacko-illustration (11).png",
        alt: "Illustrated hand holding two tacos",
        width: 1024,
        height: 1536,
      },
    ],
    videos: [],
    accent: "oklch(0.83 0.18 85)",
    background: "oklch(0.9 0.06 224)",
    foreground: "oklch(0.16 0.015 255)",
    featured: true,
    order: 2,
    size: "tall",
  },
  {
    slug: "otaku-ai",
    title: "OtakuAI",
    client: "OtakuAI",
    year: "2026",
    category: "Web / Product",
    services: ["Product design", "UI design", "Creative direction"],
    shortDescription:
      "A bold trading interface that makes dense memecoin signals feel direct and legible. The visual direction balances internet culture with clear product hierarchy.",
    cover: {
      src: "/images/otakuww 1.png",
      alt: "OtakuAI product interface shown across three tilted screens",
      width: 2268,
      height: 1276,
    },
    thumbnail: {
      src: "/images/otakuww 1.png",
      alt: "OtakuAI product interface composition",
      width: 2268,
      height: 1276,
    },
    gallery: [
      {
        src: "/images/otakuww 1.png",
        alt: "OtakuAI product interface shown across three tilted screens",
        width: 2268,
        height: 1276,
      },
    ],
    videos: [],
    accent: "oklch(0.61 0.25 27)",
    background: "oklch(0.96 0.018 88)",
    foreground: "oklch(0.16 0.015 255)",
    featured: true,
    order: 3,
    size: "standard",
  },
  {
    slug: "scholarspro-anniversary",
    title: "ScholarsPro at One",
    client: "ScholarsPro Academy",
    year: "2025",
    category: "Digital",
    services: ["Campaign design", "Art direction", "Social design"],
    shortDescription:
      "An anniversary campaign that puts the founder and the first year milestone at the center of a vivid, optimistic visual system.",
    cover: {
      src: "/images/SCHOLARSS 1.png",
      alt: "Purple first anniversary campaign for ScholarsPro Academy",
      width: 1136,
      height: 1136,
    },
    thumbnail: {
      src: "/images/SCHOLARSS 1.png",
      alt: "ScholarsPro Academy first anniversary artwork",
      width: 1136,
      height: 1136,
    },
    gallery: [
      {
        src: "/images/SCHOLARSS 1.png",
        alt: "Purple first anniversary campaign for ScholarsPro Academy",
        width: 1136,
        height: 1136,
      },
    ],
    videos: [],
    accent: "oklch(0.68 0.23 318)",
    background: "oklch(0.23 0.08 304)",
    foreground: "oklch(0.96 0.012 86)",
    featured: true,
    order: 4,
    size: "wide",
  },
  {
    slug: "campaign-systems",
    title: "Campaign Systems",
    client: "Selected clients",
    year: "2025–26",
    category: "Digital",
    services: ["Graphic design", "Campaigns", "Social systems"],
    shortDescription:
      "A selection of launch, milestone, and editorial graphics made to stop the scroll while keeping each client's voice intact.",
    cover: {
      src: "/images/Evrythingblue ww 1.png",
      alt: "Blue launch-to-trending campaign graphic",
      width: 994,
      height: 560,
    },
    thumbnail: {
      src: "/images/Evrythingblue ww 1.png",
      alt: "Blue launch campaign visual",
      width: 994,
      height: 560,
    },
    gallery: [
      {
        src: "/images/Evrythingblue ww 1.png",
        alt: "Blue launch-to-trending campaign graphic",
        width: 994,
        height: 560,
      },
      {
        src: "/images/intro poste 1.png",
        alt: "Nigerian products on Solana editorial graphic",
        width: 994,
        height: 560,
      },
      {
        src: "/images/Frame 2147228701 1.png",
        alt: "Mother's Day campaign artwork in vivid purple",
        width: 1136,
        height: 568,
      },
      {
        src: "/images/DAY 307 1.png",
        alt: "Blue and yellow Holiness Challenge poster",
        width: 1084,
        height: 1136,
      },
      {
        src: "/images/1b7be13ab9ce5f5d8858e226660b84c3.jpg",
        alt: "Champ Tutorials anniversary and awards poster",
        width: 736,
        height: 817,
      },
      {
        src: "/images/4fe0191736bbc3689efada9ffd63d6f8.jpg",
        alt: "Champ Tutorials coming soon announcement",
        width: 736,
        height: 736,
      },
      {
        src: "/images/ca6d3da9320bad679f702a71c32c9502.jpg",
        alt: "Amaa Africa Founder's Digest announcement",
        width: 736,
        height: 736,
      },
    ],
    videos: [],
    accent: "oklch(0.64 0.24 257)",
    background: "oklch(0.94 0.025 255)",
    foreground: "oklch(0.16 0.015 255)",
    featured: true,
    order: 5,
    size: "standard",
  },
];

export const projectCategories = ["All", "Branding", "Illustration", "Digital", "Web / Product"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const index = ordered.findIndex((project) => project.slug === slug);
  return ordered[(index + 1) % ordered.length];
}
