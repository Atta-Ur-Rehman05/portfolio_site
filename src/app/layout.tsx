import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { profile } from "../data/content";
import { siteUrl } from "../data/site";
import "./globals.css";
const geist = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});
const mono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  variable: "--font-mono",
  preload: false,
  display: "swap",
  weight: "100 900",
});
const description =
  "Atta Ur Rehman, AI Application Engineer Intern at Hexoforge LLC and Software Engineering undergraduate at MUST. Explore backend projects, RAG applications, and hands-on learning.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/favicon.svg" },
  title: {
    default: "Atta Ur Rehman | AI & Backend Engineering",
    template: "%s | Atta Ur Rehman",
  },
  description,
  openGraph: {
    url: siteUrl,
    siteName: "Atta Ur Rehman — Portfolio",
    title: "Atta Ur Rehman | AI & Backend Engineering",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Atta Ur Rehman | AI & Backend Engineering",
    description,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
    worksFor: { "@type": "Organization", name: profile.company },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: profile.education.university,
    },
  };
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
