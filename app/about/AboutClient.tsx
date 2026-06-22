"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ════════════════════════════════════════════════════════════
   SVG ICONS — pure, monochrome, minimalist (no lucide/framer)
════════════════════════════════════════════════════════════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcoHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IcoGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IcoAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const IcoUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IcoCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IcoMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="10" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);
const IcoShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const values = [
  {
    Icon: IcoHeart,
    num: '01',
    title: 'Passion for Travel',
    description: 'We love what we do and it shows in every tour we organize. Every journey is crafted with genuine care.',
  },
  {
    Icon: IcoGlobe,
    num: '02',
    title: 'Local Expertise',
    description: "Deep knowledge of Sri Lanka's hidden gems, cultural treasures, and authentic off-the-beaten-path destinations.",
  },
  {
    Icon: IcoAward,
    num: '03',
    title: 'Quality Service',
    description: 'Committed to excellence in every aspect of your journey — from first inquiry to final farewell.',
  },
  {
    Icon: IcoUsers,
    num: '04',
    title: 'Customer First',
    description: 'Your satisfaction and memorable experience is our highest priority. We go above and beyond every time.',
  },
];

const stats = [
  { num: '10+', label: 'Years of Experience', Icon: IcoAward },
  { num: '5000+', label: 'Happy Travelers', Icon: IcoUsers },
  { num: '50+', label: 'Destinations Covered', Icon: IcoMap },
  { num: '100%', label: 'Safe & Reliable', Icon: IcoShield },
];

