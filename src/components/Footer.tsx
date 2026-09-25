"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart,
  Calendar,
  Sparkles,
  ArrowUp
} from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative bg-[#141414] text-white pt-20 pb-12 overflow-hidden border-t border-[#D4AF37]/30 scroll-mt-16">
      {/* Decorative Gold Accent Gradients */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call to Action Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1c1c1c] via-[#242424] to-[#1c1c1c] border border-[#D4AF37]/40 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Tu Mejor Versión Comienza Aquí
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ¿Lista para transformar tu piel con respaldo médico?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              Agenda tu valoración personalizada con nuestro equipo de profesionales y descubre el protocolo diseñado a la medida de tu fisionomía. Contamos con profesionales certificados para cuidar de tu piel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto btn-gold-luxury px-7 py-4 rounded-full text-xs uppercase tracking-wider font-semibold shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Agendar Valoración</span>
            </button>
            <a
              href="https://wa.me/51999999999?text=Hola%20EvyFace,%20quiero%20agendar%20una%20cita%20con%20sus%20profesionales."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#997D21]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/logo.jpeg"
                    alt="EvyFace"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-editorial text-2xl font-bold tracking-wider text-white">
                  EVYFACE
                </span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                  Centro Terapéutico & Estético
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Excelencia médica, armonización facial sutil y terapia celular endovenosa en un ambiente de confort y discreción absoluta.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/spaevyface"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] flex items-center justify-center text-white transition-all border border-white/10 hover:scale-110"
                aria-label="Instagram EvyFace"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-all border border-white/10 hover:scale-110"
                aria-label="WhatsApp EvyFace"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <span className="text-xs text-stone-300 ml-1">@spaevyface</span>
            </div>
          </div>

          {/* Quick Specialties Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Protocolos Clínicos
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300 font-light">
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>•</span> Toxina Botulínica (Bótox Estético)
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>•</span> Ácido Hialurónico de Labios & Ojeras
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>•</span> Armonización Facial No Quirúrgica
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>•</span> Bioestimuladores de Colágeno (Profhilo)
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>•</span> Sueroterapia Revitalizante Myers
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span>•</span> Megadosis de Vitamina C Endovenosa
                </a>
              </li>
            </ul>
          </div>

          {/* Center Location & Hours (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Horarios & Ubicación
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sede Principal EvyFace</p>
                  <p className="text-stone-300 text-xs">Distrito Médico y Financiero de Alta Gama, Lima - Perú</p>
                  <p className="text-stone-400 text-[11px] mt-0.5">Estacionamiento privado y acceso con estricta discreción</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horarios de Atención Médica</p>
                  <p className="text-stone-300 text-xs">Lunes a Viernes: 9:00 AM – 7:00 PM</p>
                  <p className="text-stone-300 text-xs">Sábados: 9:00 AM – 3:00 PM (Previa Cita)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Central de Citas</p>
                  <p className="text-stone-300 text-xs">+51 999 999 999 · Atención Asistencial</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} EvyFace · Centro Terapéutico y Estético. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              Bioseguridad & Confidencialidad Médica
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-white transition-all cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
