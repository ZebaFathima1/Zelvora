import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
}

export default function CourseCard({ title, description, duration, price }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 30px 80px rgba(0,230,208,0.16)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="glass-card p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-zelvora-primary">Course</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <div className="rounded-3xl border border-cyan-300/15 bg-white/5 px-4 py-3 text-sm text-zelvora-secondary">{price}</div>
      </div>
      <p className="mt-6 text-sm leading-7 text-zelvora-secondary">{description}</p>
      <div className="mt-8 flex items-center justify-between text-sm text-zelvora-secondary">
        <span>{duration}</span>
        <button className="rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:bg-white/10 hover:text-zelvora-primary">
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
}
