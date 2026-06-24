"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ── Minimalist SVG icons — all 24×24 viewBox ─────────────── */
const IcoCalendar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IcoPlane = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 3 16.5 4.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);
const IcoWallet = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
);
const IcoShield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IcoMapPin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);
const IcoPhone = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.29 6.29l1.1-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IcoSun = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const IcoCloud = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);
const IcoUmbrella = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23,12 1,12" />
    <path d="M12 2a9 9 0 0 1 9 9" /><path d="M3 11a9 9 0 0 1 9-9" />
    <path d="M12 12v6a2 2 0 0 0 4 0" />
  </svg>
);
const IcoWind = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
  </svg>
);
const IcoChevDown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

/* ══════════════════════════════════════════════════════════
   SVG ICONS — UI
══════════════════════════════════════════════════════════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcoFork = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);
const IcoCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
  </svg>
);

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const guideCategories = [
  {
    id: 1,
    title: "Best Time to Visit",
    icon: IcoCalendar,
    color: "from-[#E67E22] to-[#8B5E0A]",
    sections: [
      { subtitle: "Peak Season (December – March)", content: "Perfect weather on the west and south coasts. Ideal for beach holidays and cultural tours. Expect higher prices and more tourists." },
      { subtitle: "Shoulder Season (April – September)", content: "Great for east coast beaches and hill country. Less crowded with better deals. Some areas may experience monsoon rains." },
      { subtitle: "Off Season (October – November)", content: "Lowest prices and fewer tourists. Intermittent rains but still enjoyable. Perfect for budget travelers." },
    ],
  },
  {
    id: 2,
    title: "Visa & Entry Requirements",
    icon: IcoPlane,
    color: "from-[#E67E22] to-[#8B5E0A]",
    sections: [
      { subtitle: "Electronic Travel Authorization (ETA)", content: "Most visitors need an ETA which can be obtained online before arrival. Valid for 30 days and can be extended. Apply at least 3 days before travel." },
      { subtitle: "Passport Requirements", content: "Passport must be valid for at least 6 months from date of entry. Ensure you have blank pages for stamps." },
      { subtitle: "Visa on Arrival", content: "Available at Colombo airport for eligible countries. However, online application is recommended to avoid queues." },
    ],
  },
  {
    id: 3,
    title: "Currency & Money",
    icon: IcoWallet,
    color: "from-[#E67E22] to-[#8B5E0A]",
    sections: [
      { subtitle: "Sri Lankan Rupee (LKR)", content: "The official currency. ATMs are widely available in cities and tourist areas. Credit cards accepted in major establishments." },
      { subtitle: "Exchange Tips", content: "Exchange money at banks or authorized dealers for best rates. Avoid street money changers. Keep small denominations for local purchases." },
      { subtitle: "Tipping Culture", content: "10% service charge often included in bills. Additional tips appreciated for good service. Tip guides and drivers directly." },
    ],
  },
  {
    id: 4,
    title: "Health & Safety",
    icon: IcoShield,
    color: "from-[#E67E22] to-[#8B5E0A]",
    sections: [
      { subtitle: "Vaccinations", content: "No mandatory vaccinations required. Recommended: Hepatitis A & B, Typhoid, and Tetanus. Consult your doctor before travel." },
      { subtitle: "Travel Insurance", content: "Highly recommended for medical emergencies and trip cancellations. Ensure coverage includes adventure activities if planned." },
      { subtitle: "Safety Tips", content: "Sri Lanka is generally safe for tourists. Be cautious with valuables in crowded areas. Follow local advice and respect cultural norms." },
    ],
  },
  {
    id: 5,
    title: "Getting Around",
    icon: IcoMapPin,
    color: "from-[#E67E22] to-[#8B5E0A]",
    sections: [
      { subtitle: "Private Drivers", content: "Most convenient option for tourists. Hire through reputable agencies. Drivers often double as guides and speak English." },
      { subtitle: "Trains", content: "Scenic and affordable. Book in advance for popular routes like Kandy to Ella. First class offers reserved seating and better views." },
      { subtitle: "Tuk-Tuks", content: "Perfect for short distances in cities. Always negotiate fare before starting. Use metered tuk-tuks or ride-hailing apps where available." },
    ],
  },
  {
    id: 6,
    title: "Essential Contacts",
    icon: IcoPhone,
    color: "from-[#E67E22] to-[#8B5E0A]",
    sections: [
      { subtitle: "Emergency Numbers", content: "Police: 119 | Ambulance: 110 | Fire: 111 | Tourist Police: +94 11 242 1052" },
      { subtitle: "Tourist Information", content: "Sri Lanka Tourism: +94 11 242 6900 | Airport Information: +94 19 733 3333" },
      { subtitle: "Useful Apps", content: "PickMe (ride-hailing) | Google Maps (navigation) | XE Currency (exchange rates) | Google Translate" },
    ],
  },
];

const weatherInfo = [
  { month: "Jan–Mar", icon: IcoSun, temp: "28–32°C", condition: "Sunny & Dry", best: "West & South Coast" },
  { month: "Apr–Jun", icon: IcoCloud, temp: "26–30°C", condition: "Warm & Humid", best: "East Coast" },
  { month: "Jul–Sep", icon: IcoWind, temp: "25–29°C", condition: "Windy", best: "Hill Country" },
  { month: "Oct–Dec", icon: IcoUmbrella, temp: "24–28°C", condition: "Rainy", best: "North & East" },
];

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function TravelGuideClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  useEffect(() => { setHasAnimated(true); }, []);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          src="/images/help.jpg"
          alt="Sri Lanka Travel Guide"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.68) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/08" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[280px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-16 ${hasAnimated ? "tg-hero-in" : "opacity-0"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Manik Lanka Holidays</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85)" }}>
            Sri Lanka<br />
            <span className="text-[#F5B041]">Travel Guide</span>
          </h1>
          <p className="text-white/72 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            Everything you need to know for your perfect Sri Lankan adventure
          </p>
        </div>
      </section>

      {/* ── Two Explore Categories ── */}
      <section className="py-16 sm:py-20 bg-[#FDFCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F39C12]" />
            <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Explore Sri Lanka</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314]">
              Discover <span className="text-[#8B5E0A]">the Island</span>
            </h2>
            <p className="text-sm text-[#6B5744]/75 max-w-xs leading-relaxed">
              Choose a category to dive deeper into Sri Lanka's richest experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Food & Beverages Card */}
            <Link href="/travelguide/food-beverages" className="group relative overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39C12] block min-h-[380px] sm:min-h-[420px] lg:min-h-[450px]">
              <img
                src="/images/food.jpg"
                alt="Food & Beverages"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "brightness(0.55) saturate(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />

              {/* Icon badge */}
              <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/18 flex items-center justify-center text-white/90">
                <IcoFork />
              </div>
              <div className="absolute top-5 right-5 bg-black/38 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-semibold px-3 py-1.5 rounded-full">
                5 specialties
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                  Food & Beverages
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4 max-w-sm">
                  Bold spices, fresh seafood, tropical fruits, world-famous Ceylon Tea, and authentic island flavours
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 group-hover:text-[#F5B041] transition-colors duration-300">
                  Explore Cuisine
                  <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </Link>

            {/* Things To Do Card */}
            <Link href="/travelguide/things-to-do" className="group relative overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39C12] block min-h-[380px] sm:min-h-[420px] lg:min-h-[450px]">
              <img
                src="/images/wildLifeImage.jpg"
                alt="Things To Do"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "brightness(0.55) saturate(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />

              {/* Icon badge */}
              <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/18 flex items-center justify-center text-white/90">
                <IcoCompass />
              </div>
              <div className="absolute top-5 right-5 bg-black/38 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-semibold px-3 py-1.5 rounded-full">
                18 activities
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                  Things To Do
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4 max-w-sm">
                  From whale watching and safaris to surfing, Ayurveda, hot air ballooning, and trekking
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 group-hover:text-[#F5B041] transition-colors duration-300">
                  Explore Activities
                  <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Weather Strip ── */}
      <section className="py-12 bg-gradient-to-r from-[#8B5E0A] to-[#5D4030] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B041]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Weather Overview</h2>
            <p className="text-white/80 text-sm">Plan your visit according to the season</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {weatherInfo.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <w.icon className="h-10 w-10 text-[#F5B041] mb-3" />
                <h3 className="text-base font-bold text-white mb-1">{w.month}</h3>
                <p className="text-white/85 text-xs mb-0.5">{w.temp}</p>
                <p className="text-white/70 text-xs mb-2">{w.condition}</p>
                <p className="text-[#F5B041] text-[11px] font-semibold">Best: {w.best}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essential Info accordion ── */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#F5EFE6] to-[#FDFCFA]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Before You Go</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314] mb-2">Essential Travel Information</h2>
            <p className="text-[#6B5744]/75 text-sm">Click each section to learn more</p>
          </motion.div>

          <div className="space-y-3">
            {guideCategories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#E8D5B5] hover:border-[#F39C12]/40 transition-all duration-300">
                <button onClick={() => toggleCategory(cat.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between hover:bg-[#FDF8F2] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 ${expandedCategory === cat.id ? "scale-110 rotate-6" : ""}`}>
                      <cat.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#3D2314] text-left">{cat.title}</h3>
                  </div>
                  <motion.div animate={{ rotate: expandedCategory === cat.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <IcoChevDown className="h-5 w-5 text-[#F39C12]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedCategory === cat.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="p-5 sm:p-6 pt-0 space-y-4 bg-gradient-to-br from-[#FDF8F2] to-white">
                        {cat.sections.map((s, idx) => (
                          <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: idx * 0.08 }}
                            className="bg-white p-4 sm:p-5 rounded-xl border border-[#F39C12]/18 shadow-sm">
                            <h4 className="text-sm font-bold text-[#8B5E0A] mb-1.5">{s.subtitle}</h4>
                            <p className="text-[#5D4030] text-sm leading-relaxed">{s.content}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/sigiriya.jpg" alt="Sri Lanka" className="w-full h-full object-cover" style={{ filter: "brightness(0.62)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/78" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Let Us Plan It</span>
            <div className="w-8 h-px bg-[#F5B041]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
            Need <span className="text-[#F5B041]">Personalised Advice?</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Our travel experts are ready to help you plan the perfect Sri Lankan adventure
          </p>
          <Link href="/contactus"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/28">
            Contact Our Experts
            <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes tgHeroIn {
          0% { opacity:0; transform:translateY(24px); }
          100% { opacity:1; transform:translateY(0); }
        }
        .tg-hero-in { animation: tgHeroIn 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>
    </div>
  );
}
