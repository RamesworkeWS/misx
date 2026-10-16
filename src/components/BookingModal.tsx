import React from 'react';
import { X, ArrowUpRight, Calendar, User, Check, Scissors } from 'lucide-react';
import { PLANITY_BOOKING_URL, SERVICE_CATEGORIES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'fr' | 'en';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const content = {
    fr: {
      title: "Prendre Rendez-vous",
      subtitle: "Réservation officielle en ligne sur le profil Planity certifié de MISX.",
      step1: "1. Choisissez votre catégorie ou prestation",
      step2: "2. Sélectionnez votre artisan coiffeur référent",
      step3: "3. Confirmez votre créneau en direct sans paiement d'avance",
      directBtn: "Accéder au planning en direct sur Planity",
      notice: "Vous serez redirigé vers l'agenda officiel Planity du 64 rue Jean-Pierre Timbaud, 75011 Paris.",
      close: "Fermer"
    },
    en: {
      title: "Book an Appointment",
      subtitle: "Official online reservation through the certified Planity profile of MISX.",
      step1: "1. Choose your service category",
      step2: "2. Select your preferred resident stylist",
      step3: "3. Instant real-time confirmation with no upfront payment",
      directBtn: "Open live calendar on Planity",
      notice: "You will be redirected to the official Planity calendar for 64 rue Jean-Pierre Timbaud, 75011 Paris.",
      close: "Close"
    }
  }[currentLang];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-[#282521]/80 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#F5F0E8] rounded-xs shadow-2xl p-6 sm:p-8 border border-[#282521]/20 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#282521] hover:bg-[#D7C7B1]/30 rounded-xs transition-colors"
          aria-label={content.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#81796F] block mb-1">
            MISX
          </span>
          <h3 id="booking-modal-title" className="text-2xl font-serif text-[#282521]">
            {content.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#81796F] mt-1 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3 py-2 border-y border-[#282521]/10 text-xs sm:text-sm text-[#282521]">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#282521] text-white flex items-center justify-center text-xs font-mono shrink-0">1</span>
            <span>{content.step1}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#282521] text-white flex items-center justify-center text-xs font-mono shrink-0">2</span>
            <span>{content.step2}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#282521] text-white flex items-center justify-center text-xs font-mono shrink-0">3</span>
            <span>{content.step3}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <a
            href={PLANITY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-[0.16em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors rounded-xs shadow-md"
          >
            <span>{content.directBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-[#81796F] text-center italic">
            {content.notice}
          </p>
        </div>
      </div>
    </div>
  );
};
