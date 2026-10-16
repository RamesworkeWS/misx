import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Send,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  Mail,
  ArrowUpRight
} from 'lucide-react';
import {
  SALON_DATA,
  SALON_ADDRESS,
  SALON_MAPS_URL,
  PLANITY_BOOKING_URL
} from '../data/salonData';

interface PracticalInfoProps {
  currentLang: 'fr' | 'en';
}

export const PracticalInfo: React.FC<PracticalInfoProps> = ({ currentLang }) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [preparedEmailUrl, setPreparedEmailUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const content = {
    fr: {
      chapter: "Informations Pratiques & Contact",
      title: "Venir au salon & nous écrire.",
      subtitle: "Situé au cœur du 11ème arrondissement de Paris, le salon vous accueille du mardi au samedi sur rendez-vous.",
      addressLabel: "Adresse de l'atelier",
      metroLabel: "Accès transports",
      hoursLabel: "Horaires d'ouverture",
      phoneLabel: "Téléphone",
      mapsBtn: "Ouvrir l'itinéraire Google Maps",
      bookBtn: "Prendre rendez-vous en ligne",
      formTitle: "Envoyer un message à l'équipe",
      formDesc: "Une question spécifique sur votre cheveu, un devis sur-mesure ou un projet particulier ? Écrivez-nous.",
      namePlaceholder: "Votre nom complet",
      emailPlaceholder: "Votre adresse e-mail",
      messagePlaceholder: "Votre message (précisez vos envies, la longueur de vos cheveux ou votre question)...",
      submitBtn: "Préparer mon message direct",
      noticeNoBackend: "Envoi direct transparent : aucun serveur intermédiaire ne stocke vos coordonnées. Votre message est formaté directement pour votre logiciel de messagerie habituel.",
      preparedSuccess: "Votre message a été vérifié et formaté avec succès.",
      openEmailApp: "Transmettre via ma messagerie",
      copyText: "Copier le texte rédigé",
      copiedText: "Texte copié dans le presse-papiers !",
      errorName: "Veuillez renseigner votre nom (au moins 2 caractères).",
      errorEmail: "Veuillez saisir une adresse e-mail valide.",
      errorMessage: "Veuillez rédiger un message d'au moins 10 caractères.",
    },
    en: {
      chapter: "Practical Info & Contact",
      title: "Visit the studio & get in touch.",
      subtitle: "Located in the heart of Paris 11th district, our salon welcomes you from Tuesday to Saturday by appointment.",
      addressLabel: "Studio Address",
      metroLabel: "Metro & Transport",
      hoursLabel: "Opening Hours",
      phoneLabel: "Telephone",
      mapsBtn: "Open Google Maps directions",
      bookBtn: "Book an appointment online",
      formTitle: "Send a message to the studio",
      formDesc: "Have a specific question about your hair, a bespoke color consultation, or a special project? Send us a message.",
      namePlaceholder: "Your full name",
      emailPlaceholder: "Your email address",
      messagePlaceholder: "Your message (describe your hair texture, desired cut or inquiry)...",
      submitBtn: "Prepare my direct message",
      noticeNoBackend: "Transparent direct messaging: no intermediary database stores your details. Your email is formatted directly for your mail client.",
      preparedSuccess: "Your message was validated and formatted successfully.",
      openEmailApp: "Send with my email app",
      copyText: "Copy drafted message",
      copiedText: "Message copied to clipboard!",
      errorName: "Please enter your name (at least 2 characters).",
      errorEmail: "Please provide a valid email address.",
      errorMessage: "Please write a message of at least 10 characters.",
    }
  }[currentLang];

  const handleValidateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = content.errorName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = content.errorEmail;
    }
    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = content.errorMessage;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const subject = encodeURIComponent(`Demande d'information MISX - ${name.trim()}`);
      const body = encodeURIComponent(
        `Bonjour l'équipe MISX,\n\nNom: ${name.trim()}\nEmail de contact: ${email.trim()}\n\nMessage:\n${message.trim()}\n\n---\nEnvoyé depuis le site de MISX`
      );
      const mailtoUrl = `mailto:contact@vee-hair.com?subject=${subject}&body=${body}`;
      setPreparedEmailUrl(mailtoUrl);
    } else {
      setPreparedEmailUrl(null);
    }
  };

  const handleCopy = () => {
    const textToCopy = `Demande MISX\nDe: ${name} (${email})\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F0E8] border-b border-[#282521]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
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

        {/* 2-Column Split: Info & Location / Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Address, Hours, Metro, Maps Action */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address & Metro */}
            <div className="p-6 bg-white border border-[#282521]/10 rounded-xs space-y-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#81796F] block mb-1">
                  {content.addressLabel}
                </span>
                <p className="text-lg font-serif text-[#282521]">
                  MISX
                </p>
                <p className="text-sm text-[#282521] font-medium mt-0.5">
                  {SALON_DATA.address.street}
                </p>
                <p className="text-sm text-[#81796F]">
                  {SALON_DATA.address.city}
                </p>
              </div>

              <div className="pt-3 border-t border-[#282521]/10">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#81796F] block mb-1">
                  {content.metroLabel}
                </span>
                <p className="text-xs text-[#282521] leading-relaxed">
                  {SALON_DATA.address.metro[currentLang]}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={SALON_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#282521] border border-[#282521]/30 hover:border-[#282521] hover:bg-[#F5F0E8] transition-colors rounded-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#81796F]" />
                  <span>{content.mapsBtn}</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 bg-white border border-[#282521]/10 rounded-xs space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#81796F] block">
                {content.hoursLabel}
              </span>

              <div className="space-y-2 text-xs">
                {SALON_DATA.hours.map((h, i) => {
                  const timeSpanStyle: React.CSSProperties =
                    i === 0 || i === 1 ? { fontFamily: "'Cal Sans', sans-serif" } : {};

                  return (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-[#282521]/5 last:border-b-0">
                      <span className="text-[#282521] font-medium">
                        {h.day[currentLang]}
                      </span>
                      <span style={timeSpanStyle} className="text-[#81796F] font-mono tabular-nums">
                        {typeof h.time === 'string' ? h.time : h.time[currentLang]}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-[#81796F] pt-2 italic">
                {SALON_DATA.phoneAvailableNote[currentLang]}
              </p>
            </div>

            {/* Direct Planity Shortcut */}
            <div className="p-6 bg-[#282521] text-white rounded-xs space-y-3">
              <h4
                style={{
                  fontSize: '23px',
                  fontWeight: 'bold',
                  fontFamily: "'Cactus Classical Serif', serif",
                }}
                className="text-base"
              >
                {currentLang === 'fr' ? 'Réservation Instantanée 24/7' : 'Instant 24/7 Online Booking'}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                {currentLang === 'fr'
                  ? 'Accédez en direct aux créneaux disponibles de chaque coiffeur sur Planity.'
                  : 'Access real-time available slots for each stylist on Planity.'}
              </p>
              <a
                href={PLANITY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: '15px' }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#282521] bg-white hover:bg-[#F5F0E8] transition-colors"
              >
                <span>{content.bookBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Accessible Contact Form with Honest Fallback */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 bg-white border border-[#282521]/10 rounded-xs shadow-sm">
              <h3 className="text-2xl font-serif text-[#282521] mb-2">
                {content.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#81796F] mb-6 leading-relaxed">
                {content.formDesc}
              </p>

              <form onSubmit={handleValidateForm} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-medium text-[#282521] mb-1.5">
                    {currentLang === 'fr' ? 'Nom et prénom' : 'Full name'} <span className="text-[#81796F]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder={content.namePlaceholder}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F0E8]/40 border rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#282521] transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#282521]/20'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="error-name" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-medium text-[#282521] mb-1.5">
                    {currentLang === 'fr' ? 'Adresse email' : 'Email address'} <span className="text-[#81796F]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder={content.emailPlaceholder}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F0E8]/40 border rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#282521] transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#282521]/20'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="error-email" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-medium text-[#282521] mb-1.5">
                    {currentLang === 'fr' ? 'Votre message' : 'Your message'} <span className="text-[#81796F]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder={content.messagePlaceholder}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F0E8]/40 border rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#282521] transition-colors resize-y ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#282521]/20'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    required
                  />
                  {errors.message && (
                    <p id="error-message" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Honest transparency note */}
                <p className="text-[11px] text-[#81796F] italic leading-relaxed">
                  {content.noticeNoBackend}
                </p>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-[0.16em] uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors rounded-xs shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{content.submitBtn}</span>
                </button>
              </form>

              {/* Verified Result Card */}
              {preparedEmailUrl && (
                <div className="mt-6 p-5 bg-[#F5F0E8] border border-[#282521]/20 rounded-xs space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-start gap-2.5 text-xs text-[#282521]">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-900">
                        {content.preparedSuccess}
                      </p>
                      <p className="text-[11px] text-[#81796F] mt-0.5">
                        {currentLang === 'fr'
                          ? "Choisissez votre méthode d'envoi préférée :"
                          : "Choose your preferred dispatch method:"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={preparedEmailUrl}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#282521] hover:bg-[#3f3b35] transition-colors rounded-xs shadow-xs flex-1 text-center"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{content.openEmailApp}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium tracking-wider uppercase text-[#282521] border border-[#282521]/30 hover:bg-white transition-colors rounded-xs flex-1"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-emerald-800">{content.copiedText}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#81796F]" />
                          <span>{content.copyText}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
