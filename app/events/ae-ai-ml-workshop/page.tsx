"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import ScrollProgress from "../../../components/ScrollProgress";

export default function AEAIMLWorkshopPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <Link href="/events" className="inline-flex items-center gap-2 text-sm text-zelvora-primary hover:text-zelvora-primaryMid transition">
              ← Back to Events
            </Link>
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">AI & ML Workshop</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
              AI & ML Workshop
            </h1>
            <p className="text-lg text-zelvora-secondary">
              Institute of Aeronautical Engineering College
            </p>
          </div>

          {/* Event Details */}
          <div className="grid gap-8 mb-12 lg:grid-cols-3">
            <div className="glass-card p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-zelvora-primary mb-2">Location</div>
              <p className="text-xl font-semibold text-white">Institute of Aeronautical Engineering College</p>
            </div>
            <div className="glass-card p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-zelvora-primary mb-2">Event Type</div>
              <p className="text-xl font-semibold text-white">Workshop</p>
            </div>
            <div className="glass-card p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-zelvora-primary mb-2">Year</div>
              <p className="text-xl font-semibold text-white">2026</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Event Gallery</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Placeholder for photos - will be filled when images are uploaded */}
              <div className="glass-card p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-zelvora-secondary">Photos coming soon...</p>
                </div>
              </div>
              <div className="glass-card p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-zelvora-secondary">Photos coming soon...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">About This Workshop</h2>
            <p className="text-lg leading-8 text-zelvora-secondary mb-6">
              Our comprehensive AI & ML Workshop at Institute of Aeronautical Engineering College provided students with hands-on experience in machine learning concepts, applications, and real-world problem-solving.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Workshop Highlights:</h3>
              <ul className="space-y-3 text-zelvora-secondary">
                <li className="flex gap-3">
                  <span className="text-zelvora-primary">✓</span>
                  <span>Introduction to Machine Learning fundamentals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zelvora-primary">✓</span>
                  <span>Hands-on projects with real datasets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zelvora-primary">✓</span>
                  <span>Expert mentoring and guidance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zelvora-primary">✓</span>
                  <span>Industry insights and best practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zelvora-primary">✓</span>
                  <span>Networking with peers and professionals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow">
              Interested in Similar Workshops?
            </Link>
            <Link href="/events" className="rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:text-zelvora-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
