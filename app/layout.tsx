import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Abdur Rahman - Full Stack Developer | Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects, skills, and experience in building scalable web applications.",
  keywords: [
    "Md. Abdur Rahman",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Md. Abdur Rahman" }],
  creator: "Md. Abdur Rahman",
  publisher: "Md. Abdur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://yourwebsite.com",
    title: "Md. Abdur Rahman - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Md. Abdur Rahman Portfolio",
    images: [
      {
        url: "/abdur-rahman-adil.png",
        width: 1200,
        height: 630,
        alt: "Md. Abdur Rahman Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
