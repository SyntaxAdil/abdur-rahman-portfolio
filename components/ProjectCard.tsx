"use client";

import React from "react";
import Image from "next/image";
import {  ExternalLink } from "lucide-react";

import { MotionDiv, fadeUp } from "@/components/motion/MotionDiv";
const Github = () => (
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
type Project = {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  github?: string;
  live?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <MotionDiv
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden
                 transition-all duration-300 hover:scale-[1.02]
                 hover:border-emerald-400/20 hover:shadow-md hover:shadow-emerald-500/5 min-h-135"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full
                         bg-emerald-400/10 text-emerald-300
                         border border-emerald-400/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg
                         border border-white/10 text-white
                         hover:bg-white/10 transition cursor-pointer"
            >
              <Github  />
              Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg
                         bg-emerald-500 text-black font-medium
                         hover:bg-emerald-600 transition cursor-pointer"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;