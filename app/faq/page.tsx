"use client";

import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";

const faqs = [
  {
    question: "What services does Zelvora Technologies offer?",
    answer:
      "We offer AI models for students, custom technology solutions, immersive AI workshops, and software development for education and enterprise needs.",
  },
  {
    question: "Can I join the courses without any prior AI experience?",
    answer:
      "Yes. Our beginner-friendly courses are designed for learners with no prior AI background and help you build practical skills step by step.",
  },
  {
    question: "How can I book a workshop or training session?",
    answer:
      "You can book workshops by using the Contact page or sending us an email. Our team will follow up with available schedules and custom options.",
  },
  {
    question: "Do you provide support after course completion?",
    answer:
      "Absolutely — we offer post-course guidance, mentoring, and help with portfolio projects to support your AI journey.",
  },
  {
    question: "Where can I find your contact details?",
    answer:
      "You can reach us at zelvoratechnologies@gmail.com or call +91 91000 40993. We also have a Contact page for direct inquiries.",
  },
];

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <Navbar />
      <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">FAQ</p>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">Frequently Asked Questions</h1>
            <p className="text-lg leading-8 text-zelvora-secondary">
              Get quick answers to common questions about Zelvora Technologies, our AI courses, workshops, and support.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-3xl border border-cyan-300/15 bg-white/5 p-8 shadow-[0_0_40px_rgba(0,230,208,0.08)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Question</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{faq.question}</h2>
                <p className="mt-4 text-sm leading-7 text-zelvora-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
