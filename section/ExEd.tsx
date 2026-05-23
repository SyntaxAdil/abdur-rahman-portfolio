"use client";

import React from "react";
import { MotionDiv, fadeUp, staggerContainer } from "@/components/motion/MotionDiv";

const ExperienceEducation = () => {
  const data = [
    {
      title: "MERN Stack Development (Ongoing)",
      subtitle: "Programming Hero - Batch 13 (Web Development Level 1)",
      period: "2024 - Present",
      description:
        "Currently learning full MERN stack development including React, Node.js, Express, MongoDB, authentication, REST APIs and building real-world projects under Programming Hero Batch 12.",
      type: "experience",
    },
    {
      title: "Frontend Development Practice",
      subtitle: "Self Practice + Course Projects",
      period: "2024 - Present",
      description:
        "Building responsive and modern UI using React, Next.js, Tailwind CSS and improving component-based architecture through hands-on projects.",
      type: "experience",
    },
    {
      title: "Diploma in Computer Technology",
      subtitle: "Ongoing Study",
      period: "2023 - Present",
      description:
        "Studying core computer science subjects including programming fundamentals, networking, database systems and software engineering basics.",
      type: "education",
    },
    {
      title: "SSC (Science)",
      subtitle: "M.A. Latif Memorial Institute, Mirpur 12, Dhaka",
      period: "2022",
      description: "Completed Secondary School Certificate with GPA 5.00.",
      type: "education",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* HEADER */}
      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <MotionDiv variants={fadeUp}>
          <p className="text-xs font-semibold tracking-[2px] uppercase text-emerald-400 mb-3">
            Journey
          </p>
        </MotionDiv>

        <MotionDiv variants={fadeUp}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Experience & <span className="text-emerald-400">Education</span>
          </h2>
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          className="mt-4 w-12 h-0.5 bg-emerald-400/40 rounded-full"
        />
      </MotionDiv>

      {/* TIMELINE */}
      <div className="space-y-6 relative border-l border-white/10 pl-6">
        {data.map((item, index) => (
          <MotionDiv
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* DOT */}
            <span
              className={`absolute -left-[7px] top-3 w-3 h-3 rounded-full
              ${
                item.type === "education"
                  ? "bg-emerald-400"
                  : "bg-blue-400"
              }`}
            />

            {/* CARD */}
            <div
              className="bg-white/[0.02] border border-white/10 rounded-xl p-5
                         hover:border-white/20 transition-all duration-300"
            >
              {/* TOP */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>
                <span className="text-xs text-gray-400">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-emerald-300 mt-1">
                {item.subtitle}
              </p>

              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                {item.description}
              </p>

              {/* BADGE */}
              <div className="mt-4">
                <span
                  className={`text-xs px-2 py-1 rounded-full border
                  ${
                    item.type === "education"
                      ? "border-emerald-400/30 text-emerald-300 bg-emerald-400/10"
                      : "border-blue-400/30 text-blue-300 bg-blue-400/10"
                  }`}
                >
                  {item.type === "education"
                    ? "Education"
                    : "MERN Journey"}
                </span>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default ExperienceEducation;