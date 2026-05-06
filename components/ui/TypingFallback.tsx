// utils/TypingFallback.tsx
"use client";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "React & Next.js Dev", "UI/UX Enthusiast", "Problem Solver"];

export function TypingFallback() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="text-lg sm:text-xl font-semibold text-white">
      {text}
      <span className="animate-pulse text-emerald-400">|</span>
    </span>
  );
}