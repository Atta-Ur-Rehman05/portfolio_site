import Link from "next/link";
import { profile } from "../data/content";
import type { ProjectPreview } from "../data/content";
import { Diagram } from "./Diagrams";
import { Icon, Status, Tags } from "./ui";
export function ProjectCard({
  project,
  featured = false,
  compact = false,
}: {
  project: ProjectPreview;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className={`project-card ${featured ? "featured-project" : ""} ${compact ? "compact-project" : ""}`}
    >
      <div className="project-card-copy">
        <div className="project-top">
          {featured && <span className="project-kind">Featured project</span>}
          <Status>{project.status}</Status>
        </div>
        <span className="project-category">{project.eyebrow}</span>
        <Link href={`/projects/${project.slug}`} className="project-name">
          <h3>{project.name}</h3>
          <Icon name="arrow" />
        </Link>
        <p>{project.summary}</p>
        {(featured || compact) && <Tags items={project.tags} />}
      </div>
      <figure className="project-visual">
        <Diagram kind={project.diagram} small={compact} />
        <figcaption>
          Conceptual illustration
          {project.slug === "intellex"
            ? " · retrieval and chat are planned"
            : " · learning concepts"}
        </figcaption>
      </figure>
      {!featured && !compact && <Tags items={project.tags} />}
      <div className="project-actions">
        <Link
          className="button primary"
          href={`/projects/${project.slug}`}
          aria-label={`Read ${project.name} case study`}
        >
          Read case study
          <Icon name="right" size={14} />
        </Link>
        <a
          className="button secondary"
          href={`${profile.github}/${project.repo}`}
          aria-label={`View ${project.name} source on GitHub`}
        >
          <Icon name="code" size={14} />
          GitHub
        </a>
      </div>
    </article>
  );
}
