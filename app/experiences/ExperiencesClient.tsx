"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { experienceCategories, type ExpCategory, type ExpItem } from "@/app/data/experiences";

/* ════════════════════════════════════════════════════════════
   SVG ICONS — pure monochrome, minimalist
════════════════════════════════════════════════════════════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcoBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
  </svg>
);
const IcoSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IcoClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IcoChevRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <polyline points="9,18 15,12 9,6" />
  </svg>
);
const IcoGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
);
const IcoCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const IcoMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="12" cy="10" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);

/* ── Category icon SVGs ──────────────────────────────────── */
const CatIcon = ({ id }: { id: number }) => {
  if (id === 1) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
    </svg>
  );
  if (id === 2) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2.06 8.22.19" />
    </svg>
  );
  if (id === 3) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 2 .5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s2.5 2 5 2 2.5-2 5-2 2 .5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17s2.5 2 5 2 2.5-2 5-2 2 .5 2.5 1" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
    </svg>
  );
};

/* ════════════════════════════════════════════════════════════
   VIEW — CATEGORIES
════════════════════════════════════════════════════════════ */
function CategoriesView({ onSelect }: { onSelect: (c: ExpCategory) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          src="/images/packages.png"
          alt="Discover Sri Lanka Experiences"
          className="absolute inset-0 w-full h-full object-cover exp-fade-in"
          style={{ filter: 'brightness(0.68) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/08" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[280px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-16 exp-hero-text">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Manik Lanka Holidays</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.85)' }}>
            Sri Lanka<br />
            <span className="text-[#F5B041]">Experiences</span>
          </h1>
          <p className="text-white/72 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            From sacred ancient temples to world-class surf breaks — discover every dimension of this extraordinary island
          </p>
        </div>
      </section>

      {/* Categories grid — clean white section */}
      <section className="py-16 sm:py-20 bg-[#FDFCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Choose Your Journey</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314]">
              Explore by<br />
              <span className="text-[#8B5E0A]">Experience Type</span>
            </h2>
            <p className="text-sm text-[#6B5744]/75 max-w-xs leading-relaxed">
              Select a category to browse destinations and experiences within it
            </p>
          </div>

          {/* 2-column grid (desktop) / 1-column (mobile) — all equal height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {experienceCategories.map((cat, i) => {
              const isHov = hovered === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelect(cat)}
                  onMouseEnter={() => setHovered(cat.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative group text-left overflow-hidden rounded-2xl sm:rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39C12] cat-reveal"
                  style={{ animationDelay: `${i * 100}ms`, aspectRatio: '16/8' }}
                  aria-label={`Explore ${cat.name}`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: isHov ? 'brightness(0.62) saturate(1.15)' : 'brightness(0.52) saturate(1.05)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/18 flex items-center justify-center text-white/88">
                    <CatIcon id={cat.id} />
                  </div>

                  {/* Item count */}
                  <div className="absolute top-5 right-5 bg-black/38 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-semibold px-3 py-1.5 rounded-full">
                    {cat.items.length} experiences
                  </div>

                  {/* Text bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug"
                      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                      {cat.name}
                    </h3>
                    <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-4">{cat.shortDescription}</p>
                    <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${isHov ? 'text-[#F5B041]' : 'text-white/75'}`}>
                      Explore Experiences
                      <span className={`transition-transform duration-300 ${isHov ? 'translate-x-1' : ''}`}><IcoArrow /></span>
                    </div>
                  </div>
                  {/* Hover gold underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] transition-opacity duration-400 ${isHov ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warm feature strip — no image, cream bg */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#F5EFE6] to-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Why Sri Lanka</span>
            <div className="w-8 h-px bg-[#F39C12]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314] mb-3">
            An Island of <span className="text-[#8B5E0A]">Endless Wonder</span>
          </h2>
          <p className="text-[#6B5744]/75 text-sm max-w-2xl mx-auto mb-10">
            Packed into an island the size of Ireland are UNESCO cities, leopard safaris, tropical beaches, ancient pilgrimage routes, highland tea estates, and one of Asia's richest culinary traditions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: '8', label: 'UNESCO Sites' },
              { num: '400+', label: 'Bird Species' },
              { num: '1,500km', label: 'Coastline' },
              { num: '2,000+', label: 'Years of History' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E8D5B5] p-5 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#8B5E0A] mb-1">{s.num}</div>
                <div className="text-xs text-[#6B5744]/70 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/beachImage.jpg" alt="Sri Lanka beach" className="w-full h-full object-cover" style={{ filter: 'brightness(0.62)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Let Us Plan It</span>
            <div className="w-8 h-px bg-[#F5B041]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}>
            Ready to Explore <span className="text-[#F5B041]">Sri Lanka?</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Our travel experts will build you a personalised itinerary combining the experiences you love.
          </p>
          <Link href="/contactus"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/28 text-sm sm:text-base">
            Plan My Trip
            <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
          </Link>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   VIEW — DESTINATIONS LIST
════════════════════════════════════════════════════════════ */
function DestinationsView({
  category,
  onSelect,
  onBack,
}: {
  category: ExpCategory;
  onSelect: (item: ExpItem) => void;
  onBack: () => void;
}) {
  const [search, setSearch] = useState('');
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);

  /* Collect unique sub-categories (for Adventure category only) */
  const subcats = Array.from(
    new Set(category.items.map(i => i.subcategory).filter(Boolean))
  ) as string[];
  const hasSubcats = subcats.length > 0;

  const displayItems = category.items.filter(item => {
    const matchSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(search.toLowerCase());
    const matchSubcat = !activeSubcat || item.subcategory === activeSubcat;
    return matchSearch && matchSubcat;
  });

  return (
    <>
      {/* Hero — uses category's own image (changes per category) */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          key={category.image}
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover exp-fade-in"
          style={{ filter: 'brightness(0.68) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-black/08" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Back */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 bg-black/32 hover:bg-black/55 backdrop-blur-md border border-white/18 hover:border-white/35 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><IcoBack /></span>
            All Experiences
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-10 sm:pb-14 exp-hero-text">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">{category.name}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            {category.name}
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Filter bar + items */}
      <section className="py-12 sm:py-16 bg-[#FDFCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">

          {/* Search + sub-cat filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8730A]"><IcoSearch /></div>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={`Search ${category.name.toLowerCase()}…`}
                className="w-full bg-white border border-[#E8D5B5] focus:border-[#F39C12] rounded-full pl-10 pr-10 py-3 text-sm text-[#3D2314] placeholder:text-[#B8A090] outline-none transition-all duration-300 shadow-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] hover:text-[#8B5E0A]">
                  <IcoClose />
                </button>
              )}
            </div>

            {/* Sub-category pills (Adventure category only) */}
            {hasSubcats && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSubcat(null)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${!activeSubcat ? 'bg-[#F39C12] border-[#F39C12] text-white' : 'bg-white border-[#E8D5B5] text-[#6B5744] hover:border-[#F39C12]/40'}`}>
                  All
                </button>
                {subcats.map(sc => (
                  <button
                    key={sc}
                    onClick={() => setActiveSubcat(activeSubcat === sc ? null : sc)}
                    className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${activeSubcat === sc ? 'bg-[#F39C12] border-[#F39C12] text-white' : 'bg-white border-[#E8D5B5] text-[#6B5744] hover:border-[#F39C12]/40'}`}>
                    {sc}
                  </button>
                ))}
              </div>
            )}

            <div className="text-sm text-[#6B5744]/60 font-medium flex-shrink-0 sm:ml-auto">
              {displayItems.length} result{displayItems.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Items grid */}
          {displayItems.length > 0 ? (
            hasSubcats && !activeSubcat && !search ? (
              /* Grouped by sub-category */
              <div className="space-y-12">
                {subcats.map(sc => {
                  const scItems = displayItems.filter(i => i.subcategory === sc);
                  if (!scItems.length) return null;
                  return (
                    <div key={sc}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-[#F39C12]" />
                        <h3 className="text-lg sm:text-xl font-bold text-[#3D2314]">{sc}</h3>
                        <span className="text-xs text-[#B8A090] font-medium ml-1">{scItems.length}</span>
                        <div className="flex-1 h-px bg-[#F0E8DC]" />
                      </div>
                      <ItemsGrid items={scItems} onSelect={onSelect} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <ItemsGrid items={displayItems} onSelect={onSelect} />
            )
          ) : (
            <div className="text-center py-14 text-[#8B5E0A]/55">
              <p className="text-base font-medium">No results for &ldquo;{search}&rdquo;</p>
              <button onClick={() => setSearch('')} className="mt-3 text-[#F39C12] text-sm hover:underline">Clear search</button>
            </div>
          )}
        </div>
      </section>

      {/* Sigiriya CTA at bottom */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/sigiriya.jpg" alt="Sri Lanka" className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/78" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Want to Experience This?</h2>
          <p className="text-white/68 text-sm mb-6">Our experts will build a personalised itinerary around your favourite experiences.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contactus"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm">
              Plan My Trip
              <span className="group-hover:translate-x-0.5 transition-transform"><IcoArrow /></span>
            </Link>
            <button onClick={onBack}
              className="inline-flex items-center gap-2 border border-white/35 hover:border-white/65 bg-white/8 text-white px-7 py-3 rounded-full transition-all duration-300 text-sm">
              <IcoBack /> All Categories
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Destination card grid ─────────────────────────────── */
function ItemsGrid({ items, onSelect }: { items: ExpItem[]; onSelect: (i: ExpItem) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {items.map((item, idx) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="group text-left overflow-hidden rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/45 bg-white hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-400 item-reveal"
          style={{ animationDelay: `${idx * 70}ms` }}
          aria-label={`View ${item.name}`}
        >
          {/* Image */}
          <div className="relative h-48 sm:h-52 overflow-hidden">
            <Image
              src={item.photos[0]}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-600 group-hover:scale-108"
              style={{ filter: 'brightness(0.85) saturate(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            {item.subcategory && (
              <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm border border-white/15 text-white/85 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {item.subcategory}
              </div>
            )}
            <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-black/35 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80">
              <IcoCamera />
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-[#3D2314] group-hover:text-[#8B5E0A] transition-colors duration-300 text-base sm:text-lg leading-snug">
                {item.name}
              </h3>
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#E8D5B5] group-hover:border-[#F39C12] group-hover:bg-[#FDF4E7] flex items-center justify-center text-[#B8A090] group-hover:text-[#F39C12] transition-all duration-300">
                <IcoChevRight />
              </div>
            </div>
            <p className="text-[#6B5744]/78 text-xs sm:text-sm leading-relaxed">{item.shortDescription}</p>
          </div>

          {/* Gold bottom slide-in */}
          <div className="h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   VIEW — DESTINATION DETAIL
════════════════════════════════════════════════════════════ */
function DetailView({
  item,
  category,
  onBack,
  onSelectRelated,
}: {
  item: ExpItem;
  category: ExpCategory;
  onBack: () => void;
  onSelectRelated: (i: ExpItem) => void;
}) {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <>
      {/* Hero — featured photo */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          key={item.photos[activePhoto]}
          src={item.photos[activePhoto]}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover exp-fade-in"
          style={{ filter: 'brightness(0.68) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/32 to-black/08" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/08 to-transparent" />

        {/* Back */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20">
          <button onClick={onBack}
            className="group inline-flex items-center gap-2 bg-black/32 hover:bg-black/55 backdrop-blur-md border border-white/18 hover:border-white/35 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><IcoBack /></span>
            {category.name}
          </button>
        </div>

        {/* Photo index */}
        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 bg-black/35 backdrop-blur-md border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <IcoCamera />
          {activePhoto + 1} / {item.photos.length}
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-8 sm:pb-12 exp-hero-text">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">
              {item.subcategory ?? category.name}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.85)' }}>
            {item.name}
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-xl font-light leading-relaxed">{item.shortDescription}</p>
        </div>
      </section>

      {/* Gallery thumbnails + description */}
      <section className="bg-white border-b border-[#F0E8DC]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* LEFT — description */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">About This Destination</span>
              </div>
              <p className="text-[#5D4030] text-base sm:text-lg leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contactus"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-[#F39C12]/20 text-sm">
                  Include in My Tour
                  <span className="transition-transform group-hover:translate-x-0.5"><IcoArrow /></span>
                </Link>
                <Link href="/packages"
                  className="inline-flex items-center gap-2 border border-[#E8D5B5] hover:border-[#F39C12]/45 bg-[#FDFCFA] hover:bg-[#FDF4E7] text-[#8B5E0A] text-sm font-medium px-6 py-3 rounded-full transition-all duration-300">
                  View Tour Packages
                  <IcoArrow />
                </Link>
              </div>
            </div>

            {/* RIGHT — photo gallery */}
            <div className="lg:w-[420px] xl:w-[480px] flex-shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Photo Gallery</span>
              </div>
              {/* Main photo */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-3" style={{ height: '220px' }}>
                <img
                  key={activePhoto}
                  src={item.photos[activePhoto]}
                  alt={`${item.name} photo ${activePhoto + 1}`}
                  className="w-full h-full object-cover exp-fade-in"
                  style={{ filter: 'brightness(0.9)' }}
                />
              </div>
              {/* Thumbnail row */}
              <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                {item.photos.map((ph, pi) => (
                  <button
                    key={pi}
                    onClick={() => setActivePhoto(pi)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${activePhoto === pi ? 'ring-2 ring-[#F39C12] ring-offset-1' : 'opacity-65 hover:opacity-90'}`}
                    aria-label={`Photo ${pi + 1}`}
                  >
                    <img
                      src={ph}
                      alt={`Thumbnail ${pi + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="text-[#8B5E0A]/50 text-xs mt-2 flex items-center gap-1.5">
                <IcoCamera /> Click a thumbnail to view
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More from same category */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FDF8F2] to-[#FDFCFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Also in {category.name}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items
              .filter(i => i.id !== item.id)
              .slice(0, 3)
              .map(related => (
                <button
                  key={related.id}
                  onClick={() => onSelectRelated(related)}
                  className="group text-left flex items-center gap-4 bg-white border border-[#E8D5B5] hover:border-[#F39C12]/40 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#F39C12]/6"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image src={related.photos[0]} alt={related.name} fill className="object-cover transition-transform duration-400 group-hover:scale-108" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#3D2314] text-sm group-hover:text-[#8B5E0A] transition-colors duration-300 mb-0.5">{related.name}</h4>
                    <p className="text-[#6B5744]/65 text-xs leading-relaxed line-clamp-2">{related.shortDescription}</p>
                  </div>
                  <div className="text-[#B8A090] group-hover:text-[#F39C12] transition-colors flex-shrink-0"><IcoChevRight /></div>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/nuwaraEliya.jpg" alt="Sri Lanka" className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/78" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to Visit <span className="text-[#F5B041]">{item.name}?</span>
          </h2>
          <p className="text-white/68 text-sm mb-7 leading-relaxed">
            Tell us about your travel dates and preferences — we'll create the perfect itinerary that includes {item.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contactus"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm shadow-md shadow-[#F39C12]/25">
              Get In Touch
              <span className="transition-transform group-hover:translate-x-0.5"><IcoArrow /></span>
            </Link>
            <button onClick={onBack}
              className="inline-flex items-center gap-2 border border-white/35 hover:border-white/65 bg-white/8 text-white px-7 py-3 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">
              <IcoBack /> More in {category.name}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT COMPONENT — orchestrates the 3-level navigation
   Categories → Destinations → Destination Detail
════════════════════════════════════════════════════════════ */
export default function ExperiencesClient() {
  const [selectedCategory, setSelectedCategory] = useState<ExpCategory | null>(null);
  const [selectedItem, setSelectedItem] = useState<ExpItem | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollTop = () =>
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);

  const handleSelectCategory = useCallback((cat: ExpCategory) => {
    setSelectedCategory(cat);
    setSelectedItem(null);
    scrollTop();
  }, []);

  const handleSelectItem = useCallback((item: ExpItem) => {
    setSelectedItem(item);
    scrollTop();
  }, []);

  const handleBackToCategories = useCallback(() => {
    setSelectedCategory(null);
    setSelectedItem(null);
    scrollTop();
  }, []);

  const handleBackToDestinations = useCallback(() => {
    setSelectedItem(null);
    scrollTop();
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">
      {!selectedCategory && (
        <CategoriesView onSelect={handleSelectCategory} />
      )}

      {selectedCategory && !selectedItem && (
        <DestinationsView
          category={selectedCategory}
          onSelect={handleSelectItem}
          onBack={handleBackToCategories}
        />
      )}

      {selectedCategory && selectedItem && (
        <DetailView
          item={selectedItem}
          category={selectedCategory}
          onBack={handleBackToDestinations}
          onSelectRelated={handleSelectItem}
        />
      )}

      {/* Global styles */}
      <style>{`
        /* Hero entrance */
        @keyframes expHeroText {
          0%  { opacity: 0; transform: translateY(20px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .exp-hero-text {
          animation: expHeroText 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Fade-in for images */
        @keyframes expFadeIn {
          0%  { opacity: 0; }
          100%{ opacity: 1; }
        }
        .exp-fade-in {
          animation: expFadeIn 0.65s ease both;
        }

        /* Category card reveal */
        @keyframes catReveal {
          0%  { opacity: 0; transform: translateY(16px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .cat-reveal {
          animation: catReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Item card reveal */
        @keyframes itemReveal {
          0%  { opacity: 0; transform: translateY(12px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .item-reveal {
          animation: itemReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Custom scales */
        .group-hover\\:scale-108:hover,
        .group:hover .group-hover\\:scale-108 { transform: scale(1.08); }
        .group-hover\\:scale-110:hover,
        .group:hover .group-hover\\:scale-110 { transform: scale(1.10); }
        .transition-transform.duration-600 { transition-duration: 600ms; }

        /* Hide scrollbar for thumbnail row */
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }

        /* Mobile: category cards 4/3 */
        @media (max-width: 639px) {
          .cat-reveal { aspect-ratio: 4/3 !important; }
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
