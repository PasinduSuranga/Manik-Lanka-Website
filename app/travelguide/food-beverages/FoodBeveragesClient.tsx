"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { foodIntro, foodSections } from "@/app/data/travelguide";

/* ══ SVG ICONS ══════════════════════════════════════════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcoBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
  </svg>
);
const IcoCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IcoCup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const beverages = [
  "Ceylon Tea — golden, world-famous hill-country brew",
  "King Coconut Water (Thambili) — Sri Lanka's natural energy drink",
  "Fresh Tropical Juices — mango, pineapple, passion fruit, wood apple",
  "Belimal Tea — soothing herbal infusion",
  "Ranawara Herbal Tea — traditional Ayurvedic wellness drink",
  "Fresh Coconut Water — straight from the shell",
  "Watermelon Juice — vibrant, refreshing island thirst-quencher",
];

export default function FoodBeveragesClient() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783672004/Foods_and_Beverages_ebvdul.png"
          alt="Sri Lankan Food & Beverages"
          fill
          className="object-cover fb-fade-in"
          style={{ filter: "brightness(0.65) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/28 to-black/06" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Back button */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20">
          <Link href="/travelguide"
            className="group inline-flex items-center gap-2 bg-black/32 hover:bg-black/55 backdrop-blur-md border border-white/18 hover:border-white/35 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><IcoBack /></span>
            Travel Guide
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-10 sm:pb-14 fb-hero-text">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Sri Lanka Travel Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85)" }}>
            Food &<br />
            <span className="text-[#F5B041]">Beverages</span>
          </h1>
          <p className="text-white/72 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            Bold spices, fresh coastal flavours, tropical fruits, and the world-famous Ceylon Tea
          </p>
        </div>
      </section>

      {/* ── Breadcrumb nav ── */}
      <nav className="bg-white border-b border-[#F0E8DC]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-3.5 flex items-center gap-2 text-sm">
          <Link href="/travelguide"
            className="group inline-flex items-center gap-1.5 text-[#B8730A] hover:text-[#F39C12] font-medium transition-colors duration-200">
            <IcoBack />
            Travel Guide
          </Link>
          <span className="text-[#C8B8A0]">/</span>
          <span className="text-[#5D4030] font-semibold">Food &amp; Beverages</span>
        </div>
      </nav>

      {/* ── Intro ── */}
      <section className="bg-white border-b border-[#F0E8DC]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">About Sri Lankan Cuisine</span>
          </div>
          <p className="text-[#5D4030] text-base sm:text-lg leading-relaxed mb-6">
            {foodIntro.description}
          </p>

          {/* Beverages highlight box */}
          <div className="bg-gradient-to-br from-[#FDF4E7] to-[#FDFCFA] rounded-2xl border border-[#E8D5B5] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#F39C12]/15 flex items-center justify-center text-[#B8730A]">
                <IcoCup />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#3D2314]">Signature Beverages</h2>
            </div>
            <p className="text-[#5D4030] text-sm sm:text-base leading-relaxed mb-5">
              {foodIntro.beverageNote}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {beverages.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#F39C12]/18 flex items-center justify-center text-[#B8730A] flex-shrink-0">
                    <IcoCheck />
                  </div>
                  <span className="text-[#5D4030] text-sm leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Sections grid ── */}
      <section className="py-14 sm:py-18 bg-[#FDFCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Must-Try Specialties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314] mb-10 sm:mb-12">
            Iconic <span className="text-[#8B5E0A]">Sri Lankan Food</span>
          </h2>

          <div className="space-y-10 sm:space-y-14">
            {foodSections.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center fb-item-reveal`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="w-full lg:w-[46%] flex-shrink-0">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: "16/10" }}>
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-600 hover:scale-105"
                        style={{ filter: "brightness(0.9) saturate(1.1)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {/* Floating label */}
                      <div className="absolute bottom-4 left-4 bg-black/45 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {item.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-px bg-[#F39C12]" />
                      <span className="text-[#B8730A] text-xs font-semibold tracking-[0.22em] uppercase">
                        {i === 0 ? "Sri Lankan Signature" : i === 2 ? "Coastal Speciality" : i === 3 ? "Sweet Traditions" : i === 4 ? "Tropical Freshness" : "Island Favourites"}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#3D2314] mb-3 leading-snug">{item.name}</h3>
                    <p className="text-[#5D4030] text-sm sm:text-base leading-relaxed mb-5">
                      {item.description}
                    </p>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1.5 bg-[#FDF4E7] border border-[#E8D5B5] text-[#8B5E0A] text-xs font-semibold px-3 py-1.5 rounded-full">
                          <IcoCheck />
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link href="/contactus"
                      className="group inline-flex items-center gap-2 text-[#B8730A] hover:text-[#F39C12] font-semibold text-sm transition-colors duration-300">
                      Ask about this dish
                      <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nuwa Eliya tea image strip ── */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783601709/Bottom_Section_go7ry3.png" alt="Ceylon Tea Country" fill className="object-cover"
            style={{ filter: "brightness(0.6) saturate(1.1)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Ceylon Tea Country</span>
            <div className="w-8 h-px bg-[#F5B041]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>
            The World&apos;s Finest <span className="text-[#F5B041]">Ceylon Tea</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Visit the mist-covered highlands of Nuwara Eliya to experience Sri Lanka's legendary tea estates, factory tours, and tastings straight from the source.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/experiences"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm shadow-md shadow-[#F39C12]/25">
              Explore Experiences
              <span className="transition-transform group-hover:translate-x-0.5"><IcoArrow /></span>
            </Link>
            <Link href="/contactus"
              className="inline-flex items-center gap-2 border border-white/35 hover:border-white/65 bg-white/8 text-white px-7 py-3 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">
              Plan My Trip
              <IcoArrow />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fbFadeIn {
          0%  { opacity: 0; }
          100%{ opacity: 1; }
        }
        .fb-fade-in { animation: fbFadeIn 0.7s ease both; }

        @keyframes fbHeroText {
          0%  { opacity: 0; transform: translateY(22px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .fb-hero-text { animation: fbHeroText 0.85s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes fbItemReveal {
          0%  { opacity: 0; transform: translateY(16px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .fb-item-reveal { animation: fbItemReveal 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .transition-transform.duration-600 { transition-duration: 600ms; }
      `}</style>
    </div>
  );
}
