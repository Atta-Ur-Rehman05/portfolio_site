import type { Metadata } from "next";
import { ProjectDirectory } from "../../components/ProjectDirectory";
export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects & Experiments",
  description:
    "Explore Intellex, FastAPI Journey, RAG Journey, and DSA learning work by Atta Ur Rehman.",
};
export default function Page() {
  return <ProjectDirectory />;
}
