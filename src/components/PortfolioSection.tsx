import React, { useState } from 'react';
import { Maximize2, Sparkles, Eye } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/salonData';
import { LightboxModal } from './LightboxModal';

interface PortfolioSectionProps {
  currentLang: 'fr' | 'en';
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const content = {
    fr: {
      chapter: "Portfolio & Lookbook",
      title: "Mouvements, textures et esthétique parisienne.",
      subtitle: "Une sélection de silhouettes, de coupes d'auteur et d'inspirations reflétant l'univers artistique de MISX.",
      filterAll: "Toutes les inspirations",
      filterCoupes: "Coupes & Textures",
      filterCouleurs: "Balayages & Couleurs",
      filterStudio: "L'Atelier & Matières",
      openHint: "Cliquer pour agrandir",
      disclaimer: "Moodboard artistique et inspirations éditoriales sélectionnées pour illustrer la vision du studio. Venez avec vos envies lors de votre diagnostic sur-mesure au salon."
    },
    en: {
      chapter: "Portfolio & Lookbook",
      title: "Flow, textures, and Parisian elegance.",
      subtitle: "A curated edit of silhouettes, bespoke haircuts, and editorial inspirations reflecting the aesthetic universe of MISX.",
      filterAll: "All inspirations",
      filterCoupes: "Cuts & Texture",
      filterCouleurs: "Balayage & Color",
      filterStudio: "The Studio & Materials",
      openHint: "Click to expand",
      disclaimer: "Artistic moodboard and curated editorial inspirations illustrating the studio's aesthetic vision. Bring your inspirations to your in-salon consultation."
    }
  }[currentLang];

  const filterOptions = [
    { id: 'all', label: content.filterAll },
    { id: 'coupes', label: content.filterCoupes },
    { id: 'couleurs', label: content.filterCouleurs },
    { id: 'studio', label: content.filterStudio },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => {
        if (activeFilter === 'studio') return item.category === 'studio' || item.category === 'textures';
        return item.category === activeFilter;
      });

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F5F0E8] border-b border-[#282521]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#81796F] block mb-3">
              {content.chapter}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#282521] leading-tight">
              {content.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#81796F] leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="text-xs text-[#81796F] max-w-xs self-start md:self-end">
            <p className="italic leading-relaxed border-l border-[#282521]/20 pl-3">
              {content.disclaimer}
            </p>
          </div>
        </div>

        {/* Category Filters (Clean Functional Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap rounded-xs ${
                activeFilter === filter.id
                  ? 'bg-[#282521] text-white shadow-xs'
                  : 'bg-white text-[#282521] hover:bg-[#D7C7B1]/40 border border-[#282521]/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Magazine Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span calculation for high-end magazine cadence
            let colSpan = 'md:col-span-6';
            if (index === 0) colSpan = 'md:col-span-7';
            else if (index === 1) colSpan = 'md:col-span-5';
            else if (index === 2) colSpan = 'md:col-span-4';
            else if (index === 3) colSpan = 'md:col-span-8';
            else if (index === 4) colSpan = 'md:col-span-6';

            return (
              <div
                key={item.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden bg-white rounded-xs border border-[#282521]/10 shadow-sm transition-all duration-500 hover:shadow-xl">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title[currentLang]}
                    className="w-full h-80 sm:h-96 md:h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#282521]/80 via-[#282521]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-white/80 block mb-1">
                      {item.categoryLabel[currentLang]}
                    </span>
                    <h4 className="text-xl font-serif text-white mb-2">
                      {item.title[currentLang]}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <Eye className="w-4 h-4" />
                      <span>{content.openHint}</span>
                    </div>
                  </div>

                  {/* Static minimal bottom tag for clean visibility */}
                  <div className="p-4 bg-white flex items-center justify-between text-xs border-t border-[#282521]/10 group-hover:bg-[#F5F0E8] transition-colors">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#81796F] block">
                        {item.categoryLabel[currentLang]}
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#282521]">
                        {item.title[currentLang]}
                      </h4>
                    </div>
                    <Maximize2 className="w-4 h-4 text-[#81796F] group-hover:text-[#282521] transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={selectedItem}
          items={filteredItems}
          currentLang={currentLang}
          onClose={() => setSelectedItem(null)}
          onNavigate={(newItem) => setSelectedItem(newItem)}
        />

      </div>
    </section>
  );
};
