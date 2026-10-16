import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PLANITY_BOOKING_URL } from '../data/salonData';

interface HeroProps {
  currentLang: 'fr' | 'en';
  onDiscoverClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onDiscoverClick }) => {
  const content = {
    fr: {
      kicker: "Studio de Coiffure Indépendant · Paris 11",
      title: "La coiffure comme expression de soi.",
      subtitle: "Un regard créatif sur le cheveu, des coupes personnalisées et une approche pensée autour de votre singularité.",
      ctaDiscover: "Découvrir le salon",
      ctaBook: "Prendre rendez-vous",
      location: "64 rue Jean-Pierre Timbaud, 75011 Paris",
      badge: "Fondé en 2013 · Créations d'auteur",
    },
    en: {
      kicker: "Independent Hair Studio · Paris 11",
      title: "Hair as an expression of self.",
      subtitle: "A creative perspective on hair, bespoke cuts, and an artistic approach tailored to your individuality.",
      ctaDiscover: "Discover the studio",
      ctaBook: "Book an appointment",
      location: "64 rue Jean-Pierre Timbaud, 75011 Paris",
      badge: "Est. 2013 · Tailored Artistry",
    },
  }[currentLang];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#282521]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Editorial Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#282521]/10 text-xs tracking-[0.2em] uppercase text-[#81796F]">
          <div className="flex items-center gap-2">
            <span>{content.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>{content.location}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[#282521]">
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{content.badge}</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 md:pt-12">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#81796F] block mb-3">
                MISX
              </span>
              <h1
                style={{ fontFamily: "'Cal Sans', sans-serif" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#282521] text-balance"
              >
                {content.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#81796F] leading-relaxed max-w-lg font-light">
              {content.subtitle}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={PLANITY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderWidth: '2px',
                  borderStyle: 'outset',
                  borderRadius: '20px',
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#282521]"
              >
                <span>{content.ctaBook}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onDiscoverClick}
                style={{
                  borderRadius: '20px',
                  borderStyle: 'outset',
                  borderWidth: '2px',
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-[#282521] border-[#282521]/20 hover:border-[#282521] hover:bg-white/50 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#282521]"
              >
                <span>{content.ctaDiscover}</span>
                <ArrowDown className="w-4 h-4 text-[#81796F]" />
              </button>
            </div>

            {/* Studio Note */}
            <div className="pt-4 border-t border-[#282521]/10 flex items-center gap-4 text-xs text-[#81796F]">
              <span className="font-serif italic text-base text-[#282521]">«</span>
              <p className="italic">
                {currentLang === 'fr'
                  ? "Chaque tête est une toile vivante. Rien n'est standardisé."
                  : "Every haircut is an organic canvas. Nothing is standardized."}
              </p>
            </div>
          </div>

          {/* Right Column: Hero Fashion Photography */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xs bg-[#D7C7B1]/20 shadow-xl border border-[#282521]/10 group">
              <img
                src="/src/assets/images/hero_hair_editorial_1791727983965.jpg"
                alt={
                  currentLang === 'fr'
                    ? "Coiffure éditoriale et coupe texturée dans un atelier parisien"
                    : "Editorial hairstyle and textured cut in a Parisian studio"
                }
                className="w-full h-auto aspect-[16/10] object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.01]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Subtle natural vignette and caption strip */}
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-[#282521]/70 via-[#282521]/30 to-transparent flex items-end justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-medium text-white/90">
                    {currentLang === 'fr' ? 'Coupe d’Auteur & Ondulation Naturelle' : 'Signature Cut & Natural Waves'}
                  </p>
                  <p className="text-[11px] text-white/70">
                    {currentLang === 'fr' ? 'Atelier MISX · Paris 11' : 'Studio MISX · Paris 11'}
                  </p>
                </div>
                <span className="text-[10px] tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-xs text-white/90">
                  {currentLang === 'fr' ? 'Inspiration' : 'Inspiration'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Highlights Strip below the Hero */}
        <div
          style={{
            backgroundColor: '#f7daec',
            fontSize: '16px',
            borderWidth: '2px',
            marginLeft: '11px',
            paddingLeft: '7px',
            paddingRight: '0px',
            paddingBottom: '10px',
            marginRight: '4px',
            marginBottom: '2px',
            marginTop: '64px',
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 md:pt-16 border-t border-[#282521]/10 text-[#282521]"
        >
          <div className="space-y-1.5">
            <span
              style={{
                fontSize: '14px',
                color: '#710303',
                fontWeight: 'bold',
                fontFamily: "'Cactus Classical Serif', serif",
              }}
              className="tracking-[0.2em] uppercase block"
            >
              01 · {currentLang === 'fr' ? 'Diagnostic Morphologique' : 'Bespoke Consultation'}
            </span>
            <h3 className="text-base font-serif font-medium">
              {currentLang === 'fr' ? 'Écoute & Analyse du Mouvement' : 'Attentive Listening & Movement'}
            </h3>
            <p className="text-xs text-[#81796F] leading-relaxed">
              {currentLang === 'fr'
                ? "Nous prenons le temps d'échanger sur vos habitudes, la matière de votre cheveu et votre style de vie."
                : "We take time to discuss your daily routines, hair texture, and unique personal aesthetic."}
            </p>
          </div>

          <div className="space-y-1.5">
            <span
              style={{
                fontSize: '14px',
                color: '#710303',
                fontWeight: 'bold',
                fontFamily: "'Cactus Classical Serif', serif",
              }}
              className="tracking-[0.2em] uppercase block"
            >
              02 · {currentLang === 'fr' ? 'Coupe aux Ciseaux & Rasoir' : 'Precision & Razor Craft'}
            </span>
            <h3
              style={{ fontFamily: "'Glory', sans-serif" }}
              className="text-base font-medium"
            >
              {currentLang === 'fr' ? 'Tombée Spontanée du Cheveu' : 'Organic & Spontaneous Drop'}
            </h3>
            <p className="text-xs text-[#81796F] leading-relaxed">
              {currentLang === 'fr'
                ? "Une technique qui libère le volume naturel et permet un coiffage intuitif sans effort chez vous."
                : "Techniques designed to release natural volume for effortless, intuitive styling at home."}
            </p>
          </div>

          <div className="space-y-1.5">
            <span
              style={{
                fontSize: '14px',
                color: '#710303',
                fontWeight: 'bold',
                fontFamily: "'Cactus Classical Serif', serif",
              }}
              className="tracking-[0.2em] uppercase block"
            >
              03 · {currentLang === 'fr' ? 'Coloration Douce & Balayage' : 'Soft Color & Balayage'}
            </span>
            <h3 className="text-base font-serif font-medium">
              {currentLang === 'fr' ? 'Lumière et Respect de la Fibre' : 'Sunlit Dimension & Hair Health'}
            </h3>
            <p className="text-xs text-[#81796F] leading-relaxed">
              {currentLang === 'fr'
                ? "Des fondus sans démarcation et des soins régénérants pour sublimer sans abîmer."
                : "Seamless transitions and restructuring care that illuminate hair without compromise."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
