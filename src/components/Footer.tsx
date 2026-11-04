import { profile } from "../data/content";
import { Icon } from "./ui";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">
            {profile.name}{" "}
            <span>
              — {profile.title} @ {profile.company}
            </span>
          </p>
          <p>© 2026 {profile.name}. Learning, building, improving.</p>
        </div>
        <div className="footer-links">
          <a href={profile.github}>
            <Icon name="code" size={15} />
            GitHub
          </a>
          <a href={profile.linkedin}>
            <Icon name="network" size={15} />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <Icon name="mail" size={15} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
