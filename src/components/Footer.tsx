import React from 'react';
import { ArrowUp, ArrowUpRight, Heart, MapPin } from 'lucide-react';
import { SALON_ADDRESS, PLANITY_BOOKING_URL, SALON_DATA } from '../data/salonData';

interface FooterProps {
  currentLang: 'fr' | 'en';
  onNavigate: (sectionId: string) => void;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate, onToggleLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'accueil', label: { fr: 'Accueil', en: 'Home' } },
    { id: 'salon', label: { fr: 'Le salon', en: 'The Studio' } },
    { id: 'prestations', label: { fr: 'Prestations', en: 'Services' } },
    { id: 'portfolio', label: { fr: 'Portfolio', en: 'Portfolio' } },
    { id: 'equipe', label: { fr: "L'équipe", en: 'The Team' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
  ];

  return (
    <footer className="bg-[#282521] text-[#F5F0E8] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-serif tracking-[0.16em] uppercase text-white">
              MISX
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D7C7B1]">
              {SALON_DATA.baseline[currentLang]}
            </p>
            <p className="text-xs text-[#81796F] leading-relaxed max-w-sm">
              {currentLang === 'fr'
                ? "Fondé en 2013 par Vee. Un atelier libre, attentif et contemporain dédié à la singularité de chaque cheveu."
                : "Founded in 2013 by Vee. An independent, attentive, and contemporary studio dedicated to the singular nature of every hair."}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D7C7B1]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{SALON_ADDRESS}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#81796F] block">
              {currentLang === 'fr' ? 'Navigation' : 'Navigation'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs tracking-wider uppercase text-[#D7C7B1]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left py-1 hover:text-white transition-colors focus:outline-hidden"
                >
                  {link.label[currentLang]}
                </button>
              ))}
            </div>
          </div>

          {/* Booking & Hours Summary */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#81796F] block">
              {currentLang === 'fr' ? 'Réservations' : 'Appointments'}
            </span>
            <p className="text-xs text-[#81796F] leading-relaxed">
              {currentLang === 'fr'
                ? "Sélectionnez votre créneau et votre coiffeur directement en ligne sur Planity."
                : "Select your time slot and stylist directly online on Planity."}
            </p>
            <a
              href={PLANITY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#282521] bg-[#F5F0E8] hover:bg-white transition-colors rounded-xs shadow-xs"
            >
              <span>Planity MISX</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Legal & Concept Redesign Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#81796F]">
          
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} MISX · 64 rue Jean-Pierre Timbaud, 75011 Paris.
            </p>
            <p className="text-[11px] text-[#81796F]/80">
              {SALON_DATA.disclaimer[currentLang]}
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <button
              onClick={onToggleLang}
              className="uppercase tracking-wider hover:text-white transition-colors"
            >
              {currentLang === 'fr' ? 'Switch to English' : 'Passer en Français'}
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 uppercase tracking-wider hover:text-white transition-colors p-1"
              aria-label={currentLang === 'fr' ? 'Haut de page' : 'Back to top'}
            >
              <span>{currentLang === 'fr' ? 'Haut de page' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
