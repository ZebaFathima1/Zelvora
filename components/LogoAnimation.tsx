"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoAnimation() {
  const [videoExists, setVideoExists] = useState(false);

  useEffect(() => {
    // Check if the logo animation video exists in public directory
    const checkVideo = async () => {
      try {
        const res = await fetch("/logo-animation.mp4", { method: "HEAD" });
        if (res.ok) {
          setVideoExists(true);
        } else {
          // Try alternative naming
          const resAlt = await fetch("/logo_animation.mp4", { method: "HEAD" });
          if (resAlt.ok) {
            setVideoExists(true);
          }
        }
      } catch (err) {
        setVideoExists(false);
      }
    };
    checkVideo();
  }, []);

  if (videoExists) {
    return (
      <div className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center rounded-full overflow-hidden border border-cyan-300/10 bg-black/40 shadow-glow shadow-cyan-500/5">
        <video
          src="/logo-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if load fails
            (e.target as HTMLVideoElement).src = "/logo_animation.mp4";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Gorgeous futuristic fallback animation using CSS + Framer Motion
  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Outer rotating telemetry circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-cyan-400/20"
      />

      {/* Middle rotating telemetry circle (counter-rotate) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-double border-indigo-500/15"
      />

      {/* Inner glowing ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-20 rounded-full border border-cyan-300/30 bg-[radial-gradient(circle,_rgba(0,230,208,0.04)_0%,_transparent_70%)] shadow-[0_0_40px_rgba(0,230,208,0.08)]"
      />

      {/* Futuristic Orbit Nodes */}
      {[0, 120, 240].map((angle, idx) => (
        <motion.div
          key={idx}
          animate={{ rotate: 360 }}
          transition={{ duration: 12 + idx * 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 pointer-events-none"
        >
          <div 
            className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-glow shadow-cyan-400/80"
            style={{
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />
        </motion.div>
      ))}

      {/* Central Holographic Logo Wrapper */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-32 w-32 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-indigo-500/10 to-transparent p-0.5 border border-cyan-300/25 shadow-glow shadow-cyan-400/15 flex items-center justify-center"
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep flex items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Zelvora Logo" 
            fill 
            priority 
            sizes="112px" 
            className="object-cover scale-105"
          />
        </div>
      </motion.div>

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,230,208,0.05)_0%,_transparent_75%)] blur-3xl pointer-events-none" />
    </div>
  );
}
