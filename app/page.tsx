"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaArrowRight, FaUsers, FaGraduationCap, FaNetworkWired, FaCode } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import BackgroundParticles from "../components/BackgroundParticles";
import ServiceCard from "../components/ServiceCard";
import CourseCard from "../components/CourseCard";
import TeamCard from "../components/TeamCard";
import IntroLoader from "../components/IntroLoader";

// Interactive custom components
import CursorSpotlight from "../components/CursorSpotlight";
import InteractiveGlobe from "../components/InteractiveGlobe";
import NeuralNetwork from "../components/NeuralNetwork";
import ChatbotButton from "../components/ChatbotButton";
import LogoMarquee from "../components/LogoMarquee";
import CodeTerminal from "../components/CodeTerminal";
import InteractiveProcess from "../components/InteractiveProcess";

const services = [
  {
    title: "AI Models for Students",
    description: "Adaptive learning models that personalize study support and improve outcomes.",
    icon: "🤖",
  },
  {
    title: "Tech Solutions",
    description: "Custom software and AI integrations for education and enterprise workflows.",
    icon: "⚡",
  },
  {
    title: "AI Workshops",
    description: "Hands-on training sessions to unlock practical AI skills and real-world insights.",
    icon: "🎓",
  },
  {
    title: "Software Development",
    description: "Premium digital products built with modern architecture and intelligent design.",
    icon: "🛠️",
  },
];

const courses = [
  {
    title: "AI Basics for Students",
    description: "Learn core AI concepts with practical examples designed for beginners.",
    duration: "4 weeks",
    price: "₹99",
  },
  {
    title: "Beginner Machine Learning",
    description: "Build predictive models with accessible tools and project-based learning.",
    duration: "5 weeks",
    price: "₹99",
  },
  {
    title: "AI for Career Growth",
    description: "Develop practical AI skills for modern job markets and competitive portfolios.",
    duration: "6 weeks",
    price: "₹99",
  },
];

const team = [
  {
    name: "Zeba Fathima",
    role: "Director & CEO",
  },
  {
    name: "Mirza Amaanullah Baig",
    role: "Director & CTO",
  },
  {
    name: "Mohammed Hamedullah Sajid",
    role: "CHRO",
  },
  {
    name: "Mohammed Uzair Shams",
    role: "COO",
  },
];

