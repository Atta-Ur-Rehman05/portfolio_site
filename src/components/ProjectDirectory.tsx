"use client";
import Link from "next/link";
import { useState } from "react";
import { projects, profile } from "../data/content";
import type { Category } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { Contact } from "./Contact";
import { Icon, Label } from "./ui";
const filters: ["All Projects", ...Category[]] = [
  "All Projects",
  "AI Applications",
  "Backend Engineering",
  "Engineering Learning",
];
export function ProjectDirectory() {
  const [filter, setFilter] = useState<string>("All Projects");
  const visible = projects.filter(
    (p) =>
      filter === "All Projects" || p.categories.includes(filter as Category),
  );
  return (
    <div className="container directory">
      <div className="breadcrumb-row">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">
            <Icon name="terminal" size={13} />
            Home
          </Link>
          <span>/</span>
          <span aria-current="page">Projects</span>
        </nav>
        <span className="registry-label">
          <i />
          Index: {projects.length} Selected Repositories
        </span>
      </div>
      <div className="directory-heading">
        <div>
          <Label>
            Portfolio directory{" "}
            <span className="muted">{"// SYSTEM_DISCOVERY"}</span>
          </Label>
          <h1>Projects & Experiments</h1>
          <p>
            Exploring backend systems, AI applications, and software engineering
            through practical projects.
          </p>
        </div>
        <div className="focus-panel">
          <span>
            System Focus<strong>AI & Backend</strong>
          </span>
          <span>
            Primary Language<strong>Python</strong>
          </span>
        </div>
      </div>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            <span>
              {f === "All Projects"
                ? projects.length
                : projects.filter((p) => p.categories.includes(f)).length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter !== "All Projects" ? ` in ${filter}` : ""}.
      </p>
      <div className="directory-grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <aside className="source-callout">
        <span className="square-icon">
          <Icon name="layers" size={24} />
        </span>
        <div>
          <h2>Learning through implementation</h2>
          <p>
            Each repository has its own scope and stage of development. Explore
            the source to see the work behind the portfolio.
          </p>
        </div>
        <a className="button secondary" href={profile.github}>
          <Icon name="terminal" size={15} />
          Inspect GitHub Repositories
        </a>
      </aside>
      <Contact directory />
    </div>
  );
}
