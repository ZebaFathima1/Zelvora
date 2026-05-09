"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textCycle = ["Analyzing patterns…", "Optimizing model…", "Generating insights…"];

export default function AICorAnimation() {
  const [hovering, setHovering] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textCycle.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distX = (x - centerX) * 0.1;
    const distY = (y - centerY) * 0.1;
    setParallax({ x: distX, y: distY });
  };

  return (
    <div
      className="relative mx-auto flex max-w-xl items-center justify-center"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/5 p-8 shadow-glow backdrop-blur-3xl sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,230,208,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(0,194,184,0.16),_transparent_30%)]" />
        <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-cyan-200/5 to-transparent p-6 shadow-[inset_0_0_80px_rgba(0,230,208,0.08)]">
          <motion.div
            className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle,_rgba(0,230,208,0.18),_transparent_28%)]"
            animate={hovering ? { opacity: [0.4, 0.7, 0.4] } : { opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: hovering ? 1.5 : 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex h-full w-full items-center justify-center">
            {/* Ripple Rings */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`ripple-${index}`}
                className="absolute rounded-full border border-cyan-400/40"
                initial={{ r: 60, opacity: 0.8 }}
                animate={{
                  r: [60, 140],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: hovering ? 1.5 : 2.5,
                  delay: index * 0.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  width: "100px",
                  height: "100px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Neural Network Nodes */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 360) / 6;
              const rad = (angle * Math.PI) / 180;
              const x = 120 * Math.cos(rad);
              const y = 120 * Math.sin(rad);

              return (
                <motion.div
                  key={`node-${i}`}
                  className="absolute h-1.5 w-1.5 rounded-full bg-zelvora-primary"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                />
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute h-full w-full" style={{ pointerEvents: "none" }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E6D0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#009FA6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {[...Array(3)].map((_, i) => {
                const angle1 = (i * 360) / 3;
                const angle2 = ((i + 1) * 360) / 3;
                const rad1 = (angle1 * Math.PI) / 180;
                const rad2 = (angle2 * Math.PI) / 180;
                const x1 = 120 * Math.cos(rad1) + 210;
                const y1 = 120 * Math.sin(rad1) + 210;
                const x2 = 120 * Math.cos(rad2) + 210;
                const y2 = 120 * Math.sin(rad2) + 210;

                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{
                      duration: 2.5,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </svg>

            {/* Data Flow Particles */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const rad = (angle * Math.PI) / 180;
              const startX = 140 * Math.cos(rad);
              const startY = 140 * Math.sin(rad);

              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute h-1 w-1 rounded-full bg-zelvora-primary shadow-glow"
                  initial={{
                    x: startX,
                    y: startY,
                    opacity: 0,
                  }}
                  animate={{
                    x: [startX, 0, -startX * 0.7],
                    y: [startY, 0, -startY * 0.7],
                    opacity: [0, 1, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    filter: "blur(0.5px)",
                  }}
                />
              );
            })}

            {/* Core with Pulse */}
            <motion.div
              className="relative z-10 flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_90px_rgba(0,230,208,0.12)]"
              style={{
                transform: parallax.x !== 0 ? `translate(${parallax.x}px, ${parallax.y}px)` : "none",
              }}
              animate={{
                scale: hovering ? [1.02, 1.08, 1.02] : [1, 1.08, 1],
                boxShadow: hovering
                  ? "0 0 120px rgba(0, 230, 208, 0.4)"
                  : "0 0 90px rgba(0, 230, 208, 0.12)",
              }}
              transition={{
                duration: hovering ? 1.2 : 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="h-28 w-28 rounded-full bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep shadow-[0_0_40px_rgba(0,230,208,0.35)]"
                animate={{
                  boxShadow: hovering
                    ? "0 0 80px rgba(0, 230, 208, 0.6)"
                    : "0 0 40px rgba(0, 230, 208, 0.35)",
                }}
                transition={{
                  duration: hovering ? 1.2 : 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Glassmorphism Card - Text Below */}
            <motion.div
              className="absolute bottom-8 left-6 rounded-3xl border border-cyan-200/10 bg-white/10 px-5 py-3 text-left text-sm text-zelvora-secondary backdrop-blur-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-semibold text-white">Zelvora AI Core</p>
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                {textCycle[textIndex]}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
