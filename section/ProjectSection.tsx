"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  fadeUp,
  MotionDiv,
  MotionH2,
  MotionP,
  staggerContainer,
} from "../components/motion/MotionDiv";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Nexivent, Event Management Platform",
    description:
      "A modern PWA for multi-tenant event management with real-time updates and offline support.",
    image: "/projects/project1.png",
    tags: ["Next.js", "GraphQL", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "EduFixup, E-Learning Platform",
    description:
      "A responsive learning platform with real-time updates and personalized dashboards.",
    image: "/projects/project2.png",
    tags: ["Next.js", "RTK Query", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "POS System",
    description:
      "Sales, inventory & analytics dashboard for business management.",
    image: "/projects/project3.png",
    tags: ["React", "Redux", "Bootstrap"],
    github: "#",
    live: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
      
        {/* Section header */}
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
            Portfolio{" "}
          </MotionP>
          <MotionH2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
          Featured <span className="text-emerald-400">Projects</span>
          </MotionH2>
          <MotionDiv
            variants={fadeUp}
            className="mt-4 w-12 h-0.5 bg-emerald-400/40 rounded-full"
          />

        </MotionDiv>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
