import React from 'react'
import AboutPage from '../../pages/AboutPage'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Abdur Rahman Adil - Full Stack Developer",

  description:
    "Learn more about Abdur Rahman Adil, a passionate Full Stack Developer from Bangladesh. Skilled in Next.js, React, Node.js, MongoDB and modern web technologies. Building real-world projects and continuously improving development skills.",

  keywords: [
    "Abdur Rahman Adil",
    "SyntaxAdil",
    "about developer",
    "full stack developer Bangladesh",
    "Next.js developer",
    "React developer",
    "MERN stack developer",
    "web developer portfolio",
    "frontend backend developer",
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
    title: "About Abdur Rahman Adil | Full Stack Developer",
    description:
      "Know more about Abdur Rahman Adil, a full stack developer building modern web applications with Next.js, React, and Node.js.",
    url: "https://yourdomain.com/about",
    siteName: "Abdur Rahman Adil Portfolio",
    type: "profile",
    images: [
      {
        url: "/abdur-rahman.png",
        width: 1200,
        height: 630,
        alt: "Abdur Rahman Adil Profile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About | Abdur Rahman Adil",
    description:
      "Full Stack Developer focused on modern web development with MERN stack.",
    images: ["/abdur-rahman.png"],
    creator: "@SyntaxAdil",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const About = () => {
  return (
    <div>
      <AboutPage></AboutPage>
    </div>
  )
}

export default About