"use client";

import { packagesData, tourCategories, placeDescriptions, packageInclusions, packageExclusions } from "@/app/data/packages";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

/* ════════════════════════════════════════════════════════════
   PURE SVG ICONS — monochrome, minimalist
════════════════════════════════════════════════════════════ */
const IconBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
  </svg>
);
const IconMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" />
    <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="12" cy="10" r="3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IconXmark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════════════════ */
export default function PackageClient({ id }: { id: number }) {
  const pkg = packagesData.find((p) => p.id === id);
  if (!pkg) return notFound();

  const category = tourCategories.find(c => c.id === pkg.categoryId);
  const categoryName = category?.name ?? 'Packages';

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — full-bleed wildlife image, cinematic
          My thought: A dramatic hero immerses the tourist
          instantly. The tour name + duration reads at a glance.
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt}
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.68) saturate(1.1)' }}
        />
        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/08" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        {/* Warm golden orb — subtle depth */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[280px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        {/* ── Premium back button — frosted glass pill, below two-row header ──
             My thought: Show exactly where the user came from (category name).
             Circular icon mimics the 'Watch Film' button on the home hero.
             Golden hover state ties into the site-wide amber palette. */}
        <div className="absolute top-[76px] sm:top-[108px] left-5 sm:left-8 z-[60]">
          <Link
            href={`/packages?cat=${pkg.categoryId}`}
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/18 backdrop-blur-md border border-white/25 hover:border-[#F39C12]/55 text-white px-4 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#F39C12]/10"
          >
            {/* Circular icon — slides left + turns amber on hover */}
            <span className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-[#F39C12]/80 flex items-center justify-center transition-all duration-300 flex-shrink-0">
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                <IconBack />
              </span>
            </span>
            {/* Two-line label — category tag + category name */}
            <span className="flex flex-col leading-none pr-0.5">
              <span className="text-[#F5B041] text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">Packages</span>
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{categoryName}</span>
            </span>
          </Link>
        </div>

        {/* Hero text — bottom-anchored */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-10 sm:pb-16 detail-hero-reveal">
          {/* Duration + destinations row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-1.5 bg-[#F39C12]/85 backdrop-blur-sm text-white text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <IconClock />
              {pkg.duration}
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/12 backdrop-blur-sm border border-white/18 text-white/85 text-xs font-medium px-3.5 py-1.5 rounded-full">
              <IconMap />
              {pkg.itinerary.length} destinations
            </div>
          </div>
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-3"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.85)' }}>
            {pkg.name}
          </h1>
          <p className="text-white/72 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            {pkg.shortDescription}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DESCRIPTION STRIP — clean white, no image
          My thought: After a dramatic hero, let the page breathe.
          White text with a left gold border gives a premium feel.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#F0E8DC]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Description */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">About This Tour</span>
              </div>
              <p className="text-[#5D4030] text-base sm:text-lg leading-relaxed">
                {pkg.description}
              </p>
            </div>
            {/* CTA inline with description */}
            <div className="flex-shrink-0 flex flex-col items-start lg:items-end gap-3 pt-2">
              <Link href="/contactus"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-[#F39C12]/25 text-sm whitespace-nowrap">
                Enquire About This Tour
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
              </Link>
              <p className="text-[#8B5E0A]/60 text-xs">Free, no-obligation consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INCLUSIONS / EXCLUSIONS — warm cream bg, no image
          My thought: Clean structured info, stays readable.
          Using subtle gold/green/rose tones from landing palette.
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#FDF8F2] to-[#FDFCFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Package Details</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Included */}
            <div className="bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#8B5E0A]/30 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#F0FBF5] border border-[#A8DFC4] flex items-center justify-center text-[#2A7A52]">
                  <IconCheck />
                </div>
                <h3 className="font-bold text-[#3D2314] text-base">What's Included</h3>
              </div>
              <ul className="space-y-3.5">
                {packageInclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5D4030] text-sm leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F0FBF5] border border-[#A8DFC4] flex items-center justify-center text-[#2A7A52] flex-shrink-0">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#8B5E0A]/30 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#FFF5F5] border border-[#EFBFBF] flex items-center justify-center text-[#8B3030]">
                  <IconXmark />
                </div>
                <h3 className="font-bold text-[#3D2314] text-base">Not Included</h3>
              </div>
              <ul className="space-y-3.5">
                {packageExclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5D4030] text-sm leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FFF5F5] border border-[#EFBFBF] flex items-center justify-center text-[#8B3030] flex-shrink-0">
                      <IconXmark />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ITINERARY — two-column split on desktop
          Left = numbered timeline  |  Right = sticky image panel
          My thought: A split-layout makes the itinerary feel like
          a premium travel magazine. The sticky image keeps visual
          interest while reading through long stop lists.
          On mobile: full-width clean timeline only.
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FDFCFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Day by Day</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314]">
              Tour <span className="text-[#8B5E0A]">Itinerary</span>
            </h2>
            <span className="text-sm text-[#6B5744]/65">{pkg.itinerary.length} destinations included</span>
          </div>

          {/* Split layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-start">

            {/* LEFT — Timeline (full width on mobile, 60% on desktop) */}
            <div className="flex-1 min-w-0 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[18px] sm:left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-[#F39C12] via-[#F39C12]/35 to-transparent" />

              <div className="space-y-5 sm:space-y-6">
                {pkg.itinerary.map((stop, index) => {
                  const description =
                    placeDescriptions[stop.stop] ||
                    placeDescriptions[Object.keys(placeDescriptions).find(k => stop.stop.includes(k)) || ""];

                  return (
                    <div
                      key={index}
                      className="relative flex gap-5 sm:gap-7 itinerary-item"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      {/* Timeline node */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#F39C12] flex items-center justify-center shadow-sm shadow-[#F39C12]/20">
                          <span className="text-[#8B5E0A] font-bold text-xs sm:text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Stop content card */}
                      <div className="flex-1 min-w-0 bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/35 hover:shadow-lg hover:shadow-[#F39C12]/6 transition-all duration-400 overflow-hidden mb-1">
                        {/* Card header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 sm:px-6 py-4 border-b border-[#F5EFE6]">
                          <h3 className="flex items-center gap-2 font-bold text-[#3D2314] text-base sm:text-lg">
                            <span className="text-[#F39C12]"><IconPin /></span>
                            {stop.stop}
                          </h3>
                          <div className="inline-flex items-center gap-1.5 bg-[#FDF4E7] border border-[#F39C12]/22 text-[#8B5E0A] text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                            <IconCalendar />
                            {stop.duration}
                          </div>
                        </div>
                        {/* Card body */}
                        <div className="px-5 sm:px-6 py-4 sm:py-5">
                          {description ? (
                            <p className="text-[#6B5744] text-sm leading-relaxed">{description}</p>
                          ) : (
                            <p className="text-[#6B5744]/55 italic text-sm">
                              Enjoy the beautiful sights and experiences of {stop.stop}.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — Sticky image panel (desktop only)
               My thought: Each package has its own curated gallery.
               The main tall image sets the mood; the smaller one below
               shows a contrasting scene (heritage vs coast etc.).
               A sticky enquire card keeps the CTA always in view. */}
            <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-28">
                {/* Main gallery image — tall, cinematic */}
                {pkg.galleryImages?.[0] && (
                  <div className="relative w-full rounded-2xl overflow-hidden mb-4" style={{ height: '340px' }}>
                    <Image
                      src={pkg.galleryImages[0]}
                      alt={`${pkg.name} — scene 1`}
                      fill
                      className="object-cover"
                      style={{ filter: 'brightness(0.82) saturate(1.15)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-[#F5B041] mb-1">
                        {[1, 2, 3, 4, 5].map(s => <IconStar key={s} />)}
                      </div>
                      <p className="text-white text-xs font-medium leading-snug">
                        Immersive local experiences crafted by our expert guides
                      </p>
                    </div>
                  </div>
                )}

                {/* Secondary gallery image */}
                {pkg.galleryImages?.[1] && (
                  <div className="relative w-full rounded-2xl overflow-hidden mb-4" style={{ height: '180px' }}>
                    <Image
                      src={pkg.galleryImages[1]}
                      alt={`${pkg.name} — scene 2`}
                      fill
                      className="object-cover"
                      style={{ filter: 'brightness(0.80) saturate(1.1)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-white/85 text-xs font-medium">{pkg.name}</p>
                    </div>
                  </div>
                )}

                {/* Enquire card */}
                <div className="mt-4 bg-[#FDF4E7] border border-[#F39C12]/25 rounded-2xl p-5">
                  <p className="text-[#3D2314] font-bold text-sm mb-1">Ready to experience this?</p>
                  <p className="text-[#6B5744]/75 text-xs mb-4 leading-relaxed">
                    Our team will customize every detail of this itinerary for you.
                  </p>
                  <Link href="/contactus"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 text-xs w-full justify-center">
                    Book This Tour
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5"><IconArrow /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA SECTION — Sigiriya image, dark cinematic overlay
          My thought: End the page on a high — a striking full-
          bleed image with a clear, confident CTA. The Sigiriya
          rock fortress feels epic and aspirational.
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783661325/Bottom_Section_djpguy.png"
            alt="Sri Lanka Surfing"
            fill
            className="object-cover"
            style={{ filter: 'brightness(0.65) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/52 to-black/78" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Begin Your Journey</span>
            <div className="w-10 h-px bg-[#F5B041]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.65)' }}>
            Book <span className="text-[#F5B041]">{pkg.name}</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Reach out to our travel experts and we will tailor every detail of this journey just for you — no obligation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactus"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base">
              Book This Tour Now
              <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrow /></span>
            </Link>
            <Link href="/packages"
              className="group inline-flex items-center gap-2 border border-white/35 hover:border-white/65 bg-white/8 hover:bg-white/18 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base">
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><IconBack /></span>
              All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Global styles ══════════════════════════════════════ */}
      <style>{`
        /* Hero entrance */
        @keyframes detailHeroReveal {
          0%  { opacity: 0; transform: translateY(22px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .detail-hero-reveal {
          animation: detailHeroReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Itinerary items staggered fade-in */
        @keyframes itineraryItemIn {
          0%  { opacity: 0; transform: translateX(-10px); }
          100%{ opacity: 1; transform: translateX(0); }
        }
        .itinerary-item {
          animation: itineraryItemIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* Mobile gap tweak */
        @media (max-width: 639px) {
          .itinerary-item { gap: 0.875rem; }
        }
      `}</style>
    </div>
  );
}