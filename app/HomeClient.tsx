"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

const sigiriyaImage = '/images/sigiriya.jpg';
const beachImage = '/images/beachImage.jpg';
const wildLifeImage = '/images/wildLifeImage.jpg';
const foodImage = '/images/food.jpg';
const greenHillImage = '/images/nuwaraEliya.jpg';

/* ─── SVG Icons ─────────────────────────────────────────────────── */
const IconMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="10" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="15,18 9,12 15,6" />
  </svg>
);
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="9,18 15,12 9,6" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);

/* ─── Feature data ───────────────────────────────────────────────── */
const features = [
  {
    Icon: IconMap,
    label: 'Best Destinations',
    stat: '50+',
    desc: 'Curated journeys across UNESCO heritage sites, hill country, beaches & more',
  },
  {
    Icon: IconUsers,
    label: 'Expert Guides',
    stat: '200+',
    desc: 'Passionate local professionals delivering authentic island experiences',
  },
  {
    Icon: IconShield,
    label: 'Safe & Reliable',
    stat: '100%',
    desc: 'Internationally certified travel safety with dedicated 24/7 customer support',
  },
];

/* ─── Destinations ───────────────────────────────────────────────── */
const destinations = [
  {
    id: 1,
    name: 'Journey Through History',
    tag: 'Heritage',
    description: "Step into a world of timeless history amid Sri Lanka's ancient wonders and breathtaking heritage sites.",
    image: sigiriyaImage,
  },
  {
    id: 2,
    name: 'Green Hills',
    tag: 'Hill Country',
    description: "Breathe in the cool mist of Sri Lanka's hill country, surrounded by emerald tea estates and waterfalls.",
    image: greenHillImage,
  },
  {
    id: 3,
    name: 'Delicious Flavors',
    tag: 'Culinary',
    description: "Taste the bold spices and fresh ingredients that make Sri Lankan cuisine an adventure in itself.",
    image: foodImage,
  },
  {
    id: 4,
    name: 'Wildlife Adventures',
    tag: 'Safari',
    description: "Encounter leopards, elephants and exotic birds in their wild natural habitats across the island.",
    image: wildLifeImage,
  },
  {
    id: 5,
    name: 'Tropical Shores',
    tag: 'Beach',
    description: "Unwind along golden sands kissed by warm turquoise waters on some of Asia's finest coastlines.",
    image: beachImage,
  },
];

