"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./ui";
import { profile } from "../data/content";
const links = [
  ["Projects", "/projects"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Skills", "/#skills"],
  ["Education", "/#education"],
  ["Contact", "/#contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Atta Ur Rehman home">
          <span className="monogram" aria-hidden="true">
            AR<span>_</span>
          </span>
          <span>{profile.name}</span>
          <span className="brand-tag">AI / Backend</span>
        </Link>
        <nav
          id="site-navigation"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <Link
              href={href}
              key={label}
              onClick={() => setOpen(false)}
              aria-current={
                label === "Projects" && pathname.startsWith("/projects")
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="button primary compact"
            href={`mailto:${profile.email}`}
          >
            Email me
          </a>
          {profile.resume && (
            <a
              className="button secondary compact"
              href={profile.resume}
              download
            >
              Resume <Icon name="file" size={14} />
            </a>
          )}
          <a
            className="profile-icon"
            href={profile.linkedin}
            aria-label="Atta Ur Rehman on LinkedIn"
          >
            <Icon name="user" size={17} />
          </a>
          <button
            type="button"
            ref={button}
            className="menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="site-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
