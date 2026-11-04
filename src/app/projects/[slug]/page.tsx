import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../data/content";
import { ProjectDetail } from "../../../components/ProjectDetail";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    alternates: { canonical: `/projects/${slug}` },
    title: p?.name ?? "Project not found",
    description: p?.summary,
    openGraph: {
      title: `${p?.name ?? "Project"} | Atta Ur Rehman`,
      description: p?.summary,
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
