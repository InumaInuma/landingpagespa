"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Iniciar precarga del WebP correspondiente en memoria del navegador
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const img1 = new window.Image();
      img1.src = isMobile ? "/evyspa_mobile.webp" : "/evyspa_opt.webp";

      const img2 = new window.Image();
      img2.src = isMobile ? "/evydosspa_mobile.webp" : "/evydosspa.webp";
    }

    // Progreso suave y de lujo de 0 a 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              setIsVisible(false);
            }, 600); // Duración del fade out
          }, 200);
          return 100;
        }
        // Incremento orgánico
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF9F6] transition-opacity duration-600 ease-out select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-xs text-center space-y-6 px-6">
        
        {/* Logo con Medalla Circular Dorada y Pulso Sutil */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 to-[#F3E5AB]/40 blur-md animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#B89326] shadow-xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/icon.png"
                alt="EvyFace Logo"
                width={80}
                height={80}
                className="w-14 h-14 object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Nombre de Marca & Tipografía Editorial */}
        <div className="space-y-1.5">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-widest text-[#1A1A1A] uppercase">
            EvyFace
          </h2>
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#997D21] uppercase">
            Centro Terapéutico &amp; Estético
          </p>
        </div>

        {/* Barra de Carga Fina y Elegante */}
        <div className="w-48 sm:w-56 space-y-2">
          <div className="w-full h-[2.5px] bg-[#E8E2D8] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#997D21] rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[9px] text-[#8C7A65] font-medium tracking-wider uppercase">
            <span>Preparando experiencia</span>
            <span>{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
