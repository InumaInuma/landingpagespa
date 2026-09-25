"use client";

import { useState, useRef } from "react";
import { 
  Syringe, 
  Droplets, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowUpRight,
  UserCheck,
  Stethoscope,
  HeartPulse,
  Clock,
  Layers
} from "lucide-react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transform-style-3d ${className}`}
    >
      {children}
    </div>
  );
}

interface SpecialtiesSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export default function SpecialtiesSection({ onSelectTreatment }: SpecialtiesSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "medica" | "celular">("all");

  const injectableProcedures = [
    {
      name: "Toxina Botulínica (Bótox Estético & Preventivo)",
      tag: "Frente · Entrecejo · Patas de Gallo",
      desc: "Relajación selectiva de musculatura hiperactiva sin perder la naturalidad de tu expresión facial.",
      duration: "30-45 min",
      recovery: "Inmediata",
    },
    {
      name: "Ácido Hialurónico de Reticulación Avanzada",
      tag: "Labios Russian · Relleno de Ojeras · Surcos",
      desc: "Restauración de volúmenes perdidos, perfilado labial sensual y atenuación de sombras de cansancio.",
      duration: "45-60 min",
      recovery: "24-48 horas",
    },
    {
      name: "Armonización Facial & Definición Mandibular",
      tag: "Mentón · Ángulo Goníaco · Pómulos",
      desc: "Esculpido anatómico no quirúrgico con proporciones áureas para un perfil elegante y estilizado.",
      duration: "60 min",
      recovery: "Inmediata",
    },
    {
      name: "Bioestimuladores de Colágeno (Profhilo / Radiesse)",
      tag: "Remodelación de la Matriz Dérmica",
      desc: "Biolifting líquido que reactiva la producción endógena de colágeno y elastina sin volumen artificial.",
      duration: "40 min",
      recovery: "Inmediata",
    },
  ];

  const intravenousProcedures = [
    {
      name: "Sueroterapia Revitalizante Multivitamínica",
      tag: "Cóctel Myers Modificado · Glutatión",
      desc: "Infusión intravenosa rica en electrolitos, vitaminas del complejo B y minerales para energía celular pura.",
      duration: "45-60 min",
      recovery: "Vitalidad inmediata",
    },
    {
      name: "Megadosis de Vitamina C Endovenosa (Passcorbin)",
      tag: "Antioxidante Maestro · Síntesis de Colágeno",
      desc: "Altas concentraciones plasmáticas que no se absorben por vía oral, combatiendo radicales libres y fotoenvejecimiento.",
      duration: "45 min",
      recovery: "Sin reposo",
    },
    {
      name: "Cócteles Antioxidantes & Detox Metabólico",
      tag: "Neutralización de Estrés Oxidativo",
      desc: "Protocolo depurativo hepático y tisular que promueve la luminosidad cutánea desde el interior de la célula.",
      duration: "50 min",
      recovery: "Inmediata",
    },
    {
      name: "Manejo Estéril y Bioseguridad Vascular",
      tag: "Acceso Intravenoso Confortable",
      desc: "Procedimiento indoloro mediante catéteres atraumáticos estériles bajo las más estrictas normas hospitalarias.",
      duration: "Monitoreo continuo",
      recovery: "100% Seguro",
    },
  ];

  return (
    <section id="especialidades" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]">
      {/* Decorative Gold Elements */}
      <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-[#B89326]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A795D]">
              División Clínica de Precisión
            </span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Especialidades Médicas & Bienestar Celular
          </h2>
          
          <p className="text-sm sm:text-base text-[#555] leading-relaxed">
            Una sinergia médica perfecta: contamos con profesionales certificados en armonización inyectable combinada con la maestría vascular en terapia celular.
          </p>
        </div>

        {/* 3D Tilt Cards Grid (2 Columnas Clínicas Claras) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* =========================================================================
              TARJETA 1: ÁREA MÉDICA DE INYECTABLES (Profesionales Especializados)
              ========================================================================= */}
          <TiltCard className="h-full">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_20px_40px_rgba(212,175,55,0.1)] flex flex-col justify-between relative overflow-hidden group hover:border-[#D4AF37] transition-colors duration-300">
              
              {/* Subtle luxury glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1A1A1A] to-[#333] flex items-center justify-center text-[#D4AF37] shadow-md">
                      <Syringe className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#997D21]">
                        Dirección Médica
                      </span>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                        Área Médica de Inyectables
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Professional in Charge */}
                <div className="my-5 p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#8A795D]">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1A1A1A]">Profesionales Especializados</p>
                      <p className="text-[11px] text-[#666]">Equipo Certificado · Alta Precisión Facial</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Certificada
                  </span>
                </div>

                {/* Treatment Procedures List */}
                <div className="space-y-4 my-6">
                  {injectableProcedures.map((proc, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-white/70 border border-black/5 hover:border-[#D4AF37]/40 hover:bg-white transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-[#1A1A1A] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            {proc.name}
                          </p>
                          <p className="text-[11px] font-semibold text-[#8A795D] uppercase tracking-wider">
                            {proc.tag}
                          </p>
                          <p className="text-xs text-[#555] leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] text-[#777]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {proc.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Recup. {proc.recovery}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#D4AF37]/20">
                <button
                  onClick={() => onSelectTreatment("Área Médica de Inyectables (Bótox y Ácido Hialurónico)")}
                  className="w-full btn-gold-luxury py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Valoración de Inyectables</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

            </div>
          </TiltCard>


          {/* =========================================================================
              TARJETA 2: ÁREA DE BIENESTAR CELULAR E INTRAVENOSA (Profesionales Certificados)
              ========================================================================= */}
          <TiltCard className="h-full">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_20px_40px_rgba(212,175,55,0.1)] flex flex-col justify-between relative overflow-hidden group hover:border-[#D4AF37] transition-colors duration-300">
              
              {/* Subtle luxury glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F3E5AB]/25 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8A795D] to-[#D4AF37] flex items-center justify-center text-white shadow-md">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#997D21]">
                        Terapia Endovenosa
                      </span>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                        Área de Bienestar Celular & IV
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Professional in Charge */}
                <div className="my-5 p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#8A795D]">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1A1A1A]">Profesionales Certificados</p>
                      <p className="text-[11px] text-[#666]">Especialistas en Terapia de Infusión y Bioseguridad</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Acreditada
                  </span>
                </div>

                {/* Treatment Procedures List */}
                <div className="space-y-4 my-6">
                  {intravenousProcedures.map((proc, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-white/70 border border-black/5 hover:border-[#D4AF37]/40 hover:bg-white transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-[#1A1A1A] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            {proc.name}
                          </p>
                          <p className="text-[11px] font-semibold text-[#8A795D] uppercase tracking-wider">
                            {proc.tag}
                          </p>
                          <p className="text-xs text-[#555] leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] text-[#777]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {proc.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> {proc.recovery}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#D4AF37]/20">
                <button
                  onClick={() => onSelectTreatment("Área de Bienestar Celular (Sueroterapia y Vitamina C IV)")}
                  className="w-full btn-gold-luxury py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Protocolo de Sueroterapia IV</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
