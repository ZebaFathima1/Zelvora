"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import BackgroundParticles from "../components/BackgroundParticles";
import ServiceCard from "../components/ServiceCard";
import CourseCard from "../components/CourseCard";
import TeamCard from "../components/TeamCard";
import StatsStrip from "../components/StatsStrip";
import AICoreAnimation from "../components/AICoreAnimation";
import IntroLoader from "../components/IntroLoader";

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
    image: "/Zeba.png",
  },
  {
    name: "Mirza Amaanullah Baig",
    role: "Director & CTO",
    image: "/amaan.png",
  },
  {
    name: "Mohammed Hamedullah Sajid",
    role: "CHRO",
    image: "/hamed.png",
  },
  {
    name: "Mohammed Uzair Shams",
    role: "COO",
    image: "/uzair.png",
  },
];

const stats = [
  { label: "Students Impacted", value: 1000 },
  { label: "AI Programs Delivered", value: 45 },
  { label: "Workshops Conducted", value: 28 },
  { label: "Tech Solutions Built", value: 16 },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Check if we should skip the intro from URL parameter or if it has been shown before
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
          <IntroLoader key="intro" onComplete={() => { setShowIntro(false); if (typeof window !== 'undefined') { localStorage.setItem('zelvora-intro-shown', 'true'); } }} />
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white"
          >
            <ScrollProgress />
            <BackgroundParticles />
            <Navbar />

            <section className="relative isolate overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,230,208,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(0,194,184,0.06),transparent_20%)]" />
              <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-8 relative z-10">
                  <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-zelvora-secondary shadow-[0_0_40px_rgba(0,230,208,0.08)] backdrop-blur-xl">
                    <span className="h-2.5 w-2.5 rounded-full bg-zelvora-primary animate-pulse" />
                    Premium AI experiences for students and innovators.
                  </div>
                  <div className="space-y-6">
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                      Empowering the Future with AI.
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-zelvora-secondary sm:text-xl">
                      Building intelligent solutions for students, businesses, and innovators through cutting-edge artificial intelligence.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/contact" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,230,208,0.4)]">
                      Get Started
                    </Link>
                    <Link href="/courses" className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:border-cyan-200 hover:bg-white/10 hover:text-zelvora-primary">
                      Explore Courses
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="relative mx-auto flex max-w-xl items-center justify-center"
                >
                  <AICoreAnimation />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="mt-20 space-y-6 text-center"
              >
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">Transforming education and technology with AI.</h2>
                <p className="max-w-xl mx-auto text-lg leading-8 text-zelvora-secondary">
                  Zelvora Technologies is an AI-driven company transforming education and technology. We build intelligent solutions for students, empower learners with AI skills, and deliver real-world tech innovations.
                </p>
              </motion.div>
            </section>

            <section className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 lg:px-16">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <div key={service.title} className="glass-card p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-2xl shadow-glow">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zelvora-secondary">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="services" className="section-blur mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Services</p>
                  <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">AI-powered solutions built to scale.</h2>
                </div>
                <p className="max-w-2xl text-zelvora-secondary sm:text-right">
                  Premium AI services designed for students, educators, and businesses that demand a modern digital advantage.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-4">
                {services.map((service) => (
                  <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
                ))}
              </div>
            </section>

            <section id="courses" className="section-blur mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="mb-12 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Courses</p>
                <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Launch your AI journey today.</h2>
              </div>
              <div className="grid gap-6 xl:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.title} {...course} />
                ))}
              </div>
            </section>

            <section id="events" className="section-blur mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="space-y-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Events & Workshops</p>
                  <h2 className="text-4xl font-semibold text-white sm:text-5xl">Hands-on sessions that empower future creators.</h2>
                  <p className="max-w-xl text-lg leading-8 text-zelvora-secondary">
                    Hands-on AI sessions, workshops, and real-world learning experiences designed to empower the next generation.
                  </p>
                </div>
                <div className="grid gap-5">
                  <div className="glass-card p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-2xl shadow-glow">🎯</div>
                    <h3 className="text-2xl font-semibold text-white">Live AI Labs</h3>
                    <p className="mt-3 text-zelvora-secondary">Interactive workshops with project-based AI builds and expert mentoring.</p>
                  </div>
                  <div className="glass-card p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-2xl shadow-glow">📜</div>
                    <h3 className="text-2xl font-semibold text-white">Certification Ready</h3>
                    <p className="mt-3 text-zelvora-secondary">Complete curated tracks with certificates that validate your AI skills.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="team" className="section-blur mx-auto max-w-[1320px] px-6 py-20 sm:px-10 lg:px-16">
              <div className="mb-12 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Leadership</p>
                <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Meet the minds behind Zelvora.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {team.map((member) => (
                  <TeamCard key={member.name} {...member} />
                ))}
              </div>
            </section>

            <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#002f34] via-[#022429] to-[#001014] px-6 py-24 sm:px-10 lg:px-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,230,208,0.12),transparent_35%),radial-gradient(circle_at_bottom,_rgba(0,194,184,0.08),transparent_28%)]" />
              <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-cyan-300/15 bg-white/5 p-12 shadow-glow backdrop-blur-3xl">
                <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
                  <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Ready to step into the future with AI?</p>
                    <h2 className="text-4xl font-semibold text-white sm:text-5xl">Transform ideas into intelligent experiences.</h2>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,230,208,0.4)]">
                      Get Started
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:border-cyan-200 hover:bg-white/10 hover:text-zelvora-primary">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <footer className="border-t border-cyan-300/10 bg-zelvora-section px-6 py-8 text-zelvora-secondary sm:px-10 lg:px-16">
              <div className="mx-auto flex max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:justify-center">
                <div className="space-y-3 text-center">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep shadow-glow" />
                    <span className="text-lg font-semibold text-white">Zelvora Technologies Pvt. Ltd.</span>
                  </div>
                  <p className="max-w-md text-sm text-zelvora-secondary">
                    AI-first training, workshops, and technology shaped for tomorrow’s learners.
                  </p>
                </div>

              </div>
              <div className="mt-8 border-t border-cyan-300/10 pt-6 text-center text-sm text-zelvora-secondary">
                © 2026 Zelvora Technologies Pvt. Ltd. All rights reserved.
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}