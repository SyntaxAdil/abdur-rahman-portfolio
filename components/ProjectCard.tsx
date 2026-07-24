"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionDiv, fadeUp } from "@/components/motion/MotionDiv";

type Project = {
  _id?: string | number; 
  image: string;
  title: string;
  description: string;
  tech?: { id: string; tag: string }[] | string[];
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // Fallback to title-slug or index if id isn't explicitly provided
  const projectId = project._id || project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <MotionDiv
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="group h-full flex flex-col border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400/20 hover:shadow-md hover:shadow-emerald-500/5"
    >
      <div className="relative h-52 w-full overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
            >
              {typeof tag === "string" ? tag : tag.tag}
            </span>
          ))}
        </div>

        <div className="pt-1">
          <Link
            href={`/projects/${projectId}`}
            className="w-full flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-xl border border-white/10 text-white font-medium bg-white/[0.02] hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 group/btn"
          >
            View Details
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;