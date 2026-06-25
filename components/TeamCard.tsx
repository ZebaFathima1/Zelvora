"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [6, -6]);
  const rotateY = useTransform(x, [-150, 150], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="glass-card p-8 flex flex-col items-center text-center group h-full"
    >
      {/* Glow Orbit Avatar Container */}
      <div 
        className="mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-zelvora-primary/20 via-cyan-400/5 to-indigo-500/20 border border-cyan-300/20 p-2 shadow-glow transition-transform duration-500 group-hover:scale-105"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="relative h-full w-full rounded-full bg-[#050e12] border border-cyan-300/10 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <span className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zelvora-primary via-cyan-300 to-indigo-400 select-none">
              {name.charAt(0)}
            </span>
          )}
          
          {/* Subtle scanning reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>

      <div className="space-y-2" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-xl font-bold text-white group-hover:text-zelvora-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm font-semibold uppercase tracking-wider text-zelvora-primary/80">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

