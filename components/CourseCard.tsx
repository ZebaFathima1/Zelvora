"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { FaClock, FaBookOpen } from "react-icons/fa";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
}

export default function CourseCard({ title, description, duration, price }: CourseCardProps) {
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
      className="glass-card p-8 flex flex-col justify-between h-full group"
    >
      <div style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-zelvora-primary tracking-wider uppercase border border-cyan-400/10">
              <FaBookOpen size={10} /> Course
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-zelvora-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="rounded-2xl border border-cyan-300/15 bg-[#07131a] px-4 py-2.5 text-lg font-bold text-white shadow-glow">
            {price}
          </div>
        </div>
        <p className="mt-6 text-sm leading-7 text-zelvora-secondary">
          {description}
        </p>
      </div>

      <div
        className="mt-8 flex items-center justify-between border-t border-cyan-300/10 pt-6"
        style={{ transform: "translateZ(30px)" }}
      >
        <span className="flex items-center gap-2 text-xs font-medium text-zelvora-secondary">
          <FaClock className="text-zelvora-primary animate-pulse" /> {duration}
        </span>
        <button className="rounded-full bg-gradient-to-r from-zelvora-primary/10 to-transparent border border-cyan-300/25 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-zelvora-primary hover:to-zelvora-primaryDeep hover:text-zelvora-bg hover:shadow-glow">
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
}

