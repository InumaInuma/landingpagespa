"use client";

import Image from "next/image";
import { Award, Users, ShieldCheck, Star, Sparkles, ArrowRight, Heart } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Años de Trayectoria",
      sub: "Experiencia médica estética",
    },
    {
      icon: Users,
      value: "+3,500",
      label: "Pacientes Satisfechas",
      sub: "Resultados naturales comprobados",
    },
    {
      icon: Sparkles,
      value: "100%",
      label: "Viales Sellados",
      sub: "Abiertos frente a ti",
    },
    {
      icon: Star,
      value: "5.0 ★",
      label: "Satisfacción Clínica",
      sub: "Calificación de excelencia",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Profesionales Certificados",
      sub: "Equipo altamente calificado",
    },
  ];

  return (
    <section id="nosotros" className="relative bg-[#1A1A1A] text-white overflow-hidden scroll-mt-16">

      {/* Upper About Grid (Exactamente como en la referencia LUXE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            {/* Logo Oficial EvyFace */}
            <div className="flex items-center gap-4 pb-2">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#997D21] shadow-xl flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/logo.jpeg"
                    alt="EvyFace Logo Oficial"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-0.5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Sello Médico Oficial
                </span>
                <p className="font-editorial text-2xl font-bold tracking-wider text-white">
                  EVYFACE
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-stone-400">
                  Centro Terapéutico & Estético
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-editorial text-lg italic text-[#D4AF37]">
                Bienvenida a EvyFace
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
                Sobre Nuestro Centro
              </h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mt-3" />
            </div>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              En <strong className="text-white font-medium">EvyFace · Centro Terapéutico y Estético</strong> combinamos la ciencia médica más rigurosa con la hospitalidad de un santuario de ultra-lujo. Creemos que la verdadera armonización facial no transforma tus rasgos, sino que restablece la luminosidad, la tonicidad muscular y la plenitud celular perdida con el paso del tiempo.
            </p>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Nuestras pacientes cuentan con la tranquilidad de ser atendidas de forma personalizada: <strong className="text-[#F3E5AB]">contamos con profesionales</strong> altamente capacitados y certificados en armonización facial, inyectables de precisión, faciales clínicos y sueroterapia endovenosa, garantizando la máxima bioseguridad y resultados naturales.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-transparent hover:bg-white text-white hover:text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold border border-[#D4AF37] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Conocer Más y Agendar Cita</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Image: logoevyspa.jpeg */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 group bg-[#111]">
              <Image
                src="/logoevyspa.jpeg"
                alt="EvyFace Armonización Facial y Estética"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-xs text-stone-200 flex items-center justify-between">
                <span className="font-semibold text-white">EvyFace Centro Terapéutico</span>
                <span className="text-[#D4AF37]">Resultados Naturales & Profesionales</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Counter Bar (Inspirado en la barra verde oscura de LUXE) */}
      <div className="bg-[#121B17] border-t border-[#D4AF37]/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-1 px-2">
                  <div className="flex items-center justify-center text-[#D4AF37] mb-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
