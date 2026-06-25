"use client";

import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { services } from "../../lib/siteData";
import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
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
            <span className="text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold">Services</span>
            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              Premium AI and tech services for modern teams.
            </h1>
            <p className="text-lg leading-8 text-zelvora-secondary max-w-2xl">
              Discover our full stack of software and model fine-tuning solutions engineered to give you a modern digital advantage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 items-center justify-between border-t border-cyan-300/10 pt-8">
            <p className="text-sm text-zelvora-secondary max-w-md">
              Need a bespoke integration or a dedicated training session for your college or office? Let's design a custom setup.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg shadow-glow transition hover:-translate-y-0.5"
              >
                Contact Our Team <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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

