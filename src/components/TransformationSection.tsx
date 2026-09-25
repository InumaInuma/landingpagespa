"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Droplet, 
  Dna, 
  SunMedium, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function TransformationSection() {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [skinState, setSkinState] = useState<"before" | "after">("after");

  const phases = [
    {
      step: "01",
      title: "Micro-Infusión Vascular & Dermo-Penetración",
      subtitle: "Biodisponibilidad 100% Inmediata",
      icon: Droplet,
      desc: "Mientras la microcánula deposita con precisión milimétrica el ácido hialurónico en los vectores anatómicos deficitarios, la vía endovenosa infunde una megadosis de Vitamina C y antioxidantes que satura el plasma sanguíneo, alcanzando el lecho capilar dérmico en minutos.",
      cellularEvent: "La gota de suero penetra la barrera intercelular sin pérdida gastrointestinal ni oxidación previa.",
      metric: "100% Absorción Celular",
    },
    {
      step: "02",
      title: "Estimulación Fibroblástica & Neo-Colagénesis",
      subtitle: "Reactivación del Motor Celular",
      icon: Dna,
      desc: "La combinación de ácido ascórbico a nivel molecular actúa como cofactor indispensable para las enzimas prolil y lisil hidroxilasa, detonando la síntesis acelerada de nuevas fibras de colágeno Tipo I y III y reestructurando la red de elastina perdida.",
      cellularEvent: "El fibroblasto maduro cuadruplica su producción de colágeno nativo y retiene hasta 1000 veces su peso en agua.",
      metric: "+380% Síntesis de Colágeno",
    },
    {
      step: "03",
      title: "Metamorfosis & Resplandor Perla Clínico",
      subtitle: "Restauración de Turgencia y Armonía",
      icon: SunMedium,
      desc: "La piel experimenta una transformación radical visible: las líneas de tensión se relajan con naturalidad, los volúmenes faciales recuperan su ángulo de juventud y el rostro emite un brillo terso y translúcido de salud profunda.",
      cellularEvent: "Piel redensificada, libre de estrés oxidativo y con arquitectura celular optimizada.",
      metric: "+92% Luminosidad Inmediata",
    },
  ];

  return (
    <section id="transformacion" className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF9F6]">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#F3E5AB]/15 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-sm">
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A795D]">
              Fisiología Médica Avanzada
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            El Concepto: Metamorfosis Celular
          </h2>

          <p className="text-sm sm:text-base text-[#555] leading-relaxed">
            Descubre cómo la gota de suero rica en nutrientes bio-idénticos y la técnica médica de inyectables devuelven luminosidad, tersura e hidratación inmediata a la piel madura.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const isSelected = activePhase === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#1A1A1A] text-white shadow-lg border border-[#D4AF37]"
                    : "bg-white/80 text-[#555] hover:bg-white hover:text-[#1A1A1A] border border-[#D4AF37]/25"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isSelected ? "bg-[#D4AF37] text-[#1A1A1A]" : "bg-black/5 text-[#888]"
                }`}>
                  {phase.step}
                </span>
                <span>{phase.title.split("&")[0]}</span>
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#D4AF37]" : "text-[#999]"}`} />
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card */}
        <div className="mt-10 rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/80 backdrop-blur-2xl border border-[#D4AF37]/35 shadow-[0_25px_50px_rgba(212,175,55,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#D4AF37]/30 text-[#997D21] text-xs font-semibold">
                <span>Fase {phases[activePhase].step}</span>
                <span>•</span>
                <span>{phases[activePhase].subtitle}</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                {phases[activePhase].title}
              </h3>

              <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                {phases[activePhase].desc}
              </p>

              {/* Event highlight box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border-l-4 border-[#D4AF37] border-y border-r border-[#D4AF37]/25 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#997D21]">
                  Mecanismo Molecular Subdérmico
                </p>
                <p className="text-xs sm:text-sm text-[#333]">
                  {phases[activePhase].cellularEvent}
                </p>
              </div>

              {/* Key Clinical Metric */}
              <div className="flex items-center gap-4 pt-2">
                <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#1A1A1A] to-[#2E2E2E] text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold">{phases[activePhase].metric}</span>
                </div>
                <span className="text-xs text-[#777]">Comprobado por ecografía dérmica y biomarcadores</span>
              </div>
            </div>

            {/* Right Interactive Cellular Simulator Visualizer */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-3xl p-6 bg-gradient-to-b from-[#FAF9F6] to-white border border-[#D4AF37]/30 shadow-xl space-y-5">
                
                {/* Visualizer Toggle */}
                <div className="flex items-center justify-between bg-black/5 p-1 rounded-2xl">
                  <button
                    onClick={() => setSkinState("before")}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                      skinState === "before"
                        ? "bg-white text-[#1A1A1A] shadow-sm"
                        : "text-[#777] hover:text-[#1A1A1A]"
                    }`}
                  >
                    Estrés Dérmico Inicial
                  </button>
                  <button
                    onClick={() => setSkinState("after")}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                      skinState === "after"
                        ? "bg-[#1A1A1A] text-white shadow-sm"
                        : "text-[#777] hover:text-[#1A1A1A]"
                    }`}
                  >
                    Piel Metamorfoseada ✨
                  </button>
                </div>

                {/* State Simulation Box */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 text-center transition-all duration-500">
                  {skinState === "before" ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="w-20 h-20 mx-auto rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-stone-500">
                        <Dna className="w-10 h-10 opacity-60" />
                      </div>
                      <div>
                        <p className="font-editorial text-lg font-bold text-[#333]">Estrés Oxidativo Tisular</p>
                        <p className="text-xs text-[#777] mt-1">Fibras de colágeno desorganizadas, pérdida de ácido hialurónico y tono opaco por radicales libres.</p>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-stone-600 bg-stone-100 p-2.5 rounded-xl text-left">
                        <p>• Hidratación intracelular: 38%</p>
                        <p>• Firmeza elástica: Reducida</p>
                        <p>• Líneas de expresión: Visibles</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-[#1A1A1A] animate-pulse">
                        <Sparkles className="w-10 h-10" />
                      </div>
                      <div>
                        <p className="font-editorial text-lg font-bold text-[#1A1A1A]">Piel Radiante EvyFace</p>
                        <p className="text-xs text-[#8A795D] mt-1">Matriz extracelular redensificada, micro-arrugas atenuadas y bioluminiscencia celular activa.</p>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-amber-900 bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-left">
                        <p className="font-semibold text-[#997D21]">✓ Hidratación profunda: 98%</p>
                        <p className="font-semibold text-[#997D21]">✓ Elasticidad y turgencia: Restaurada</p>
                        <p className="font-semibold text-[#997D21]">✓ Tono y resplandor: Cristal perla</p>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-center text-[#888]">
                  Efecto sinérgico continuo acumulativo tras protocolo personalizado.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* Three Result Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/70 border border-[#D4AF37]/25 shadow-sm space-y-2">
            <span className="font-editorial text-3xl font-bold text-[#B89326]">87%</span>
            <h4 className="text-sm font-bold text-[#1A1A1A]">Mayor Tersura y Firmeza</h4>
            <p className="text-xs text-[#666]">
              Atenuación anatómica inmediata de arrugas perioculares, entrecejo y surcos con Toxina Botulínica y Ácido Hialurónico.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-[#D4AF37]/25 shadow-sm space-y-2">
            <span className="font-editorial text-3xl font-bold text-[#B89326]">99%</span>
            <h4 className="text-sm font-bold text-[#1A1A1A]">Neutralización de Radicales</h4>
            <p className="text-xs text-[#666]">
              La megadosis de Vitamina C endovenosa erradica el daño oxidativo celular acumulado por sol, contaminación y estrés.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-[#D4AF37]/25 shadow-sm space-y-2">
            <span className="font-editorial text-3xl font-bold text-[#B89326]">100%</span>
            <h4 className="text-sm font-bold text-[#1A1A1A]">Seguridad Médica Verificada</h4>
            <p className="text-xs text-[#666]">
              Administración protocolizada por profesionales certificados con esterilidad quirúrgica.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
