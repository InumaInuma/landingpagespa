"use client";

import { useState, useEffect } from "react";
import { X, Calendar, User, Phone, CheckCircle2, MessageCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialTreatment = "Valoración Médica Integral",
}: AppointmentModalProps) {
  const treatmentsList = [
    "Valoración Médica Integral",
    "Toxina Botulínica (Bótox)",
    "Ácido Hialurónico (Labios, Ojeras, Surcos)",
    "Faciales Médicos & Hydrafacial",
    "Sueroterapia de Vitamina C",
    "Armonización Facial Completa",
  ];

  const [treatment, setTreatment] = useState(initialTreatment);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Mañana (9:00 AM - 1:00 PM)");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initialTreatment) {
      const match = treatmentsList.find(
        (t) =>
          t.toLowerCase().includes(initialTreatment.toLowerCase()) ||
          initialTreatment.toLowerCase().includes(t.toLowerCase())
      );
      setTreatment(match || initialTreatment || treatmentsList[0]);
    }
  }, [initialTreatment, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.trim();
    const patientName = name.trim() || "Paciente";

    const message = encodeURIComponent(
      `🌟 *Solicitud de Cita Médica - EvyFace*\n\n` +
      `👤 *Nombre:* ${patientName}\n` +
      `📞 *Teléfono:* ${cleanPhone || "No especificado"}\n` +
      `💉 *Tratamiento de Interés:* ${treatment}\n` +
      `📅 *Fecha Tentativa:* ${preferredDate || "Lo antes posible"}\n` +
      `⏰ *Horario Preferido:* ${preferredTime}\n` +
      (notes.trim() ? `📝 *Observaciones:* ${notes.trim()}\n\n` : `\n`) +
      `Agradezco la atención del equipo de profesionales de EvyFace para confirmar disponibilidad.`
    );

    // Enlace oficial de WhatsApp de EvyFace: +51 956 488 490
    const waUrl = `https://wa.me/51956488490?text=${message}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/40 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B89326]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-black/5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#997D21]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Atención Privada & Confidencial</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Agendar Valoración Médica
            </h3>
            <p className="text-xs text-[#666]">
              Coordinación directa con la asistente médica de EvyFace.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#777] hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto space-y-4 py-4 pr-1">
          {/* Treatment Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Tratamiento de Interés
            </label>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-[#FAF9F6] text-base sm:text-sm font-medium focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A1A1A]"
            >
              {treatmentsList.map((item, idx) => (
                <option key={idx} value={item} className="text-[#1A1A1A]">
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                Nombre Completo
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Carolina Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-[#FAF9F6] text-base sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+51 987 654 321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-[#FAF9F6] text-base sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              />
            </div>
          </div>

          {/* Date & Time Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Fecha Preferida
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-[#FAF9F6] text-base sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                Franja Horaria
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-[#FAF9F6] text-base sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A1A1A]"
              >
                <option value="Mañana (9:00 AM - 1:00 PM)">Mañana (9:00 AM - 1:00 PM)</option>
                <option value="Tarde (2:00 PM - 5:00 PM)">Tarde (2:00 PM - 5:00 PM)</option>
                <option value="Final del día (5:00 PM - 7:00 PM)">Final del día (5:00 PM - 7:00 PM)</option>
                <option value="Sábado Especial (9:00 AM - 3:00 PM)">Sábado Especial (9:00 AM - 3:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              Motivo de Consulta o Consulta Especial (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Deseo evaluar armonización de labios y consulta sobre sueroterapia para cansancio."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-[#FAF9F6] text-base sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
            />
          </div>

          {/* Medical Guarantee Callout */}
          <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center gap-2.5 text-xs text-[#735A1A]">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <span>Valoración personalizada directa con profesionales certificados sin compromiso.</span>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full btn-gold-luxury py-3.5 px-6 rounded-2xl text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enviar Cita Directa por WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
