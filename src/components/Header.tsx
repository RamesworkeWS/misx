import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { PLANITY_BOOKING_URL } from '../data/salonData';

interface HeaderProps {
  currentLang: 'fr' | 'en';
  onToggleLang: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  activeSection,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'accueil', label: { fr: 'Accueil', en: 'Home' } },
    { id: 'salon', label: { fr: 'Le salon', en: 'The Studio' } },
    { id: 'prestations', label: { fr: 'Prestations', en: 'Services' } },
    { id: 'portfolio', label: { fr: 'Portfolio', en: 'Portfolio' } },
    { id: 'equipe', label: { fr: "L'équipe", en: 'The Team' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#282521]/10 py-3 shadow-xs'
            : 'bg-[#F5F0E8]/80 backdrop-blur-xs border-b border-[#282521]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Display Serif, Single text element) */}
          <button
            onClick={() => handleLinkClick('accueil')}
            style={{ fontFamily: 'Artifika, serif', fontSize: '32px', fontWeight: 'normal' }}
            className="text-xl md:text-2xl tracking-[0.18em] text-[#282521] uppercase whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#282521]"
          >
            MISX
          </button>

          {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
          <nav
            style={{ fontSize: '13px', textDecorationLine: 'none', fontWeight: 'bold', color: '#4a4646' }}
            className="hidden lg:flex items-center gap-7 tracking-[0.15em] uppercase"
          >
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              // Specific styling per selector index:
              // button 2 (idx 1): fontSize 14px
              // button 3 (idx 2): marginLeft -16px
              // button 4 (idx 3): marginLeft -16px, paddingLeft 1px
              // button 5 (idx 4): marginLeft -16px, paddingLeft 1px
              // button 6 (idx 5): marginLeft -16px, paddingLeft 1px
              const itemStyle: React.CSSProperties = {};
              if (idx === 1) {
                itemStyle.fontSize = '14px';
              } else if (idx === 2) {
                itemStyle.marginLeft = '-16px';
              } else if (idx === 3 || idx === 4 || idx === 5) {
                itemStyle.marginLeft = '-16px';
                itemStyle.paddingLeft = '1px';
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  style={itemStyle}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#282521] focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#282521] ${
                    isActive ? 'text-[#282521] font-semibold' : ''
                  }`}
                >
                  {link.label[currentLang]}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#282521]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher & Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Bilingual toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium tracking-wider uppercase text-[#282521] hover:bg-[#D7C7B1]/30 rounded-xs transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#282521]"
              aria-label={currentLang === 'fr' ? 'Passer en anglais' : 'Switch to French'}
              title={currentLang === 'fr' ? 'Passer en anglais' : 'Switch to French'}
            >
              <Globe className="w-3.5 h-3.5 text-[#81796F]" />
              <span className="font-semibold">{currentLang.toUpperCase()}</span>
            </button>

            {/* Primary Action Button */}
            <a
              href={PLANITY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '-10px',
                borderRadius: '300px',
                borderStyle: 'dashed',
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors whitespace-nowrap shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#282521]"
            >
              <span>{currentLang === 'fr' ? 'Prendre rendez-vous' : 'Book Online'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#282521] hover:bg-[#D7C7B1]/30 rounded-xs transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#282521]"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden bg-[#282521]/60 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F5F0E8] p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#282521]/10">
                <span className="font-serif tracking-[0.18em] text-lg text-[#282521]">
                  MISX
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#282521] hover:bg-[#D7C7B1]/30 rounded-xs"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left text-base tracking-[0.12em] uppercase py-2 transition-colors ${
                      activeSection === link.id
                        ? 'font-bold text-[#282521] border-l-2 border-[#282521] pl-3'
                        : 'text-[#81796F] hover:text-[#282521] pl-1'
                    }`}
                  >
                    {link.label[currentLang]}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#282521]/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#81796F]">
                  {currentLang === 'fr' ? 'Langue' : 'Language'}
                </span>
                <button
                  onClick={onToggleLang}
                  className="px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-[#282521]/20 rounded-xs"
                >
                  {currentLang === 'fr' ? 'English (EN)' : 'Français (FR)'}
                </button>
              </div>

              <a
                href={PLANITY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors rounded-xs shadow-xs"
              >
                <span>{currentLang === 'fr' ? 'Prendre rendez-vous' : 'Book on Planity'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-[#81796F] text-center">
                64 rue Jean-Pierre Timbaud, 75011 Paris
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
