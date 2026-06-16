"use client";

import { useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { packagesData, tourCategories } from "@/app/data/packages";

/* ════════════════════════════════════════════════════════════
   SVG ICONS — all pure, monochrome, minimalist
════════════════════════════════════════════════════════════ */
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IconBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <polyline points="9,18 15,12 9,6" />
  </svg>
);
const IconMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

/* ── Minimalist category-specific SVG icons ─────────────────── */
const IconHeritage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
  </svg>
);
const IconWaves = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 2 .5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s2.5 2 5 2 2.5-2 5-2 2 .5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17s2.5 2 5 2 2.5-2 5-2 2 .5 2.5 1" />
  </svg>
);
const IconPaw = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
  </svg>
);
const IconMountain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);
const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
  </svg>
);

const categoryIcons: Record<number, React.ReactNode> = {
  1: <IconHeritage />,
  2: <IconWaves />,
  3: <IconPaw />,
  4: <IconMountain />,
  5: <IconCompass />,
};

/* ── Inclusion items with icons ─────────────────────────────── */
const inclusionItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Airport Reception',
    desc: 'Warm welcome & hassle-free pick-up on arrival',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'AC Transportation',
    desc: 'Comfortable air-conditioned vehicles throughout',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'Hotel Stays',
    desc: 'Carefully selected accommodations, twin sharing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'All Taxes Covered',
    desc: 'No hidden charges — all government taxes included',
  },
];

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function PackagesClient() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);
  const [catSearch, setCatSearch] = useState('');
  const [tourSearch, setTourSearch] = useState('');
  const topRef = useRef<HTMLDivElement>(null);

  const selectedCategoryData = tourCategories.find(cat => cat.id === selectedCategory);

  const filteredCategories = tourCategories.filter(cat =>
    cat?.name && cat?.description &&
    (
      cat.name.toLowerCase().includes(catSearch.toLowerCase()) ||
      cat.description.toLowerCase().includes(catSearch.toLowerCase())
    )
  );

  const filteredTours = selectedCategory
    ? packagesData
      .filter(pkg => pkg?.categoryId === selectedCategory)
      .filter(pkg =>
        pkg?.name && pkg?.shortDescription &&
        (
          pkg.name.toLowerCase().includes(tourSearch.toLowerCase()) ||
          pkg.shortDescription.toLowerCase().includes(tourSearch.toLowerCase())
        )
      )
    : [];

  const handleSelectCategory = (id: number) => {
    setSelectedCategory(id);
    setTourSearch('');
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setCatSearch('');
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  /* Hero image: categories view = packages.png, tours view = category's own image */
  const heroImage = selectedCategory ? selectedCategoryData?.image : '/images/packages.png';
  const heroAlt = selectedCategory ? selectedCategoryData?.name ?? 'Tour category' : 'Manik Lanka Holidays Tour Packages';

  return (
    <div ref={topRef} className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — packages.png on landing, category image on tour listing
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[55vh] sm:h-[65vh] min-h-[420px] max-h-[700px] overflow-hidden">
        {/* Key on heroImage so Next swaps the image when category is selected */}
        <img
          key={heroImage}
          src={heroImage}
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover pkg-hero-img"
          style={{ filter: 'brightness(0.72)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[280px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        {/* Text — bottom anchored */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-16 pkg-hero-reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">
              {selectedCategory ? selectedCategoryData?.name : 'Manik Lanka Holidays'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            {selectedCategory ? selectedCategoryData?.name : 'Our Tour Packages'}
          </h1>
          <p className="text-sm sm:text-base text-white/72 max-w-xl font-light">
            {selectedCategory
              ? selectedCategoryData?.description
              : 'Handcrafted journeys showcasing the very best of Sri Lanka'}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CATEGORIES VIEW
      ══════════════════════════════════════════════════════ */}
      {!selectedCategory && (
        <>
          {/* ── Categories Grid ── */}
          <section className="py-16 sm:py-20 bg-[#FDFCFA]">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">

              {/* Section label + heading */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Browse by Interest</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2314]">
                  Explore Tour<br />
                  <span className="text-[#8B5E0A]">Categories</span>
                </h2>
                <p className="text-sm text-[#6B5744]/80 max-w-xs leading-relaxed">
                  Select a category to discover tours tailored to your interests and travel style.
                </p>
              </div>

              {/* ── Search bar ── */}
              <div className="relative max-w-md mb-10 sm:mb-12">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8730A]">
                  <IconSearch />
                </div>
                <input
                  type="text"
                  value={catSearch}
                  onChange={e => setCatSearch(e.target.value)}
                  placeholder="Search categories…"
                  className="w-full bg-white border border-[#E8D5B5] focus:border-[#F39C12] rounded-full pl-10 pr-10 py-3 text-sm text-[#3D2314] placeholder:text-[#B8A090] outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#F39C12]/10"
                />
                {catSearch && (
                  <button
                    onClick={() => setCatSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] hover:text-[#8B5E0A] transition-colors"
                    aria-label="Clear search">
                    <IconClose />
                  </button>
                )}
              </div>

              {/* Category grid — all equal 4/3 */}
              {filteredCategories.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {filteredCategories.map((category, index) => {
                    const pkgCount = packagesData.filter(p => p.categoryId === category.id).length;
                    const isHovered = hoveredCat === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleSelectCategory(category.id)}
                        onMouseEnter={() => setHoveredCat(category.id)}
                        onMouseLeave={() => setHoveredCat(null)}
                        className="relative group text-left overflow-hidden rounded-2xl sm:rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39C12] cat-card-reveal"
                        style={{ animationDelay: `${index * 90}ms`, aspectRatio: '4/3' }}
                        aria-label={`Explore ${category.name}`}
                      >
                        {/* Background image */}
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-108"
                          style={{ filter: isHovered ? 'brightness(0.6) saturate(1.2)' : 'brightness(0.52) saturate(1.05)' }}
                        />

                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

                        {/* Top-right: tour count pill */}
                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/15 text-white/85 text-[11px] font-semibold px-3 py-1.5 rounded-full">
                          {pkgCount} tour{pkgCount !== 1 ? 's' : ''}
                        </div>

                        {/* Top-left: minimalist category icon */}
                        <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/85">
                          {categoryIcons[category.id]}
                        </div>

                        {/* Bottom content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                            {category.name}
                          </h3>
                          <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-4">
                            {category.description}
                          </p>
                          <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${isHovered ? 'text-[#F5B041]' : 'text-white/75'}`}>
                            Explore Tours
                            <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                              <IconArrow />
                            </span>
                          </div>
                        </div>

                        {/* Bottom gold accent on hover */}
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] transition-opacity duration-400 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 text-[#8B5E0A]/60">
                  <div className="text-4xl mb-3 opacity-30">
                    <IconSearch />
                  </div>
                  <p className="text-base font-medium">No categories match &ldquo;{catSearch}&rdquo;</p>
                  <button onClick={() => setCatSearch('')} className="mt-3 text-[#F39C12] text-sm hover:underline">
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* ── All Inclusive — clean feature cards on warm bg (no background image) ── */}
          <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F5EFE6] to-[#FDF8F2]">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
              <div className="text-center mb-10 sm:mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-px bg-[#F39C12]" />
                  <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Every Package</span>
                  <div className="w-8 h-px bg-[#F39C12]" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2314] mb-3">
                  All-Inclusive <span className="text-[#8B5E0A]">Benefits</span>
                </h2>
                <p className="text-sm text-[#6B5744]/75 max-w-md mx-auto">
                  Each tour package comes with these essentials — so you can focus purely on the experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {inclusionItems.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/40 p-6 sm:p-7 hover:shadow-lg hover:shadow-[#F39C12]/8 transition-all duration-400 inclusion-card"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FDF4E7] border border-[#F39C12]/20 group-hover:border-[#F39C12]/40 group-hover:bg-[#FDF4E7] flex items-center justify-center text-[#8B5E0A] mb-5 transition-all duration-300">
                      {item.icon}
                    </div>
                    {/* Gold accent line */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] mb-4 group-hover:w-12 transition-all duration-400" />
                    <h3 className="font-bold text-[#3D2314] mb-2 text-base">{item.title}</h3>
                    <p className="text-[#6B5744]/75 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Custom Tour CTA — single beach bg image ── */}
          <section className="relative py-20 sm:py-28 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/beachImage.jpg" alt="Sri Lanka beach" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#F5B041]" />
                <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Custom Experiences</span>
                <div className="w-8 h-px bg-[#F5B041]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}>
                Can't Find<br />
                <span className="text-[#F5B041]">What You Need?</span>
              </h2>
              <p className="text-white/72 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                We craft fully personalized tour packages tailored exactly to your preferences, timeline, and budget.
              </p>
              <Link href="/contactus"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base">
                Contact Us for Custom Tours
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
              </Link>
            </div>
          </section>
        </>
      )}

      {/* ══════════════════════════════════════════════════════
          TOURS VIEW — after a category is selected
      ══════════════════════════════════════════════════════ */}
      {selectedCategory && (
        <>
          {/* ── Tour listing on clean bg ── */}
          <section className="py-14 sm:py-20 bg-[#FDFCFA]">
            <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16">

              {/* Back + heading */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
                <div>
                  <button
                    onClick={handleBack}
                    className="group inline-flex items-center gap-2 text-[#8B5E0A] hover:text-[#F39C12] text-sm font-medium transition-colors duration-300 mb-4">
                    <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><IconBack /></span>
                    All Categories
                  </button>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-px bg-[#F39C12]" />
                    <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">
                      {selectedCategoryData?.name}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314]">
                    Available <span className="text-[#8B5E0A]">Tours</span>
                  </h2>
                </div>
                <div className="text-sm text-[#6B5744]/65 font-medium flex-shrink-0">
                  {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''} found
                </div>
              </div>

              {/* ── Tour search bar ── */}
              <div className="relative max-w-md mb-10 sm:mb-12">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8730A]">
                  <IconSearch />
                </div>
                <input
                  type="text"
                  value={tourSearch}
                  onChange={e => setTourSearch(e.target.value)}
                  placeholder="Search tours…"
                  className="w-full bg-white border border-[#E8D5B5] focus:border-[#F39C12] rounded-full pl-10 pr-10 py-3 text-sm text-[#3D2314] placeholder:text-[#B8A090] outline-none transition-all duration-300 shadow-sm focus:shadow-md focus:shadow-[#F39C12]/10"
                />
                {tourSearch && (
                  <button
                    onClick={() => setTourSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] hover:text-[#8B5E0A] transition-colors"
                    aria-label="Clear search">
                    <IconClose />
                  </button>
                )}
              </div>

              {/* Tour cards — horizontal, price-free */}
              {filteredTours.length > 0 ? (
                <div className="space-y-5 sm:space-y-6">
                  {filteredTours.map((pkg, index) => (
                    <Link
                      key={pkg.id}
                      href={`/packages/${pkg.id}`}
                      className="group block tour-card-reveal"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8D5B5] hover:border-[#F39C12]/45 bg-white hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-500">
                        <div className="flex flex-col sm:flex-row">

                          {/* Image — left on desktop, top on mobile */}
                          <div className="relative flex-shrink-0 w-full sm:w-64 md:w-72 lg:w-80 h-52 sm:h-auto overflow-hidden">
                            <Image
                              src={pkg.image}
                              alt={pkg.imageAlt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-108"
                              style={{ filter: 'brightness(0.85) saturate(1.1)' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/5" />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col flex-1 p-6 sm:p-7 md:p-8">
                            {/* Title + arrow */}
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-[#3D2314] group-hover:text-[#8B5E0A] transition-colors duration-300 leading-snug">
                                {pkg.name}
                              </h3>
                              <div className="flex-shrink-0 w-9 h-9 rounded-full border border-[#E8D5B5] group-hover:border-[#F39C12] group-hover:bg-[#FDF4E7] flex items-center justify-center text-[#B8A090] group-hover:text-[#F39C12] transition-all duration-300">
                                <IconChevronRight />
                              </div>
                            </div>

                            <p className="text-[#6B5744]/80 text-sm sm:text-base leading-relaxed mb-5 flex-1">
                              {pkg.shortDescription}
                            </p>

                            {/* Stats — duration, persons, stops — NO prices */}
                            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#F5EFE6]">
                              <div className="flex items-center gap-1.5 text-[#8B5E0A] text-xs sm:text-sm font-medium">
                                <IconClock />
                                {pkg.duration}
                              </div>
                              <div className="w-px h-3.5 bg-[#E8D5B5]" />
                              {/*<div className="flex items-center gap-1.5 text-[#8B5E0A] text-xs sm:text-sm font-medium">
                                <IconUsers />
                                Max {pkg.maxPersons} persons
                              </div>
                              <div className="w-px h-3.5 bg-[#E8D5B5]" /> */}
                              <div className="flex items-center gap-1.5 text-[#8B5E0A] text-xs sm:text-sm font-medium">
                                <IconMap />
                                {pkg.itinerary.length} destination{pkg.itinerary.length !== 1 ? 's' : ''}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Gold bottom line slide-in on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-[#8B5E0A]/60">
                  <p className="text-base font-medium">No tours match &ldquo;{tourSearch}&rdquo;</p>
                  <button onClick={() => setTourSearch('')} className="mt-3 text-[#F39C12] text-sm hover:underline">
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* ── CTA — sigiriya bg image at bottom of tours ── */}
          <section className="relative py-16 sm:py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/sigiriya.jpg" alt="Sri Lanka Sigiriya" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/78" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Need a Custom Package?</h2>
              <p className="text-white/68 text-sm mb-7">Our travel experts will design a tour tailored just for you.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contactus"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm shadow-md shadow-[#F39C12]/25">
                  Contact Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
                </Link>
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 border border-white/35 hover:border-white/65 bg-white/8 hover:bg-white/18 text-white px-7 py-3 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">
                  <IconBack /> All Categories
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ══ Global styles ══════════════════════════════════════ */}
      <style>{`
        @keyframes pkgHeroReveal {
          0%  { opacity: 0; transform: translateY(22px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .pkg-hero-reveal {
          animation: pkgHeroReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .pkg-hero-img {
          animation: pkgHeroReveal 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes catCardReveal {
          0%  { opacity: 0; transform: translateY(18px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .cat-card-reveal {
          animation: catCardReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes inclusionCardReveal {
          0%  { opacity: 0; transform: translateY(16px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .inclusion-card {
          animation: inclusionCardReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes tourCardReveal {
          0%  { opacity: 0; transform: translateX(-14px); }
          100%{ opacity: 1; transform: translateX(0); }
        }
        .tour-card-reveal {
          animation: tourCardReveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Custom scale that Tailwind doesn't have */
        .group-hover\\:scale-108:hover { transform: scale(1.08); }

        @media (max-width: 639px) {
          .cat-card-reveal { aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </div>
  );
}
