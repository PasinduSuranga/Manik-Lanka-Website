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
const IcoClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IcoZoom = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const categories = ['All', 'Heritage', 'Nature', 'Wildlife', 'Beaches', 'Culture'];

const galleryData = [
  { id: 1, src: '/images/sigiriya.jpg', title: 'Sigiriya Rock Fortress', category: 'Heritage', span: 'tall' },
  { id: 2, src: '/images/nuwaraEliya.jpg', title: 'Nuwara Eliya Tea Plantations', category: 'Nature', span: 'wide' },
  { id: 3, src: '/images/wildLifeImage.jpg', title: 'Sri Lankan Wildlife', category: 'Wildlife', span: 'square' },
  { id: 4, src: '/images/beachImage.jpg', title: 'Pristine South Coast Beaches', category: 'Beaches', span: 'tall' },
  { id: 5, src: '/images/food.jpg', title: 'Authentic Sri Lankan Cuisine', category: 'Culture', span: 'square' },
  { id: 6, src: '/images/hero1.jpeg', title: 'Scenic Train Journeys', category: 'Nature', span: 'wide' },
  { id: 7, src: '/images/package1.jpg', title: 'Cultural Triangle Exploration', category: 'Heritage', span: 'square' },
  { id: 8, src: '/images/package2.jpg', title: 'Mountain Escapes', category: 'Nature', span: 'tall' },
  { id: 9, src: '/images/package3.jpg', title: 'Elephant Gathering', category: 'Wildlife', span: 'wide' },
  { id: 10, src: '/images/package4.jpg', title: 'Golden Sandy Shores', category: 'Beaches', span: 'square' },
  { id: 11, src: '/images/package5.jpg', title: 'Local Village Life', category: 'Culture', span: 'tall' },
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function GalleryClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<{ src: string, title: string } | null>(null);

  const galleryReveal = useReveal();
  const ctaReveal = useReveal();

  useEffect(() => { setHasAnimated(true); }, []);

  // Filter images based on category
  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === activeCategory);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxImg]);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — cinematic, bottom-anchored text
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          src="/images/wildLifeImage.jpg"
          alt="Sri Lanka Gallery"
          className="absolute inset-0 w-full h-full object-cover gallery-hero-img"
          style={{ filter: 'brightness(0.65) saturate(1.1)' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-8 sm:right-14 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white gallery-scroll-line" />
          <span className="text-white text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-16 ${hasAnimated ? 'gallery-hero-text' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Visual Journey</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-3"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}
          >
            Discover
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#E67E22]">
              Sri Lanka
            </span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-xl font-light leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            Explore the breathtaking landscapes, vibrant culture, and unforgettable moments captured by our travelers.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS STRIP — clean warm bg, no image
          My thought: orient tourists to what the gallery has
          before they start scrolling photos.
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 bg-[#FDFCFA] border-b border-[#F5EFE6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 md:divide-x divide-[#E8D5B5]">
            {[{num:'11+', label:'Stunning Photos'},{num:'6', label:'Categories'},{num:'10+', label:'Destinations'},{num:'100%', label:'Real Moments'}].map((s,i)=>(
              <div key={i} className="group px-0 md:px-10 py-8 md:py-0 border-b md:border-b-0 border-[#E8D5B5] last:border-b-0 flex flex-col items-center text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#8B5E0A] mb-1 tracking-tight">{s.num}</div>
                <div className="text-xs font-semibold text-[#B8730A] uppercase tracking-[0.15em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GALLERY SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FDFCFA] via-[#F5EFE6] to-[#FDFCFA]" ref={galleryReveal.ref}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header & Filters */}
          <div className={`flex flex-col items-center text-center mb-12 transition-all duration-700 ${galleryReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Our Memories</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] mb-8">Photo <span className="text-[#8B5E0A]">Gallery</span></h2>

            {/* Filter Pills with count badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const count = cat === 'All' ? galleryData.length : galleryData.filter(g => g.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-[#3D2314] text-white shadow-lg'
                        : 'bg-[#F5EFE6] text-[#8B5E0A] hover:bg-[#E8D5B5]'
                    }`}
                  >
                    {cat} <span className="opacity-50 ml-1">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className={`gallery-columns transition-all duration-1000 delay-200 ${galleryReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#F39C12]/12 transition-all duration-500 hover:-translate-y-1"
                onClick={() => setLightboxImg({ src: img.src, title: img.title })}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="w-full relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.07] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Cinematic overlay — subtle always, full on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E05]/65 via-[#1A0E05]/10 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Category chip — always visible top-left */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex px-2.5 py-1 bg-black/45 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded-lg border border-white/15">
                      {img.category}
                    </span>
                  </div>
                  {/* Zoom badge top-right on hover */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-400">
                    <IcoZoom />
                  </div>
                  {/* Title slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-6 h-0.5 bg-[#F39C12] mb-2" />
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{img.title}</h3>
                  </div>
                </div>
                {/* Gold bottom accent reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-[#6B5744]">
              <p>No images found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 sm:py-32 overflow-hidden" ref={ctaReveal.ref}>
        <div className="absolute inset-0">
          <img src="/images/sigiriya.jpg" alt="Sri Lanka Heritage" className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.5) saturate(1.1)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <div className={`transition-all duration-700 ${ctaReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F5B041]" />
              <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Your Turn</span>
              <div className="w-8 h-px bg-[#F5B041]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
              Ready to Create Your<br /><span className="text-[#F5B041]">Own Memories?</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Let our experts plan the perfect Sri Lankan journey for you. Experience the beauty you've seen in our gallery — firsthand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/inquiry" className="group inline-flex items-center gap-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#F39C12]/20 text-sm sm:text-base">
                Plan Your Trip
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
              </Link>
              <Link href="/packages" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LIGHTBOX MODAL
      ══════════════════════════════════════════════════════ */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setLightboxImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 z-[101]"
            onClick={() => setLightboxImg(null)}
          >
            <IcoClose />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold tracking-wide">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          GLOBAL STYLES
      ══════════════════════════════════════════════════════ */}
      <style>{`
        @keyframes galleryHeroFade { 0%{opacity:0} 100%{opacity:1} }
        .gallery-hero-img { animation: galleryHeroFade 1.2s ease both; }

        @keyframes galleryHeroText { 0%{opacity:0;transform:translateY(28px)} 100%{opacity:1;transform:translateY(0)} }
        .gallery-hero-text { animation: galleryHeroText 1s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes galleryScrollLine { 0%,100%{opacity:0.3} 50%{opacity:0.8} }
        .gallery-scroll-line { animation: galleryScrollLine 2s ease-in-out infinite; }

        /* CSS Masonry layout */
        .gallery-columns { column-count:1; column-gap:1.25rem; }
        @media (min-width:640px)  { .gallery-columns { column-count:2; } }
        @media (min-width:1024px) { .gallery-columns { column-count:3; } }

        .gallery-item { break-inside:avoid; margin-bottom:1.25rem; display:block; }
        .group-hover\:scale-108:hover { transform: scale(1.08); }

        /* Lightbox entrance */
        @keyframes galleryLightbox { 0%{opacity:0} 100%{opacity:1} }
        .gallery-lightbox { animation: galleryLightbox 0.25s ease both; }
        @keyframes galleryLightboxInner { 0%{opacity:0;transform:scale(0.96) translateY(8px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        .gallery-lightbox-inner { animation: galleryLightboxInner 0.3s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </div>
  );
}
