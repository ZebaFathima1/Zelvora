"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    setStatus("");

    // Simulate database write / api call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Thanks! Your details have been submitted. We'll reach out soon.");
      setFormState({ name: "", email: "", phone: "", purpose: "", message: "" });
    }, 1500);
  };

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
            <span className="text-xs uppercase tracking-[0.35em] text-zelvora-primary font-bold">Contact</span>
            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              Talk to Zelvora Technologies.
            </h1>
            <p className="text-lg leading-8 text-zelvora-secondary max-w-2xl">
              Share your details, and our engineering team will connect with you to design or fine-tune custom configurations.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form Column */}
            <div className="glass-card p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-3xl font-bold text-white tracking-tight">Get in touch</h2>
              <p className="mt-2 text-sm text-zelvora-secondary">Fill out the form and we’ll respond as soon as possible.</p>
              
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-zelvora-secondary">
                    Name*
                    <input
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-cyan-300/15 bg-black/40 px-5 py-3.5 text-white outline-none transition focus:border-zelvora-primary focus:ring-1 focus:ring-zelvora-primary/20 text-sm font-sans"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-zelvora-secondary">
                    Email*
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-cyan-300/15 bg-black/40 px-5 py-3.5 text-white outline-none transition focus:border-zelvora-primary focus:ring-1 focus:ring-zelvora-primary/20 text-sm font-sans"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-zelvora-secondary">
                    Phone*
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-cyan-300/15 bg-black/40 px-5 py-3.5 text-white outline-none transition focus:border-zelvora-primary focus:ring-1 focus:ring-zelvora-primary/20 text-sm font-sans"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-zelvora-secondary">
                    Purpose*
                    <input
                      name="purpose"
                      value={formState.purpose}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-cyan-300/15 bg-black/40 px-5 py-3.5 text-white outline-none transition focus:border-zelvora-primary focus:ring-1 focus:ring-zelvora-primary/20 text-sm font-sans"
                      placeholder="Course inquiry, custom build..."
                      required
                    />
                  </label>
                </div>
                <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-zelvora-secondary block">
                  Message
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-2xl border border-cyan-300/15 bg-black/40 px-5 py-3.5 text-white outline-none transition focus:border-zelvora-primary focus:ring-1 focus:ring-zelvora-primary/20 text-sm font-sans resize-none"
                    placeholder="Tell us more about what you need..."
                  />
                </label>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-zelvora-primary via-zelvora-primaryMid to-zelvora-primaryDeep px-8 py-4 text-base font-bold text-zelvora-bg transition hover:-translate-y-0.5 shadow-glow disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-zelvora-bg border-t-transparent" />
                  ) : (
                    <>
                      Send Message <FaPaperPlane size={12} />
                    </>
                  )}
                </button>
              </form>
              
              {status && (
                <p className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 px-5 py-4 text-xs font-mono text-zelvora-primary">
                  {status}
                </p>
              )}
            </div>

            {/* Details Column */}
            <div className="glass-card p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Contact details</span>
                  <h2 className="mt-2 text-3xl font-bold text-white tracking-tight">Reach out anytime.</h2>
                </div>
                
                <div className="space-y-6 text-sm">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-cyan-400/10 rounded-2xl text-zelvora-primary">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Email</p>
                      <p className="font-semibold text-white mt-1">zelvoratechnologies@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-cyan-400/10 rounded-2xl text-zelvora-primary">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Phone</p>
                      <p className="font-semibold text-white mt-1">+91 91000 40993</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-cyan-400/10 rounded-2xl text-zelvora-primary">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Address</p>
                      <p className="font-semibold text-white mt-1">Telangana, Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Preview Wrapper */}
              <div className="mt-10 h-44 rounded-2xl border border-cyan-300/10 bg-black/35 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,230,208,0.06)_0%,_transparent_75%)]" />
                <div className="text-center space-y-2 relative z-10 p-4">
                  <div className="inline-flex h-2.5 w-2.5 rounded-full bg-zelvora-primary animate-ping" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zelvora-primary font-bold">Hyderabad, IN</p>
                  <p className="text-xs text-slate-400">Engineering hub & operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

