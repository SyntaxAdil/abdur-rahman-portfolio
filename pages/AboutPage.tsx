"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { GraduationCap, Rocket, Coffee, Calendar } from "lucide-react";

import { BorderBeam } from "../components/ui/border-beam";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
import { easeOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};
const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "TypeScript",
];

export default function AboutPage() {
  return (
    <section className="relative bg-[#0b0b0b] py-28 px-6 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98122,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-emerald-400 text-xs tracking-[3px] uppercase"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-5xl font-bold text-white mt-3"
          >
            Turning Ideas Into <span className="text-emerald-400">Reality</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            Full stack developer focused on building modern scalable web
            applications.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            {/* glow */}
            <div className="absolute -inset-10 bg-emerald-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition" />

            {/* CARD */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              {/* BORDER BEAM */}
              <BorderBeam
                size={220}
                duration={8}
                colorFrom="#34d399"
                colorTo="#059669"
              />

              {/* IMAGE */}
              <Image
                src="/abdur-rahman.png"
                alt="profile"
                width={1000}
                height={1000}
                className="w-full h-[600px] object-cover scale-105 group-hover:scale-110 transition duration-700"
              />

              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10"
              >
                <p className="text-white text-sm font-medium">
                  Full Stack Developer
                </p>
                <p className="text-gray-400 text-xs">MERN Stack Enthusiast</p>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            {/* BIO */}
            <motion.div
              variants={fadeLeft}
              className="text-gray-300 leading-relaxed text-[15px]"
            >
              I’m{" "}
              <span className="text-white font-semibold">Md. Abdur Rahman</span>
              , a passionate full stack developer from Bangladesh. I started my
              journey in 2025 and continuously improving my skills.
            </motion.div>

            {/* HIGHLIGHTS */}
            <motion.div
              variants={container}
              className="space-y-5 text-sm text-gray-400"
            >
              <motion.div variants={fadeLeft} className="flex gap-3">
                <Calendar className="text-emerald-400" size={18} />
                1+ Year Learning Journey
              </motion.div>

              <motion.div variants={fadeLeft} className="flex gap-3">
                <GraduationCap className="text-emerald-400" size={18} />
                CST Diploma Student
              </motion.div>

              <motion.div variants={fadeLeft} className="flex gap-3">
                <Rocket className="text-emerald-400" size={18} />
                MERN Stack Focused
              </motion.div>

              <motion.div variants={fadeLeft} className="flex gap-3">
                <Coffee className="text-emerald-400" size={18} />
                Building Real Projects Daily
              </motion.div>
            </motion.div>

            {/* TECH STACK */}
            <motion.div variants={container} className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-400/30 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
