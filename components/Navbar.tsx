"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center py-4 px-6 sm:px-10 lg:px-16 transition-all duration-300">
      <div
        className={`w-full max-w-[1320px] rounded-full flex items-center justify-between px-6 transition-all duration-500 border ${
          isScrolled
            ? "py-2 bg-black/50 border-cyan-300/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "py-3 bg-transparent border-transparent"
        }`}
      >
        <Link href="/?skipIntro=true" className="flex items-center gap-3.5 group">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="Zelvora logo" fill priority sizes="48px" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-wide">Zelvora</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zelvora-primary">Technologies</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex text-sm text-zelvora-secondary font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-2 transition-colors duration-300 ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-zelvora-primary to-zelvora-primaryMid rounded-full shadow-[0_0_8px_#00e6d0]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-zelvora-primary/10 to-cyan-400/5 border border-cyan-300/25 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-zelvora-primary hover:to-zelvora-primaryDeep hover:text-zelvora-bg hover:shadow-glow hidden sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-zelvora-secondary hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 inset-x-6 z-30 lg:hidden rounded-3xl border border-cyan-300/15 bg-black/95 shadow-2xl backdrop-blur-2xl p-6"
          >
            <div className="space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm py-2 transition-colors border-b border-white/5 ${
                      isActive ? "text-zelvora-primary font-semibold" : "text-zelvora-secondary hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="block rounded-full bg-gradient-to-r from-zelvora-primary to-zelvora-primaryDeep py-3 text-sm font-semibold text-zelvora-bg text-center shadow-glow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/zelvora.technologies?igsh=MWJ5YmQ5OWl5cTk2Zw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zelvora-secondary hover:text-zelvora-primary transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/zelvora-technologies?trk=blended-typeahead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zelvora-secondary hover:text-zelvora-primary transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

