"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { activities } from "@/app/data/travelguide";

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
const IcoSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IcoClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IcoChevRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <polyline points="9,18 15,12 9,6" />
  </svg>
);
const IcoPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <circle cx="12" cy="10" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);

/* ── Activity detail modal ── */
function ActivityModal({
  activity,
  onClose,
}: {
  activity: (typeof activities)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm td-modal-backdrop" />

      <div
        className="relative z-10 bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden td-modal-slide shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-52 sm:h-60 overflow-hidden">
          <Image
            src={activity.photo}
            alt={activity.name}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.75) saturate(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all"
            aria-label="Close"
          >
            <IcoClose />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            {activity.location && (
              <div className="flex items-center gap-1.5 text-[#F5B041] text-xs font-semibold mb-1.5">
                <IcoPin />
                {activity.location}
              </div>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              {activity.name}
            </h2>
            <p className="text-white/70 text-xs mt-1">{activity.tagline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7">
          <p className="text-[#5D4030] text-sm sm:text-base leading-relaxed mb-6">
            {activity.description}
          </p>
          <div className="flex gap-3">
            <Link
              href="/contactus"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm shadow-md shadow-[#F39C12]/20"
            >
              Include in My Trip
              <IcoArrow />
            </Link>
            <button
              onClick={onClose}
              className="border border-[#E8D5B5] hover:border-[#F39C12]/40 text-[#8B5E0A] px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#FDF4E7]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══ MAIN COMPONENT ══════════════════════════════════════ */
export default function ThingsToDoClient() {
  const [search, setSearch] = useState("");
  const [selectedActivity, setSelectedActivity] = useState<(typeof activities)[0] | null>(null);

  const filtered = activities.filter(
    (a) =>
      !search ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      (a.location ?? "").toLowerCase().includes(search.toLowerCase()) ||
      a.tagline.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783672016/Things_to_Do_g2ozwk.png"
          alt="Things To Do in Sri Lanka"
          fill
          className="object-cover td-fade-in"
          style={{ filter: "brightness(0.65) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/28 to-black/06" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Back */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20">
          <Link href="/travelguide"
            className="group inline-flex items-center gap-2 bg-black/32 hover:bg-black/55 backdrop-blur-md border border-white/18 hover:border-white/35 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><IcoBack /></span>
            Travel Guide
          </Link>
        </div>

        {/* Count badge */}
        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 bg-black/38 backdrop-blur-md border border-white/15 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
          18 activities
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-10 sm:pb-14 td-hero-text">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Sri Lanka Travel Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85)" }}>
            Things<br />
            <span className="text-[#F5B041]">To Do</span>
          </h1>
          <p className="text-white/72 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            From epic safaris and ocean adventures to Ayurveda retreats and scenic hill-country train rides
          </p>
        </div>
      </section>

      {/* ── Breadcrumb nav ── */}
      <nav className="bg-white border-b border-[#F0E8DC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-3.5 flex items-center gap-2 text-sm">
          <Link href="/travelguide"
            className="group inline-flex items-center gap-1.5 text-[#B8730A] hover:text-[#F39C12] font-medium transition-colors duration-200">
            <IcoBack />
            Travel Guide
          </Link>
          <span className="text-[#C8B8A0]">/</span>
          <span className="text-[#5D4030] font-semibold">Things To Do</span>
        </div>
      </nav>

      {/* ── Intro stats ── */}
      <section className="bg-gradient-to-r from-[#8B6914] to-[#5D4E37] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "18", label: "Unique Activities" },
              { num: "1,500km", label: "Coastline to Explore" },
              { num: "26+", label: "National Parks" },
              { num: "400+", label: "Bird Species" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5B041] mb-1">{s.num}</div>
                <div className="text-white/70 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities grid ── */}
      <section className="py-14 sm:py-18 bg-[#FDFCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">

          {/* Header + search */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-[#F39C12]" />
                <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Adventures Await</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314]">
                Explore <span className="text-[#8B5E0A]">Activities</span>
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8730A]"><IcoSearch /></div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search activities…"
                className="w-full bg-white border border-[#E8D5B5] focus:border-[#F39C12] rounded-full pl-10 pr-10 py-3 text-sm text-[#3D2314] placeholder:text-[#B8A090] outline-none transition-all duration-300 shadow-sm"
              />
              {search && (
                <button onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] hover:text-[#8B5E0A]">
                  <IcoClose />
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          {search && (
            <p className="text-sm text-[#6B5744]/60 mb-6">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
            </p>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((activity, idx) => (
                <button
                  key={activity.id}
                  onClick={() => setSelectedActivity(activity)}
                  className="group text-left overflow-hidden rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/45 bg-white hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-400 td-card-reveal"
                  style={{ animationDelay: `${idx * 55}ms` }}
                  aria-label={`View ${activity.name}`}
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={activity.photo}
                      alt={activity.name}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-108"
                      style={{ filter: "brightness(0.82) saturate(1.1)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    {/* Location badge */}
                    {activity.location && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/42 backdrop-blur-sm border border-white/15 text-white/88 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        <IcoPin />
                        {activity.location}
                      </div>
                    )}
                    {/* Tagline floating */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white/80 text-[11px] font-medium leading-snug"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
                        {activity.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-[#3D2314] group-hover:text-[#8B5E0A] transition-colors duration-300 text-base sm:text-lg leading-snug">
                        {activity.name}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#E8D5B5] group-hover:border-[#F39C12] group-hover:bg-[#FDF4E7] flex items-center justify-center text-[#B8A090] group-hover:text-[#F39C12] transition-all duration-300">
                        <IcoChevRight />
                      </div>
                    </div>
                    <p className="text-[#6B5744]/72 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
                      {activity.description}
                    </p>
                  </div>

                  {/* Gold bottom sweep */}
                  <div className="h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[#8B5E0A]/55">
              <p className="text-base font-medium">No activities found for &ldquo;{search}&rdquo;</p>
              <button onClick={() => setSearch("")} className="mt-3 text-[#F39C12] text-sm hover:underline">
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Packages CTA image strip ── */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783668049/Bottom_Section_gvsgka.png" alt="Sri Lanka packages"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.6) saturate(1.1)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Let Us Build Your Adventure</span>
            <div className="w-8 h-px bg-[#F5B041]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>
            Want to Try <span className="text-[#F5B041]">These Activities?</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Tell our experts which activities excite you most — we&apos;ll craft the perfect personalised itinerary around them.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contactus"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm shadow-md shadow-[#F39C12]/25">
              Plan My Adventure
              <span className="transition-transform group-hover:translate-x-0.5"><IcoArrow /></span>
            </Link>
            <Link href="/packages"
              className="inline-flex items-center gap-2 border border-white/35 hover:border-white/65 bg-white/8 text-white px-7 py-3.5 rounded-full transition-all duration-300 text-sm backdrop-blur-sm">
              View Tour Packages
              <IcoArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Activity detail modal ── */}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}

      <style>{`
        @keyframes tdFadeIn {
          0%  { opacity: 0; }
          100%{ opacity: 1; }
        }
        .td-fade-in { animation: tdFadeIn 0.7s ease both; }

        @keyframes tdHeroText {
          0%  { opacity: 0; transform: translateY(22px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .td-hero-text { animation: tdHeroText 0.85s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes tdCardReveal {
          0%  { opacity: 0; transform: translateY(14px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .td-card-reveal { animation: tdCardReveal 0.5s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes tdModalBackdrop {
          0%  { opacity: 0; }
          100%{ opacity: 1; }
        }
        .td-modal-backdrop { animation: tdModalBackdrop 0.25s ease both; }

        @keyframes tdModalSlide {
          0%  { opacity: 0; transform: translateY(32px) scale(0.97); }
          100%{ opacity: 1; transform: translateY(0) scale(1); }
        }
        .td-modal-slide { animation: tdModalSlide 0.3s cubic-bezier(0.22,1,0.36,1) both; }

        /* Hover scale helpers */
        .group:hover .group-hover\\:scale-108 { transform: scale(1.08); }
        .transition-transform.duration-600 { transition-duration: 600ms; }

        /* Line clamp */
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
