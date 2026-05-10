"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.phone || !formState.purpose) {
      setStatus("Please fill in all required fields.");
      return;
    }
    setStatus("Thanks! Your details have been submitted. We'll reach out soon.");
    setFormState({ name: "", email: "", phone: "", purpose: "", message: "" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Contact</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Talk to Zelvora Technologies.</h1>
            <p className="text-lg leading-8 text-zelvora-secondary">
              Share your name, email, phone number, and purpose so our team can connect with you.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr]">
            <div className="glass-card p-10">
              <h2 className="text-3xl font-semibold text-white">Get in touch</h2>
              <p className="mt-4 text-zelvora-secondary">Fill out the form and we’ll respond as soon as possible.</p>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-zelvora-secondary">
                    Name*
                    <input
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-zelvora-primary"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm text-zelvora-secondary">
                    Email*
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-zelvora-primary"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <label className="space-y-2 text-sm text-zelvora-secondary">
                  Phone*
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-zelvora-primary"
                    placeholder="+91 98765 43210"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-zelvora-secondary">
                  Purpose*
                  <input
                    name="purpose"
                    value={formState.purpose}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-zelvora-primary"
                    placeholder="Course inquiry, collaboration, etc."
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-zelvora-secondary">
                  Message
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-3xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-zelvora-primary"
                    placeholder="Tell us more about what you need..."
                  />
                </label>
                <button className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-semibold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow">
                  Send Message
                </button>
              </form>
              {status && <p className="mt-6 rounded-3xl border border-cyan-300/20 bg-white/5 px-5 py-4 text-sm text-zelvora-secondary">{status}</p>}
            </div>
            <div className="glass-card p-10">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Contact details</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Reach out anytime.</h2>
                </div>
                <div className="space-y-4 text-zelvora-secondary">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Email</p>
                    <p>zelvoratechnologies@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Phone</p>
                    <p>+91 91000 40993</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Address</p>
                    <p>Telangana, Hyderabad, India</p>
                  </div>
                </div>
                <Link href="/" className="inline-flex rounded-full border border-cyan-300/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-zelvora-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
