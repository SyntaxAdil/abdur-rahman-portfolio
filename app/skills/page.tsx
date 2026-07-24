import { Metadata } from "next";
import SkillsContent from "@/pages/SkillsContent";

export const metadata: Metadata = {
  title: "Skills & Expertise | Portfolio",
  description:
    "Explore my comprehensive technical arsenal across frontend, backend, databases, and development tools.",
  keywords: [
    "Web Developer Skills",
    "Frontend Arsenal",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Skills & Expertise | Portfolio",
    description:
      "Explore my comprehensive technical arsenal across frontend, backend, and development tools.",
    type: "website",
  },
};

export default function SkillPage() {
  return (
    <div>
      <div className="absolute -inset-10 bg-emerald-500/20 blur-xl rounded-full opacity-30 group-hover:opacity-70  transition w-full pointer-events-none" />
      <SkillsContent />
    </div>
  );
}
