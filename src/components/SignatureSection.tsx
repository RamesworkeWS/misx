import React from 'react';
import { Scissors, Sparkles, Feather } from 'lucide-react';

interface SignatureSectionProps {
  currentLang: 'fr' | 'en';
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ currentLang }) => {
  const content = {
    fr: {
      chapter: "Philosophie de l'Atelier",
      title: "Penser la coupe comme une matière vivante.",
      lead: "Chaque cheveu possède une direction, une élasticité et une histoire propre. Chez MISX, nous refusons les formats standardisés et les coiffures figées.",
      body: "Fondé par Vee en 2013, le salon s'est affirmé comme un lieu d'écoute et d'expérimentation bienveillante au cœur du 11ème arrondissement. Nous accordons une importance primordiale à l'harmonie entre votre morphologie, la texture naturelle de vos cheveux et votre allure quotidienne.",
      values: [
        {
          title: "Mouvement & Tombée Naturelle",
          text: "Une coupe réussie doit vivre d'elle-même, sans nécessiter 40 minutes de coiffage contraignant chaque matin."
        },
        {
          title: "Lumière & Délicatesse",
          text: "Nos techniques de balayage et patine imitent les éclaircissements naturels du soleil d'été, sans démarcation agressive."
        },
        {
          title: "Artisanat & Matières Respectueuses",
          text: "Des instruments de coupe de haute précision et des soins profonds formulés pour préserver l'intégrité de la fibre."
        }
      ],
      photoCaption: "Précision des outils & respect de la matière capillaire"
    },
    en: {
      chapter: "Studio Philosophy",
      title: "Sculpting hair as a living, organic medium.",
      lead: "Every hair strand has its own grain, bounce, and personal trajectory. At MISX, we reject rigid templates and cookie-cutter haircuts.",
      body: "Established by Vee in 2013, the studio has flourished as an intimate creative space in the heart of Paris 11th arrondissement. We place paramount importance on the dialogue between your bone structure, natural texture, and daily lifestyle.",
      values: [
        {
          title: "Natural Flow & Effortless Drop",
          text: "A truly great haircut moves on its own, demanding no exhausting blow-drying ritual every morning."
        },
        {
          title: "Subtle Light & Nuance",
          text: "Our bespoke balayage and gloss techniques recreate sun-drenched natural dimension with zero harsh regrowth."
        },
        {
          title: "Craftsmanship & Mindful Care",
          text: "Handcrafted precision cutting tools and restorative rituals that respect and protect the hair cortex."
        }
      ],
      photoCaption: "Precision tools & mindful hair fiber care"
    }
  }[currentLang];

  return (
    <section id="salon" className="py-20 md:py-28 bg-[#F5F0E8] border-b border-[#282521]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#81796F] block mb-3">
            {content.chapter}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#282521] leading-tight">
            {content.title}
          </h2>
        </div>

        {/* 2-Column Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xs border border-[#282521]/10 shadow-lg bg-white group">
              <img
                src="/src/assets/images/craft_details_shears_1791728029065.jpg"
                alt={content.photoCaption}
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white/90 border-t border-[#282521]/10 text-xs text-[#81796F] flex items-center justify-between">
                <span>{content.photoCaption}</span>
                <span className="font-serif italic text-sm text-[#282521]">MISX</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <p className="text-lg text-[#282521] font-normal leading-relaxed">
              {content.lead}
            </p>
            <p
              style={{ color: '#8c5700', fontSize: '15px', textAlign: 'justify' }}
              className="leading-relaxed"
            >
              {content.body}
            </p>

            {/* Values Breakdown */}
            <div className="pt-6 space-y-5 border-t border-[#282521]/10">
              {content.values.map((val, idx) => {
                const h4Style: React.CSSProperties = {
                  fontWeight: 'bold',
                  fontSize: idx === 1 ? '17px' : '18px',
                };
                const containerStyle: React.CSSProperties = idx === 1 ? { fontSize: '18px' } : {};

                return (
                  <div key={idx} className="space-y-1">
                    <div style={containerStyle} className="flex items-center gap-2">
                      <span style={{ fontFamily: 'Arial, sans-serif' }} className="text-xs text-[#81796F]">
                        0{idx + 1}.
                      </span>
                      <h4 style={h4Style} className="font-serif text-[#282521]">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-[#81796F] pl-6 leading-relaxed">
                      {val.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
