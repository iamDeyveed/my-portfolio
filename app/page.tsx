import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DigitalBuilds } from "@/components/DigitalBuilds";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IllustrationGrid } from "@/components/IllustrationGrid";
import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yagazie",
  url: "https://yagazie.vercel.app",
  jobTitle: "Designer, Illustrator and Builder",
  knowsAbout: [
    "Illustration",
    "Brand identity",
    "Graphic design",
    "Digital design",
    "Web design",
    "Web development",
  ],
  email: "mailto:hello@davidubakaibeya.com",
};

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .map(({ slug, title, year, category, services, thumbnail, accent, order, size }) => ({
      slug,
      title,
      year,
      category,
      services,
      thumbnail,
      accent,
      order,
      size,
    }));

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectGrid projects={featuredProjects} />
        <IllustrationGrid />
        <DigitalBuilds />
        <About />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
