"use client";

import Link from "next/link";
import Navlink from "../../utils/Navlinks";
import { Button } from "../ui/button";
import { Download, Menu, X } from "lucide-react";
import { MotionDiv } from "../motion/MotionDiv";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/about", label: "About" },
    { id: 3, href: "/experience", label: "Experience" },
    { id: 4, href: "/projects", label: "Projects" },
    { id: 5, href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={"/"}
              className="gradient-text font-bold text-xl sm:text-2xl"
            >
              Abdur Rahman
            </Link>
          </MotionDiv>

          {/* Desktop Links */}
          <MotionDiv
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2"
          >
            {NAV_LINKS.map((link, index) => (
              <MotionDiv
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Navlink href={link.href}>{link.label}</Navlink>
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* Desktop CTA */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block"
          >
            <a href="/resume.pdf" download={"Abdur_Rahman_Resume.pdf"}>
              <Button
                className="hover:border-purple-600 border border-transparent transition-all duration-300 gap-2 px-4 py-2 cursor-pointer "
                variant={"ghost"}
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </MotionDiv>

          {/* Mobile Menu Button */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-secondary"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </MotionDiv>
        </nav>
      </MotionDiv>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MotionDiv
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16.25 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link, index) => (
              <MotionDiv
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Navlink href={link.href} className="block py-2 text-lg">
                  {link.label}
                </Navlink>
              </MotionDiv>
            ))}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="/resume.pdf"
                download={"Abdur_Rahman_Resume.pdf"}
                className="block"
              >
                <Button
                  className="w-full hover:border-purple-600 border border-transparent transition-all duration-300 gap-2"
                  variant={"ghost"}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </MotionDiv>
          </div>
        </MotionDiv>
      )}

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
