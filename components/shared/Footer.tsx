"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/SyntaxAdil" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devloper-abdur-rahman/",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/share/15Y7LYT6MZ/",
  },
  { icon: Mail, label: "Email", href: "mailto:abdurrahmanadil005@gmail.com" },
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null },
  {
    icon: Mail,
    label: "Email",
    value: "abdurrahmanadil005@gmail.com",
    href: "mailto:abdurrahmanadil005@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+880 1406490781",
    href: "https://wa.me/8801406490781",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-[#e8e8e4] rounded-2xl overflow-hidden border-t">
      <div
        className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-12 py-12
                      divide-y md:divide-y-0 md:divide-x divide-white/[0.07]"
      >
        {/* Brand */}
        <div className="pb-8 md:pb-0 md:pr-10">
          <h2 className="font-bold text-2xl text-white tracking-tight leading-tight mb-2">
            Md. Abdur
            <br />
            <span className="text-emerald-400">Rahman</span>
          </h2>
          <p className="text-sm text-[#888] leading-relaxed mb-6 max-w-55">
            Full Stack Developer passionate about creating exceptional digital
            experiences.
          </p>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                           flex items-center justify-center text-[#aaa]
                           hover:bg-emerald-400/10 hover:border-emerald-400/30
                           hover:text-emerald-400 hover:-translate-y-0.5
                           transition-all duration-200"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="py-8 md:py-0 md:px-8">
          <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-emerald-400 mb-5">
            Quick Links
          </p>
          <ul className="flex flex-col gap-1">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex items-center gap-1.5 text-sm text-[#999]
                             py-1 hover:text-white transition-colors duration-200"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-current opacity-0
                                   group-hover:opacity-100 scale-50 group-hover:scale-100
                                   transition-all duration-200"
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="pt-8 md:pt-0 md:pl-8">
          <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-emerald-400 mb-5">
            Get In Touch
          </p>
          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/15
                                flex items-center justify-center text-emerald-400 shrink-0"
                >
                  <Icon size={14} />
                </div>
                <div>
                  <p className="text-[11px] text-[#555] mb-0.5">{label}</p>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13.5px] text-[#ccc] leading-snug hover:text-emerald-400 transition-colors"
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className="text-[13.5px] text-[#ccc] leading-snug">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-white/[0.07]" />

      <div className="flex items-center justify-between px-6 md:px-12 py-4 flex-wrap gap-2">
        <p className="text-xs text-[#555]">
          © 2026 <span className="text-[#777]">Md. Abdur Rahman.</span> All
          rights reserved.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-[#555] hover:text-emerald-400 hover:bg-transparent
                     p-0 h-auto gap-1.5 group"
        >
          Back to Top
          <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
            ↑
          </span>
        </Button>
      </div>
    </footer>
  );
}
