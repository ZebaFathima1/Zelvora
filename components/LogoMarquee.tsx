"use client";

import { SiOpenai, SiGoogle, SiPytorch, SiNextdotjs, SiReact, SiTailwindcss, SiPython, SiHuggingface, SiTypescript, SiVercel } from "react-icons/si";

const techItems = [
  { name: "OpenAI", icon: SiOpenai, color: "text-white" },
  { name: "Google Gemini", icon: SiGoogle, color: "text-blue-400" },
  { name: "PyTorch", icon: SiPytorch, color: "text-orange-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
];

export default function LogoMarquee() {
  // Duplicate list to create a seamless looping effect
  const marqueeItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-[#040b0e]/40 border-y border-cyan-300/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zelvora-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zelvora-bg to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee gap-6">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 rounded-full border border-cyan-300/10 bg-[#061014]/60 px-6 py-3.5 backdrop-blur-md shadow-lg"
            >
              <Icon className={`text-xl ${item.color}`} />
              <span className="text-sm font-semibold tracking-wide text-white">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
