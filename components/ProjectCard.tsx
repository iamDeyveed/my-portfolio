import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import type { ProjectPreview } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectPreview;
  index: number;
  onPointerMove: (event: PointerEvent<HTMLElement>) => void;
  onPointerState: (visible: boolean) => void;
};

export function ProjectCard({ project, index, onPointerMove, onPointerState }: ProjectCardProps) {
  return (
    <article
      className={`project-card project-card--${project.size}`}
      style={{ "--project-accent": project.accent, animationDelay: `${index * 45}ms` } as React.CSSProperties}
      onPointerMove={onPointerMove}
      onPointerEnter={() => onPointerState(true)}
      onPointerLeave={() => onPointerState(false)}
    >
      <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} project`}>
        <div className="project-media">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes={project.size === "wide" ? "(max-width: 767px) 100vw, 94vw" : "(max-width: 767px) 100vw, 50vw"}
            quality={85}
            loading={index < 2 ? "eager" : "lazy"}
          />
        </div>
        <div className="project-caption">
          <h3>{project.title}</h3>
          <p>{project.services.slice(0, 2).join(" · ")} · {project.year}</p>
        </div>
      </Link>
    </article>
  );
}
