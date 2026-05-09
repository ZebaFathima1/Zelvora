"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import { team } from "../../lib/siteData";
import TeamCard from "../../components/TeamCard";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Team</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Meet the team that builds future-ready AI products.</h1>
            <p className="text-lg leading-8 text-zelvora-secondary">
              Learn more about the leadership and innovators driving Zelvora’s mission.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow">
              Contact Leadership
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
