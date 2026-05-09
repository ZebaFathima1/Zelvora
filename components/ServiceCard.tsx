import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="glass-card p-8"
    >
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-3xl shadow-glow">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zelvora-secondary">{description}</p>
    </motion.div>
  );
}
