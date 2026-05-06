import React from "react";
import ExperienceEducation from "./../../section/ExEd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Abdur Rahman Adil - Full Stack Developer",

  description:
    "Explore the learning journey and development experience of Abdur Rahman Adil, a Full Stack Developer from Bangladesh. Focused on Next.js, React, Node.js, MongoDB, and modern web technologies.",

  keywords: [
    "Abdur Rahman Adil experience",
    "SyntaxAdil developer journey",
    "full stack developer experience",
    "Next.js developer experience",
    "React developer Bangladesh",
    "MERN stack learning journey",
    "web development experience",
    "frontend backend skills",
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
    title: "Experience | Abdur Rahman Adil",
    description:
      "A journey of learning full stack development using modern technologies like Next.js, React, Node.js, and MongoDB.",
    url: "https://yourdomain.com/experience",
    siteName: "Abdur Rahman Adil Portfolio",
    type: "profile",
    images: [
      {
        url: "/abdur-rahman.png",
        width: 1200,
        height: 630,
        alt: "Abdur Rahman Adil Experience",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Experience | Abdur Rahman Adil",
    description:
      "Learning journey of a Full Stack Developer focused on modern web technologies.",
    images: ["/abdur-rahman.png"],
    creator: "@SyntaxAdil",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const ExperiencePage = () => {
  return (
    <div>
      {/* glow */}
      <div className="absolute -inset-10 bg-emerald-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition w-full" />
      <ExperienceEducation></ExperienceEducation>
    </div>
  );
};

export default ExperiencePage;
