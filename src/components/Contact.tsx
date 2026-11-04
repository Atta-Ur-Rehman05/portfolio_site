import { profile } from "../data/content";
import { Button, Label } from "./ui";
export function Contact({ directory = false }: { directory?: boolean }) {
  return (
    <section
      className={`contact-panel ${directory ? "directory-contact" : ""}`}
      id="contact"
    >
      <div>
        <Label number={directory ? undefined : "07"}>Contact</Label>
        <h2>
          {directory
            ? "Interested in collaborating or discussing technical ideas?"
            : "Let’s build something meaningful."}
        </h2>
        <p>{profile.contact}</p>
      </div>
      <div className="contact-buttons">
        <Button href={`mailto:${profile.email}`} icon="mail">
          {directory ? "Get in Touch" : "Send an Email"}
        </Button>
        <Button href={profile.whatsapp} icon="message" secondary>
          WhatsApp
        </Button>
        <Button
          href={directory ? "/" : profile.github}
          icon={directory ? "home" : "code"}
          secondary
        >
          {directory ? "Back to Home" : "GitHub Profile"}
        </Button>
        {!directory && (
          <Button href={profile.linkedin} icon="network" secondary>
            LinkedIn
          </Button>
        )}
        {profile.resume && (
          <a className="button secondary" href={profile.resume} download>
            Download resume
          </a>
        )}
      </div>
      {!directory && (
        <p className="direct-mail">
          Direct Mail: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      )}
    </section>
  );
}
