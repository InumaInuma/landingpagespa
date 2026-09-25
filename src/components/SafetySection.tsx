"use client";

import { ShieldCheck, Award, Lock, FileCheck, Stethoscope, Sparkles } from "lucide-react";

export default function SafetySection() {
  const safetyPoints = [
    {
      icon: Lock,
      title: "Viales Abiertos en Tu Presencia",
      desc: "Garantía de originalidad absoluta. Verificamos juntos el lote, fecha de caducidad y sello holográfico de seguridad antes de cada inyección.",
    },
    {
      icon: Stethoscope,
      title: "Responsabilidad Profesional Exclusiva",
      desc: "Todos los inyectables son aplicados estrictamente por profesionales certificados, garantizando conocimiento profundo de anatomía facial vascular.",
    },
    {
      icon: ShieldCheck,
      title: "Cateterismo e Infusión Estéril",
      desc: "La terapia de sueros IV es administrada por profesionales capacitados con técnica aséptica no traumática y monitoreo de signos vitales.",
    },
    {
      icon: FileCheck,
      title: "Trazabilidad & Historia Clínica",
      desc: "Seguimiento fotográfico de alta resolución y registro computarizado de unidades y mililitros exactos administrados.",
    },
  ];

  return (
    <section id="bioseguridad" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-tr from-[#1A1A1A] via-[#222222] to-[#171717] text-white shadow-2xl relative overflow-hidden border border-[#D4AF37]/35">
          {/* Ambient Gold Glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#997D21]/20 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Estándar Clínico Internacional</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Bioseguridad de Grado Quirúrgico & Ética Médica
              </h3>

              <p className="text-sm text-stone-300 leading-relaxed font-light">
                En <span className="text-[#F3E5AB] font-medium">EvyFace</span> no realizamos tratamientos estéticos masivos. Cada rostro es evaluado como una obra anatómica única bajo los más estrictos protocolos de seguridad médica, esterilidad hospitalaria y conservación de cadena de frío.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300">
                  ✓ Registro Sanitario Vigente
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300">
                  ✓ Material Monouso Descartable
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300">
                  ✓ Instalaciones Desinfectadas Grado Médico
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {safetyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.08] transition-all duration-300 space-y-2 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-[#1A1A1A] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
