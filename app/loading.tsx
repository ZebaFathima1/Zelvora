import Image from "next/image";

export default function Loading() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-zelvora-bg text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20 rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-glow backdrop-blur-xl animate-pulse">
          <div className="absolute inset-1 rounded-full border border-cyan-200/20" />
        </div>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-zelvora-secondary">Loading Zelvora</p>
          <p className="mt-2 text-xl font-semibold">Preparing your AI experience...</p>
        </div>
      </div>
    </main>
  );
}
