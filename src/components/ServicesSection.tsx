import React, { useState } from 'react';
import { ArrowUpRight, Clock, Tag, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICE_CATEGORIES, PLANITY_BOOKING_URL, ServiceCategory } from '../data/salonData';

interface ServicesSectionProps {
  currentLang: 'fr' | 'en';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const content = {
    fr: {
      chapter: "Carte des Prestations",
      title: "Des services pensés pour sublimer votre singularité.",
      subtitle: "Chaque prestation débute par un échange sur votre routine et vos attentes. Les tarifs sont indicatifs et confirmés lors de votre réservation sur Planity.",
      allCategories: "Toutes les prestations",
      bookCategory: "Prendre rendez-vous sur Planity",
      disclaimer: "Les créneaux, durées et disponibilités en temps réel sont consultables directement sur la plateforme Planity officielle.",
      included: "Inclus dans nos prestations :",
      perks: [
        "Diagnostic personnalisé & conseils d'entretien",
        "Shampoing traitant & massage crânien relaxant",
        "Produits professionnels de haute technicité"
      ]
    },
    en: {
      chapter: "Service Menu",
      title: "Services crafted to honor your individuality.",
      subtitle: "Every service begins with a personal conversation regarding your lifestyle and texture. Indicative rates are confirmed during your online booking on Planity.",
      allCategories: "All Services",
      bookCategory: "Book on Planity",
      disclaimer: "Real-time slots, precise durations and stylist availability are managed directly on the official Planity booking platform.",
      included: "Included with your appointment:",
      perks: [
        "Bespoke hair consultation & maintenance advice",
        "Therapeutic wash & relaxing scalp massage",
        "High-performance professional haircare products"
      ]
    }
  }[currentLang];

  const filteredCategories = selectedCategoryId === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((cat) => cat.id === selectedCategoryId);

  return (
    <section id="prestations" className="py-20 md:py-28 bg-white border-b border-[#282521]/10">
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

          <a
            href={PLANITY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end px-5 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors rounded-xs shadow-xs shrink-0"
          >
            <span>{content.bookCategory}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Tabs / Filter Bar (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#282521]/10">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap rounded-xs ${
              selectedCategoryId === 'all'
                ? 'bg-[#282521] text-white shadow-xs'
                : 'bg-[#F5F0E8] text-[#282521] hover:bg-[#D7C7B1]/50'
            }`}
          >
            {content.allCategories}
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap rounded-xs ${
                selectedCategoryId === cat.id
                  ? 'bg-[#282521] text-white shadow-xs'
                  : 'bg-[#F5F0E8] text-[#282521] hover:bg-[#D7C7B1]/50'
              }`}
            >
              {cat.title[currentLang]}
            </button>
          ))}
        </div>

        {/* Categories List */}
        <div className="space-y-16">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              <div className="border-b border-[#282521]/10 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-serif text-[#282521]">
                    {cat.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#81796F] mt-1 max-w-2xl">
                    {cat.description[currentLang]}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#81796F] shrink-0">
                  {cat.services.length} {currentLang === 'fr' ? 'prestations' : 'options'}
                </span>
              </div>

              {/* Grid of Services in this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.services.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-[#F5F0E8]/40 border border-[#282521]/10 hover:border-[#282521]/30 transition-all rounded-xs flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-base sm:text-lg font-serif font-medium text-[#282521]">
                          {item.name[currentLang]}
                        </h4>
                        <span style={{ fontSize: '17px' }} className="font-semibold text-[#282521] tabular-nums shrink-0">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#81796F] leading-relaxed mb-4">
                        {item.description[currentLang]}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#282521]/10 flex items-center justify-between text-xs text-[#81796F]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="tabular-nums">{item.duration}</span>
                      </div>

                      <a
                        href={item.planityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#282521] font-medium tracking-wider uppercase hover:underline"
                      >
                        <span>{currentLang === 'fr' ? 'Réserver' : 'Book'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality guarantee strip */}
        <div className="mt-16 p-6 sm:p-8 bg-[#F5F0E8] border border-[#282521]/10 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#81796F] block mb-1">
                {content.included}
              </span>
              <h4
                style={{ fontWeight: 'bold', fontFamily: "'Black Ops One', cursive" }}
                className="text-xl text-[#282521]"
              >
                {currentLang === 'fr' ? "L'Exigence MISX" : "The MISX Standard"}
              </h4>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {content.perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#282521]">
                  <CheckCircle2 className="w-4 h-4 text-[#81796F] shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#282521]/10 text-[11px] text-[#81796F] flex items-center justify-between flex-wrap gap-2">
            <span>{content.disclaimer}</span>
            <span
              style={{ fontWeight: 'bold', fontFamily: "'Archivo Black', sans-serif" }}
              className="font-mono"
            >
              75011 Paris
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
