"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import InteractiveParticles from "@/components/InteractiveParticles";
import HeroSection from "@/components/HeroSection";
import PopularTreatments from "@/components/PopularTreatments";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("Valoración Médica Integral");

  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[#F6F3ED] text-[#1A1A1A] overflow-hidden">
      {/* Pantalla de Carga de Bienvenida EvyFace con Precarga de WebP */}
      <Preloader />

      {/* Partículas y Halos Luminosos en el Fondo */}
      <InteractiveParticles />

      {/* 1. Header de Navegación Flotante (Inicio, Tratamientos, Nosotros, Contacto) */}
      <Navbar onOpenBooking={() => handleOpenBooking("Valoración Médica Integral")} />

      {/* 2. Sección de Inicio (Hero con evyspa.webp + 5 Pilares de Confianza Integrados) */}
      <HeroSection onOpenBooking={() => handleOpenBooking("Valoración Médica Integral")} />

      {/* 3. Sección de Tratamientos (Con evydosspa.webp en el fondo a pantalla completa) */}
      <PopularTreatments onSelectTreatment={(treatment) => handleOpenBooking(treatment)} />

      {/* 4. Sección Sobre Nosotros (Clínica de Lujo, Profesionales Certificados y Estadísticas) */}
      <AboutSection onOpenBooking={() => handleOpenBooking("Valoración Médica Integral")} />

      {/* 5. Sección de Contacto & Footer (WhatsApp directo, Instagram @spaevyface, horarios y ubicación) */}
      <Footer onOpenBooking={() => handleOpenBooking("Valoración Médica Integral")} />

      {/* Modal de Agendamiento Personalizado */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatment}
      />

      {/* Botón Flotante de WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
