"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { events } from "../../lib/siteData";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Events & Workshops</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Hands-on AI sessions designed for real-world impact.</h1>
            <p className="text-lg leading-8 text-zelvora-secondary">
              Discover our latest workshops, labs, and certification-ready learning experiences.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <Link key={event.title} href={event.id ? `/events/${event.id}` : "#"}>
                <div className="glass-card p-8 h-full transition hover:bg-white/10 cursor-pointer">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-2xl shadow-glow">🎓</div>
                  <h2 className="text-3xl font-semibold text-white">{event.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-zelvora-secondary">{event.description}</p>
                  {event.location && <p className="mt-3 text-xs text-zelvora-primary uppercase tracking-wider">📍 {event.location}</p>}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow">
              Join a Workshop
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
