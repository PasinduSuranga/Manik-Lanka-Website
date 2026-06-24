"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ════════════════════════════════════════════════════════════
   SVG ICONS
════════════════════════════════════════════════════════════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcoMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.29 6.29l1.1-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IcoChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IcoQuestion = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IcoWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const IcoClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   DATA — exact same content as before
════════════════════════════════════════════════════════════ */
const faqs = [
  {
    question: 'How do I book a tour package?',
    answer: 'You can book a tour package by browsing our Packages page, selecting your preferred tour, and clicking "Contact Us". Our team will get in touch with you to finalize the booking details, answer any questions, and arrange payment. You can also call us directly or send us an email with your tour preference.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: "We accept multiple payment methods including credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. A deposit is typically required to confirm your booking, with the balance due before the tour starts. We'll provide detailed payment instructions once you contact us.",
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 30 days or more before the tour start date receive a full refund minus a 10% administrative fee. Cancellations made 15–29 days before receive a 50% refund. Cancellations made less than 14 days before the tour are non-refundable. We recommend purchasing travel insurance to protect your investment.',
  },
  {
    question: 'Are meals and accommodations included in the package price?',
    answer: 'Most of our packages include accommodations and breakfast. Some packages also include lunch and dinner, which will be clearly specified in the tour details. All accommodations are carefully selected for comfort, cleanliness, and location. Specific dietary requirements can be accommodated with advance notice.',
  },
  {
    question: 'Do I need a visa to visit Sri Lanka?',
    answer: 'Most visitors to Sri Lanka require a visa or Electronic Travel Authorization (ETA). The requirements vary by nationality. Citizens of many countries can obtain an ETA online before arrival. We recommend checking the official Sri Lankan immigration website or contacting your local embassy for the most current visa requirements. Our team can provide guidance but cannot process visas on your behalf.',
  },
];

const contacts = [
  {
    Icon: IcoMail,
    label: 'Email Support',
    sub: 'Send us an email anytime',
    value: 'mlankaholidays@gmail.com',
    href: 'mailto:mlankaholidays@gmail.com',
    hours: '24 / 7 response',
  },
  {
    Icon: IcoPhone,
    label: 'Phone Support',
    sub: 'Speak to an expert directly',
    value: '+94 77 767 3814',
    href: 'tel:+94777673814',
    hours: 'Mon–Fri, 9am–5:30pm',
  },
  {
    Icon: IcoWhatsApp,
    label: 'WhatsApp',
    sub: 'Quick responses, fast help',
    value: 'Message Us',
    href: 'https://wa.me/94777673814',
    hours: 'Quick responses',
  },
];

