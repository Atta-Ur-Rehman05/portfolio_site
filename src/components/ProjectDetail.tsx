import Link from "next/link";
import { profile, projects } from "../data/content";
import type { Project } from "../data/content";
import { Button, Icon, Status, Tags } from "./ui";
import { Diagram } from "./Diagrams";

export function ProjectDetail({ project }: { project: Project }) {
  const evidence = project.evidence;
  const repository = `${profile.github}/${project.repo}`;
  return (
    <div className="container case-page">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/projects">Projects</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.name}</span>
      </nav>
      <header className="case-header">
        <div className="case-eyebrow">
          <span>{project.eyebrow}</span>
          <Status>{project.status}</Status>
        </div>
        <h1>{project.name}</h1>
        <p className="case-summary">{project.summary}</p>
        <Tags items={project.tags} />
        <div className="case-actions">
          <Button href={repository} icon="code">
            View source on GitHub
          </Button>
          <Button href="#development" icon="file" secondary>
            See current scope
          </Button>
        </div>
      </header>
      <nav className="case-nav" aria-label="Case study sections">
        <a href="#overview">Overview</a>
        <a href="#development">Current scope</a>
        <a href="#architecture">Technical decisions</a>
        <a href="#sources">Source evidence</a>
        <a href="#learnings">Engineering notes</a>
      </nav>
      <article
        className="case-content"
        aria-label={`${project.name} case study`}
      >
        <section id="overview" className="case-section">
          <h2>The project</h2>
          <p>{project.overview}</p>
          <h3 id="motivation">Why I’m building it</h3>
          <p>{project.motivation}</p>
        </section>
        <section id="development" className="case-section">
          <h2>Current scope</h2>
          <p className="case-section-intro">
            Implementation status at the reviewed revision. Source inspection
            does not establish a successful deployment.
          </p>
          <div className="scope-grid">
            {project.progress.map((item) => (
              <div className="scope-card" key={item.title}>
                <span
                  className={`scope-status ${item.status === "Source verified" ? "verified" : ""}`}
                >
                  {item.status}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="architecture" className="case-section">
          <h2>Technical decisions</h2>
          <div className="case-decisions">
            {project.approach.map((item) => (
              <div key={item.title}>
                <h3>{item.title.replace(/^[A-Z]\. /, "")}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <h3 id="stack">Tools & their role</h3>
          <dl className="case-stack">
            {project.stack.map((item) => (
              <div key={item.name}>
                <dt>
                  {item.name}
                  <span>{item.label}</span>
                </dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
          <details className="case-illustration">
            <summary>
              Explore the conceptual illustration{" "}
              <Icon name="right" size={16} />
            </summary>
            <figure>
              <Diagram kind={project.diagram} />
              <figcaption>
                Conceptual illustration, not a product screenshot.
                {project.slug === "intellex"
                  ? " Retrieval and AI chat remain planned; the current backend prepares documents and embeddings."
                  : " This visual describes learning concepts rather than a verified end-to-end system."}
              </figcaption>
            </figure>
          </details>
        </section>
        <section id="sources" className="case-section">
          <div className="evidence-heading">
            <h2>Source evidence</h2>
            {evidence && (
              <p>
                Reviewed{" "}
                <time dateTime={evidence.reviewed}>{evidence.reviewed}</time> ·{" "}
                <a
                  href={`${repository}/tree/${evidence.commit}`}
                  aria-label={`Browse reviewed ${project.name} revision ${evidence.commit.slice(0, 7)}`}
                >
                  revision {evidence.commit.slice(0, 7)}
                </a>
              </p>
            )}
          </div>
          {evidence ? (
            <>
              <div className="evidence-grid">
                {evidence.items.map((item) => (
                  <a
                    className="evidence-link"
                    href={`${repository}/blob/${evidence.commit}/${item.path}`}
                    key={item.path}
                  >
                    <strong>
                      {item.title}
                      <Icon name="external" size={16} />
                    </strong>
                    <span>{item.description}</span>
                    <small>Read source</small>
                  </a>
                ))}
              </div>
              <ul className="review-limits">
                {evidence.limits.map((limit) => (
                  <li key={limit}>{limit}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>
              Visit the{" "}
              <a className="inline-link" href={repository}>
                public repository
              </a>{" "}
              for current exercises. No implementation milestones or runtime
              results are asserted here.
            </p>
          )}
        </section>
        <section id="learnings" className="case-section">
          <h2>Engineering notes</h2>
          <div className="case-decisions">
            {project.notes.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <aside className="case-contact">
        <div>
          <h2>Want to discuss the work?</h2>
          <p>
            I’m happy to talk through the implementation and what I’m learning.
          </p>
        </div>
        <Button
          href={`mailto:${profile.email}?subject=${encodeURIComponent(`${project.name} — portfolio enquiry`)}`}
          icon="mail"
        >
          Email me
        </Button>
      </aside>
      <section className="case-related" aria-labelledby="related-title">
        <div className="related-heading">
          <h2 id="related-title">More projects</h2>
          <Link className="text-link" href="/projects">
            All projects <Icon name="right" size={15} />
          </Link>
        </div>
        <div className="related-grid">
          {projects
            .filter((item) => item.slug !== project.slug)
            .slice(0, 2)
            .map((item) => (
              <Link
                className="related-card"
                href={`/projects/${item.slug}`}
                key={item.slug}
              >
                <span>
                  {item.eyebrow}
                  <Icon name="right" size={18} />
                </span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <Tags items={item.tags} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
