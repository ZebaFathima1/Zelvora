"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import NeuralNetwork from "../../components/NeuralNetwork";
import CursorSpotlight from "../../components/CursorSpotlight";
import ChatbotButton from "../../components/ChatbotButton";
import { FaChevronDown } from "react-icons/fa";

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
      "You can reach us at info@zelvoratech.com. We also have a Contact page for direct inquiries.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-zelvora-bg text-white">
      <ScrollProgress />
      <NeuralNetwork />
      <CursorSpotlight />
      <ChatbotButton />
      <Navbar />

      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-16 text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-zelvora-primary font-bold">Faq</span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-zelvora-secondary max-w-xl mx-auto">
              Get quick answers to common questions about Zelvora Technologies, our AI courses, workshops, and support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`glass-card rounded-3xl border transition-all duration-300 ${
                    isOpen ? "border-cyan-300/30 bg-[#07161c]" : "border-cyan-300/5"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none"
                  >
                    <span className="text-lg sm:text-xl font-bold text-white transition-colors duration-300 hover:text-zelvora-primary">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      size={14}
                      className={`text-zelvora-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-sm leading-7 text-zelvora-secondary border-t border-cyan-300/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

