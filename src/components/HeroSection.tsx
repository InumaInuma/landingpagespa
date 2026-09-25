"use client";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-[#F6F3ED] pt-20 sm:pt-24 lg:pt-0"
    >
      {/* =========================================================================
          FONDO DESKTOP: EVYSPA_OPT.WEBP EN EL LADO DERECHO (SE APRECIA EN PANTALLAS GRANDES)
          ========================================================================= */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[68%] xl:w-[72%] h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/evyspa_opt.webp"
          alt="EvyFace · Armonización Facial y Rejuvenecimiento Celular"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[center_right] select-none pointer-events-none"
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />

        {/* Fusión suave únicamente en el extremo izquierdo para no opacar el video */}
        <div className="absolute inset-y-0 left-0 w-24 xl:w-44 bg-gradient-to-r from-[#F6F3ED] to-transparent" />
      </div>

      {/* =========================================================================
          CONTENIDO EDITORIAL (RESPONSIVO PARA CELULARES Y COMPUTADORAS)
          En celular el video se luce nítido y completo sin recortes ni textos encima
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full z-10 py-8 sm:py-12 lg:py-0">
        <div className="max-w-xl lg:max-w-lg space-y-4 sm:space-y-6 text-left">
          
          {/* Eyebrow / Categoría Superior */}
          <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7A65] font-semibold">
            ATENCIÓN PROFESIONAL · RESULTADOS NATURALES
          </p>

          {/* Titular Editorial en Serif Grande */}
          <div className="space-y-1">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[4.2rem] font-light tracking-tight text-[#2B2621] uppercase leading-[1.02] sm:leading-[0.98]">
              Tu Mejor <br />
              Versión, <br />
              <span className="font-normal italic">Refinada.</span>
            </h1>
          </div>

          {/* =====================================================================
              VIDEOPLAYER DESTACADO EN CELULARES (100% NÍTIDO, SIN RECORTES NI TEXTOS ENCIMA)
              ===================================================================== */}
          <div className="block lg:hidden relative w-full aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/35 my-4 bg-stone-900">
            <img
              src="/evyspa_opt.webp"
              alt="EvyFace · Armonización Facial y Rejuvenecimiento Celular"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <span className="font-medium tracking-wide">Armonización Facial &amp; Celular</span>
              <span className="text-[#F3E5AB] font-bold">EvyFace</span>
            </div>
          </div>

          {/* Línea Divisoria Sutil */}
          <div className="w-12 h-[1.5px] bg-[#B0977B]" />

          {/* Párrafo Descriptivo Breve y Elegante */}
          <p className="text-xs sm:text-base text-[#5C544B] leading-relaxed font-light max-w-md">
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

      {/* =========================================================================
          SELLO MONOGRAMA CIRCULAR EN LA ESQUINA INFERIOR DERECHA (EN DESKTOP)
          ========================================================================= */}
      <div className="hidden lg:flex absolute bottom-8 right-12 w-28 h-28 rounded-full border border-white/70 backdrop-blur-[2px] flex-col items-center justify-center text-white/90 text-center select-none pointer-events-none z-10 shadow-sm">
        <span className="text-[7.5px] tracking-[0.28em] uppercase font-light text-white/80">
          SCIENTIFIC CARE
        </span>
        <span className="font-editorial text-3xl font-light my-[-3px] text-white">
          EF
        </span>
        <span className="text-[7.5px] tracking-[0.28em] uppercase font-light text-white/80">
          NATURAL BEAUTY
        </span>
      </div>

    </section>
  );
}
