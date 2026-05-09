"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Logo fade in after 1 second
    const logoTimer = setTimeout(() => setShowLogo(true), 1000);

    // Loading starts after logo appears
    const loadingTimer = setTimeout(() => setShowLoading(true), 2000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Flash effect and transition
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2; // Smooth increment
      });
    }, 50);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(loadingTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zelvora-bg"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,230,208,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,230,208,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute h-1 w-1 rounded-full bg-zelvora-primary/30"
          />
        ))}
      </div>

      {/* Logo */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 mb-12 flex flex-col items-center"
          >
            <motion.div
              className="relative rounded-full border-2 border-zelvora-primary/40 bg-gradient-to-br from-zelvora-contrast/80 to-zelvora-contrast/40 p-5 shadow-[0_0_80px_rgba(0,230,208,0.25)]"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(0,230,208,0.3)',
                  '0 0 60px rgba(0,230,208,0.6)',
                  '0 0 30px rgba(0,230,208,0.3)'
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-zelvora-primary/20 opacity-50"
              />
              <Image
                src="/logo.png"
                alt="Zelvora logo"
                width={140}
                height={140}
                className="rounded-full relative z-10 shadow-[0_0_20px_rgba(0,230,208,0.4)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-5 text-center text-lg font-semibold text-zelvora-primary"
            >
              Zelvora Technologies
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="text-center text-sm text-zelvora-secondary"
            >
              Pvt. Ltd.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Section */}
      <AnimatePresence>
        {showLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Progress Bar */}
            <div className="relative w-80 h-2 bg-zelvora-contrast rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-zelvora-primary to-zelvora-primaryMid rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(0,230,208,0.5)'
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              {/* Animated energy lines */}
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-zelvora-primary/50 to-transparent"
              />
            </div>

            {/* Percentage */}
            <motion.div
              key={progress}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-mono text-zelvora-primary"
              style={{ textShadow: '0 0 15px rgba(0,230,208,0.5)' }}
            >
              {progress}%
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-zelvora-secondary font-mono"
            >
              Initializing AI Systems...
            </motion.p>

            {/* Sound wave effect */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [8, 24, 8],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  className="w-1 bg-zelvora-primary rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flash effect at 100% */}
      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-zelvora-primary/20"
        />
      )}
    </motion.div>
  );
}