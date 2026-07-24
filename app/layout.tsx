import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";
import LenisProvider from "../providers/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://abdur-rahman-dev.vercel.app";

export const metadata: Metadata = {
  title: {
    default:
      "Abdur Rahman Adil (SyntaxAdil) - Full Stack Developer | MERN Stack Expert",
    template: "%s | Abdur Rahman Adil",
  },

  description:
    "Abdur Rahman Adil (SyntaxAdil) is a Full Stack Developer specializing in Next.js, React, Node.js, Express, and MongoDB (MERN Stack). Explore projects, skills, and hire for freelance web development.",

  keywords: [
    "Abdur Rahman Adil",
    "Abdur Rahman",
    "SyntaxAdil",
    "Adil Full Stack Developer",
    "Adil MERN Developer",
    "Full Stack Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "React Developer Bangladesh",
    "MERN Stack Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Freelance Web Developer Bangladesh",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
  ],

  authors: [
    {
      name: "Abdur Rahman Adil",
      url: "https://github.com/SyntaxAdil",
    },
  ],

  creator: "Abdur Rahman Adil (SyntaxAdil)",
  publisher: "Abdur Rahman Adil",

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
  },

  category: "technology",

  openGraph: {
    title: "Abdur Rahman Adil (SyntaxAdil) - Full Stack Developer Portfolio",
    description:
      "Modern portfolio showcasing full stack web development projects using Next.js, React, and Node.js.",
    url: SITE_URL,
    siteName: "Abdur Rahman Adil Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/abdur-rahman.png",
        width: 1200,
        height: 630,
        alt: "Abdur Rahman Adil Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdur Rahman Adil Portfolio",
    description:
      "Full Stack Developer building modern web applications with Next.js and React.",
    images: ["/abdur-rahman.png"],
    creator: "@SyntaxAdil",
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  verification: {
    google: "mao8sX2_o407oWcPS57i_CHmQZzWGIv6yU8g80A9CFY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdur Rahman Adil",
  alternateName: "SyntaxAdil",
  url: SITE_URL,
  image: `${SITE_URL}/abdur-rahman.png`,
  jobTitle: "Full Stack Developer",
  sameAs: ["https://github.com/SyntaxAdil", "https://twitter.com/SyntaxAdil"],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col ">
        {/* <LenisProvider> */}
          <Navbar></Navbar>
          <main className="flex-1">{children}</main>
          <Footer></Footer>
          <Toaster position="top-right" reverseOrder={false} />
        {/* </LenisProvider> */}
      </body>
    </html>
  );
}
