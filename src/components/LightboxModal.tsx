import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PortfolioItem } from '../data/salonData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  currentLang: 'fr' | 'en';
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  currentLang,
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title[currentLang]}
      className="fixed inset-0 z-50 bg-[#282521]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#F5F0E8] rounded-xs shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#282521] bg-white/80 hover:bg-white rounded-full shadow-md transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#282521]"
          aria-label={currentLang === 'fr' ? 'Fermer la visionneuse' : 'Close lightbox'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="relative md:w-2/3 bg-[#282521] flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title[currentLang]}
            className="w-full h-full max-h-[80vh] object-contain"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label={currentLang === 'fr' ? 'Image précédente' : 'Previous image'}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label={currentLang === 'fr' ? 'Image suivante' : 'Next image'}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Details & Metadata Panel */}
        <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-[#F5F0E8]">
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#81796F] block mb-1">
                {item.categoryLabel[currentLang]}
              </span>
              <h3 className="text-2xl font-serif text-[#282521]">
                {item.title[currentLang]}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#81796F] leading-relaxed">
              {item.details[currentLang]}
            </p>

            <div className="pt-4 border-t border-[#282521]/10 text-xs text-[#81796F] space-y-1">
              <p className="font-semibold text-[#282521]">
                {currentLang === 'fr' ? "Note d'inspiration éditoriale" : "Editorial Inspiration Note"}
              </p>
              <p className="italic text-[11px]">
                {currentLang === 'fr'
                  ? "Moodboard artistique MISX — Prise en compte de votre matière lors du diagnostic sur place."
                  : "Artistic moodboard for MISX — Consultation in salon ensures adaptation to your unique hair profile."}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#282521]/10 flex items-center justify-between text-xs text-[#81796F]">
            <span className="font-mono">
              {currentIndex + 1} / {items.length}
            </span>
            <span className="text-[11px] tracking-wider uppercase">
              {currentLang === 'fr' ? 'Flèches clavier activées' : 'Keyboard navigation active'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
