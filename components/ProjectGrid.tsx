"use client";

import { useMemo, useRef, useState, useTransition, type PointerEvent } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, type ProjectPreview } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: ProjectPreview[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [isPending, startTransition] = useTransition();
  const cursorRef = useRef<HTMLDivElement>(null);

  const visibleProjects = useMemo(
    () => projects
      .filter((project) => activeCategory === "All" || project.category === activeCategory)
      .sort((a, b) => a.order - b.order),
    [activeCategory, projects],
  );

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    }
  };

  const handlePointerState = (visible: boolean) => {
    if (cursorRef.current) cursorRef.current.dataset.visible = String(visible);
  };

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="section-intro reveal" data-reveal>
        <h2 id="work-title">Selected work</h2>
        <p>Identity, illustration and digital experiences.</p>
      </div>

      <div className="filter-row reveal" data-reveal role="group" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "is-active" : ""}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => startTransition(() => setActiveCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid" aria-live="polite" aria-busy={isPending}>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={`${activeCategory}-${project.slug}`}
            project={project}
            index={index}
            onPointerMove={handlePointerMove}
            onPointerState={handlePointerState}
          />
        ))}
      </div>

      <div
        ref={cursorRef}
        className="project-cursor"
        aria-hidden="true"
        data-visible="false"
      >
        View ↗
      </div>
    </section>
  );
}
