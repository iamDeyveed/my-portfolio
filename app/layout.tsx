import type { Metadata, Viewport } from "next";
import { Archivo_Black, Atkinson_Hyperlegible } from "next/font/google";
import { RevealController } from "@/components/RevealController";
import "./globals.css";

const display = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const body = Atkinson_Hyperlegible({
  variable: "--font-body",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yagazie.vercel.app"),
  title: {
    default: "Yagazie | Designer, Illustrator & Builder",
    template: "%s | Yagazie",
  },
  description:
    "Portfolio of Yagazie, a multidisciplinary designer and illustrator creating brands, illustrations and digital experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Yagazie",
    title: "Yagazie | Designer, Illustrator & Builder",
    description:
      "Multidisciplinary designer and illustrator creating brands, illustrations and digital experiences.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Yagazie. I illustrate, design and ship." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yagazie | Designer, Illustrator & Builder",
    description: "I illustrate, design and ship.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f1e8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <RevealController />
        {children}
        <noscript><style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style></noscript>
      </body>
    </html>
  );
}
