import React from "react";
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
import ProjectCard from "../components/ProjectCard";

const AllProjectPage = ({ project }) => {
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
        <div className="max-w-6xl mx-auto container grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.map((item) => (
            <ProjectCard project={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectPage;
