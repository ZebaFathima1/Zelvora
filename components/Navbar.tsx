"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cyan-300/10 bg-zelvora-bg/85 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        <Link href="/?skipIntro=true" className="flex items-center gap-4 group">
          <motion.div 
            animate={{ boxShadow: ['0 0 15px rgba(0,230,208,0.3)', '0 0 30px rgba(0,230,208,0.6)', '0 0 15px rgba(0,230,208,0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep shadow-glow"
          >
            <Image src="/logo.png" alt="Zelvora Technologies Logo" fill priority sizes="64px" />
          </motion.div>
          <div className="flex flex-col group-hover:text-zelvora-primary transition">
            <span className="text-xl font-bold text-white">Zelvora</span>
            <span className="text-xs uppercase tracking-[0.15em] text-zelvora-primary">Technologies</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex text-sm text-zelvora-secondary">
          <a href="/services" className="transition hover:text-white">Services</a>
          <a href="/courses" className="transition hover:text-white">Courses</a>
          <a href="/events" className="transition hover:text-white">Events</a>
          <a href="/team" className="transition hover:text-white">Team</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="rounded-full border border-cyan-300/25 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-zelvora-primary hover:border-cyan-300/50 hidden sm:inline-flex">
            Contact
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-zelvora-secondary hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-zelvora-bg/95 backdrop-blur-3xl border-t border-cyan-300/10"
        >
          <div className="px-6 py-4 space-y-4">
            <a href="/services" className="block text-sm text-zelvora-secondary hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="/courses" className="block text-sm text-zelvora-secondary hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
            <a href="/events" className="block text-sm text-zelvora-secondary hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
            <a href="/team" className="block text-sm text-zelvora-secondary hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
            <Link href="/contact" className="block rounded-full border border-cyan-300/25 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-zelvora-primary hover:border-cyan-300/50 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex justify-center gap-4 pt-4">
              <a href="https://www.instagram.com/zelvora.technologies?igsh=MWJ5YmQ5OWl5cTk2Zw==" target="_blank" rel="noopener noreferrer" className="text-zelvora-secondary hover:text-zelvora-primary transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/zelvora-technologies?trk=blended-typeahead" target="_blank" rel="noopener noreferrer" className="text-zelvora-secondary hover:text-zelvora-primary transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
