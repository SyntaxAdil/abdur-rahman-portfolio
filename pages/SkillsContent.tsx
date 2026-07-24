"use client";

import React from "react";
import Image from "next/image";
import { MotionDiv, MotionH1, MotionP, fadeUp, staggerContainer } from "@/components/motion/MotionDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Skill = {
  name: string;
  logo: string;
  category: "frontend" | "backend" | "tools";
  level: string;
};

const allSkills: Skill[] = [
  // Frontend & Mobile
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend", level: "Advanced" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend", level: "Advanced" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend", level: "Intermediate" },
  { name: "Expo", logo: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg", category: "frontend", level: "Intermediate" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend", level: "Intermediate" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend", level: "Expert" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend", level: "Advanced" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend", level: "Expert" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend", level: "Advanced" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", category: "frontend", level: "Intermediate" },
  { name: "ShadCN UI", logo: "https://ui.shadcn.com/favicon.ico", category: "frontend", level: "Advanced" },

  // Backend & Databases
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend", level: "Intermediate" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend", level: "Intermediate" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend", level: "Advanced" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "backend", level: "Familiar" },
  { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", category: "backend", level: "Familiar" },
  { name: "Supabase", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg", category: "backend", level: "Familiar" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "backend", level: "Intermediate" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend", level: "Basic" },

  // Tools
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools", level: "Advanced" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools", level: "Advanced" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools", level: "Expert" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools", level: "Intermediate" },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <MotionDiv
    variants={fadeUp}
    className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-400/30 transition-all duration-300 shadow-lg"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition duration-300">
        <Image src={skill.logo} alt={skill.name} width={40} height={40} className="object-contain" />
      </div>
      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 font-medium">
        {skill.level}
      </span>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
        {skill.name}
      </h3>
      <p className="text-xs text-gray-400 mt-1 capitalize">
        Category: {skill.category}
      </p>
    </div>
  </MotionDiv>
);

export default function SkillsContent() {
  return (
    <main className="min-h-screen w-full text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER SECTION */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
        >
          <MotionP
            variants={fadeUp}
            className="text-xs font-semibold tracking-[2px] uppercase text-emerald-400"
          >
            Expertise & Technologies
          </MotionP>

          <MotionH1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
          >
            My Technical <span className="text-emerald-400">Arsenal</span>
          </MotionH1>

          <MotionP
            variants={fadeUp}
            className="text-sm sm:text-base text-gray-400 leading-relaxed"
          >
            A curated list of technologies, frameworks, and tools I use to build robust, scalable, and high-performance applications.
          </MotionP>
        </MotionDiv>

        {/* SHADCN TABS FOR FILTERING */}
        <Tabs defaultValue="all" className="w-full flex flex-col items-center space-y-10">
          <TabsList className="bg-white/[0.03] border border-white/10 p-1 rounded-2xl h-auto">
            <TabsTrigger value="all" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all">
              All Skills
            </TabsTrigger>
            <TabsTrigger value="frontend" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all">
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all">
              Backend & DB
            </TabsTrigger>
            <TabsTrigger value="tools" className="rounded-xl px-5 py-2.5 text-sm data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all">
              Tools & Workflow
            </TabsTrigger>
          </TabsList>

          {/* ALL SKILLS TAB */}
          <TabsContent value="all" className="w-full">
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {allSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </MotionDiv>
          </TabsContent>

          {/* FRONTEND TAB */}
          <TabsContent value="frontend" className="w-full">
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {allSkills.filter((s) => s.category === "frontend").map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </MotionDiv>
          </TabsContent>

          {/* BACKEND TAB */}
          <TabsContent value="backend" className="w-full">
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {allSkills.filter((s) => s.category === "backend").map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </MotionDiv>
          </TabsContent>

          {/* TOOLS TAB */}
          <TabsContent value="tools" className="w-full">
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {allSkills.filter((s) => s.category === "tools").map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </MotionDiv>
          </TabsContent>
        </Tabs>

      </div>
    </main>
  );
}