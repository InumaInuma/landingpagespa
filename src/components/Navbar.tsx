"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Tratamientos", href: "#tratamientos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/85 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
          : "py-4 sm:py-5 bg-white/60 backdrop-blur-md border-b border-white/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identidad de Marca */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#997D21] shadow-xs transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/logo.jpeg"
                  alt="EvyFace Logo Oficial"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-editorial text-lg sm:text-2xl font-bold tracking-wider text-[#1A1A1A] group-hover:text-[#997D21] transition-colors leading-none">
                EVYFACE
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-[#8A795D] uppercase mt-0.5">
                Centro Terapéutico & Estético
              </span>
            </div>
          </Link>

          {/* Enlaces de Navegación Limpios */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-[#444] hover:text-[#B89326] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botones de Acción */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#tratamientos"
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full border border-[#D4AF37]/50 text-[#1A1A1A] bg-white/70 hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Tratamientos</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-gold-luxury text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Agendar Valoración</span>
            </button>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[#1A1A1A] text-white border border-[#D4AF37]/50 flex items-center gap-1"
            >
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              <span>Cita</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A1A1A] hover:bg-black/5 transition-colors"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Cajón de Navegación Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 px-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-[#D4AF37]/30 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-black/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-gold-luxury text-center text-xs uppercase tracking-wider font-semibold py-2.5 rounded-xl shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Agendar Valoración Médica</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
