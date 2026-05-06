"use client";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  MotionDiv,
  MotionH2,
  MotionP,
} from "@/components/motion/MotionDiv";

import { Code2, GraduationCap, Rocket, Coffee, MapPin, Calendar } from "lucide-react";
import { BorderBeam } from "../components/ui/border-beam";

const techStack = [
  "HTML", "CSS", "JavaScript", "React",
  "Next.js", "Node.js", "Express.js", "MongoDB",
  "Firebase", "JWT", "Better Auth", "TypeScript",
];

const highlights = [
  {
    icon: Calendar,
    title: "1+ Year Journey",
    desc: "Started web development in 2025, learning something new every single day.",
  },
  {
    icon: GraduationCap,
    title: "CST Diploma Student",
    desc: "Studying Computer Science & Technology at MAWTS Institute of Technology.",
  },
  {
    icon: Rocket,
    title: "MERN Stack Course",
    desc: "Currently enrolled in Programming Hero's Web Development Level 1 (MERN Stack).",
  },
  {
    icon: Coffee,
    title: "Passionate Learner",
    desc: "No client work yet — focused on building real-world projects to become industry-ready.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0d0d0d] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <MotionP variants={fadeUp} className="text-xs font-semibold tracking-[2px] uppercase text-emerald-400 mb-3">
            Get To Know Me
          </MotionP>
          <MotionH2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About <span className="text-emerald-400">Me</span>
          </MotionH2>
          <MotionDiv variants={fadeUp} className="mt-4 w-12 h-0.5 bg-emerald-400/40 rounded-full" />
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — bio */}
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Bio card */}
            <MotionDiv
              variants={fadeLeft}
              className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 overflow-hidden"
            >
              <BorderBeam size={80} duration={10} colorFrom="#34d399" colorTo="#059669" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20
                                flex items-center justify-center text-emerald-400">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Md. Abdur Rahman</p>
                  <div className="flex items-center gap-1.5 text-[#555] text-xs">
                    <MapPin size={11} />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
              <p className="text-[#888] text-sm leading-relaxed">
                I&apos;m a passionate Full Stack Developer focused on the MERN stack.
                My web development journey began in 2025, and every day I push myself
                to grow. I haven&apos;t worked with clients yet, but I&apos;m building
                real-world projects and sharpening my skills to become fully industry-ready.
              </p>
            </MotionDiv>

            {/* Tech stack */}
            <MotionDiv variants={fadeLeft}>
              <p className="text-xs font-semibold tracking-[1.5px] uppercase text-emerald-400 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg
                               bg-white/[0.04] border border-white/[0.07] text-[#aaa]
                               hover:border-emerald-400/30 hover:text-emerald-400
                               hover:bg-emerald-400/5 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Right — highlights */}
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, desc }) => (
              <MotionDiv
                key={title}
                variants={fadeRight}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02]
                           p-5 overflow-hidden hover:border-emerald-400/20
                           hover:bg-emerald-400/[0.02] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/15
                                flex items-center justify-center text-emerald-400 mb-3
                                group-hover:bg-emerald-400/15 transition-all duration-200">
                  <Icon size={16} />
                </div>
                <p className="text-white font-semibold text-sm mb-1.5">{title}</p>
                <p className="text-[#666] text-xs leading-relaxed">{desc}</p>
              </MotionDiv>
            ))}
          </MotionDiv>

        </div>
      </div>
    </section>
  );
}