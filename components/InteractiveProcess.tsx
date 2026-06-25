"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaComments, FaSitemap, FaCpu, FaCloudUploadAlt } from "react-icons/fa";

const steps = [
  {
    title: "1. Consultation",
    desc: "We analyze your enterprise workflows, student requirements, or startup project ideas.",
    icon: FaComments,
    color: "from-cyan-400 to-teal-400",
  },
  {
    title: "2. Architecture Design",
    desc: "Our engineering team structures custom database schemas and scalable model architectures.",
    icon: FaSitemap,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "3. Training & Tuning",
    desc: "We train transformer networks or integrate custom LLM fine-tuning pipelines.",
    icon: FaCpu,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "4. Scale & Deploy",
    desc: "Bespoke software applications are launched into secure cloud systems with API integrations.",
    icon: FaCloudUploadAlt,
    color: "from-emerald-400 to-cyan-400",
  },
];

export default function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-12">
      <div className="grid gap-6 md:grid-cols-4 relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-zelvora-primary/10 via-cyan-400/20 to-indigo-500/10 -translate-y-1/2 hidden md:block z-0" />
        
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;

          return (
            <div
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`glass-card p-6 rounded-3xl cursor-pointer transition-all duration-500 relative z-10 select-none ${
                isActive
                  ? "border-cyan-300/40 bg-[#07161c] shadow-[0_15px_40px_rgba(0,230,208,0.15)] scale-[1.03]"
                  : "border-cyan-300/5 hover:border-cyan-300/20 bg-white/5"
              }`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${
                  step.color
                } text-zelvora-bg text-xl font-bold shadow-md transition-transform duration-500 ${
                  isActive ? "rotate-12 scale-110" : ""
                }`}
              >
                <Icon />
              </div>
              <h3 className={`text-lg font-semibold transition ${isActive ? "text-zelvora-primary" : "text-white"}`}>
                {step.title}
              </h3>
              <p className="mt-2.5 text-xs leading-5 text-zelvora-secondary">{step.desc}</p>
              
              {isActive && (
                <motion.div
                  layoutId="activeBorder"
                  className="absolute inset-0 rounded-3xl border border-cyan-300/40 pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
