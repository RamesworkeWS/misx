import React from 'react';
import { ArrowUpRight, Scissors, Sparkles, UserCheck } from 'lucide-react';
import { TEAM_MEMBERS, PLANITY_BOOKING_URL } from '../data/salonData';

interface TeamSectionProps {
  currentLang: 'fr' | 'en';
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang }) => {
  const content = {
    fr: {
      chapter: "Les Artisans du Studio",
      title: "L'expertise humaine au cœur de chaque geste.",
      subtitle: "Chez MISX, chaque coiffeur cultive une sensibilité artistique aiguisée et une écoute sincère. Vous pouvez sélectionner votre coiffeur référent directement lors de votre prise de rendez-vous en ligne.",
      bookWithTeam: "Choisir mon coiffeur sur Planity",
      disclaimer: "Les profils de l'équipe et les créneaux disponibles de chaque coiffeur sont mis à jour en temps réel sur notre page Planity certifiée."
    },
    en: {
      chapter: "Studio Artisans",
      title: "Human artistry at the core of every movement.",
      subtitle: "At MISX, each stylist brings honed artistic intuition and attentive listening. You can choose your preferred stylist directly when booking online.",
      bookWithTeam: "Select stylist on Planity",
      disclaimer: "Team profiles, specialties and real-time open slots for each stylist are maintained on our official certified Planity page."
    }
  }[currentLang];

  return (
    <section id="equipe" className="py-20 md:py-28 bg-[#F5F0E8] border-b border-[#282521]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span style={{ borderColor: '#fc9f00' }} className="text-xs uppercase tracking-[0.25em] text-[#81796F] block mb-3">
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
            <span>{content.bookWithTeam}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xs border border-[#282521]/10 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                {/* Photo Portrait */}
                <div className="sm:col-span-5 relative overflow-hidden bg-[#F5F0E8] min-h-[260px]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#282521]/80 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs">
                    Paris 11
                  </div>
                </div>

                {/* Details */}
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif text-[#282521]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#81796F] mt-1">
                        {member.role[currentLang]}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#81796F] leading-relaxed">
                      {member.bio[currentLang]}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#282521] block mb-2">
                        {currentLang === 'fr' ? 'Domaines de prédilection :' : 'Focus areas:'}
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#81796F]">
                        {member.specialties.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#282521] rounded-full" />
                            <span>{spec[currentLang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="p-4 bg-[#F5F0E8]/60 border-t border-[#282521]/10 flex items-center justify-between text-xs">
                <span className="text-[#81796F]">
                  {currentLang === 'fr' ? 'Réservation personnalisée' : 'Bespoke appointment'}
                </span>
                <a
                  href={PLANITY_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium uppercase tracking-wider text-[#282521] hover:underline inline-flex items-center gap-1"
                >
                  <span>{currentLang === 'fr' ? 'Réserver avec ce coiffeur' : 'Book with stylist'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical note */}
        <div className="mt-12 text-center text-xs text-[#81796F] max-w-xl mx-auto italic">
          {content.disclaimer}
        </div>

      </div>
    </section>
  );
};
