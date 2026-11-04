import type { Metadata } from "next";
import { ProjectDirectory } from "../../components/ProjectDirectory";
import { projects } from "../../data/content";
export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects & Experiments",
  description:
    "Explore Intellex, FastAPI Journey, RAG Journey, and DSA learning work by Atta Ur Rehman.",
  openGraph: {
    title: "Projects & Experiments | Atta Ur Rehman",
    description:
      "Explore backend applications and AI engineering learning projects, with source-linked case studies.",
    url: "/projects",
  },
};
export default function Page() {
  const previews = projects.map(
    ({
      slug,
      name,
      code,
      alias,
      eyebrow,
      status,
      categories,
      summary,
      tags,
      repo,
      diagram,
    }) => ({
      slug,
      name,
      code,
      alias,
      eyebrow,
      status,
      categories,
      summary,
      tags,
      repo,
      diagram,
    }),
  );
  return <ProjectDirectory projects={previews} />;
}
