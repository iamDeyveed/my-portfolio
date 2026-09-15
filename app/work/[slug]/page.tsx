import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getNextProject, getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = `${project.title}, ${project.services.join(", ")} by Yagazie. ${project.shortDescription}`;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | Yagazie`,
      description,
      url: `/work/${project.slug}`,
      images: [{
        url: project.cover.src,
        width: project.cover.width,
        height: project.cover.height,
        alt: project.cover.alt,
      }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = getNextProject(project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: { "@type": "Person", name: "Yagazie" },
    dateCreated: project.year,
    genre: project.category,
    description: project.shortDescription,
    image: project.gallery.map((image) => `https://yagazie.vercel.app${image.src}`),
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="case-page">
        <header
          className="case-hero"
          style={{
            "--case-bg": project.background,
            "--case-accent": project.accent,
            "--case-ink": project.foreground,
          } as React.CSSProperties}
        >
          <Link className="case-back hero-enter hero-enter-1" href="/#work">← All work</Link>
          <div className="case-title-wrap">
            <p className="case-index hero-enter hero-enter-1">{String(project.order).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
            <h1 className="hero-enter hero-enter-2">{project.title}</h1>
          </div>
          <dl className="case-meta hero-enter hero-enter-3">
            <div><dt>Client</dt><dd>{project.client}</dd></div>
            <div><dt>Year</dt><dd>{project.year}</dd></div>
            <div><dt>Role</dt><dd>{project.services.join(", ")}</dd></div>
          </dl>
          <p className="case-description hero-enter hero-enter-4">{project.shortDescription}</p>
          {project.liveUrl && (
            <a className="case-live hero-enter hero-enter-4" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site ↗</a>
          )}
        </header>

        <section className="case-gallery" aria-label={`${project.title} gallery`}>
          {project.gallery.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`case-image case-image--${image.width / image.height > 1.5 ? "landscape" : image.height / image.width > 1.2 ? "portrait" : "square"} reveal`}
              data-reveal
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={image.width / image.height > 1.5 ? "100vw" : "(max-width: 767px) 100vw, 58vw"}
                quality={90}
                priority={index === 0}
              />
            </figure>
          ))}
        </section>

        <Link
          className="next-project"
          href={`/work/${nextProject.slug}`}
          style={{ "--next-color": nextProject.accent } as React.CSSProperties}
        >
          <span>Next project</span>
          <strong>{nextProject.title}</strong>
          <span aria-hidden="true">↗</span>
        </Link>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
