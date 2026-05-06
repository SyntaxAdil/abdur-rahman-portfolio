"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-emerald-400/10 blur-[120px] top-10 left-10 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-emerald-400/10 blur-[120px] bottom-10 right-10 animate-pulse" />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-10 py-12 shadow-2xl"
      >

        {/* BIG 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-7xl font-bold text-emerald-400"
        >
          404
        </motion.h1>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-2xl font-semibold mt-4"
        >
          Page Not Found
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm mt-2 max-w-md"
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
          >
            Go Home
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}