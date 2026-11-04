import Link from "next/link";
import Image from "next/image";
import { profile, projects, skillGroups, learning } from "../data/content";
import { HeroDiagram } from "./Diagrams";
import { ProjectCard } from "./ProjectCard";
import { Contact } from "./Contact";
import { Button, Icon, Label, SectionHeading, Status, Tags } from "./ui";
export function HomePage() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="hero-name">{profile.name}</p>
          <p className="hero-role">
            AI Application Engineering · Backend Engineering
          </p>
          <span className="hero-status">
            <i /> {profile.title} @ {profile.company}
          </span>
          <h1>
            Building backend systems & <span>AI-powered applications.</span>
          </h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-buttons">
            <Button href="/projects">
              View projects <Icon name="right" size={16} />
            </Button>
            <Button href={`mailto:${profile.email}`} icon="mail" secondary>
              Email me
            </Button>
            {profile.resume && (
              <a className="button secondary" href={profile.resume} download>
                <Icon name="file" size={16} /> Download resume
              </a>
            )}
          </div>
          <div className="hero-signals">
            <span>Find me</span>
            <a href={profile.github}>GitHub ↗</a>
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          </div>
        </div>
        <HeroDiagram />
      </section>
      <section className="container section about" id="about">
        <div>
          <Label number="01">About Me</Label>
          <h2>Curious about how things work.</h2>
          <div className="about-body">
            <Image
              className="about-portrait"
              src="/atta%20photo.jpg"
              alt="Portrait of Atta Ur Rehman"
              width={398}
              height={558}
              sizes="(max-width: 640px) 128px, 112px"
            />
            <div className="about-text">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <aside
          className="about-highlights"
          aria-label="Current project interests"
        >
          <Link href="/projects/intellex" className="about-highlight">
            <span className="micro-label">Currently building</span>
            <h3>
              Intellex <Icon name="right" size={18} />
            </h3>
            <p>
              A document workspace, from file upload to chunks and embeddings.
            </p>
            <span className="text-link">Explore the project</span>
          </Link>
          <Link href="/projects/fastapi-journey" className="about-highlight">
            <span className="micro-label">Learning through practice</span>
            <h3>
              Backend fundamentals <Icon name="right" size={18} />
            </h3>
            <p>
              API validation, authentication, and database-backed applications.
            </p>
            <span className="text-link">See the exercises</span>
          </Link>
        </aside>
      </section>
      <section className="container section" id="experience">
        <SectionHeading
          number="02"
          label="Experience"
          title="AI application engineering in practice."
        />
        <article className="experience-card">
          <div className="experience-header">
            <div className="experience-identity">
              <span className="square-icon">
                <Icon name="brain" size={25} />
              </span>
              <div>
                <h3>
                  {profile.company} <Status>Current</Status>
                </h3>
                <p>{profile.title}</p>
              </div>
            </div>
            <span className="date">
              <Icon name="clock" size={13} />
              {profile.experience.period}
            </span>
          </div>
          <div className="experience-body">
            <span className="micro-label">Current contribution</span>
            <h4>RAG chatbot applications</h4>
            <ul className="experience-scope">
              <li>{profile.experience.contribution}</li>
              <li>AI integration for e-commerce applications.</li>
              <li>Static website development.</li>
            </ul>
            <Tags items={["RAG", "AI Applications", "Chatbots"]} />
          </div>
        </article>
      </section>
      <section className="container section" id="projects">
        <SectionHeading
          number="03"
          label="Selected Work"
          title="Projects with source you can review."
          description="One active workspace project, alongside focused backend and AI learning repositories."
          aside={
            <Link className="text-link" href="/projects">
              View All Projects <Icon name="external" size={15} />
            </Link>
          }
        />
        <ProjectCard project={projects[0]} featured />
        <div className="home-project-grid">
          {projects.slice(1, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} compact />
          ))}
        </div>
      </section>
      <section className="container section" id="skills">
        <SectionHeading
          number="04"
          label="Technical Toolkit"
          title="Tools, backed by practice."
          description="Project implementation, technical background, and continued exploration are labeled separately."
        />
        <div className="skill-grid">
          {skillGroups.map((s) => (
            <article
              className={`skill-card ${s.kind === "exploring" ? "wide exploring" : ""}`}
              key={s.name}
            >
              <h3>
                <Icon name={s.icon} />
                {s.name}
              </h3>
              <span className="skill-level">{s.level}</span>
              <Tags items={s.items} />
              <p className="skill-caption">{s.caption}</p>
              {s.href && (
                <Link className="text-link skill-source" href={s.href}>
                  See project context <Icon name="right" size={14} />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="container section" id="learning">
        <SectionHeading
          number="05"
          label="Continuous Learning"
          title="Learning, experimenting, improving."
          description="Engineering interests that guide my ongoing learning."
        />
        <div className="learning-grid">
          {learning.map((item) => (
            <article className="learning-card" key={item.title}>
              <Icon name={item.icon} size={23} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.project ? (
                <Link className="text-link" href={`/projects/${item.project}`}>
                  {item.link} <Icon name="arrow" size={12} />
                </Link>
              ) : (
                <span className="learning-caption">{item.link}</span>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="container section" id="education">
        <SectionHeading
          number="06"
          label="Education"
          title="Academic foundation."
          description="Undergraduate software engineering education and engineering fundamentals."
        />
        <article className="education-card">
          <div className="education-main">
            <span className="square-icon">
              <Icon name="school" size={28} />
            </span>
            <div>
              <h3>{profile.education.university}</h3>
              <p>{profile.education.degree}</p>
            </div>
            <div className="education-dates">
              <span>{profile.education.dates}</span>
              <span>Undergraduate</span>
            </div>
          </div>
          <div className="education-bottom">
            <span className="micro-label">
              Engineering interests & learning focus
            </span>
            <Tags
              items={[
                "Software Engineering",
                "Data Structures & Algorithms",
                "Backend Development",
                "System Design",
              ]}
            />
          </div>
        </article>
      </section>
      <div className="container contact-wrap">
        <Contact />
      </div>
    </>
  );
}
