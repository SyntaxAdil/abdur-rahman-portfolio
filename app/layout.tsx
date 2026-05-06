import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Abdur Rahman Adil - Full Stack Developer",
    template: "%s | Abdur Rahman Adil",
  },

  description:
    "Portfolio of Abdur Rahman Adil, a Full Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Building modern, scalable web applications.",

  keywords: [
    "Abdur Rahman Adil",
    "SyntaxAdil",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Web Developer Portfolio",
  ],

  authors: [
    {
      name: "Abdur Rahman Adil",
      url: "https://github.com/SyntaxAdil",
    },
  ],

  creator: "Abdur Rahman Adil (SyntaxAdil)",

  metadataBase: new URL("https://abdur-rahman-dev.vercel.app/"),

  openGraph: {
    title: "Abdur Rahman Adil - Full Stack Developer Portfolio",
    description:
      "Modern portfolio showcasing full stack web development projects using Next.js, React, and Node.js.",
    url: "https://abdur-rahman-dev.vercel.app",
    siteName: "Abdur Rahman Adil Portfolio",
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
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
        <main className="flex-1">{children}</main>
        <Footer></Footer>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
