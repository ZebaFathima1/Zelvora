"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { services } from "../../lib/siteData";
import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Services</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Premium AI and tech services for modern teams.</h1>
            <p className="text-lg leading-8 text-zelvora-secondary">
              Discover our full stack of solutions designed for students, innovators, and enterprises.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow">
              Contact Our Team
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