const whyChoose = [
  'Personalized & tailor-made travel experiences',
  'Professional local expertise & international service standards',
  'Luxury, adventure, cultural & family holiday packages',
  'Reliable transportation & experienced certified guides',
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function HomeClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { setHasAnimated(true); }, []);

  /* auto-play carousel */
  const startAutoPlay = useCallback(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % destinations.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [startAutoPlay]);

  const goTo = (idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((idx + destinations.length) % destinations.length);
    setTimeout(() => setIsTransitioning(false), 600);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    startAutoPlay();
  };

  /* drag / swipe for carousel */
  const onDragStart = (clientX: number) => { setIsDragging(true); setDragStart(clientX); };
  const onDragEnd = (clientX: number) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = dragStart - clientX;
    if (Math.abs(delta) > 50) goTo(currentIndex + (delta > 0 ? 1 : -1));
  };

  /* modal video */
  useEffect(() => {
    if (showVideoModal && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.play();
    }
    if (!showVideoModal && modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  }, [showVideoModal]);

  /* keyboard for modal */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowVideoModal(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO – Full-screen video
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Video */}
        <video
          ref={heroVideoRef}
          src="/videos/HomePageHero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover hero-video"
          style={{ filter: 'brightness(0.82)' }}
        />

        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Subtle golden warmth orb bottom-left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[350px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        {/* Hero text — bottom-anchored */}
        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-20 ${hasAnimated ? 'hero-text-reveal' : 'opacity-0'}`}>
          <div className="max-w-3xl">
            {/* Thin gold accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
              <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Premier Sri Lanka Travel</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-5"
              style={{ textShadow: '0 2px 24px rgba(0,0,0,0.75)' }}>
              Experience the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#E67E22]">
                Magic of Sri Lanka
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl font-light tracking-wide"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
              Tailor-made journeys crafted with passion — from ancient heritage to pristine shores.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="/packages"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base">
                Explore Packages
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
              </a>

              {/* Watch Video button */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="group inline-flex items-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 backdrop-blur-md text-white font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-[#F39C12]/80 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <IconPlay />
                </span>
                Watch the Film
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-8 sm:right-14 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white scroll-line" />
          <span className="text-white text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURE STRIPS — minimalist numbered cards over clean bg
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 bg-[#FDFCFA]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-[#E8D5B5]">
            {features.map((f, i) => (
              <div key={i}
                className="group relative px-0 md:px-10 py-10 md:py-0 border-b md:border-b-0 border-[#E8D5B5] last:border-b-0 flex flex-col items-center md:items-start text-center md:text-left feature-card-reveal"
                style={{ animationDelay: `${i * 150}ms` }}>
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 border border-[#F39C12]/30 flex items-center justify-center mb-5 text-[#B8730A] group-hover:from-[#F39C12]/40 group-hover:to-[#E67E22]/20 group-hover:border-[#F39C12]/60 group-hover:scale-110 transition-all duration-400">
                  <f.Icon />
                </div>
                {/* Stat */}
                <div className="text-4xl font-bold text-[#8B5E0A] mb-1 tracking-tight">{f.stat}</div>
                <div className="text-sm font-semibold text-[#B8730A] uppercase tracking-[0.15em] mb-3">{f.label}</div>
                <p className="text-sm text-[#6B5744]/80 leading-relaxed max-w-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT SECTION — image bg on left half, text on right
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Full-width background image with overlay — only this section */}
        <div className="absolute inset-0">
          <img src={sigiriyaImage} alt="Sri Lanka heritage" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E05]/95 via-[#1A0E05]/85 to-[#1A0E05]/70 sm:to-[#1A0E05]/50" />
          {/* Extra overlay for mobile readability */}
          <div className="absolute inset-0 bg-[#1A0E05]/30 sm:bg-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="max-w-2xl ml-auto md:ml-0 lg:max-w-xl xl:max-w-2xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">About Us</span>
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
                With a passion for excellence and personalized service, our experienced travel experts design unique itineraries that showcase the very best of the island — from ancient UNESCO heritage sites and misty hill country landscapes to pristine beaches and breathtaking wildlife encounters. Our commitment is to deliver seamless, safe, and authentic travel experiences that exceed international standards.
              </p>
              <p>
                At Manik Lanka Holidays, we believe that every journey should be as unique as the traveler. Through professional planning, reliable transportation, carefully selected accommodations, and dedicated customer support, we transform every holiday into a lifetime memory.
              </p>
            </div>

            {/* Why Choose */}
            <div className="mb-8">
              <p className="text-[#F5B041] font-semibold text-sm uppercase tracking-[0.15em] mb-4">Why Choose Us</p>
              <ul className="space-y-2.5">
                {whyChoose.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F39C12]/20 border border-[#F39C12]/40 flex items-center justify-center text-[#F5B041] flex-shrink-0">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a href="/about"
              className="group inline-flex items-center gap-2 border border-[#F39C12]/60 hover:border-[#F39C12] text-[#F5B041] hover:text-white hover:bg-[#F39C12]/20 px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium">
              Learn More About Us
              <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DESTINATIONS CAROUSEL — smooth horizontal slide
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FDF8F2] to-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Explore Sri Lanka</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2314]">
                Top Sri Lankan<br />
                <span className="text-[#8B5E0A]">Experiences</span>
              </h2>
            </div>
            <p className="text-sm text-[#6B5744]/80 max-w-xs leading-relaxed">
              Discover must-see places, cultural wonders, and unforgettable flavors across the island.
            </p>
          </div>

          {/* Carousel viewport */}
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-grab active:cursor-grabbing select-none"
            style={{ height: 'clamp(340px, 60vw, 580px)' }}
            onMouseDown={e => onDragStart(e.clientX)}
            onMouseUp={e => onDragEnd(e.clientX)}
            onMouseLeave={e => { if (isDragging) onDragEnd(e.clientX); }}
            onTouchStart={e => onDragStart(e.touches[0].clientX)}
            onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
          >
            {/* Slides */}
            {destinations.map((dest, i) => {
              const offset = i - currentIndex;
              const total = destinations.length;
              const normalized = ((offset % total) + total) % total;
              const pos = normalized > total / 2 ? normalized - total : normalized;
              return (
                <div
                  key={dest.id}
                  className="absolute inset-0 carousel-slide"
                  style={{
                    transform: `translateX(${pos * 100}%)`,
                    opacity: pos === 0 ? 1 : 0,
                    zIndex: pos === 0 ? 10 : 0,
                    transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.65s ease',
                    willChange: 'transform, opacity',
                  }}
                  onClick={() => pos !== 0 && goTo(i)}
                >
                  {/* Image */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.78) saturate(1.2)' }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-12 max-w-xl">
                    <span className="inline-block border border-[#F39C12]/60 text-[#F5B041] text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3 sm:mb-4">
                      {dest.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
                      {dest.name}
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm hidden xs:block">
                      {dest.description}
                    </p>
                  </div>

                  {/* Slide counter */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-8 text-white/50 text-xs sm:text-sm font-mono">
                    {String(i + 1).padStart(2, '0')} / {String(destinations.length).padStart(2, '0')}
                  </div>
                </div>
              );
            })}

            {/* Left / Right nav arrows inside carousel */}
            <button
              onClick={e => { e.stopPropagation(); goTo(currentIndex - 1); }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
              <IconChevronLeft />
            </button>
            <button
              onClick={e => { e.stopPropagation(); goTo(currentIndex + 1); }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
              <IconChevronRight />
            </button>
          </div>

          {/* Dot indicators + progress bar */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative rounded-full overflow-hidden transition-all duration-500"
                style={{ width: i === currentIndex ? '40px' : '10px', height: '10px' }}>
                <span className={`absolute inset-0 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-gradient-to-r from-[#F39C12] to-[#E67E22]' : 'bg-[#8B5E0A]/25 hover:bg-[#8B5E0A]/50'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PHOTO GALLERY STRIP — smooth horizontal infinite marquee
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#FDFCFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314]">A Glimpse of the Island</h2>
        </div>

        {/* Infinite scroll strip */}
        <div className="relative w-full overflow-hidden">
          <div className="gallery-track flex gap-3 sm:gap-4" style={{ width: 'max-content' }}>
            {[...destinations, ...destinations].map((dest, i) => (
              <div
                key={i}
                className="gallery-card flex-shrink-0 relative overflow-hidden rounded-xl sm:rounded-2xl group"
                style={{ height: '160px' }}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ filter: 'brightness(0.85) saturate(1.15)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-2 group-hover:translate-y-0 transform transition-transform duration-400">
                  <span className="text-white font-semibold text-sm">{dest.name}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FDFCFA] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FDFCFA] to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA SECTION — beach image background
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={beachImage} alt="Sri Lanka beach" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Start Your Journey</span>
            <div className="w-8 h-px bg-[#F5B041]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            Ready to Start<br />
            <span className="text-[#F5B041]">Your Adventure?</span>
          </h2>
          <p className="text-base sm:text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Browse our curated tours and craft the Sri Lankan experience you've always dreamed of.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/packages"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base">
              View All Packages
              <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
            </a>
            <a href="/contactus"
              className="group inline-flex items-center gap-2 border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIDEO MODAL
      ══════════════════════════════════════════════════════ */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-0 sm:p-6 md:p-8 bg-black/95 sm:bg-black/90 backdrop-blur-sm video-modal-in"
          onClick={() => setShowVideoModal(false)}>
          <div
            className="relative w-full sm:max-w-5xl sm:rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <video
              ref={modalVideoRef}
              src="/videos/HomePageHero.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video bg-black"
            />
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10">
              <IconX />
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          GLOBAL STYLES
      ══════════════════════════════════════════════════════ */}
      <style>{`
        /* Hero text entrance */
        @keyframes heroTextIn {
          0%  { opacity: 0; transform: translateY(28px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .hero-text-reveal {
          animation: heroTextIn 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Feature card entrance */
        @keyframes featureCardIn {
          0%  { opacity: 0; transform: translateY(24px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .feature-card-reveal {
          animation: featureCardIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Scroll line pulse */
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 0.8; transform: scaleY(1.15); }
        }
        .scroll-line {
          animation: scrollLine 2s ease-in-out infinite;
        }

        /* Gallery card responsive width */
        .gallery-card {
          width: 220px;
        }
        @media (min-width: 480px) {
          .gallery-card { width: 260px; }
        }
        @media (min-width: 768px) {
          .gallery-card { width: 320px; height: 200px !important; }
        }

        /* Gallery infinite marquee */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-track {
          animation: marquee 25s linear infinite;
        }
        @media (min-width: 768px) {
          .gallery-track { animation-duration: 30s; }
        }
        .gallery-track:hover {
          animation-play-state: paused;
        }

        /* Video modal entrance */
        @keyframes modalIn {
          0%  { opacity: 0; transform: scale(0.96); }
          100%{ opacity: 1; transform: scale(1); }
        }
        .video-modal-in {
          animation: modalIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Float animations for decorative orbs */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          33%       { transform: translateY(-20px) translateX(12px); }
          66%       { transform: translateY(-10px) translateX(-12px); }
        }

        /* Hero video — no scale on mobile (avoids GPU lag) */
        .hero-video {
          transform: scale(1.05);
        }
        @media (max-width: 767px) {
          .hero-video {
            transform: scale(1);
          }
          /* Reduce blur-heavy decorative elements on mobile */
          .blur-3xl {
            filter: blur(40px);
          }
        }

        /* xs breakpoint helper */
        @media (min-width: 400px) {
          .xs\:block { display: block; }
          .xs\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        }
      `}</style>
    </div>
  );
}