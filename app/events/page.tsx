"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { events } from "../../lib/siteData";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function EventsPage() {
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
            <span className="text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold">Workshops</span>
            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              Hands-on AI sessions designed for real-world impact.
            </h1>
            <p className="text-lg leading-8 text-zelvora-secondary max-w-2xl">
              Discover our latest labs, training sessions, and certification-ready learning experiences conducted at various institutions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {events.map((event) => (
              <Link key={event.title} href={event.id ? `/events/${event.id}` : "#"} className="group">
                <div className="glass-card p-8 sm:p-10 h-full flex flex-col justify-between rounded-[2rem] border border-cyan-300/5 hover:border-cyan-300/20 bg-white/5 transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-zelvora-primary shadow-glow group-hover:scale-105 transition-transform duration-300">
                        <FaGraduationCap />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-zelvora-primary border border-cyan-400/10">
                        <FaCalendarAlt size={10} /> {event.date}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-zelvora-primary transition-colors duration-300 leading-tight">
                        {event.title}
                      </h2>
                      <p className="text-sm leading-7 text-zelvora-secondary">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-cyan-300/10 flex flex-wrap gap-4 items-center justify-between">
                    {event.location && (
                      <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <FaMapMarkerAlt className="text-zelvora-primary" /> {event.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-zelvora-primary transition-colors">
                      Learn More <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 items-center justify-between border-t border-cyan-300/10 pt-8">
            <p className="text-sm text-zelvora-secondary max-w-md">
              Interested in scheduling a specialized AI / ML bootcamp at your university or startup?
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow transition hover:-translate-y-0.5"
              >
                Join a Workshop <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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

