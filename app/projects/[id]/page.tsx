import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiExternalLink, FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { FaStar, FaGithub } from 'react-icons/fa';
import { getProjectById } from '@/lib/porject'; // Update path if needed
import { MotionDiv, fadeUp } from '@/components/motion/MotionDiv';

interface ProjectDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

interface TagType {
  id?: string;
  tag: string;
}

const ProjectDetailsPage = async ({ params }: ProjectDetailsProps) => {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Button */}
        <MotionDiv variants={fadeUp} initial="hidden" animate="show">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors border border-white/10 bg-white/[0.02] px-4 py-2 rounded-xl hover:border-emerald-400/20"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </MotionDiv>

        {/* Header Section */}
        <MotionDiv variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.isFeatured && (
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 font-medium">
                <FaStar size={12} />
                Featured Project
              </span>
            )}
            {project.createdAt && (
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                <FiCalendar size={12} />
                {new Date(project.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {project.title}
          </h1>
        </MotionDiv>

        {/* Banner Image */}
        <MotionDiv variants={fadeUp} initial="hidden" animate="show">
          <div className="relative h-72 md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </MotionDiv>

        {/* Action Buttons (Live & GitHub) */}
        <MotionDiv variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-4 pt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10"
            >
              <FiExternalLink size={16} />
              Visit Live Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl border border-white/10 text-white font-medium bg-white/[0.02] hover:bg-white/10 transition"
            >
              <FaGithub size={18} />
              Source Code
            </a>
          )}
        </MotionDiv>

        {/* Tech Stack Section */}
        {project.tech && project.tech.length > 0 && (
          <MotionDiv variants={fadeUp} initial="hidden" animate="show" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg font-semibold text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag: TagType, i: number) => (
                <span
                  key={tag.id || i}
                  className="text-xs px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 font-medium"
                >
                  {typeof tag === "string" ? tag : tag.tag}
                </span>
              ))}
            </div>
          </MotionDiv>
        )}

        {/* Project Description */}
        <MotionDiv variants={fadeUp} initial="hidden" animate="show" className="space-y-3 pt-4 border-t border-white/10">
          <h2 className="text-lg font-semibold text-white">About the Project</h2>
          <div className="text-gray-300 leading-relaxed whitespace-pre-line text-base bg-white/[0.02] border border-white/10 p-6 rounded-2xl">
            {project.description}
          </div>
        </MotionDiv>

      </div>
    </main>
  );
};

export default ProjectDetailsPage;