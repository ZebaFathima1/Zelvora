"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatsStripProps {
  stats: { label: string; value: number }[];
}

export default function StatsStrip({ stats }: StatsStripProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    let animationFrame: number;
    const isAnimating = { current: false } as { current: boolean };

    const animateCounts = () => {
      setCounts((prev) => {
        const next = prev.map((current, index) => {
          const target = stats[index].value;
          const increment = Math.max(1, Math.ceil(target / 60));
          return current < target ? Math.min(current + increment, target) : target;
        });
        const hasMore = next.some((count, index) => count < stats[index].value);
        if (hasMore) {
          animationFrame = requestAnimationFrame(animateCounts);
        }
        return next;
      });
    };

    const handleScroll = () => {
      const section = document.getElementById("impact-strip");
      if (!section || isAnimating.current) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        isAnimating.current = true;
        setCounts(stats.map(() => 0));
        animateCounts();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [stats]);

  return (
    <section id="impact-strip" className="section-blur mx-auto mb-20 max-w-[1320px] px-6 py-12 sm:px-10 lg:px-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[2rem] border border-cyan-300/10 bg-white/5 p-8 text-center"
          >
            <p className="text-5xl font-semibold text-white">{counts[index]}{stat.label === "Students Impacted" ? "+" : ""}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.35em] text-zelvora-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
