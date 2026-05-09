"use client";

import Link from "next/link";
import CourseCard from "../../components/CourseCard";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { courses } from "../../lib/siteData";

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Courses</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Start your AI journey with structured learning.</h1>
            <p className="text-lg leading-8 text-zelvora-secondary">
              Choose a premium course tailored for beginners and future AI innovators.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow">
              Enroll Today
            </Link>
            <Link href="/" className="rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:text-zelvora-primary">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
