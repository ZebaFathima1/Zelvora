"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
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
          <Link href="/contact" className="rounded-full border border-cyan-300/25 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-zelvora-primary hover:border-cyan-300/50">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
