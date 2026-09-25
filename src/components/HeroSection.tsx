"use client";

import { Stethoscope, ShieldCheck, UserCheck, Sparkles, Heart } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const pillars = [
    {
      icon: Stethoscope,
      title: "PROFESIONALES CERTIFICADOS",
      desc: "Equipo especializado en inyectables y armonización facial",
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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#F6F3ED] pt-24 sm:pt-28 lg:pt-32"
    >
      {/* =========================================================================
          FONDO INMERSIVO: EVYSPA_OPT.WEBP EN EL FONDO DE LA SECCIÓN
          - Ocupa el ancho completo (w-full inset-0) para eliminar cualquier raya o corte recto.
          - En Web: Difuminado / sombreado suave y gradual (feathered) entre el texto y el video.
          - En Móvil: Zoom alejado en la parte superior, dejando el rostro despejado.
          ========================================================================= */}
      <div className="absolute top-0 right-0 left-0 w-full h-[52vh] sm:h-[60vh] lg:h-full z-0 overflow-hidden pointer-events-none bg-[#ECE6DD]">
        {/* WebP responsivo: Versión móvil optimizada (3.5MB) en celular para eliminar tirones y versión desktop (10MB) en PC */}
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet="/evyspa_mobile.webp" type="image/webp" />
          <source media="(min-width: 769px)" srcSet="/evyspa_opt.webp" type="image/webp" />
          <img
            src="/evyspa_opt.webp"
            alt="EvyFace · Armonización Facial y Rejuvenecimiento Celular"
            loading="eager"
            decoding="async"
            className="relative w-full h-full object-cover object-[78%_18%] lg:object-[center_right] select-none pointer-events-none"
          />
        </picture>

        {/* Gradiente en Móvil: Transición suave hacia abajo sin tapar ni nublar el rostro */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-[#F6F3ED]/15 to-[#F6F3ED] pointer-events-none" />

        {/* Gradiente en Desktop: Sombreado difuminado ultra suave (sin cortes ni rayas rectas) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#F6F3ED] from-15% via-[#F6F3ED]/75 via-35% to-transparent to-58% pointer-events-none" />

        {/* Fusión hacia la barra inferior de pilares */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F6F3ED] to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          CONTENIDO EDITORIAL (CON ESPACIADO ELEGANTE Y LEGIBILIDAD ÓPTIMA)
          En móvil: mt-[26vh] sm:mt-[30vh] baja el contenido hacia el Círculo 2 para
          dejar el rostro completamente libre y despejado en el Círculo 1.
          En desktop: lg:mt-0 lg:my-auto mantiene el centrado vertical perfecto a la izquierda.
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 pt-2 pb-6 sm:pb-8 lg:py-10 mt-[26vh] sm:mt-[30vh] lg:mt-0 lg:my-auto">
        <div className="max-w-xl lg:max-w-lg space-y-3.5 sm:space-y-6 text-left">

          {/* Eyebrow / Categoría Superior */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#8C7A65] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase shadow-xs">
            <span>ATENCIÓN PROFESIONAL · RESULTADOS NATURALES</span>
          </div>

          {/* Titular Editorial en Serif Grande */}
          <div className="space-y-1">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[4.2rem] font-light tracking-tight text-[#2B2621] uppercase leading-[1.02] sm:leading-[0.98]">
              Tu Mejor <br />
              Versión, <br />
              <span className="font-normal italic">Refinada.</span>
            </h1>
          </div>

          {/* Línea Divisoria Sutil */}
          <div className="w-12 h-[1.5px] bg-[#B0977B]" />

          {/* Párrafo Descriptivo Breve y Elegante */}
          <p className="text-xs sm:text-base text-[#4A423A] leading-relaxed font-normal max-w-md">
            Tratamientos personalizados de armonización facial con Toxina Botulínica, Ácido Hialurónico y Sueroterapia celular. Contamos con profesionales certificados para devolver la luminosidad y vitalidad natural a tu rostro.
          </p>

          {/* Botón de Acción Satinado */}
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md bg-[#B49E82] hover:bg-[#A38C6E] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer text-center"
            >
              Agendar una Valoración
            </button>
          </div>

        </div>
      </div>

      {/* Monograma EF en Desktop (Ubicado en la parte superior derecha) */}
      <div className="hidden lg:flex absolute top-32 right-12 w-28 h-28 rounded-full border border-white/70 bg-black/15 backdrop-blur-[2px] flex-col items-center justify-center text-white text-center select-none pointer-events-none z-10 shadow-sm">
        <span className="text-[7.5px] tracking-[0.28em] uppercase font-light text-white/90">
          SCIENTIFIC CARE
        </span>
        <span className="font-editorial text-3xl font-light my-[-3px] text-white">
          EF
        </span>
        <span className="text-[7.5px] tracking-[0.28em] uppercase font-light text-white/90">
          NATURAL BEAUTY
        </span>
      </div>

      {/* =========================================================================
          LOS 5 PILARES DE CONFIANZA INTEGRADOS EN LA BASE DE LA SECCIÓN DE INICIO
          ========================================================================= */}
      <div className="relative z-10 w-full border-t border-[#D4AF37]/25 bg-white/80 backdrop-blur-md py-6 sm:py-7 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-start">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isLastOnMobile = index === 4;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 sm:gap-3.5 text-left group ${isLastOnMobile ? "col-span-2 md:col-span-1" : ""}`}
                >
                  {/* Icono con trazo fino dorado */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-xs flex-shrink-0 flex items-center justify-center text-[#B89326] group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                  </div>

                  {/* Textos */}
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[#1A1A1A] leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-[11px] text-[#6A665E] leading-normal font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
