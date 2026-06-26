"use client";

import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import Link from "next/link";
import Image from "next/image";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FaArrowRight, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCertificate, 
  FaCode, 
  FaChalkboardTeacher, 
  FaLightbulb, 
  FaCogs, 
  FaBullseye,
  FaCheckCircle,
  FaChevronRight,
  FaTerminal
} from "react-icons/fa";

// Animated counter hook/component helper
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(handle);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function IndustriesPage() {
  const timelineSteps = [
    { title: "Learning", desc: "Acquire specialized theory in AI, ML, Data Science & Web Engineering.", icon: FaGraduationCap },
    { title: "Project", desc: "Build hands-on, real-time products to apply theoretical knowledge.", icon: FaCode },
    { title: "Internship", desc: "Collaborate on production codebases with active tech exposure.", icon: FaBriefcase },
    { title: "Certification", desc: "Earn verified credentials mapping your advanced tech capabilities.", icon: FaCertificate },
    { title: "Career", desc: "Unlock professional placement opportunities & interview readiness.", icon: FaChalkboardTeacher }
  ];

  const highlights = [
    { title: "Industry-Oriented Training Programs", desc: "Curriculums mapped directly to the active technological needs of high-end startup teams.", icon: FaCogs },
    { title: "Hands-On Real-Time Projects", desc: "Skip toy datasets. Code and deploy actual cloud architectures, databases, and LLM endpoints.", icon: FaTerminal },
    { title: "Internship Opportunities", desc: "Work directly alongside senior engineers on production-level startup builds.", icon: FaBriefcase },
    { title: "Skill Development Workshops", desc: "Bootcamps focused on deep learning, API integrations, and developer tool chains.", icon: FaLightbulb },
    { title: "Expert Mentorship", desc: "One-on-one reviews and project design guidance from experienced technical leads.", icon: FaChalkboardTeacher },
    { title: "Industry Recognized Certifications", desc: "Earn verified credentials showing deep competency in modern software systems.", icon: FaCertificate }
  ];

  const reasons = [
    "Learn from industry professionals with real development experience.",
    "Build a strong, deployable portfolio with production-level projects.",
    "Gain practical exposure that bridges classroom gaps and traditional academics.",
    "Earn verified certificates to validate your engineering capabilities.",
    "Improve employability, coding habits, and modern career readiness.",
    "Connect with a growing community of builders and technology enthusiasts."
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
          
          {/* 1. Hero Block */}
          <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-24 w-24 rounded-3xl bg-gradient-to-br from-zelvora-primary/20 via-cyan-500/10 to-transparent p-0.5 border border-cyan-300/20 shadow-glow shadow-cyan-500/10 flex items-center justify-center mb-4"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep flex items-center justify-center">
                <Image src="/logo.png" alt="Zelvora Logo" fill priority sizes="80px" className="object-cover" />
              </div>
            </motion.div>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold"
            >
              Zelvora Industry Labs
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-extrabold leading-tight text-white sm:text-6xl tracking-tight"
            >
              Zelvora Industry Labs
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-medium bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Bridging the Gap Between Learning and Industry Experience
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg leading-8 text-zelvora-secondary max-w-3xl"
            >
              Zelvora Industry Labs is an initiative by Zelvora Technologies designed to provide students, graduates, and aspiring professionals with real-world industry exposure through practical learning experiences. Our mission is to help learners develop job-ready skills by working on industry-standard projects, guided mentorship programs, workshops, internships, and certification opportunities.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base leading-7 text-zelvora-secondary/85 max-w-3xl"
            >
              At Zelvora Industry Labs, we focus on transforming theoretical knowledge into practical expertise through hands-on learning. Participants gain experience in emerging technologies such as Artificial Intelligence, Machine Learning, Data Science, Web Development, Cloud Computing, Cybersecurity, and Software Engineering.
            </motion.p>
          </div>

          {/* 2. Stats Block (Animated) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Learners Impacted", end: 1200, suffix: "+" },
              { label: "Production Builds", end: 25, suffix: "+" },
              { label: "Expert Mentors", end: 15, suffix: "+" },
              { label: "Placement Assistance", end: 100, suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-cyan-300/5 bg-white/5 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-zelvora-primary mb-1">
                  <AnimatedCounter end={stat.end} />{stat.suffix}
                </div>
                <div className="text-xs text-zelvora-secondary uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 3. The Timeline: Learning to Career */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Industrial Learning Track</h2>
              <p className="text-sm text-zelvora-secondary mt-2">A structured workflow mapped from theoretical studies to professional execution.</p>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4">
              {/* Desktop Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-zelvora-primary/10 via-cyan-400/40 to-indigo-500/10 -translate-y-1/2 hidden md:block z-0" />
              
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-cyan-300/10 bg-[#061115] relative z-10 flex-1 flex flex-col justify-between hover:border-cyan-300/35 transition-all duration-300">
                    <div>
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-zelvora-bg font-bold text-lg">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-xs text-zelvora-primary">0{idx + 1}.</span>
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-zelvora-secondary">{step.desc}</p>
                    </div>
                    {idx < timelineSteps.length - 1 && (
                      <div className="mt-4 md:hidden flex justify-center text-zelvora-primary">
                        <FaChevronRight className="rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Key Highlights Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Highlights</h2>
              <p className="text-sm text-zelvora-secondary mt-2">The fundamental pillars of the Zelvora Industry Labs methodology.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="glass-card p-8 rounded-3xl border border-cyan-300/5 hover:border-cyan-300/20 bg-white/5 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-zelvora-primary text-xl border border-cyan-300/10 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-zelvora-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-zelvora-secondary">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Why Choose & Vision/Mission Split Section */}
          <div className="grid gap-8 lg:grid-cols-2 mb-24">
            {/* Why Choose Block */}
            <div className="glass-card p-8 rounded-3xl border border-cyan-300/10 bg-[#061217]/50 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zelvora Industry Labs?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-zelvora-primary mt-1 flex-shrink-0" size={14} />
                      <span className="text-sm text-zelvora-secondary leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-cyan-300/10">
                <span className="text-xs text-zelvora-secondary">Collaborate with thousands of tech innovators.</span>
              </div>
            </div>

            {/* Vision & Mission Card */}
            <div className="flex flex-col gap-6">
              {/* Vision Card */}
              <div className="glass-card p-8 rounded-3xl border border-cyan-300/10 bg-[#061217]/50 flex-1 relative overflow-hidden group">
                <div className="absolute right-4 bottom-4 text-cyan-300/5 group-hover:text-cyan-300/10 transition-colors">
                  <FaLightbulb size={100} />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                    <FaLightbulb size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-sm leading-relaxed text-zelvora-secondary">
                  To create a future-ready workforce by providing accessible, practical, and industry-relevant learning experiences that empower individuals to excel in the digital economy.
                </p>
              </div>

              {/* Mission Card */}
              <div className="glass-card p-8 rounded-3xl border border-cyan-300/10 bg-[#061217]/50 flex-1 relative overflow-hidden group">
                <div className="absolute right-4 bottom-4 text-cyan-300/5 group-hover:text-cyan-300/10 transition-colors">
                  <FaBullseye size={100} />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-zelvora-primary flex items-center justify-center border border-cyan-300/20">
                    <FaBullseye size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-sm leading-relaxed text-zelvora-secondary">
                  To bridge the gap between academic education and industry requirements by offering experiential learning, innovation-driven programs, and professional development opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Call To Action (CTA) */}
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-[#061217]/80 to-[#03090b]/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
            
            <div className="space-y-4 max-w-3xl z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/5 px-3 py-1 text-xs text-zelvora-primary font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Active Intake Open
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Join Zelvora Industry Labs &amp; Accelerate Your Growth
              </h2>
              <p className="text-sm leading-relaxed text-zelvora-secondary">
                Join Zelvora Industry Labs and take the first step toward becoming an industry-ready professional. Explore our programs, internships, projects, and certifications designed to accelerate your career growth.
              </p>
            </div>

            <div className="flex-shrink-0 z-10">
              <a
                href="https://labs.zelvoratech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow hover:scale-105 transition-all duration-300"
              >
                Visit Zelvora Industry Labs <FaArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Footer Backlinks */}
          <div className="mt-16 flex flex-wrap gap-4 items-center justify-between border-t border-cyan-300/10 pt-8">
            <p className="text-sm text-zelvora-secondary max-w-md">
              Need academic collaborations or custom incubator hubs? Reach out to our specialized laboratories.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10 hover:text-zelvora-primary"
              >
                Contact Team <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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
