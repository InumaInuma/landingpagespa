"use client";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-[#F6F3ED]"
    >
      {/* =========================================================================
          FONDO PRINCIPAL: EVYSPA.WEBP EN EL LADO DERECHO (ESTILO FOTO DE REFERENCIA)
          Se aprecia el video en su esplendor natural, fundido limpiamente en el fondo
          ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] xl:w-[72%] h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/evyspa.webp"
          alt="EvyFace · Armonización Facial y Rejuvenecimiento Celular"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[center_right] lg:object-right select-none pointer-events-none"
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />

        {/* Fusión suave únicamente en el extremo izquierdo para no opacar el video */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 lg:w-44 bg-gradient-to-r from-[#F6F3ED] to-transparent" />
      </div>

      {/* =========================================================================
          CONTENIDO EDITORIAL IZQUIERDO (EXACTO A LA FOTO DE REFERENCIA)
          Limpio, tipografía de alta costura, sin recarga ni saturación visual
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 pt-24 pb-16 lg:py-0">
        <div className="max-w-xl lg:max-w-lg space-y-6 text-left">
          
          {/* Eyebrow / Categoría Superior */}
          <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#8C7A65] font-medium">
            ATENCIÓN MÉDICA · RESULTADOS NATURALES
          </p>

          {/* Titular Editorial en Serif Grande */}
          <div className="space-y-1">
            <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[4.2rem] font-light tracking-tight text-[#2B2621] uppercase leading-[0.98]">
              Tu Mejor <br />
              Versión, <br />
              <span className="font-normal italic">Refinada.</span>
            </h1>
          </div>

          {/* Línea Divisoria Sutil (Como en la foto) */}
          <div className="w-12 h-[1.5px] bg-[#B0977B]" />

          {/* Párrafo Descriptivo Breve y Elegante */}
          <p className="text-sm sm:text-base text-[#5C544B] leading-relaxed font-light max-w-md">
            Tratamientos médicos personalizados de armonización facial con Toxina Botulínica, Ácido Hialurónico y Sueroterapia celular, diseñados para revelar tu belleza natural y devolver la luminosidad a tu piel.
          </p>

          {/* Botón de Acción Satinado (Idéntico al botón de la foto) */}
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-md bg-[#B49E82] hover:bg-[#A38C6E] text-white text-xs uppercase tracking-[0.2em] font-medium shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              Agendar una Valoración
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SELLO MONOGRAMA CIRCULAR EN LA ESQUINA INFERIOR DERECHA (COMO EN LA FOTO)
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
