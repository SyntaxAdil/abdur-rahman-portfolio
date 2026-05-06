"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavlinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const Navlink = ({ href, className, children }: NavlinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
        isActive
          ? "text-purple-500"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
      
    </Link>
  );
};

export default Navlink;