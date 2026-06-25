"use client";

export default function LogoAnimation() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center rounded-[2rem] overflow-hidden border border-cyan-300/10 bg-[#020709]/60 shadow-[0_0_50px_rgba(0,230,208,0.05)]">
      <video
        src="/zelvora-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Subtle futuristic overlay to blend video edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020709]/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
