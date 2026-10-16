import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureSection } from './components/SignatureSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TeamSection } from './components/TeamSection';
import { BookingCta } from './components/BookingCta';
import { PracticalInfo } from './components/PracticalInfo';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PLANITY_BOOKING_URL } from './data/salonData';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'fr' | 'en'>('fr');
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  // Sync HTML title & lang attribute on language toggle
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'fr') {
      document.title = "MISX – Salon de Coiffure Créatif & Indépendant (Paris 11)";
    } else {
      document.title = "MISX – Creative & Independent Hair Studio (Paris 11)";
    }
  }, [currentLang]);

  // Section observer for scroll spy
  useEffect(() => {
    const sectionIds = ['accueil', 'salon', 'prestations', 'portfolio', 'equipe', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < windowHeight * 0.4) {
        setActiveSection('accueil');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#282521] flex flex-col font-sans selection:bg-[#D7C7B1] selection:text-[#282521]">
      {/* Main Navigation Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="accueil">
          <Hero
            currentLang={currentLang}
            onDiscoverClick={() => handleNavigate('salon')}
          />
        </div>

        {/* Studio Signature & Philosophy */}
        <SignatureSection currentLang={currentLang} />

        {/* Services & Treatment Catalog */}
        <ServicesSection currentLang={currentLang} />

        {/* Lookbook / Portfolio Grid */}
        <PortfolioSection currentLang={currentLang} />

        {/* Studio Architecture & Experience */}
        <ExperienceSection currentLang={currentLang} />

        {/* Creative Artisans & Team */}
        <TeamSection currentLang={currentLang} />

        {/* Conversion / Booking CTA Strip */}
        <BookingCta currentLang={currentLang} />

        {/* Practical Information, Map & Accessible Contact Form */}
        <PracticalInfo currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onToggleLang={toggleLanguage}
      />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currentLang={currentLang}
      />

      {/* Floating Bottom Quick Booking Bar for Mobile (compact, <15% height) */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-30 pointer-events-none">
        <a
          href={PLANITY_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-between w-full px-5 py-3.5 bg-[#282521] text-white text-xs font-semibold tracking-wider uppercase rounded-xs shadow-2xl border border-white/20 active:scale-98 transition-transform"
        >
          <span>{currentLang === 'fr' ? 'Prendre rendez-vous' : 'Book on Planity'}</span>
          <div className="flex items-center gap-1.5 text-[#D7C7B1]">
            <span className="text-[11px] lowercase tracking-normal">misx</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
