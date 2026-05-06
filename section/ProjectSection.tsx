"use client";

import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {
  fadeUp,
  MotionDiv,
  MotionH2,
  MotionP,
  staggerContainer,
} from "../components/motion/MotionDiv";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { RainbowButton } from "../components/ui/rainbow-button";
import { ArrowRight } from "lucide-react";

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
  {
    id: 4,
    title: "POS System",
    description:
      "Sales, inventory & analytics dashboard for business management.",
    image: "/projects/project3.png",
    tags: ["React", "Redux", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
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
            Portfolio
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
        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mt-10"
        >
          <Link href="/projects" className="group">
            <RainbowButton className="gap-2 text-sm font-medium px-6 h-10 transition-all duration-300 group-hover:scale-105">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </RainbowButton>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
