"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Translate mouse coordinate relative offset into tilt degrees
  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

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
      className="glass-card p-8 flex flex-col justify-between h-full group"
    >
      <div>
        {/* Animated Icon Glow */}
        <div
          className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-3xl shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-cyan-400/20"
          style={{ transform: "translateZ(30px)" }}
        >
          {icon}
        </div>
        <h3
          className="text-2xl font-semibold text-white group-hover:text-zelvora-primary transition-colors duration-300"
          style={{ transform: "translateZ(20px)" }}
        >
          {title}
        </h3>
        <p
          className="mt-4 text-sm leading-7 text-zelvora-secondary"
          style={{ transform: "translateZ(15px)" }}
        >
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-end animate-pulse-slow" style={{ transform: "translateZ(25px)" }}>
        <span className="flex items-center justify-center rounded-full bg-white/5 border border-cyan-300/10 p-3 text-white transition-all duration-300 group-hover:bg-zelvora-primary group-hover:text-zelvora-bg group-hover:border-cyan-300">
          <FaArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.div>
  );
}

