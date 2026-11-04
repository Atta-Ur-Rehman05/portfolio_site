import Link from "next/link";
import { profile } from "../data/content";
import type { Project } from "../data/content";
import { Diagram } from "./Diagrams";
import { Icon, Status, Tags } from "./ui";
export function ProjectCard({
  project,
  featured = false,
  compact = false,
}: {
  project: Project;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className={`project-card ${featured ? "featured-project" : ""} ${compact ? "compact-project" : ""}`}
    >
      <div className="project-card-copy">
        <div className="project-top">
          <span>
            <b>{project.code}</b>{" "}
            <span className="project-alias">{project.alias}</span>
          </span>
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
      <Diagram kind={project.diagram} small={compact} />
      {!featured && !compact && <Tags items={project.tags} />}
      <div className="project-actions">
        <a
          className="button secondary"
          href={`${profile.github}/${project.repo}`}
        >
          <Icon name="code" size={14} />
          GitHub Repository
        </a>
        <Link
          className={`button ${featured ? "primary" : "secondary detail-button"}`}
          href={`/projects/${project.slug}`}
        >
          {featured ? "View Details" : "Case Study"}
          <Icon name="right" size={14} />
        </Link>
      </div>
    </article>
  );
}
