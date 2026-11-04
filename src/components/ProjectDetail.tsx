import Link from "next/link";
import { profile, projects } from "../data/content";
import type { Project } from "../data/content";
import { Button, Icon, Label, Status, Tags } from "./ui";
import { Diagram } from "./Diagrams";
const sections = [
  ["overview", "Overview"],
  ["motivation", "Problem Statement"],
  ["stack", "Tech Stack"],
  ["architecture", "Architecture Blueprint"],
  ["development", "Development Status"],
  ["learnings", "Challenges & Learnings"],
];
const stages = [
  [
    "file",
    "01. INGEST",
    "Source Material",
    "Documents and information to organize.",
  ],
  ["chunk", "02. CHUNK", "Passages", "Smaller units for a retrieval workflow."],
  [
    "brain",
    "03. EMBED",
    "Representations",
    "Represent content for similarity search.",
  ],
  [
    "database",
    "04. STORE",
    "Vector Storage",
    "Organize representations for retrieval.",
  ],
  [
    "search",
    "05. RETRIEVE",
    "Relevant Context",
    "Find passages related to a question.",
  ],
  [
    "spark",
    "06. SYNTHESIZE",
    "AI Interaction",
    "Use retrieved context in an AI response.",
  ],
];
export function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div className="container detail-intro">
        <div className="breadcrumb-row">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/projects">Projects</Link>
            <span>/</span>
            <span aria-current="page">{project.name}</span>
          </nav>
          <Link className="button secondary compact" href="/projects">
            <Icon name="left" size={14} />
            Back to Projects
          </Link>
        </div>
        <Status>{project.status}</Status>
        <div className="detail-title-row">
          <div>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
          </div>
          <div className="detail-actions">
            <Button href={`${profile.github}/${project.repo}`} icon="terminal">
              GitHub Repository
            </Button>
            <Button href="#architecture" icon="tree" secondary>
              Inspect Blueprint
            </Button>
          </div>
        </div>
        <div className="detail-facts">
          {[
            [
              "Project Type",
              project.eyebrow,
              "Independent learning & development",
            ],
            [
              "System Phase",
              project.status,
              "See the source for current progress",
            ],
            [
              "Core Domain",
              project.categories[0],
              "Practical engineering exploration",
            ],
            ["Source", "Public Repository", "No production adoption claimed"],
          ].map(([title, value, sub]) => (
            <div key={title}>
              <span className="micro-label">{title}</span>
              <strong>{value}</strong>
              <small>{sub}</small>
            </div>
          ))}
        </div>
      </div>
      <section className="topology-section">
        <div className="container">
          <div className="topology-heading">
            <div>
              <Label>System Topology</Label>
              <h2>
                {project.slug === "intellex"
                  ? "RAG Engine Architectural Flow"
                  : "Engineering Learning Map"}
              </h2>
            </div>
            <span className="concept-badge">
              <Icon name="compass" size={15} />
              Conceptual illustration — not an implementation claim
            </span>
          </div>
          {project.slug === "intellex" ? (
            <div className="pipeline-panel">
              <div className="terminal-title">
                <span className="traffic">
                  <i />
                  <i />
                  <i />
                </span>
                <span>intellex / conceptual-workflow.svg</span>
                <span className="pipeline-subtitle">
                  RAG · Knowledge Workspace
                </span>
              </div>
              <div className="pipeline-stages">
                {stages.map(([icon, label, title, description]) => (
                  <div className="pipeline-stage" key={label}>
                    <div className="stage-label">
                      {label}
                      <Icon name={icon} size={18} />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>
                      Conceptual step <Icon name="right" size={12} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="pipeline-summary">
                <span>
                  Architecture Direction<strong>Modular monolith</strong>
                </span>
                <span>
                  Project Phase<strong>In Development</strong>
                </span>
                <span>
                  Implementation Scope<strong>Review repository</strong>
                </span>
                <span>
                  Performance Claims<strong>None asserted</strong>
                </span>
              </div>
            </div>
          ) : (
            <Diagram kind={project.diagram} />
          )}
        </div>
      </section>
      <div className="container detail-layout">
        <aside className="detail-sidebar">
          <span className="micro-label">Index & Sections</span>
          <nav aria-label="Project sections">
            {sections.map(([id, title], i) => (
              <a href={`#${id}`} key={id}>
                {String(i + 1).padStart(2, "0")}. {title}
              </a>
            ))}
          </nav>
          <div>
            <span>Project source</span>
            <a href={`${profile.github}/${project.repo}`}>{project.repo} ↗</a>
          </div>
        </aside>
        <div className="detail-article">
          <section id="overview">
            <Label number="01">Discovery</Label>
            <h2>Project Overview</h2>
            <p>{project.overview}</p>
            <div className="inset-pair">
              <div>
                <h3>Workspace Objective</h3>
                <p>{project.motivation}</p>
              </div>
              <div>
                <h3>Architectural Philosophy</h3>
                <p>
                  Learn through focused implementation and keep the difference
                  between planned architecture and completed functionality
                  clear.
                </p>
              </div>
            </div>
          </section>
          <section id="motivation">
            <Label number="02">Problem Space</Label>
            <h2>Motivation & Problem Statement</h2>
            <p>{project.motivation}</p>
            <div className="inset-pair">
              <div>
                <h3 className="amber-text">
                  <Icon name="compass" size={15} />
                  Keep the problem concrete
                </h3>
                <p>
                  Start with a useful problem and choose tools that support the
                  actual requirements.
                </p>
              </div>
              <div>
                <h3 className="amber-text">
                  <Icon name="file" size={15} />
                  Make progress reviewable
                </h3>
                <p>
                  The public repository provides a place to inspect
                  implementation details as the project evolves.
                </p>
              </div>
            </div>
          </section>
          <section id="stack">
            <Label number="03">Stack Specification</Label>
            <h2>
              {project.slug === "intellex"
                ? "Documented Technology Direction"
                : "Technology & Learning Areas"}
            </h2>
            <p>
              Tools and areas described by the project. Architecture
              descriptions are distinct from completed, deployed functionality.
            </p>
            <div className="stack-grid">
              {project.stack.map((s) => (
                <div className="inset" key={s.name}>
                  <h3>
                    {s.name}
                    <span>{s.label}</span>
                  </h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="architecture">
            <Label number="04">Deep Dive</Label>
            <h2>Architectural Blueprint Breakdown</h2>
            <p>
              A source-grounded overview of the project’s organization and
              intended direction.
            </p>
            <div className="approach-list">
              {project.approach.map((a) => (
                <div className="inset" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="development">
            <Label number="05">Timeline & Progress</Label>
            <h2>Current Development Status</h2>
            <p>
              {project.slug === "intellex"
                ? "Intellex remains In Development. No completion percentages or unverified milestones are presented."
                : "This repository is presented as learning and implementation work."}
            </p>
            <div className="progress-list">
              {project.progress.map((p, i) => (
                <div className="progress-item" key={p.title}>
                  <Icon name={i === 0 ? "clock" : "file"} size={23} />
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span>{p.status}</span>
                </div>
              ))}
            </div>
          </section>
          <section id="learnings">
            <Label number="06">Engineering Learnings</Label>
            <h2>Challenges & Engineering Insights</h2>
            <div className="inset-pair">
              {project.notes.map((n, i) => (
                <div key={n.title}>
                  <span className="micro-label">
                    Engineering Note {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{n.title}</h3>
                  <p>{n.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="container detail-bottom">
        <aside className="source-callout">
          <div>
            <Label>Open source engineering</Label>
            <h2>Explore the Implementation Progress</h2>
            <p>
              Review the source, follow the project, or get in touch to discuss
              the work.
            </p>
          </div>
          <div className="detail-actions">
            <Button href={`${profile.github}/${project.repo}`} icon="code">
              View on GitHub
            </Button>
            <Button
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`${project.name} — portfolio feedback`)}`}
              icon="message"
              secondary
            >
              Offer Feedback
            </Button>
          </div>
        </aside>
        <div className="related-heading">
          <div>
            <Label>Exploration & Foundations</Label>
            <h2>Related Technical Journeys</h2>
          </div>
          <Link className="text-link" href="/projects">
            All Projects <Icon name="right" size={15} />
          </Link>
        </div>
        <div className="related-grid">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 2)
            .map((p) => (
              <Link
                className="related-card"
                href={`/projects/${p.slug}`}
                key={p.slug}
              >
                <span>
                  {p.eyebrow}
                  <Icon name="right" size={18} />
                </span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <Tags items={p.tags} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
