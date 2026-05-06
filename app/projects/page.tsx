import { Metadata } from "next";
import ProjectsPage from "../../pages/ProjectPage";
import { getProject } from "../../lib/porject";

import AllProjectPage from "../../pages/ProjectPage";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Projects | Abdur Rahman Adil - Web Developer Portfolio",

  description:
    "Explore modern full-stack web development projects by Abdur Rahman Adil. Built with Next.js, React, TypeScript, Node.js, and MongoDB. Includes responsive UI, real-world apps, and production-ready solutions.",

  keywords: [
    "Abdur Rahman Adil",
    "SyntaxAdil",
    "web development projects",
    "Next.js portfolio",
    "React developer",
    "full stack developer",
    "MERN stack projects",
    "TypeScript projects",
    "frontend developer Bangladesh",
  ],

  authors: [
    {
      name: "Abdur Rahman Adil",
      url: "https://github.com/SyntaxAdil",
    },
  ],

  creator: "Abdur Rahman Adil (SyntaxAdil)",

  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Projects | Abdur Rahman Adil - Web Developer Portfolio",
    description:
      "Showcasing modern web development projects built with Next.js, React, and TypeScript.",
    url: "https://yourdomain.com/projects",
    siteName: "Abdur Rahman Adil Portfolio",
    type: "website",
    images: [
      {
        url: "/abdur-rahman.png",
        width: 1200,
        height: 630,
        alt: "Abdur Rahman Adil Portfolio Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Abdur Rahman Adil",
    description:
      "Modern full-stack web development projects using Next.js, React & Node.js.",
    images: ["/abdur-rahman.png"],
    creator: "@SyntaxAdil",
  },

  robots: {
    index: true,
    follow: true,
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
