"use client";

import {
  fadeUp,
  staggerContainer,
  MotionDiv,
  MotionH2,
  MotionP,
} from "@/components/motion/MotionDiv";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

type Skill = {
  name: string;
  logo: string;
};

const skillsRow1: Skill[] = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const skillsRow2: Skill[] = [
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

const skillsRow3: Skill[] = [
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "ShadCN UI",
    logo: "https://ui.shadcn.com/favicon.ico",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
];

const SkillCard = ({ name, logo }: Skill) => {
  return (
    <div
      className="group relative flex items-center gap-3 rounded-xl 
      border border-white/[0.07] bg-white/[0.02] px-6 py-4
      hover:border-emerald-400/30 hover:bg-emerald-400/[0.03]
      transition-all duration-300 cursor-default mx-3"
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={80}
          height={80}
          className="w-8 h-8 object-contain brightness-90 
          group-hover:brightness-110 group-hover:scale-110 transition"
        />
      </div>

      <span className="text-[#aaa] font-medium text-sm whitespace-nowrap 
      group-hover:text-emerald-400 transition-colors">
        {name}
      </span>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0d0d0d] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden "
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <MotionP
            variants={fadeUp}
            className="text-xs font-semibold tracking-[2px] uppercase text-emerald-400 mb-3"
          >
            My Arsenal
          </MotionP>

          <MotionH2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Skills & <span className="text-emerald-400">Technologies</span>
          </MotionH2>

          <MotionP
            variants={fadeUp}
            className="mt-4 text-[#888] text-sm max-w-2xl"
          >
            A comprehensive overview of my technical expertise across frontend,
            backend, and tools.
          </MotionP>
        </MotionDiv>

        {/* MARQUEE CONTAINER WRAPPED TO PREVENT LENIS SCROLL CONFLICTS */}
        <div data-lenis-prevent className="relative flex flex-col gap-6 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {skillsRow1.map((skill: Skill, i: number) => (
              <SkillCard key={`r1-${i}`} {...skill} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {skillsRow2.map((skill: Skill, i: number) => (
              <SkillCard key={`r2-${i}`} {...skill} />
            ))}
          </Marquee>

          <Marquee pauseOnHover className="[--duration:40s]">
            {skillsRow3.map((skill: Skill, i: number) => (
              <SkillCard key={`r3-${i}`} {...skill} />
            ))}
          </Marquee>

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#0d0d0d] z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#0d0d0d] z-10" />
        </div>
      </div>
    </section>
  );
}