/* ════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER HOOK
════════════════════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function HelpClient() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const contactReveal = useReveal();
  const faqReveal = useReveal();
  const ctaReveal = useReveal();

  useEffect(() => { setHasAnimated(true); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — help.jpg, cinematic, bottom-anchored text
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          src="/images/help.jpg"
          alt="Manik Lanka Holidays Support and FAQ"
          className="absolute inset-0 w-full h-full object-cover help-hero-img"
          style={{ filter: 'brightness(0.68) saturate(1.05)' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-18 ${hasAnimated ? 'help-hero-text' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Manik Lanka Holidays</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}
          >
            How Can We
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#E67E22]">
              Help You?
            </span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            Find answers to frequently asked questions about our tours and services.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-8 sm:right-14 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white help-scroll-line" />
          <span className="text-white text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT QUICK-ACCESS — 3 cards on clean bg
          My thought: surface the contact methods FIRST so
          tourists who are frustrated can reach help instantly
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#FDFCFA]" ref={contactReveal.ref}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Get In Touch</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314]">
              Reach Us <span className="text-[#8B5E0A]">Anytime</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/50 p-7 hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-500 relative overflow-hidden help-contact-card"
                style={{ animationDelay: `${i * 110}ms`, animationPlayState: contactReveal.visible ? 'running' : 'paused' }}
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-12 h-12 rounded-2xl bg-[#FDF4E7] border border-[#F39C12]/20 group-hover:border-[#F39C12]/50 group-hover:bg-[#FEF0DC] flex items-center justify-center text-[#8B5E0A] mb-5 transition-all duration-300 group-hover:scale-110">
                  <c.Icon />
                </div>

                <div className="w-8 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] mb-4 group-hover:w-12 transition-all duration-400" />

                <h3 className="font-bold text-[#3D2314] text-base mb-1">{c.label}</h3>
                <p className="text-[#6B5744]/70 text-xs mb-3">{c.sub}</p>
                <p className="text-[#8B5E0A] font-semibold text-sm group-hover:text-[#F39C12] transition-colors duration-300">{c.value}</p>

                <div className="flex items-center gap-1.5 mt-3 text-[#B8A090] text-xs">
                  <IcoClock />
                  {c.hours}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ CARDS — 2-col grid, warm gradient bg
          My thought: cards let tourists scan all questions
          at a glance — far more tourist-friendly than
          accordion-hunting. Clean bg keeps reading easy.
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F5EFE6] to-[#FDFCFA]" ref={faqReveal.ref}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Common Questions</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2314] mb-4">
              Frequently Asked <span className="text-[#8B5E0A]">Questions</span>
            </h2>
            <p className="text-[#6B5744]/75 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Everything you need to know before booking your Sri Lanka adventure.
            </p>
          </div>

          {/* FAQ card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/50 p-7 hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-500 relative overflow-hidden help-faq-item"
                style={{ animationDelay: `${i * 90}ms`, animationPlayState: faqReveal.visible ? 'running' : 'paused' }}
              >
                {/* Gold top accent slide-in */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Number badge */}
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F39C12]/15 to-[#E67E22]/10 border border-[#F39C12]/25 flex items-center justify-center text-[#8B5E0A] text-sm font-bold mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Gold accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] mb-4 group-hover:w-12 transition-all duration-400" />

                <h3 className="font-bold text-[#3D2314] text-base sm:text-lg mb-3 leading-snug">{faq.question}</h3>
                <p className="text-[#6B5744]/80 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STILL HAVE QUESTIONS? — beach image (intelligent use)
          Only this section uses a full-bleed bg image
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden" ref={ctaReveal.ref}>
        <div className="absolute inset-0">
          <img src="/images/beachImage.jpg" alt="Sri Lanka beach" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <div className={ctaReveal.visible ? 'help-fade-up' : 'opacity-0'}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F5B041]" />
              <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">We're Here For You</span>
              <div className="w-8 h-px bg-[#F5B041]" />
            </div>

            {/* Icon badge */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F39C12]/30 to-[#E67E22]/20 border border-[#F39C12]/40 backdrop-blur-md flex items-center justify-center text-[#F5B041] mx-auto mb-6">
              <IcoQuestion />
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}
            >
              Still Have
              <br />
              <span className="text-[#F5B041]">Questions?</span>
            </h2>
            <p className="text-white/78 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              If you couldn't find the answer you're looking for, our friendly team is here to help. Contact us directly and we'll get back to you as soon as possible.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contactus"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base"
              >
                Contact Us
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
              </Link>
              <a
                href="tel:+94777673814"
                className="group inline-flex items-center gap-2.5 border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                <IcoPhone />
                Call: +94 77 767 3814
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GLOBAL STYLES
      ══════════════════════════════════════════════════════ */}
      <style>{`
        /* Hero image fade-in */
        @keyframes helpHeroFade {
          0%  { opacity: 0; }
          100%{ opacity: 1; }
        }
        .help-hero-img { animation: helpHeroFade 1.2s ease both; }

        /* Hero text */
        @keyframes helpHeroText {
          0%  { opacity:0; transform:translateY(28px); }
          100%{ opacity:1; transform:translateY(0); }
        }
        .help-hero-text { animation: helpHeroText 1s cubic-bezier(0.22,1,0.36,1) both; }

        /* Scroll line */
        @keyframes helpScrollLine {
          0%,100%{ opacity:0.3; }
          50%    { opacity:0.8; }
        }
        .help-scroll-line { animation: helpScrollLine 2s ease-in-out infinite; }

        /* Contact cards */
        @keyframes helpContactCard {
          0%  { opacity:0; transform:translateY(20px); }
          100%{ opacity:1; transform:translateY(0); }
        }
        .help-contact-card {
          animation: helpContactCard 0.65s cubic-bezier(0.22,1,0.36,1) both;
          animation-play-state: paused;
        }

        /* FAQ items */
        @keyframes helpFaqItem {
          0%  { opacity:0; transform:translateX(-14px); }
          100%{ opacity:1; transform:translateX(0); }
        }
        .help-faq-item {
          animation: helpFaqItem 0.55s cubic-bezier(0.22,1,0.36,1) both;
          animation-play-state: paused;
        }

        /* CTA fade up */
        @keyframes helpFadeUp {
          0%  { opacity:0; transform:translateY(24px); }
          100%{ opacity:1; transform:translateY(0); }
        }
        .help-fade-up { animation: helpFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) both; }

        /* Mobile */
        @media (max-width:767px) {
          .help-hero-img { animation-duration: 1s; }
        }
      `}</style>
    </div>
  );
}