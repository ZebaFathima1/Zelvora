"use client";

import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import Link from "next/link";
import Image from "next/image";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { motion } from "framer-motion";
import { FaArrowRight, FaGraduationCap, FaFlask, FaBuilding, FaGlobe } from "react-icons/fa";

export default function IndustriesPage() {
  const offerings = [
    {
      title: "Industrial Learning & Internships",
      desc: "Immersive program structured to bridge the gap between academic theory and high-growth industry requirements. Get hands-on experience on live enterprise-grade AI applications.",
      icon: FaGraduationCap,
      color: "from-cyan-400 to-teal-400",
    },
    {
      title: "Research & Development Labs",
      desc: "In-house incubation labs that research model architectures, multi-agent frameworks, and advanced system integrations to power future-proof solutions.",
      icon: FaFlask,
      color: "from-blue-400 to-indigo-400",
    },
    {
      title: "Enterprise Solutions",
      desc: "Tailored deep learning systems, custom transformers, and fine-tuning pipelines built specifically for sectors such as FinTech, EdTech, and smart infrastructure.",
      icon: FaBuilding,
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <NeuralNetwork />
      <CursorSpotlight />
      <ChatbotButton />
      <Navbar />

      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          {/* Header section */}
          <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold">
              Zelvora Lab &amp; Sectors
            </span>
            
            {/* Holographic Logo Container */}
            <div className="relative h-24 w-24 rounded-3xl bg-gradient-to-br from-zelvora-primary/20 via-cyan-500/10 to-transparent p-0.5 border border-cyan-300/20 shadow-glow shadow-cyan-500/10 flex items-center justify-center mb-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep flex items-center justify-center">
                <Image src="/logo.png" alt="Zelvora Logo" fill priority sizes="80px" className="object-cover" />
              </div>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl tracking-tight">
              Zelvora Industry Lab
            </h1>
            
            <p className="text-lg leading-8 text-zelvora-secondary max-w-2xl">
              Powering the next generation of technological literacy. We build advanced AI tools and establish state-of-the-art incubation spaces to foster real-world industrial capability.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={item.title}
                  className="glass-card p-8 rounded-3xl border border-cyan-300/5 hover:border-cyan-300/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className="absolute -right-6 -bottom-6 text-cyan-300/5 group-hover:text-cyan-300/10 transition-colors duration-500">
                    <Icon size={120} />
                  </div>
                  
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-zelvora-bg text-xl font-bold shadow-md`}>
                    <Icon size={20} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-zelvora-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="mt-4 text-sm leading-6 text-zelvora-secondary relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Lab Portal CTA */}
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-[#061217]/80 to-[#03090b]/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
            
            <div className="space-y-4 max-w-2xl z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3 py-1 text-xs text-zelvora-primary font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Active Learning Portal
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready for Industrial Learning?
              </h2>
              <p className="text-sm leading-6 text-zelvora-secondary">
                Step into our virtual laboratory and workspace. Access interactive courses, work on live industry projects, verify certifications, and collaborate with leading developers.
              </p>
            </div>

            <div className="flex-shrink-0 z-10">
              <a
                href="https://labs.zelvoratech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow hover:scale-105 transition-all duration-300"
              >
                Enter Zelvora Lab <FaArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 items-center justify-between border-t border-cyan-300/10 pt-8">
            <p className="text-sm text-zelvora-secondary max-w-md">
              Collaborate with Zelvora Industry Lab to set up structured training modules or design tailored incubators for your campus.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10 hover:text-zelvora-primary"
              >
                Contact Lab Team <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="rounded-full border border-transparent bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
