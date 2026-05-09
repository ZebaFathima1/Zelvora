"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  angle: number;
}

const navItems: NavItem[] = [
  { label: "About", href: "/about", angle: 0 },
  { label: "Services", href: "/services", angle: 60 },
  { label: "Courses", href: "/courses", angle: 120 },
  { label: "Workshops", href: "/events", angle: 180 },
  { label: "Team", href: "/team", angle: 240 },
  { label: "Contact", href: "/contact", angle: 300 },
];

interface CircularNavigationProps {
  onNavigate?: (href: string) => void;
}

export default function CircularNavigation({ onNavigate }: CircularNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const radius = 200; // Distance from center to nav items

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-zelvora-bg overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L50 100 M0 50 L100 50" stroke="rgba(0,230,208,0.1)" strokeWidth="1"/>
              <circle cx="50" cy="50" r="2" fill="rgba(0,230,208,0.2)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)"/>
        </svg>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0
            }}
            animate={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className="absolute h-1 w-1 rounded-full bg-zelvora-primary/20"
          />
        ))}

        {/* Gradient glow waves */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-zelvora-primary/10 to-transparent blur-3xl"
        />
      </div>

      {/* Central Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20"
      >
        <div className="relative">
          <motion.h1
            animate={{
              textShadow: [
                '0 0 20px rgba(0,230,208,0.3)',
                '0 0 40px rgba(0,230,208,0.6)',
                '0 0 20px rgba(0,230,208,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl font-bold text-zelvora-primary font-mono"
          >
            ZELVORA
          </motion.h1>
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(0,230,208,0.2)',
                '0 0 60px rgba(0,230,208,0.4)',
                '0 0 30px rgba(0,230,208,0.2)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-lg"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-2 text-center text-sm text-zelvora-secondary"
        >
          Technologies Pvt. Ltd.
        </motion.p>
      </motion.div>

      {/* Navigation Nodes */}
      {navItems.map((item, index) => {
        const angle = (item.angle * Math.PI) / 180;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={item.label}
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x,
              y,
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 1 + index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="absolute z-10"
            onHoverStart={() => setHoveredItem(item.label)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              className="absolute left-1/2 top-1/2 h-0.5 w-full origin-left bg-gradient-to-r from-zelvora-primary/50 to-transparent"
              style={{
                transform: `rotate(${item.angle}deg)`,
                transformOrigin: '0 50%'
              }}
            />

            {/* Navigation Button */}
            <Link href={item.href} onClick={() => onNavigate?.(item.href)}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}
                animate={hoveredItem === item.label ? {
                  boxShadow: '0 0 30px rgba(0,230,208,0.6)'
                } : {
                  boxShadow: '0 0 15px rgba(0,230,208,0.3)'
                }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-zelvora-section/80 backdrop-blur-md border border-zelvora-primary/30 cursor-pointer group"
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zelvora-primary/10 to-transparent" />

                {/* Glow ring */}
                <motion.div
                  animate={hoveredItem === item.label ? {
                    scale: 1.2,
                    opacity: 1
                  } : {
                    scale: 1,
                    opacity: 0.5
                  }}
                  className="absolute inset-0 rounded-full border-2 border-zelvora-primary/50"
                />

                {/* Text */}
                <span className="relative z-10 text-xs font-medium text-zelvora-text group-hover:text-zelvora-primary transition-colors">
                  {item.label}
                </span>

                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="absolute inset-0 rounded-full"
                />
              </motion.div>
            </Link>
          </motion.div>
        );
      })}

      {/* Rotating rings behind logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-32 w-32 rounded-full border border-zelvora-primary/20" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-40 w-40 rounded-full border border-zelvora-primary/30" />
      </motion.div>
    </div>
  );
}