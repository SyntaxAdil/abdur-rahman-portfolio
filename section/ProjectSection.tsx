"use client";

import ProjectCard from "../components/ProjectCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import {
  fadeUp,
  MotionDiv,
  MotionH2,
  MotionP,
  staggerContainer,
} from "../components/motion/MotionDiv";

import Link from "next/link";
import { RainbowButton } from "../components/ui/rainbow-button";
import { ArrowRight } from "lucide-react";

interface Project {
  _id?: string | number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

interface FeaturedProjectsProps {
  project: Project[];
}

export default function FeaturedProjects({ project }: FeaturedProjectsProps) {
  return (
    <section className="bg-[#0d0d0d] py-24 px-6 overflow-hidden">
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

        {/* SWIPER WRAPPED TO PREVENT LENIS TOUCH/WHEEL CONFLICTS */}
        <div data-lenis-prevent className="w-full">
          <Swiper
            modules={[Autoplay]}
            className="!pb-2"
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
            {project.map((item) => (
              <SwiperSlide key={item._id} className="!h-auto flex">
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BUTTON */}
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