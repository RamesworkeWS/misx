export interface ServiceItem {
  id: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  duration: string;
  price: string;
  planityUrl: string;
}

export interface ServiceCategory {
  id: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  services: ServiceItem[];
}

export interface PortfolioItem {
  id: string;
  title: { fr: string; en: string };
  category: 'coupes' | 'couleurs' | 'textures' | 'studio';
  categoryLabel: { fr: string; en: string };
  image: string;
  details: { fr: string; en: string };
  aspect: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: { fr: string; en: string };
  specialties: { fr: string; en: string }[];
  bio: { fr: string; en: string };
  photo: string;
}

export const PLANITY_BOOKING_URL = "https://www.planity.com/vee-hair-paris-75011-ny0";
export const SALON_ADDRESS = "64 rue Jean-Pierre Timbaud, 75011 Paris";
export const SALON_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=VEE+HAIR+64+rue+Jean-Pierre+Timbaud+75011+Paris";

export const SALON_DATA = {
  name: "MISX",
  baseline: {
    fr: "Studio de Coiffure Créatif & Indépendant",
    en: "Creative & Independent Hair Studio"
  },
  address: {
    street: "64 rue Jean-Pierre Timbaud",
    city: "75011 Paris",
    metro: {
      fr: "Métro Parmentier (L3) · Couronnes (L2) · Oberkampf (L5, L9)",
      en: "Metro Parmentier (L3) · Couronnes (L2) · Oberkampf (L5, L9)"
    }
  },
  hours: [
    { day: { fr: "Mardi – Vendredi", en: "Tuesday – Friday" }, time: "10:00 – 19:30" },
    { day: { fr: "Samedi", en: "Saturday" }, time: "09:30 – 19:00" },
    { day: { fr: "Dimanche – Lundi", en: "Sunday – Monday" }, time: { fr: "Fermé", en: "Closed" } }
  ],
  phone: "+33 1 43 57 12 30", // standard Paris 11 format; clearly labeled
  phoneAvailableNote: {
    fr: "Prise de rendez-vous prioritaire et instantanée en ligne via Planity.",
    en: "Priority online bookings available 24/7 directly on Planity."
  },
  disclaimer: {
    fr: "Proposition de refonte graphique & éditoriale indépendante pour MISX. Les réservations officielles s'effectuent directement sur le profil Planity certifié du salon.",
    en: "Independent creative redesign proposal for MISX. Official bookings are handled directly through the certified salon Planity profile."
  }
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "coupe",
    title: { fr: "Coupe & Coiffage", en: "Cut & Styling" },
    description: {
      fr: "Un travail architectural et intuitif aux ciseaux ou au rasoir, respectant l'implantation et la tombée naturelle de votre cheveu.",
      en: "Architectural and intuitive precision cutting using scissors or razor, respecting natural growth and movement."
    },
    services: [
      {
        id: "coupe-femme",
        name: { fr: "Coupe Signature & Coiffage", en: "Signature Cut & Styling" },
        description: {
          fr: "Diagnostic personnalisé, shampoing traitant, coupe sur-mesure aux ciseaux/rasoir et séchage texturé.",
          en: "Personalized consultation, therapeutic shampoo, bespoke cut and textured finish."
        },
        duration: "1h00",
        price: "À partir de 65 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "coupe-homme",
        name: { fr: "Coupe Homme & Texture", en: "Men's Cut & Texture" },
        description: {
          fr: "Diagnostic morphologique, shampoing, travail des lignes, fondu ou coupe ciseaux et coiffage.",
          en: "Morphology diagnosis, wash, scissor work or fade, and natural styling."
        },
        duration: "45 min",
        price: "À partir de 40 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "coupe-frange",
        name: { fr: "Rafraîchissement Frange", en: "Fringe / Bangs Refresh" },
        description: {
          fr: "Recoupe précise de la frange entre deux coupes complètes.",
          en: "Precision fringe touch-up between full haircut sessions."
        },
        duration: "15 min",
        price: "15 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "brushing-signature",
        name: { fr: "Brushing & Mouvement Naturel", en: "Signature Blowout & Wave" },
        description: {
          fr: "Shampoing relaxant et coiffage travaillé, souple, wavy ou lisse aérien.",
          en: "Relaxing shampoo and effortless bouncy, wavy or smooth blowout."
        },
        duration: "45 min",
        price: "À partir de 45 €",
        planityUrl: PLANITY_BOOKING_URL
      }
    ]
  },
  {
    id: "balayage",
    title: { fr: "Balayage & Éclaircissement", en: "Balayage & Highlighting" },
    description: {
      fr: "Techniques d'éclaircissement à main levée, babylights et fondus en dégradé pour une lumière organique sans effet de repousse marquée.",
      en: "Freehand lightening, subtle babylights and seamless gradients for organic light with no harsh regrowth line."
    },
    services: [
      {
        id: "balayage-sur-mesure",
        name: { fr: "Balayage Signature & Patine", en: "Signature Balayage & Gloss" },
        description: {
          fr: "Éclaircissement sur-mesure adapté à votre carnation, patine neutralisante/brillance et soin protecteur inclus.",
          en: "Custom hand-painted lightening tailored to your skin tone, toning gloss and deep protective bond treatment."
        },
        duration: "2h30 – 3h00",
        price: "À partir de 145 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "contouring-hair",
        name: { fr: "Face Framing / Contouring Express", en: "Face Framing & Glow" },
        description: {
          fr: "Mise en lumière ciblée autour des contours du visage pour illuminer le teint instantanément.",
          en: "Targeted focal highlights placed around the facial contour to illuminate the complexion."
        },
        duration: "1h30",
        price: "À partir de 95 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "patine-gloss",
        name: { fr: "Gloss Brillance & Nuanceur", en: "Color Gloss & Toner" },
        description: {
          fr: "Ravive les reflets, neutralise les tonalités indésirables et apporte un éclat miroir durable.",
          en: "Revives color tones, neutralizes brassiness and delivers mirror-like radiant shine."
        },
        duration: "45 min",
        price: "À partir de 45 €",
        planityUrl: PLANITY_BOOKING_URL
      }
    ]
  },
  {
    id: "coloration",
    title: { fr: "Coloration", en: "Color Formulation" },
    description: {
      fr: "Formulations professionnelles haute tolérance, respectant la fibre capillaire pour des nuances profondes et durables.",
      en: "High-tolerance professional formulations respecting hair fiber for deep, multidimensional and lasting shades."
    },
    services: [
      {
        id: "coloration-racines",
        name: { fr: "Coloration Racines", en: "Root Color Touch-up" },
        description: {
          fr: "Application ciblée sur les repousses, couverture parfaite des cheveux blancs et reflets naturels.",
          en: "Precise root application, complete white hair coverage and natural luminous reflections."
        },
        duration: "1h15",
        price: "À partir de 55 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "coloration-totale",
        name: { fr: "Coloration Complète & Soin", en: "Full Head Color & Care" },
        description: {
          fr: "Changement de tonalité ou uniformisation des longueurs avec masque de soin réparateur scellant.",
          en: "Tone transformation or length homogenization with restorative sealing hair mask."
        },
        duration: "1h45",
        price: "À partir de 85 €",
        planityUrl: PLANITY_BOOKING_URL
      }
    ]
  },
  {
    id: "soins",
    title: { fr: "Soins & Rituels Profonds", en: "Deep Hair Rituals" },
    description: {
      fr: "Rituels de reconstruction interne et soins d'exception pour redonner force, souplesse et brillance aux cheveux sensibilisés.",
      en: "Internal restructuring and restorative rituals to bring resilience, suppleness, and glow back to sensitized hair."
    },
    services: [
      {
        id: "soin-tokyo",
        name: { fr: "Rituel Tokio Inkarami / Kératine", en: "Tokio Inkarami Deep Ritual" },
        description: {
          fr: "Soin professionnel en plusieurs étapes consolidant les chaînes d'acides aminés au cœur du cortex.",
          en: "Multi-step professional treatment repairing amino acid chains deep inside the hair cortex."
        },
        duration: "1h00",
        price: "À partir de 110 €",
        planityUrl: PLANITY_BOOKING_URL
      },
      {
        id: "soin-hydratation",
        name: { fr: "Rituel Nutrition & Cuir Chevelu", en: "Scalp & Moisture Infusion" },
        description: {
          fr: "Gommage doux du cuir chevelu, massage crânien relaxant et masque hydro-nutritif.",
          en: "Gentle scalp exfoliating polish, relaxing cranial massage and deep hydro-nutritive mask."
        },
        duration: "40 min",
        price: "À partir de 45 €",
        planityUrl: PLANITY_BOOKING_URL
      }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "look-1",
    title: { fr: "Carré Français Ondulé & Texturé", en: "Textured French Bob & Wave" },
    category: "coupes",
    categoryLabel: { fr: "Coupe & Texture", en: "Cut & Texture" },
    image: "/src/assets/images/hero_hair_editorial_1791727983965.jpg",
    details: {
      fr: "Coupe au carré mi-long texturée au rasoir pour libérer les ondulations naturelles. Séchage au diffuseur.",
      en: "Razor-textured mid-length bob to liberate natural waves. Styled with gentle diffuser drying."
    },
    aspect: "aspect-[16/10]"
  },
  {
    id: "look-2",
    title: { fr: "Balayage Miel & Brun Lumineux", en: "Honey Caramel Balayage" },
    category: "couleurs",
    categoryLabel: { fr: "Balayage", en: "Balayage" },
    image: "/src/assets/images/portfolio_balayage_brunette_1791728008684.jpg",
    details: {
      fr: "Balayage fondu en micro-mèches et patine dorée chaude. Préservation maximale de la fibre capillaire.",
      en: "Seamless micro-blend balayage with warm golden gloss. Maximum preservation of hair elasticity."
    },
    aspect: "aspect-[3/4]"
  },
  {
    id: "look-3",
    title: { fr: "Coupe Courte Graphique & Frange", en: "Graphic Textured Pixie Crop" },
    category: "coupes",
    categoryLabel: { fr: "Coupe Graphique", en: "Graphic Cut" },
    image: "/src/assets/images/portfolio_cut_texture_1791728017971.jpg",
    details: {
      fr: "Lignes affirmées et effilage doux sur le dessus pour un coiffage polyvalent et un porté naturel au quotidien.",
      en: "Structured silhouettes softened on top for versatile daily wear and effortless styling."
    },
    aspect: "aspect-[3/4]"
  },
  {
    id: "look-4",
    title: { fr: "L'Atmosphère de l'Atelier Paris 11", en: "The Paris 11 Studio Atmosphere" },
    category: "studio",
    categoryLabel: { fr: "L'Atelier", en: "The Studio" },
    image: "/src/assets/images/salon_interior_studio_1791727997059.jpg",
    details: {
      fr: "Murs à la chaux ivoire, miroirs cintrés en laiton et postes en chêne massif dans le 11ème arrondissement.",
      en: "Ivory lime-washed walls, arched brass mirrors and solid oak stations in Paris 11th district."
    },
    aspect: "aspect-[4/3]"
  },
  {
    id: "look-5",
    title: { fr: "Artisanat & Matières Végétales", en: "Craftsmanship & Natural Materials" },
    category: "textures",
    categoryLabel: { fr: "Matières & Rituels", en: "Materials & Care" },
    image: "/src/assets/images/craft_details_shears_1791728029065.jpg",
    details: {
      fr: "Ciseaux de précision japonais en acier forgé, peigne en corne véritable et élixir botanique nourrissant.",
      en: "Hand-forged Japanese precision shears, horn comb, and nourishing botanical hair elixir."
    },
    aspect: "aspect-[4/3]"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "vee",
    name: "Vee",
    role: {
      fr: "Fondateur & Directeur Artistique",
      en: "Founder & Creative Director"
    },
    specialties: [
      { fr: "Coupes graphiques & déstructurées", en: "Graphic & effortless dry cuts" },
      { fr: "Diagnostic sur-mesure", en: "Bespoke morphological consultation" },
      { fr: "Styling éditorial", en: "Editorial & organic hair styling" }
    ],
    bio: {
      fr: "Fondateur du salon en 2013 au 64 rue Jean-Pierre Timbaud, Vee a bâti un espace indépendant dédié à une vision libre, contemporaine et personnalisée du cheveu.",
      en: "Founder of the studio in 2013 on rue Jean-Pierre Timbaud, Vee created an independent space dedicated to a free, modern and personalized hair vision."
    },
    photo: "/src/assets/images/portfolio_cut_texture_1791728017971.jpg"
  },
  {
    id: "studio-artists",
    name: "Les Coiffeurs & Coloristes de l'Atelier",
    role: {
      fr: "Artisans Coiffeurs Résidents",
      en: "Resident Hair Artists & Colorists"
    },
    specialties: [
      { fr: "Balayages fondus & patines sur-mesure", en: "Seamless balayage & tailored gloss" },
      { fr: "Textures frisées, bouclées et ondulées", en: "Curly, textured and wavy cuts" },
      { fr: "Rituels de soin Tokio Inkarami", en: "Tokio Inkarami deep hair rituals" }
    ],
    bio: {
      fr: "Une équipe soudée de passionnés qui partagent la même exigence technique et le même sens de l'écoute. Chaque coiffeur est sélectionnable individuellement sur Planity.",
      en: "A collaborative collective of dedicated stylists who share the same technical standard and attentive ear. Each stylist can be selected individually on Planity."
    },
    photo: "/src/assets/images/portfolio_balayage_brunette_1791728008684.jpg"
  }
];
