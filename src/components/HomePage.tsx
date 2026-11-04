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
          <span className="hero-status">
            <i /> {profile.title} @ {profile.company}
          </span>
          <h1>
            Building backend systems & <span>AI-powered applications.</span>
          </h1>
          <p>{profile.description}</p>
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
          <h2>
            Engineering curiosity
            <br />
            into practical solutions.
          </h2>
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
          <div className="about-footer">
            <span>▸ Undergrad 2024–2028</span>
            <span>◈ AI Engineering Focus</span>
          </div>
        </div>
        <div className="about-grid">
          {[
            {
              n: "01 / ROLE",
              icon: "terminal",
              title: "Current Role",
              text: profile.title,
              sub: profile.company,
            },
            {
              n: "02 / INSTITUTION",
              icon: "school",
              title: "University",
              text: profile.education.university,
              sub: "2024 — 2028",
            },
            {
              n: "03 / SPECIALIZATION",
              icon: "layers",
              title: "Core Focus",
              text: "Backend Systems & AI Engineering",
              sub: "Hands-on implementation",
            },
            {
              n: "04 / INTERESTS",
              icon: "database",
              title: "Primary Interests",
              text: "RAG Systems & Vector Stores",
              sub: "Learning through building",
            },
          ].map((c) => (
            <div className="info-card" key={c.n}>
              <div className="info-top">
                <span>{c.n}</span>
                <Icon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <small>{c.sub}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="container section" id="experience">
        <SectionHeading
          number="02"
          label="Experience"
          title="Where learning meets real-world engineering."
          description="Practical experience in AI application development."
          aside={<Status>Current Internship</Status>}
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
            <span className="micro-label">Scope of contribution</span>
            <h4>AI application development</h4>
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
          title="Things I’ve built and explored."
          description="A selection of backend engineering projects, AI experiments, and ongoing development work."
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
          title="Technologies I work with and explore."
          description="Practical frameworks, databases, and areas of continued learning."
        />
        <div className="skill-grid">
          {skillGroups.map((s, i) => (
            <article
              className={`skill-card ${i === 4 ? "wide" : ""}`}
              key={s.name}
            >
              <h3>
                <Icon name={s.icon} />
                {s.name}
              </h3>
              {i === 4 && (
                <p>Technologies I’m exploring alongside my core background:</p>
              )}
              <Tags items={s.items} />
              <span className="skill-caption">{s.caption}</span>
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
