import { motion } from "framer-motion";

const particleStyles = "absolute rounded-full bg-zelvora-primary/15 blur-xl mix-blend-screen";

export default function BackgroundParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-16 h-40 w-40 rounded-full bg-zelvora-primary/10 blur-3xl"
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 24, 0], y: [0, -26, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 top-40 h-24 w-24 rounded-full bg-zelvora-primaryMid/10 blur-3xl"
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [-12, 26, -12], y: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/4 h-32 w-32 rounded-full bg-zelvora-primaryDeep/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] bottom-10 h-48 w-48 rounded-full bg-zelvora-primary/12 blur-3xl"
      />
    </div>
  );
}
