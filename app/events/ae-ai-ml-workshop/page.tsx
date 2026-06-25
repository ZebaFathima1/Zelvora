"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import ScrollProgress from "../../../components/ScrollProgress";
import NeuralNetwork from "../../../components/NeuralNetwork";
import CursorSpotlight from "../../../components/CursorSpotlight";
import ChatbotButton from "../../../components/ChatbotButton";
import { FaArrowLeft, FaMapMarkerAlt, FaGraduationCap, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function AEAIMLWorkshopPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <NeuralNetwork />
      <CursorSpotlight />
      <ChatbotButton />
      <Navbar />

      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-zelvora-primary hover:text-white transition-colors duration-300 font-semibold"
            >
              <FaArrowLeft size={10} /> Back to Events
            </Link>
            <span className="inline-block text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold">AI & ML Workshop</span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              AI & ML Workshop
            </h1>
            <p className="text-lg text-zelvora-secondary">
              Empowering students at Institute of Aeronautical Engineering College
            </p>
          </div>

          {/* Event Details */}
          <div className="grid gap-6 mb-12 sm:grid-cols-3">
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider text-zelvora-primary font-bold">Location</span>
              <p className="text-lg font-bold text-white mt-2 flex items-center gap-2"><FaMapMarkerAlt size={14} className="text-cyan-400" /> IARE College</p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider text-zelvora-primary font-bold">Event Type</span>
              <p className="text-lg font-bold text-white mt-2 flex items-center gap-2"><FaGraduationCap size={16} className="text-cyan-400" /> Live Workshop</p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider text-zelvora-primary font-bold">Year</span>
              <p className="text-lg font-bold text-white mt-2 flex items-center gap-2"><FaCalendarAlt size={14} className="text-cyan-400" /> 2026</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Event Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass-card p-8 h-64 flex flex-col items-center justify-center rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,230,208,0.06)_0%,_transparent_75%)]" />
                <div className="text-center relative z-10 space-y-3">
                  <div className="text-4xl transition-transform duration-500 group-hover:scale-110">📸</div>
                  <p className="text-sm font-semibold text-white">Workshop Sessions</p>
                  <p className="text-xs text-zelvora-secondary">Photos coming soon...</p>
                </div>
              </div>
              <div className="glass-card p-8 h-64 flex flex-col items-center justify-center rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(139,92,246,0.06)_0%,_transparent_75%)]" />
                <div className="text-center relative z-10 space-y-3">
                  <div className="text-4xl transition-transform duration-500 group-hover:scale-110">💻</div>
                  <p className="text-sm font-semibold text-white">Coding Labs</p>
                  <p className="text-xs text-zelvora-secondary">Photos coming soon...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="glass-card p-8 sm:p-10 mb-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold text-white mb-4">About This Workshop</h2>
            <p className="text-base leading-8 text-zelvora-secondary mb-8">
              Our comprehensive AI & ML Workshop at Institute of Aeronautical Engineering College provided students with hands-on experience in machine learning concepts, neural network architectures, and real-world datasets.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Workshop Highlights:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3 items-start text-sm text-zelvora-secondary">
                  <FaCheckCircle className="text-zelvora-primary mt-0.5 flex-shrink-0" />
                  <span>Introduction to Machine Learning fundamentals</span>
                </div>
                <div className="flex gap-3 items-start text-sm text-zelvora-secondary">
                  <FaCheckCircle className="text-zelvora-primary mt-0.5 flex-shrink-0" />
                  <span>Hands-on projects with real datasets</span>
                </div>
                <div className="flex gap-3 items-start text-sm text-zelvora-secondary">
                  <FaCheckCircle className="text-zelvora-primary mt-0.5 flex-shrink-0" />
                  <span>Expert mentoring and code optimization</span>
                </div>
                <div className="flex gap-3 items-start text-sm text-zelvora-secondary">
                  <FaCheckCircle className="text-zelvora-primary mt-0.5 flex-shrink-0" />
                  <span>Industry insights and AI architecture review</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 border-t border-cyan-300/10 pt-8 justify-between items-center">
            <p className="text-xs text-zelvora-secondary">Want to host a similar workshop at your college?</p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow"
              >
                Host a Workshop
              </Link>
              <Link
                href="/events"
                className="rounded-full border border-cyan-300/25 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10 hover:text-zelvora-primary"
              >
                All Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

