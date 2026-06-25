"use client";

import { useEffect, useRef, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Arc3D {
  start: Point3D;
  end: Point3D;
  progress: number;
  speed: number;
}

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.5, y: 0.5 });
  const targetRotation = useRef({ x: 0.5, y: 0.5 });
  const autoSpin = useRef(true);

  // Generate globe grid points
  const points = useRef<Point3D[]>([]);
  if (points.current.length === 0) {
    const count = 280;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      points.current.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      });
    }
  }

  // Generate random connecting arcs (global data paths)
  const arcs = useRef<Arc3D[]>([]);
  if (arcs.current.length === 0) {
    for (let i = 0; i < 6; i++) {
      const p1 = points.current[Math.floor(Math.random() * points.current.length)];
      const p2 = points.current[Math.floor(Math.random() * points.current.length)];
      arcs.current.push({
        start: p1,
        end: p2,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
      });
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    autoSpin.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    targetRotation.current.y += dx * 0.005;
    targetRotation.current.x += dy * 0.005;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-spin after 3 seconds of inactivity
    setTimeout(() => {
      if (!isDragging) {
        autoSpin.current = true;
      }
    }, 3000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const size = Math.min(rect?.width || 400, rect?.height || 400);
      canvas.width = size * window.devicePixelRatio;
      canvas.height = size * window.devicePixelRatio;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const radius = width * 0.42;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Smooth rotation interpolation
      rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.15;
      rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.15;

      if (autoSpin.current) {
        targetRotation.current.y += 0.0015;
      }

      const cosX = Math.cos(rotation.current.x);
      const sinX = Math.sin(rotation.current.x);
      const cosY = Math.cos(rotation.current.y);
      const sinY = Math.sin(rotation.current.y);

      // Render glow behind globe
      const ambientGlow = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.3);
      ambientGlow.addColorStop(0, "rgba(0, 230, 208, 0.02)");
      ambientGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      ambientGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Render back points (z < 0) first to handle depth
      const projectedPoints = points.current.map((p) => {
        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;
        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        return {
          px: cx + x1 * radius,
          py: cy + y2 * radius,
          depth: z2,
        };
      });

      // Sort points for proper z-indexing draw order
      const sortedPointsIndices = [...Array(projectedPoints.length)]
        .map((_, i) => i)
        .sort((a, b) => projectedPoints[a].depth - projectedPoints[b].depth);

      // Draw globe structure
      sortedPointsIndices.forEach((idx) => {
        const { px, py, depth } = projectedPoints[idx];
        const isFront = depth > 0;
        
        // Fading dots depending on front/back depth
        const opacity = isFront ? 0.3 + (depth * 0.5) : 0.08 + (depth + 1) * 0.15;
        const size = isFront ? 1.5 + depth * 1.5 : 0.8;
        
        ctx.fillStyle = isFront ? `rgba(0, 230, 208, ${opacity})` : `rgba(148, 163, 184, ${opacity})`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();

        // Highlight key coordinate spots (hubs) with larger glows
        if (idx % 25 === 0 && isFront) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = "#00E6D0";
          ctx.fillStyle = `rgba(0, 230, 208, ${opacity * 1.2})`;
          ctx.beginPath();
          ctx.arc(px, py, size * 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // Draw connection arcs
      arcs.current.forEach((arc) => {
        // Rotate Y
        const rx1 = arc.start.x * cosY - arc.start.z * sinY;
        const rz1 = arc.start.x * sinY + arc.start.z * cosY;
        const ry1 = arc.start.y * cosX - rz1 * sinX;
        const rdepth1 = arc.start.y * sinX + rz1 * cosX;

        const rx2 = arc.end.x * cosY - arc.end.z * sinY;
        const rz2 = arc.end.x * sinY + arc.end.z * cosY;
        const ry2 = arc.end.y * cosX - rz2 * sinX;
        const rdepth2 = arc.end.y * sinX + rz2 * cosX;

        // Render line only if at least one endpoint is partially on the front hemisphere
        if (rdepth1 > -0.2 || rdepth2 > -0.2) {
          const x1 = cx + rx1 * radius;
          const y1 = cy + ry1 * radius;
          const x2 = cx + rx2 * radius;
          const y2 = cy + ry2 * radius;

          // Midpoint of arc (pull it outward to look like a curved flight/data arc)
          const mx = (x1 + x2) / 2 + (rdepth1 + rdepth2) * 0.1 * radius;
          const my = (y1 + y2) / 2 - Math.abs(x1 - x2) * 0.15; // arch height

          // Draw the static connecting arc path
          ctx.strokeStyle = `rgba(0, 230, 208, ${Math.max(rdepth1, rdepth2) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.quadraticCurveTo(mx, my, x2, y2);
          ctx.stroke();

          // Draw active glowing packet traversing the path
          arc.progress += arc.speed;
          if (arc.progress > 1) {
            arc.progress = 0;
          }

          // Calculate point on quadratic curve
          const t = arc.progress;
          const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * mx + t * t * x2;
          const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * my + t * t * y2;

          ctx.shadowBlur = 10;
          ctx.shadowColor = "#8B5CF6";
          ctx.fillStyle = "rgba(139, 92, 246, 0.9)";
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center cursor-grab active:cursor-grabbing w-full aspect-square max-w-[480px] mx-auto select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <canvas ref={canvasRef} className="relative z-10" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(0,230,208,0.03)_0%,_transparent_70%)] blur-2xl pointer-events-none" />
    </div>
  );
}
