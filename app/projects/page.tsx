import ProjectsPage from "../../pages/ProjectPage";
import { getProject } from "../../lib/porject";

import AllProjectPage from "../../pages/ProjectPage";

// Metadata for SEO
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full stack web development projects by Abdur Rahman Adil (SyntaxAdil) — built with Next.js, React, Node.js, Express, and MongoDB. Real-world MERN stack applications.",
  keywords: [
    "Abdur Rahman Adil Projects",
    "SyntaxAdil Projects",
    "MERN Stack Projects",
    "Next.js Projects Portfolio",
    "Full Stack Developer Projects Bangladesh",
  ],
  alternates: {
    canonical: "https://abdur-rahman-dev.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Abdur Rahman Adil",
    description:
      "Explore full stack web development projects built with Next.js, React, Node.js, and MongoDB.",
    url: "https://abdur-rahman-dev.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "/abdur-rahman.png",
        width: 1200,
        height: 630,
        alt: "Abdur Rahman Adil Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Abdur Rahman Adil",
    description:
      "Explore full stack web development projects built with Next.js, React, Node.js, and MongoDB.",
    images: ["/abdur-rahman.png"],
  },
};

const ProjectPage = async () => {
  const projects = await getProject();

  return (
    <div>
      {/* glow */}
      <div className="absolute -inset-10 bg-emerald-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition w-full pointer-events-none" />
      <AllProjectPage project={projects}></AllProjectPage>
    </div>
  );
};

export default ProjectPage;
