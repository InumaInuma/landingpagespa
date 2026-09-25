"use client";

import { Stethoscope, ShieldCheck, UserCheck, Sparkles, Heart } from "lucide-react";

export default function TrustBar() {
  const pillars = [
    {
      icon: Stethoscope,
      title: "MÉDICAS ESPECIALISTAS",
      desc: "Dirección colegiada en inyectables y vía endovenosa",
    },
    {
      icon: ShieldCheck,
      title: "TECNOLOGÍA & BIOSEGURIDAD",
      desc: "Viales 100% sellados abiertos en tu presencia",
    },
    {
      icon: UserCheck,
      title: "TRATAMIENTO PERSONALIZADO",
      desc: "Evaluación anatómica a la medida de tu rostro",
    },
    {
      icon: Sparkles,
      title: "RESULTADOS NATURALES",
      desc: "Realza tu belleza respetando tu mímica facial",
    },
    {
      icon: Heart,
      title: "CONFORT & ATENCIÓN ÉLITE",
      desc: "Tu bienestar, privacidad y seguridad son prioridad",
    },
  ];

  return (
    <section className="relative py-10 sm:py-12 bg-[#FAF8F4] border-y border-[#D4AF37]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-3 sm:gap-3.5 text-left group"
              >
                {/* Icono con trazo fino dorado / oro cálido */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-xs flex-shrink-0 flex items-center justify-center text-[#B89326] group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Textos */}
                <div className="space-y-0.5">
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#1A1A1A] leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#6A665E] leading-normal font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
