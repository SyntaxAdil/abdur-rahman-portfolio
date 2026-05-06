"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0b0b0b] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-emerald-400/10 blur-[100px] rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-emerald-400/10 blur-[100px] rounded-full bottom-10 right-10 animate-pulse" />

      {/* MAIN LOADER CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-10 py-8 flex flex-col items-center gap-6 shadow-2xl"
      >

        {/* SPINNER */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-t-emerald-400 animate-spin" />
        </div>

        {/* NAME ANIMATION */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white text-lg font-semibold tracking-wide"
        >
          Abdur Rahman Adil
        </motion.h1>

        {/* BRAND */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-emerald-400 text-xs tracking-[3px] uppercase"
        >
          SyntaxAdil Portfolio
        </motion.p>

        {/* LOADING DOTS */}
        <div className="flex gap-1 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

      </motion.div>
    </div>
  );
}