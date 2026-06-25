"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { text: "pip install zelvora-ai", type: "input" },
  { text: "import zelvora", type: "input" },
  { text: "model = zelvora.models.load('curriculum-adaptive-v4')", type: "input" },
  { text: "[Zelvora-AI] Initializing deep learning model...", type: "output" },
  { text: "[Zelvora-AI] Loading transformer weights (80B parameters)...", type: "output" },
  { text: "[Zelvora-AI] Fine-tuning on student performance data...", type: "output" },
  { text: "[Zelvora-AI] Training Epoch 1/5 | loss: 0.428 | acc: 89.2%", type: "output" },
  { text: "[Zelvora-AI] Training Epoch 2/5 | loss: 0.281 | acc: 94.7%", type: "output" },
  { text: "[Zelvora-AI] Training Epoch 3/5 | loss: 0.154 | acc: 97.9%", type: "output" },
  { text: "[Zelvora-AI] Training Epoch 4/5 | loss: 0.089 | acc: 99.1%", type: "output" },
  { text: "[Zelvora-AI] Training Epoch 5/5 | loss: 0.042 | acc: 99.8%", type: "output" },
  { text: "[Zelvora-AI] Optimization complete. Model exported to production.", type: "output" },
  { text: "model.deploy(environment='production')", type: "input" },
  { text: "[Zelvora-AI] Status: ONLINE. Ready to serve student API requests.", type: "success" },
];

export default function CodeTerminal() {
  const [lines, setLines] = useState<typeof terminalLines>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= terminalLines.length) {
      const timer = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(timer);
    }

    const interval = setTimeout(
      () => {
        setLines((prev) => [...prev, terminalLines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      },
      terminalLines[currentIndex].type === "input" ? 1000 : 500
    );

    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-cyan-300/15 bg-black/80 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0c1417] border-b border-cyan-300/10">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-slate-500 font-sans tracking-wide text-[10px] uppercase">zelvora-terminal.sh</div>
        <div className="w-10" />
      </div>
      
      {/* Console lines */}
      <div className="p-5 space-y-2 h-[260px] overflow-y-auto scrollbar-none select-none">
        {lines.map((line, idx) => (
          <div key={idx} className="flex gap-2 items-start leading-5">
            {line.type === "input" && <span className="text-zelvora-primary">❯</span>}
            <span
              className={
                line.type === "input"
                  ? "text-slate-100 font-medium"
                  : line.type === "success"
                  ? "text-emerald-400 font-semibold"
                  : "text-cyan-400/80"
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        {currentIndex < terminalLines.length && (
          <span className="inline-block h-4 w-2 bg-zelvora-primary animate-pulse" />
        )}
      </div>
    </div>
  );
}
