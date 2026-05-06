"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

const makeVariant = (v: Variants) => v;

export const fadeUp = makeVariant({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
});

export const fadeIn = makeVariant({
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
});

export const fadeLeft = makeVariant({
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
});

export const fadeRight = makeVariant({
  hidden: { opacity: 0, x: 24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
});

export const scaleIn = makeVariant({
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
});

export const staggerContainer = makeVariant({
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
});

export const MotionDiv     = motion.div;
export const MotionH1      = motion.h1;
export const MotionH2      = motion.h2;
export const MotionP       = motion.p;
export const MotionSection = motion.section;
export const MotionSpan    = motion.span;
export const MotionUl      = motion.ul;
export const MotionLi      = motion.li;