const testimonials = [
  {
    quote: "The AI & ML workshop by Zelvora was mind-blowing. Building neural network models in a single afternoon gave me real-world developer confidence.",
    author: "Aditya Verma",
    role: "B.Tech Student, IARE",
  },
  {
    quote: "Zelvora's mentorship is exceptional. The Beginner Machine Learning course helped me build a portfolio that landed me an AI research internship.",
    author: "Preeti Reddy",
    role: "Computer Science Graduate",
  },
  {
    quote: "Highly structured courses and premium teaching quality. The ₹99 introductory price makes world-class AI education accessible to every student.",
    author: "Rohan Das",
    role: "AI Enthusiast",
  },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const introShown = localStorage.getItem('zelvora-intro-shown');
      if (introShown === 'true') {
        setShowIntro(false);
        return;
      }
      const params = new URLSearchParams(window.location.search);
      if (params.get('skipIntro') === 'true') {
        setShowIntro(false);
      }
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLoader
            key="intro"
            onComplete={() => {
              setShowIntro(false);
              if (typeof window !== 'undefined') {
                localStorage.setItem('zelvora-intro-shown', 'true');
              }
            }}
          />
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white"
          >
            <ScrollProgress />
            <NeuralNetwork />
            <CursorSpotlight />
            <ChatbotButton />
            <Navbar />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pt-40">
              <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                
                {/* Left Column Copy */}
                <div className="space-y-8 relative z-10">
                  <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-[#061217]/50 px-4.5 py-2 text-xs sm:text-sm text-zelvora-secondary shadow-lg backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-zelvora-primary animate-pulse" />
                    Engineering Tomorrow with Artificial Intelligence.
                  </div>
                  
                  <div className="space-y-6">
                    <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-[76px] tracking-tight">
                      Build the Future <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-zelvora-primary via-cyan-300 to-indigo-400 text-glow">
                        with AI.
                      </span>
                    </h1>
                    <p className="max-w-xl text-base sm:text-lg leading-8 text-zelvora-secondary">
                      Zelvora Technologies is a premium AI startup building adaptive learning tools for students, custom software configurations, and enterprise integrations.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,230,208,0.4)]"
                    >
                      Get Started <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/courses"
                      className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-bold text-white transition duration-300 hover:border-cyan-200 hover:bg-white/10 hover:text-zelvora-primary"
                    >
                      Explore Courses
                    </Link>
                  </div>

                  {/* Trust Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-cyan-300/10">
                    <div>
                      <h4 className="text-3xl font-bold text-white tracking-tight">1000+</h4>
                      <p className="text-[11px] text-zelvora-secondary uppercase tracking-widest mt-1">Students</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white tracking-tight">45+</h4>
                      <p className="text-[11px] text-zelvora-secondary uppercase tracking-widest mt-1">Programs</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white tracking-tight">28+</h4>
                      <p className="text-[11px] text-zelvora-secondary uppercase tracking-widest mt-1">Workshops</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white tracking-tight">16+</h4>
                      <p className="text-[11px] text-zelvora-secondary uppercase tracking-widest mt-1">Deployments</p>
                    </div>
                  </div>
                </div>

                {/* Right Column Interactive Globe */}
                <div className="relative flex items-center justify-center z-10">
                  <InteractiveGlobe />
                </div>
              </div>
            </section>

            {/* Infinite Tech Marquee */}
            <LogoMarquee />

            {/* Developer Integration Terminal Block */}
            <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">API Integration</span>
                  <h2 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                    Deploy AI modules with absolute simplicity.
                  </h2>
                  <p className="text-base leading-8 text-zelvora-secondary">
                    Our developers write custom transformer layers and API interfaces that plug directly into existing school portals and business operations. Simple imports, scalable runtimes.
                  </p>
                  <div className="flex gap-4 items-center text-xs text-zelvora-secondary font-mono">
                    <span className="flex items-center gap-1.5"><FaCode className="text-zelvora-primary" /> Python SDK</span>
                    <span className="flex items-center gap-1.5"><FaNetworkWired className="text-zelvora-primary" /> Rest API</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <CodeTerminal />
                </div>
              </div>
            </section>

            {/* Services Showcase */}
            <section id="services" className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Core Competencies</p>
                  <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">AI-powered solutions built to scale.</h2>
                </div>
                <p className="max-w-md text-sm text-zelvora-secondary sm:text-right">
                  Premium AI services designed for students, educators, and businesses that demand a modern digital advantage.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </section>

            {/* Our Process Section */}
            <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16 border-t border-cyan-300/5">
              <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Our Workflow</span>
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">How we deliver intelligence.</h2>
                <p className="text-sm text-zelvora-secondary">
                  A comprehensive timeline detailing how we align consulting, architecture design, and fine-tuning scripts.
                </p>
              </div>
              <InteractiveProcess />
            </section>

            {/* Courses Section */}
            <section id="courses" className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16 border-t border-cyan-300/5">
              <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Curriculum</span>
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Launch your AI journey today.</h2>
                <p className="text-sm text-zelvora-secondary">
                  Join structured tracks engineered for student excellence and real portfolio builds.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.title} {...course} />
                ))}
              </div>
            </section>

            {/* Events Showcase */}
            <section id="events" className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16 border-t border-cyan-300/5">
              <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="space-y-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Interactive Learning</span>
                  <h2 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                    Hands-on sessions that empower future creators.
                  </h2>
                  <p className="text-base leading-8 text-zelvora-secondary">
                    We host regular workshops at colleges and institutions to teach python fundamentals, deep learning layers, and AI business application structures.
                  </p>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zelvora-primary hover:underline"
                  >
                    View All Workshops & Gallery <FaArrowRight size={10} />
                  </Link>
                </div>
                <div className="grid gap-5">
                  <div className="glass-card p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl shadow-glow">🎯</div>
                    <h3 className="text-xl font-bold text-white">Live AI Labs</h3>
                    <p className="mt-2 text-xs leading-5 text-zelvora-secondary">Interactive workshops with project-based AI builds and expert mentoring.</p>
                  </div>
                  <div className="glass-card p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl shadow-glow">📜</div>
                    <h3 className="text-xl font-bold text-white">Certification Ready</h3>
                    <p className="mt-2 text-xs leading-5 text-zelvora-secondary">Complete curated tracks with certificates that validate your AI skills.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials infinite scroll */}
            <section className="py-20 bg-[#040b0e]/30 border-y border-cyan-300/5">
              <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16 mb-12 text-center space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Reviews</span>
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">What our community says.</h2>
              </div>
              <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee gap-6">
                  {[...testimonials, ...testimonials].map((test, idx) => (
                    <div
                      key={idx}
                      className="w-[300px] sm:w-[380px] flex-shrink-0 glass-card p-6 rounded-3xl"
                    >
                      <p className="text-sm leading-6 text-slate-300 italic">"{test.quote}"</p>
                      <div className="mt-6 flex items-center gap-3.5">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zelvora-primary to-indigo-500 flex items-center justify-center font-bold text-sm text-zelvora-bg">
                          {test.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{test.author}</h4>
                          <p className="text-[10px] text-zelvora-secondary uppercase tracking-wider">{test.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Team Showcase */}
            <section id="team" className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Leadership</span>
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Meet the minds behind Zelvora.</h2>
                <p className="text-sm text-zelvora-secondary">
                  The directors and operators engineering the next stage of artificial intelligence education.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                  <TeamCard key={member.name} {...member} />
                ))}
              </div>
            </section>

            {/* CTA panel */}
            <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,230,208,0.06),transparent_35%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.04),transparent_28%)] pointer-events-none" />
              <div className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-300/15 bg-gradient-to-b from-white/5 to-transparent p-12 shadow-2xl backdrop-blur-3xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Get In Touch</span>
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                      Transform ideas into intelligent experiences.
                    </h2>
                    <p className="text-sm text-zelvora-secondary">
                      Establish custom training programs, fine-tune models on your system, or ask about curriculum materials. We respond within 24 hours.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,230,208,0.4)]"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-bold text-white transition duration-300 hover:border-cyan-200 hover:bg-white/10 hover:text-zelvora-primary"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-cyan-300/5 bg-[#03090b]/80 px-6 py-12 text-zelvora-secondary sm:px-10 lg:px-16 z-10 relative">
              <div className="mx-auto flex max-w-[1320px] flex-col gap-12 md:flex-row md:items-start md:justify-between">
                
                <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-black/10 border border-cyan-300/10">
                      <Image src="/logo.png" alt="Zelvora logo" fill sizes="48px" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white leading-tight">Zelvora Technologies</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zelvora-primary mt-0.5">Pvt. Ltd.</p>
                    </div>
                  </div>
                  <p className="max-w-sm text-xs leading-6 text-zelvora-secondary">
                    AI-first training, workshops, and technology shaped for tomorrow’s learners.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-zelvora-primary font-semibold">Follow us</p>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <a
                        href="https://www.instagram.com/zelvora.technologies?igsh=MWJ5YmQ5OWl5cTk2Zw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-cyan-300/15 bg-white/5 p-2.5 text-lg transition hover:bg-zelvora-primary hover:text-zelvora-bg hover:border-cyan-300"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/zelvora-technologies?trk=blended-typeahead"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-cyan-300/15 bg-white/5 p-2.5 text-lg transition hover:bg-zelvora-primary hover:text-zelvora-bg hover:border-cyan-300"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <p className="font-medium text-white">zelvoratechnologies@gmail.com</p>
                    <p>+91 91000 40993</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 border-t border-cyan-300/5 pt-8 text-center text-xs text-zelvora-secondary">
                © 2026 Zelvora Technologies Pvt. Ltd. All rights reserved.
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}