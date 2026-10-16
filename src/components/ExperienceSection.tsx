import React from 'react';
import { MapPin, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { PLANITY_BOOKING_URL, SALON_ADDRESS } from '../data/salonData';

interface ExperienceSectionProps {
  currentLang: 'fr' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const content = {
    fr: {
      chapter: "L'Espace & L'Atmosphère",
      title: "Un atelier intimiste au cœur de Paris 11ème.",
      lead: "Niché au 64 rue Jean-Pierre Timbaud, entre le canal Saint-Martin et le quartier Oberkampf, MISX a été conçu comme un refuge loin de l'agitation urbaine.",
      body: "Lumière douce, matières brutes, acoustique apaisée et musique choisie : l'atmosphère du studio invite à la déconnexion dès que vous franchissez le seuil. Ici, le temps ralentit pour laisser place à la précision du geste et à une écoute attentive.",
      points: [
        {
          title: "Accompagnement Individuel",
          desc: "Pas de travail à la chaîne. Chaque créneau vous est pleinement dédié du shampoing jusqu'au coiffage final."
        },
        {
          title: "Matières Nobles & Lumière Naturelle",
          desc: "Un cadre architectural pensé avec des matériaux chauds et des reflets naturels fidèles à la vraie couleur de vos cheveux."
        },
        {
          title: "Énergie Indépendante",
          desc: "Un studio libre de toute contrainte de chaîne commerciale, privilégiant la créativité et la relation humaine authentique."
        }
      ],
      disclaimer: "Évocation architecturale et univers visuel inspiré de l'esprit atelier parisien.",
      cta: "Réserver votre expérience sur Planity"
    },
    en: {
      chapter: "Space & Atmosphere",
      title: "An intimate sanctuary in the 11th arrondissement.",
      lead: "Located at 64 rue Jean-Pierre Timbaud, between Canal Saint-Martin and Oberkampf, MISX was envisioned as a tranquil haven away from city noise.",
      body: "Soft daylight, textured natural surfaces, mindful acoustics, and curated music: our studio atmosphere invites you to unwind the second you step through the door. Here, time slows down to honor precision and empathetic consultation.",
      points: [
        {
          title: "One-on-One Dedicated Attention",
          desc: "No assembly-line rushing. Your appointment is entirely yours, from relaxing wash to final textured finish."
        },
        {
          title: "Natural Light & Honest Tones",
          desc: "An architectural space calibrated with pure daylight mirrors that reveal the true dimension of your hair shade."
        },
        {
          title: "Independent Spirit",
          desc: "A boutique studio free from commercial chain rigidity, championing authentic personal relationships."
        }
      ],
      disclaimer: "Architectural moodboard evoking the warm creative atmosphere of our Paris atelier.",
      cta: "Book your studio experience on Planity"
    }
  }[currentLang];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#282521]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Photo with clean caption */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xs overflow-hidden border border-[#282521]/10 shadow-xl bg-[#F5F0E8] group">
              <img
                src="/src/assets/images/salon_interior_studio_1791727997059.jpg"
                alt={content.title}
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white/95 border-t border-[#282521]/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#81796F] gap-2">
                <div className="flex items-center gap-1.5 text-[#282521]">
                  <MapPin className="w-3.5 h-3.5 text-[#81796F]" />
                  <span>{SALON_ADDRESS}</span>
                </div>
                <span className="italic text-[11px] text-[#81796F]">
                  {content.disclaimer}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#81796F] block">
              {content.chapter}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#282521] leading-tight">
              {content.title}
            </h2>

            <p className="text-base text-[#282521] leading-relaxed">
              {content.lead}
            </p>

            <p className="text-xs sm:text-sm text-[#81796F] leading-relaxed">
              {content.body}
            </p>

            {/* Feature Points */}
            <div className="pt-6 border-t border-[#282521]/10 space-y-4">
              {content.points.map((pt, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-sm font-serif font-semibold text-[#282521]">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-[#81796F] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={PLANITY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors rounded-xs shadow-xs"
              >
                <span>{content.cta}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
