import React from 'react';
import { ArrowUpRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { PLANITY_BOOKING_URL, SALON_ADDRESS } from '../data/salonData';

interface BookingCtaProps {
  currentLang: 'fr' | 'en';
}

export const BookingCta: React.FC<BookingCtaProps> = ({ currentLang }) => {
  const content = {
    fr: {
      chapter: "Réservation En Ligne",
      title: "Votre prochaine coupe commence ici.",
      subtitle: "Planifiez votre venue en quelques secondes sur Planity. Choisissez votre prestation, votre créneau idéal et votre artisan coiffeur en direct.",
      cta: "Réserver mon rendez-vous",
      platform: "Réservation certifiée sur Planity",
      guarantees: [
        "Confirmation instantanée par SMS / email",
        "Modification & annulation simplifiées",
        "Aucun paiement requis à la réservation"
      ]
    },
    en: {
      chapter: "Online Booking",
      title: "Your next haircut starts here.",
      subtitle: "Schedule your visit in a few moments via Planity. Choose your service, preferred time slot, and resident hair artist in real time.",
      cta: "Book my appointment",
      platform: "Certified booking on Planity",
      guarantees: [
        "Instant SMS / email confirmation",
        "Flexible rescheduling & cancellation",
        "No payment required upon booking"
      ]
    }
  }[currentLang];

  return (
    <section className="py-20 md:py-24 bg-[#282521] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="relative overflow-hidden p-8 sm:p-12 md:p-16 border border-white/10 rounded-xs bg-gradient-to-br from-[#282521] to-[#3a352f]">
          
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D7C7B1] block">
              {content.chapter}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal leading-tight">
              {content.title}
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              {content.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={PLANITY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#282521] bg-[#F5F0E8] hover:bg-white transition-all rounded-xs shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{content.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="text-xs text-[#D7C7B1] flex items-center gap-2 px-3 py-2">
                <span className="w-1.5 h-1.5 bg-[#D7C7B1] rounded-full" />
                <span>{content.platform}</span>
              </div>
            </div>

            {/* Micro guarantees */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/70">
              {content.guarantees.map((g, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7C7B1] shrink-0" />
                  <span>{g}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
