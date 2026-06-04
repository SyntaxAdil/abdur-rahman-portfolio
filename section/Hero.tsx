// components/HeroSection.tsx
"use client";
import { IoLogoWhatsapp } from "react-icons/io";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Meteors } from "../components/ui/meteors";
import { BorderBeam } from "../components/ui/border-beam";
import { SparklesText } from "../components/ui/sparkles-text";
import { TypingAnimation } from "../components/ui/typing-animation";
import { RainbowButton } from "../components/ui/rainbow-button";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/SyntaxAdil" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devloper-abdur-rahman/",
  },
  {
    icon: IoLogoWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/8801406490781",
  },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Done" },
  { value: "5+", label: "Happy Clients" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#0d0d0d]">
      {/* Meteors background */}
      <Meteors number={22} />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] rounded-full
                        bg-emerald-500/[0.06] blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div
              className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            border border-emerald-400/20 bg-emerald-400/5 overflow-hidden"
            >
              <BorderBeam
                size={60}
                duration={8}
                colorFrom="#34d399"
                colorTo="#059669"
              />
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400 tracking-wide">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Md. Abdur{" "}
              <SparklesText
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-400"
                sparklesCount={6}
                colors={{ first: "#34d399", second: "#6ee7b7" }}
              >
                Rahman
              </SparklesText>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={item}>
            <div className="flex items-center gap-2 text-lg sm:text-xl text-[#888]">
              <span>I&apos;m a</span>
              <TypingAnimation
                className="text-lg sm:text-xl font-semibold text-white"
                duration={60}
                delay={800}
                loop
                words={[
                  "Full Stack Developer",
                  "React & Next.js Dev",
                  "UI/UX Enthusiast",
                  "Problem Solver",
                ]}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl text-[#666] text-base sm:text-lg leading-relaxed"
          >
            Passionate about crafting clean, performant web applications with
            modern technologies. Based in{" "}
            <span className="text-emerald-400 font-medium">
              Dhaka, Bangladesh
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/projects">
              <RainbowButton className="gap-2 text-sm font-medium px-6 h-10">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </RainbowButton>
            </Link>

            <a
              href="https://drive.google.com/file/d/1GwZjdBrMBLMhwK0yX_6NYMrNeN-4d1_H/view?usp=drive_link"
              target="_blank"
            >
              <Button
                variant="ghost"
                className="gap-2  h-10 px-6 text-sm  py-2 cursor-pointer text-[#aaa] border border-white/10
                           hover:text-emerald-400 hover:border-emerald-400/30
                           hover:bg-emerald-400/10 transition-all duration-200"
              >
                <FileUser className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                           flex items-center justify-center text-[#aaa]
                           hover:bg-emerald-400/10 hover:border-emerald-400/30
                           hover:text-emerald-400 hover:-translate-y-0.5
                           transition-all duration-200"
              >
                <Icon />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