const whyChoose = [
  'Personalized & tailor-made travel experiences',
  'Professional local expertise & international service standards',
  'Luxury, adventure, cultural & family holiday packages',
  'Reliable transportation & experienced certified guides',
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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function AboutClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsReveal = useReveal();
  const storyReveal = useReveal();
  const valuesReveal = useReveal();
  const commitReveal = useReveal();

  useEffect(() => { setHasAnimated(true); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — existing aboutus.png, cinematic treatment
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[58vh] sm:h-[68vh] min-h-[460px] max-h-[750px] overflow-hidden">
        <img
          src="/images/aboutus.png"
          alt="About Manik Lanka Holidays — Sri Lanka Travel Experts"
          className="absolute inset-0 w-full h-full object-cover about-hero-img"
          style={{ filter: 'brightness(0.72) saturate(1.05)' }}
          loading="eager"
        />
        {/* Cinematic layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        {/* Warm golden orb */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        {/* Text — bottom anchored */}
        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-18 ${hasAnimated ? 'about-hero-text' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Manik Lanka Holidays</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}
          >
            About Us
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#E67E22]">
              Our Story
            </span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            Creating unforgettable travel experiences across Sri Lanka for over a decade.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-8 sm:right-14 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white about-scroll-line" />
          <span className="text-white text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS STRIP — clean warm bg, 4 animated counters
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#FDFCFA]" ref={statsReveal.ref}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 md:divide-x divide-[#E8D5B5]">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`group relative px-0 md:px-10 py-10 md:py-0 border-b md:border-b-0 border-[#E8D5B5] last:border-b-0 flex flex-col items-center md:items-start text-center md:text-left about-stat-reveal`}
                style={{ animationDelay: `${i * 120}ms`, animationPlayState: statsReveal.visible ? 'running' : 'paused' }}
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 border border-[#F39C12]/30 flex items-center justify-center mb-4 text-[#B8730A] group-hover:scale-110 group-hover:border-[#F39C12]/60 transition-all duration-400">
                  <s.Icon />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#8B5E0A] mb-1 tracking-tight">{s.num}</div>
                <div className="text-xs font-semibold text-[#B8730A] uppercase tracking-[0.15em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR STORY — text left, image-backed right half
          Intelligent image use: only the right half has the image
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" ref={storyReveal.ref}>
        {/* Full section bg image — heavy overlay so left text stays readable */}
        <div className="absolute inset-0">
          <img src="/images/sigiriya.jpg" alt="Sri Lanka heritage" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E05]/97 via-[#1A0E05]/88 to-[#1A0E05]/55 sm:to-[#1A0E05]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — text */}
            <div className={storyReveal.visible ? 'about-slide-in-left' : 'opacity-0'}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Manik Lanka Holidays
                <br />
                <span className="text-[#F5B041]">Discover Sri Lanka</span>
                <br />Beyond Expectations
              </h2>
              <div className="space-y-4 text-white/75 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Manik Lanka Holidays is a premier Sri Lankan travel company dedicated to creating exceptional and unforgettable travel experiences for visitors from around the world. Inspired by the natural beauty, rich heritage, and warm hospitality of Sri Lanka, we specialize in tailor-made tours, luxury holidays, cultural journeys, wildlife adventures, honeymoon escapes, and business travel solutions.
                </p>
                <p>
                  With a passion for excellence and personalized service, our experienced travel experts design unique itineraries that showcase the very best of the island — from ancient UNESCO heritage sites and misty hill country landscapes to pristine beaches and breathtaking wildlife encounters.
                </p>
              </div>

              {/* Why Choose */}
              <div className="mb-8">
                <p className="text-[#F5B041] font-semibold text-xs uppercase tracking-[0.15em] mb-4">Why Choose Us</p>
                <ul className="space-y-2.5">
                  {whyChoose.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F39C12]/20 border border-[#F39C12]/40 flex items-center justify-center text-[#F5B041] flex-shrink-0">
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — glassmorphism card over the visible landscape */}
            <div className={`flex flex-col gap-6 ${storyReveal.visible ? 'about-slide-in-right' : 'opacity-0'}`}>
              {/* Mission statement card */}
              <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-7 sm:p-9">
                <div className="w-8 h-px bg-[#F39C12] mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  At Manik Lanka Holidays, we are passionate about showcasing the beauty, culture, and hospitality of Sri Lanka to travelers from around the world. Our mission is to turn every journey into a meaningful story by connecting people, cultures, and unforgettable experiences.
                </p>
              </div>
              {/* Story card */}
              <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-7 sm:p-9">
                <div className="w-8 h-px bg-[#F39C12] mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">Our Story</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  With over a decade of experience, Manik Lanka Holidays was built by passionate travel enthusiasts to share the wonders of Sri Lanka with the world. What began as a small operation has grown into one of the island's most trusted travel companies, guiding thousands of travelers through ancient cities, pristine beaches, lush tea plantations, and wildlife sanctuaries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR VALUES — 4 cards, clean white minimal style
          matching Packages inclusionItems card aesthetic
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F5EFE6] to-[#FDFCFA]" ref={valuesReveal.ref}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section header */}
          <div className="text-center mb-14 sm:mb-18">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">What Drives Us</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2314] mb-4">
              Our <span className="text-[#8B5E0A]">Core Values</span>
            </h2>
            <p className="text-[#6B5744]/75 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              The principles that guide every tour we craft and every traveler we welcome.
            </p>
          </div>

          {/* 4 Cards — white, minimal, gold accent top border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/50 p-7 hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-500 about-value-card relative overflow-hidden"
                style={{
                  animationDelay: `${i * 110}ms`,
                  animationPlayState: valuesReveal.visible ? 'running' : 'paused',
                }}
              >
                {/* Gold top-border accent that grows on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Number index */}
                <div className="text-5xl font-extrabold text-[#F39C12]/15 leading-none mb-4 select-none group-hover:text-[#F39C12]/25 transition-colors duration-400">
                  {v.num}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#FDF4E7] border border-[#F39C12]/20 group-hover:border-[#F39C12]/50 group-hover:bg-[#FEF0DC] flex items-center justify-center text-[#8B5E0A] mb-5 transition-all duration-300 group-hover:scale-110">
                  <v.Icon />
                </div>

                {/* Gold accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] mb-4 group-hover:w-12 transition-all duration-400" />

                <h3 className="font-bold text-[#3D2314] mb-2 text-base sm:text-lg leading-snug">{v.title}</h3>
                <p className="text-[#6B5744]/75 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COMMITMENT — beach image background (intelligent)
          Only this section uses a full-bleed image
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden" ref={commitReveal.ref}>
        <div className="absolute inset-0">
          <img src="/images/beachImage.jpg" alt="Sri Lanka beach commitment" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <div className={commitReveal.visible ? 'about-fade-up' : 'opacity-0'}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F5B041]" />
              <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Our Promise</span>
              <div className="w-8 h-px bg-[#F5B041]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
              Our Commitment
              <br />
              <span className="text-[#F5B041]">to You</span>
            </h2>

            <p className="text-white/78 text-sm sm:text-base md:text-lg mb-5 max-w-2xl mx-auto leading-relaxed">
              We are committed to providing safe, reliable, and enriching travel experiences. Our professional guides are trained to ensure your safety while sharing their deep knowledge of Sri Lankan culture and history.
            </p>
            <p className="text-white/72 text-sm sm:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
              Every tour is carefully planned with attention to detail, ensuring comfortable accommodations, authentic local experiences, and seamless logistics. Your satisfaction is our success.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/packages"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base"
              >
                Start Your Journey
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
              </Link>
              <Link
                href="/contactus"
                className="group inline-flex items-center gap-2 border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GLOBAL STYLES
      ══════════════════════════════════════════════════════ */}
      <style>{`
        /* Hero image fade-in */
        @keyframes aboutHeroFade {
          0%  { opacity: 0; }
          100%{ opacity: 1; }
        }
        .about-hero-img {
          animation: aboutHeroFade 1.2s ease both;
        }

        /* Hero text entrance */
        @keyframes aboutHeroText {
          0%  { opacity: 0; transform: translateY(28px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .about-hero-text {
          animation: aboutHeroText 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Scroll line pulse */
        @keyframes aboutScrollLine {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.8; }
        }
        .about-scroll-line {
          animation: aboutScrollLine 2s ease-in-out infinite;
        }

        /* Stats reveal */
        @keyframes aboutStatReveal {
          0%  { opacity: 0; transform: translateY(20px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .about-stat-reveal {
          animation: aboutStatReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-play-state: paused;
        }

        /* Story slide in left */
        @keyframes aboutSlideInLeft {
          0%  { opacity: 0; transform: translateX(-32px); }
          100%{ opacity: 1; transform: translateX(0); }
        }
        .about-slide-in-left {
          animation: aboutSlideInLeft 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Story slide in right */
        @keyframes aboutSlideInRight {
          0%  { opacity: 0; transform: translateX(32px); }
          100%{ opacity: 1; transform: translateX(0); }
        }
        .about-slide-in-right {
          animation: aboutSlideInRight 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }

        /* Values card reveal */
        @keyframes aboutValueCard {
          0%  { opacity: 0; transform: translateY(22px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .about-value-card {
          animation: aboutValueCard 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-play-state: paused;
        }

        /* Commitment fade up */
        @keyframes aboutFadeUp {
          0%  { opacity: 0; transform: translateY(24px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .about-fade-up {
          animation: aboutFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .about-hero-img { animation-duration: 1s; }
        }
      `}</style>
    </div>
  );
}