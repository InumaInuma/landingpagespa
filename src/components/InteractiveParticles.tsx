"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  pulseSpeed: number;
  pulseAngle: number;
}

export default function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    // En dispositivos móviles no se ejecuta el canvas de partículas continuo
    // para reservar el 100% de memoria y GPU del celular a la reproducción fluida de los WebP
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas || window.innerWidth < 768) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let particles: Particle[] = [];
    const colors = [
      "rgba(212, 175, 55, ", // Gold
      "rgba(243, 229, 171, ", // Light Gold
      "rgba(218, 165, 32, ", // Goldenrod
      "rgba(200, 180, 140, ", // Champagne
    ];

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 18000), 75);
      particles = [];
      for (let i = 0; i < count; i++) {
        const baseRadius = Math.random() * 2.2 + 0.8;
        const baseAlpha = Math.random() * 0.45 + 0.15;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: baseRadius,
          baseRadius,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - 0.1, // subtle upward drift
          alpha: baseAlpha,
          baseAlpha,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseAngle: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle luminous background orbs
      const time = Date.now() * 0.0006;
      const orbX1 = width * 0.25 + Math.sin(time) * 60;
      const orbY1 = height * 0.35 + Math.cos(time * 0.8) * 50;
      const orbGrad1 = ctx.createRadialGradient(orbX1, orbY1, 20, orbX1, orbY1, 380);
      orbGrad1.addColorStop(0, "rgba(212, 175, 55, 0.07)");
      orbGrad1.addColorStop(1, "rgba(212, 175, 55, 0)");
      ctx.fillStyle = orbGrad1;
      ctx.beginPath();
      ctx.arc(orbX1, orbY1, 380, 0, Math.PI * 2);
      ctx.fill();

      const orbX2 = width * 0.75 + Math.cos(time * 0.9) * 70;
      const orbY2 = height * 0.65 + Math.sin(time * 0.7) * 60;
      const orbGrad2 = ctx.createRadialGradient(orbX2, orbY2, 30, orbX2, orbY2, 420);
      orbGrad2.addColorStop(0, "rgba(243, 229, 171, 0.06)");
      orbGrad2.addColorStop(1, "rgba(243, 229, 171, 0)");
      ctx.fillStyle = orbGrad2;
      ctx.beginPath();
      ctx.arc(orbX2, orbY2, 420, 0, Math.PI * 2);
      ctx.fill();

      // Render gold particles
      const mouse = mouseRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulse alpha
        p.pulseAngle += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.12;

        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            p.x -= (dx / dist) * force * 1.8;
            p.y -= (dy / dist) * force * 1.8;
            p.radius = p.baseRadius * (1 + force * 0.8);
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.2, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.05, p.alpha)})`;
        ctx.shadowColor = "rgba(212, 175, 55, 0.45)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
}
