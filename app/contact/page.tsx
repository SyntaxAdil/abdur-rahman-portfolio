import React from 'react'
import ContactForm from '../../section/ContactSection'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Abdur Rahman Adil - Full Stack Developer",

  description:
    "Get in touch with Abdur Rahman Adil, a Full Stack Developer from Bangladesh. Available for freelance work, collaboration, and web development opportunities using Next.js, React, and Node.js.",

  keywords: [
    "contact Abdur Rahman Adil",
    "SyntaxAdil contact",
    "hire web developer Bangladesh",
    "freelance full stack developer",
    "Next.js developer contact",
    "React developer hire",
    "MERN stack developer contact",
    "web developer email",
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
    title: "Contact Abdur Rahman Adil | Full Stack Developer",
    description:
      "Let’s work together. Contact Abdur Rahman Adil for freelance or collaboration opportunities in modern web development.",
    url: "https://yourdomain.com/contact",
    siteName: "Abdur Rahman Adil Portfolio",
    type: "website",
    images: [
      {
        url: "/abdur-rahman.png",
        width: 1200,
        height: 630,
        alt: "Contact Abdur Rahman Adil",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Abdur Rahman Adil",
    description:
      "Hire a Full Stack Developer skilled in Next.js, React, and Node.js.",
    images: ["/abdur-rahman.png"],
    creator: "@SyntaxAdil",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const ContactPage = () => {
  return (
    <div>
      
            {/* glow */}
            <div className="absolute -inset-10 bg-emerald-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition w-full" />
        <ContactForm/>
    </div>
  )
}

export default ContactPage