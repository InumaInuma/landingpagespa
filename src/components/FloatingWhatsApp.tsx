"use client";

import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import Image from "next/image";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-xs sm:w-72 rounded-2xl p-4 bg-white/95 backdrop-blur-xl border border-[#D4AF37]/35 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-start justify-between pb-2 border-b border-black/5">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white border border-[#D4AF37]">
                <Image
                  src="/logo.jpeg"
                  alt="EvyFace"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]">EvyFace Atención Personalizada</p>
                <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  En línea ahora
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#999] hover:text-[#1A1A1A] p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2.5 text-xs text-[#444] leading-relaxed">
            Hola, ¿deseas coordinar tu valoración facial o consultar sobre nuestros tratamientos? Contamos con profesionales listos para atenderte.
          </div>

          <a
            href="https://wa.me/51956488490?text=Hola%20EvyFace,%20deseo%20coordinar%20una%20cita%20con%20sus%20profesionales."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Iniciar Chat en WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <div className="relative group">
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>
      </div>
    </div>
  );
}
