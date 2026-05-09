"use client";

import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="glass-card p-8 flex flex-col items-center text-center"
    >
      <div className="mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-zelvora-primary to-zelvora-primaryDeep shadow-glow overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span className="text-6xl">{name.charAt(0)}</span>
        )}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-zelvora-secondary">{role}</p>
      </div>
    </motion.div>
  );
}
