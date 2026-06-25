"use client";

import Link from "next/link";
import CourseCard from "../../components/CourseCard";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { courses } from "../../lib/siteData";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { FaArrowRight } from "react-icons/fa";

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <NeuralNetwork />
      <CursorSpotlight />
      <ChatbotButton />
      <Navbar />

      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-16 max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold">Courses</span>
            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              Start your AI journey with structured learning.
            </h1>
            <p className="text-lg leading-8 text-zelvora-secondary max-w-2xl">
              Choose a premium course engineered for beginners and future AI developers. Learn transformer weights, machine learning structures, and build real-world portfolios.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 items-center justify-between border-t border-cyan-300/10 pt-8">
            <p className="text-sm text-zelvora-secondary max-w-md">
              Unlock lifetime mentoring support, community slack channels, and certificate verification badges upon track completion.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow transition hover:-translate-y-0.5"
              >
                Enroll Today <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10 hover:text-zelvora-primary"
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

