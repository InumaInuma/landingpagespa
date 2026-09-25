"use client";

import { memo } from "react";
import { Syringe, Droplets, Sparkles, Clock, ArrowRight, Sparkle, ShieldCheck } from "lucide-react";

// Fondo de Video a Pantalla Completa para Pantallas Grandes (Desktop)
const FullscreenTreatmentsBackground = memo(function FullscreenTreatmentsBackground() {
  return (
    <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src="/evydosspa.webp"
        alt="EvyFace Protocolos de Tratamiento"
        loading="eager"
        decoding="sync"
        className="w-full h-full object-cover object-[center_right] select-none pointer-events-none opacity-100"
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      />
      {/* Fusión suave a la izquierda para garantizar legibilidad impecable sin tapar el video */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F6F3ED] via-[#F6F3ED]/90 lg:via-[#F6F3ED]/55 to-transparent lg:w-[65%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F3ED]/30 via-transparent to-[#F6F3ED]/40" />
    </div>
  );
});

interface PopularTreatmentsProps {
  onSelectTreatment: (name: string) => void;
}

export default function PopularTreatments({ onSelectTreatment }: PopularTreatmentsProps) {
  // Los 4 pilares de servicios de EvyFace directamente visibles sin necesidad de filtros ni clics
  const coreServices = [
    {
      id: "botox",
      name: "Toxina Botulínica (Bótox)",
      subtitle: "Frente · Entrecejo · Patas de Gallo",
      specialist: "Profesionales Especializados",
      desc: "Relaja las líneas dinámicas de expresión de forma sutil, manteniendo la expresividad viva y natural de tu rostro.",
      duration: "30-45 min",
      tag: "Arrugas Dinámicas",
      icon: Syringe,
    },
    {
      id: "hialuronico",
      name: "Ácido Hialurónico",
      subtitle: "Labios · Ojeras · Surcos Nasogenianos",
      specialist: "Profesionales Especializados",
      desc: "Hidratación profunda, perfilado y restauración de volúmenes anatómicos perdidos con geles biocompatibles de alta gama.",
      duration: "45-60 min",
      tag: "Perfilado & Volumen",
      icon: Sparkles,
    },
    {
      id: "faciales",
      name: "Faciales Médicos & Hydrafacial",
      subtitle: "Detox Dérmico · Extracción Aséptica",
      specialist: "Profesionales Especializados",
      desc: "Exfoliación no invasiva, infusión de sueros antioxidantes y limpieza celular profunda para un brillo inmediato.",
      duration: "60 min",
      tag: "Luminosidad Tisular",
      icon: Sparkle,
    },
    {
      id: "vitamina-c",
      name: "Sueroterapia de Vitamina C",
      subtitle: "Megadosis Endovenosa · Nutrición IV",
      specialist: "Profesionales Especializados",
      desc: "Infusión intravenosa directa con 100% de biodisponibilidad que estimula la producción de colágeno y combate la fatiga.",
      duration: "45 min",
      tag: "Antioxidante Celular",
      icon: Droplets,
    },
  ];

  return (
    <section 
      id="tratamientos" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-28 flex items-center overflow-hidden bg-[#F6F3ED] border-t border-[#D4AF37]/25 scroll-mt-16"
    >
      {/* =========================================================================
          FONDO A PANTALLA COMPLETA EN DESKTOP: EVYDOSSPA.WEBP TOMA TODA LA SECCIÓN
          ========================================================================= */}
      <FullscreenTreatmentsBackground />

      {/* =========================================================================
          CONTENIDO EDITORIAL & SERVICIOS DIRECTOS (SIN CLICS DE FILTRO)
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Cabecera de Sección */}
        <div className="max-w-xl text-left space-y-3 mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/45 text-[#8A795D] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Medicina Estética &amp; Nutrición Celular</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
            Nuestros Tratamientos <br />
            <span className="italic font-normal text-[#9E8345]">Médicos &amp; Estéticos</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#4E4A44] leading-relaxed font-normal">
            En <strong className="text-[#1A1A1A] font-semibold">EvyFace</strong> contamos con profesionales altamente capacitados y certificados en armonización facial, inyectables de precisión, faciales clínicos y sueroterapia endovenosa.
          </p>
        </div>

        {/* =====================================================================
            VIDEOPLAYER DESTACADO EN CELULARES: EVYDOSSPA.WEBP 100% NÍTIDO Y VISIBLE
            ===================================================================== */}
        <div className="block lg:hidden relative w-full aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 mb-8 bg-stone-900">
          <img
            src="/evydosspa.webp"
            alt="EvyFace Procedimientos Clínicos y Estéticos"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <span className="font-medium tracking-wide">Protocolos en Vivo &amp; Resultados</span>
            <span className="text-[#F3E5AB] font-bold">EvyFace</span>
          </div>
        </div>

        {/* Grilla Directa de los 4 Servicios Principales (Adaptada a Celulares) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl p-6 bg-white/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-md hover:shadow-2xl hover:border-[#D4AF37] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Badge & Icono */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F6F3ED] text-[#8A795D] border border-[#D4AF37]/35">
                      {service.tag}
                    </span>
                    <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#FAF8F3] to-white border border-[#D4AF37]/35 flex items-center justify-center text-[#B89326] shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Títulos */}
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#1A1A1A] group-hover:text-[#9E8345] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#8A795D] mt-0.5">
                      {service.subtitle}
                    </p>
                    <p className="text-[10px] text-stone-500 font-medium">
                      {service.specialist}
                    </p>
                  </div>

                  {/* Descripción técnica breve */}
                  <p className="text-xs text-[#555] leading-relaxed pt-1">
                    {service.desc}
                  </p>
                </div>

                {/* Footer de Tarjeta con Tiempo y Botón */}
                <div className="pt-4 mt-5 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#777] flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {service.duration}
                  </span>
                  
                  <button
                    onClick={() => onSelectTreatment(service.name)}
                    className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#9E8345] flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
