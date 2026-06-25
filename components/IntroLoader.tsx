"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
}

const initializationLogs = [
  "Loading neural pathways...",
  "Fine-tuning transformer weights...",
  "Initializing quantum optimization engine...",
  "Deploying curriculum adaptive agents...",
  "Systems operational. Launching Zelvora OS...",
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Logo fade in quickly
    const logoTimer = setTimeout(() => setShowLogo(true), 200);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 700);
          return 100;
        }
        return prev + 1; // Smooth slower increment
      });
    }, 30);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  useEffect(() => {
    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev < initializationLogs.length - 1 ? prev + 1 : prev));
    }, 700);
    return () => clearInterval(logTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02070a]"
    >
      {/* Visual background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[40%] h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,_rgba(0,230,208,0.06)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-[40%] -right-[40%] h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.06)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,208,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(0,230,208,0.01)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6">
        {/* Holographic Logo & Rings Container */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-12 flex h-52 w-52 items-center justify-center"
            >
              {/* Outer Telemetry Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyan-400/25 opacity-70"
              />

              {/* Inner Telemetry Ring (opposite direction) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-300/15"
                style={{ borderTopColor: "rgba(0, 230, 208, 0.4)", borderRightColor: "rgba(139, 92, 246, 0.3)" }}
              />

              {/* Center Logo Orbit */}
              <motion.div 
                className="relative h-32 w-32 rounded-full bg-black/40 border border-white/5 flex items-center justify-center shadow-[0_0_60px_rgba(0,230,208,0.15)] overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(0,230,208,0.15)',
                    '0 0 70px rgba(0,230,208,0.3)',
                    '0 0 40px rgba(0,230,208,0.15)'
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-3xl bg-black/10">
                  <Image
                    src="/logo.png"
                    alt="Zelvora logo"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                {/* Laser Scanning Line */}
                <motion.div
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#00e6d0]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Progress & Logs */}
        <div className="w-64 space-y-4 text-center">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase">Zelvora</h2>
            <p className="text-[8px] uppercase tracking-[0.15em] text-zelvora-primary">Technologies Pvt. Ltd.</p>
          </div>

          {/* Progress bar */}
          <div className="relative h-1.5 w-full bg-[#07131a] rounded-full overflow-hidden border border-cyan-400/5">
            <motion.div
              className="h-full bg-gradient-to-r from-zelvora-primary via-cyan-400 to-indigo-500 rounded-full"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 8px rgba(0, 230, 208, 0.4)",
              }}
            />
          </div>

          {/* Typewriter logs */}
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={logIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-mono text-cyan-400/70"
              >
                {initializationLogs[logIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="text-sm font-mono text-slate-400 font-semibold tracking-wider">
            {progress}%
          </div>
        </div>
      </div>

      {/* Screen flash transition at 100% */}
      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.25, 0] }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-zelvora-primary/30 z-50 pointer-events-none"
        />
      )}
    </motion.div>
  );
}