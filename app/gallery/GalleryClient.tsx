"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
const IcoPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);
const IcoVolume = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);
const IcoMute = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const categories = ['All', 'Heritage', 'Nature', 'Wildlife', 'Beaches', 'Culture', 'Videos', 'Lifestyle'];

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: string;
  span: 'tall' | 'wide' | 'square';
  type?: 'image' | 'video';
  poster?: string;
};

const galleryData: GalleryItem[] = [
  { id: 1, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1783673226/HomePageHero_qkcd1o.mp4', title: 'Beautiful Sri Lanka', category: 'Videos', span: 'wide', type: 'video' },
  { id: 2, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783652792/1_t3qxmv.png', title: 'Breathtaking Summit Views', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 3, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783652792/2_mvwidz.png', title: 'Scenic Trail Adventures', category: 'Nature', span: 'wide', type: 'image' },
  { id: 4, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653001/3_lzno2o.png', title: 'Tropical Refreshment Stops', category: 'Culture', span: 'tall', type: 'image' },
  { id: 5, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783652794/4_iu4kh0.png', title: 'Authentic Tea Plucking Experiences', category: 'Culture', span: 'tall', type: 'image' },
  { id: 6, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783652958/5_zarfyl.png', title: 'Taste of the Tropics', category: 'Culture', span: 'tall', type: 'image' },
  { id: 7, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653241/6_kcbrxz.png', title: 'Island King Coconut Flavors', category: 'Culture', span: 'tall', type: 'image' },
  { id: 8, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653399/7_v1yrat.png', title: 'Mangrove River Safaris', category: 'Nature', span: 'tall', type: 'image' },
  { id: 9, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653242/8_qzn1hg.png', title: 'Mountain Vista Road Trips', category: 'Nature', span: 'tall', type: 'image' },
  { id: 10, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653448/9_duqz0v.png', title: 'Historic Coastal Fortresses', category: 'Heritage', span: 'wide', type: 'image' },
  { id: 11, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653397/10_gvnzji.png', title: 'Iconic Colonial Railway Journeys', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 12, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653616/11_jmyjpc.png', title: 'Golden Hillside Sunsets', category: 'Nature', span: 'tall', type: 'image' },
  { id: 13, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653619/12_lqd3kg.png', title: 'Sunset Coastal Ramparts', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 14, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653620/13_ilriqz.png', title: 'Legendary Rock Fortress Climbs', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 15, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653622/14_ajle2s.png', title: 'Historic Stone Bastion Walks', category: 'Heritage', span: 'square', type: 'image' },
  { id: 16, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653624/15_gch9ic.png', title: 'Tranquil Lagoon Boat Rides', category: 'Nature', span: 'wide', type: 'image' },
  { id: 17, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653864/16_k5l7y3.png', title: 'Serene Highland Valleys', category: 'Nature', span: 'tall', type: 'image' },
  { id: 18, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653902/17_f5khvk.png', title: 'Historic Arch Bridge Wonders', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 19, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653867/18_zpg8e2.png', title: 'Scenic Estuary Exploration', category: 'Nature', span: 'tall', type: 'image' },
  { id: 20, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653869/19_arux6a.png', title: 'Sun-Drenched Mountain Peaks', category: 'Nature', span: 'square', type: 'image' },
  { id: 21, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783653870/20_w7lsb1.png', title: 'Romantic Oceanfront Sunsets', category: 'Nature', span: 'tall', type: 'image' },
  { id: 22, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654166/21_gmtuhz.png', title: 'Colonial Heritage Landmarks', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 23, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654167/22_phczh3.png', title: 'Wild Avian Sightings', category: 'Wildlife', span: 'tall', type: 'image' },
  { id: 24, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654220/23_fvp7dq.png', title: 'Big Cat Safari Encounters', category: 'Wildlife', span: 'tall', type: 'image' },
  { id: 25, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654179/24_wr570m.png', title: 'Casual Billiards and Leisure', category: 'Lifestyle', span: 'tall', type: 'image' },
  { id: 26, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654180/25_hl5pl2.png', title: 'Sun-Drenched Hillside Treks', category: 'Nature', span: 'tall', type: 'image' },
  { id: 27, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654497/26_mmzi7c.png', title: 'Cultural Immersive Journeys', category: 'Culture', span: 'tall', type: 'image' },
  { id: 28, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654592/27_wfzyth.png', title: 'Waterfront Dining Experiences', category: 'Culture', span: 'wide', type: 'image' },
  { id: 29, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654600/28_rsvzsk.png', title: 'Historic Coastal Fortresses', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 30, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654606/29_1_tglppj.png', title: 'Lush Tea Plantation Tours', category: 'Nature', span: 'tall', type: 'image' },
  { id: 31, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654595/30_jme5k1.png', title: 'Traditional Coastal Fishing', category: 'Culture', span: 'tall', type: 'image' },
  { id: 32, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783654792/31_dbfftp.png', title: 'Scenic Highland Escapes', category: 'Nature', span: 'wide', type: 'image' },
  { id: 33, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1783655096/32_nktkjg.png', title: 'Local Heritage Encounters', category: 'Heritage', span: 'tall', type: 'image' },
  { id: 34, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1783673465/1_avxgyy.mp4', title: 'First Ocean Steps', category: 'Wildlife', span: 'tall', type: 'video' },
  { id: 35, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1783673567/2_hblbj9.mp4', title: 'Sharing The Catch', category: 'Culture', span: 'tall', type: 'video' },
  { id: 36, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1784286066/WhatsApp_Video_2026-07-17_at_2.03.58_PM_1_hbuz7m.mp4', title: 'Serene Emerald Heights', category: 'Nature', span: 'tall', type: 'video' },
  { id: 37, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1784286067/WhatsApp_Video_2026-07-17_at_2.05.05_PM_ejc0ut.mp4', title: 'Golden Beach Horizon', category: 'Nature', span: 'tall', type: 'video' },
  { id: 38, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1784286067/WhatsApp_Video_2026-07-17_at_2.03.58_PM_wdclfk.mp4', title: 'Quiet Valley Breezes', category: 'Nature', span: 'wide', type: 'video' },
  { id: 39, src: 'https://res.cloudinary.com/bnhex8aj/video/upload/v1784286068/WhatsApp_Video_2026-07-17_at_2.41.21_PM_xucyyi.mp4', title: 'Mighty Hooded Wanderer', category: 'Culture', span: 'tall', type: 'video' },
  { id: 40, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292418/WhatsApp_Image_2026-07-17_at_2.03.32_PM_1__upscayl_4x_ultramix-balanced-4x_entk6n.png', title: 'Pastel Ocean Bay', category: 'Nature', span: 'tall', type: 'image' },
  { id: 41, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292420/WhatsApp_Image_2026-07-17_at_2.03.34_PM_3__upscayl_4x_ultramix-balanced-4x_ycxkrb.png', title: 'Sunset Highway Drive', category: 'Nature', span: 'tall', type: 'image' },
  { id: 42, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292421/WhatsApp_Image_2026-07-17_at_2.03.34_PM_1__upscayl_4x_ultramix-balanced-4x_b8r0rq.png', title: 'Dramatic Horizon Skies', category: 'Nature', span: 'tall', type: 'image' },
  { id: 43, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292421/WhatsApp_Image_2026-07-17_at_2.03.34_PM_upscayl_4x_ultramix-balanced-4x_l8zyq1.png', title: 'Sunlit Tropical Shore', category: 'Nature', span: 'wide', type: 'image' },
  { id: 44, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292421/WhatsApp_Image_2026-07-17_at_2.03.34_PM_2__upscayl_4x_ultramix-balanced-4x_mqyqcm.png', title: 'Shadows On Sand', category: 'Nature', span: 'tall', type: 'image' },
  { id: 45, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292421/WhatsApp_Image_2026-07-17_at_2.03.23_PM_upscayl_4x_ultramix-balanced-4x_uamf53.png', title: 'Dusk Mountain Trail', category: 'Nature', span: 'tall', type: 'image' },
  { id: 46, src: 'https://res.cloudinary.com/bnhex8aj/image/upload/v1784292421/WhatsApp_Image_2026-07-17_at_2.03.32_PM_upscayl_4x_ultramix-balanced-4x_dvtans.png', title: 'Soft Evening Tides', category: 'Nature', span: 'wide', type: 'image' },

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
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ════════════════════════════════════════════════════════════
   AUTO-PLAY VIDEO CARD (muted, looped, plays on hover)
════════════════════════════════════════════════════════════ */
function VideoCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver: autoplay when visible, pause when not
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const aspectClass = item.span === 'tall' ? 'aspect-[3/4]' : item.span === 'wide' ? 'aspect-[16/9]' : 'aspect-square';

  return (
    <div
      ref={cardRef}
      className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#F39C12]/12 transition-all duration-500 hover:-translate-y-1"
      onClick={onOpen}
    >
      <div className={`w-full relative overflow-hidden ${aspectClass}`}>
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          muted={muted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E05]/65 via-[#1A0E05]/10 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Video badge top-left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/55 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded-lg border border-white/15">
            <IcoPlay />
            Video
          </span>
        </div>

        {/* Mute toggle top-right — always visible for video */}
        <button
          className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/35"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <IcoMute /> : <IcoVolume />}
        </button>

        {/* Pulsing play ring — center overlay to hint 'click to fullscreen' */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
            <div className="w-8 h-8 rounded-full bg-[#F39C12]/90 flex items-center justify-center pl-0.5">
              <IcoPlay />
            </div>
          </div>
        </div>

        {/* Title slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-6 h-0.5 bg-[#F39C12] mb-2" />
          <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{item.title}</h3>
        </div>
      </div>
      {/* Gold bottom accent reveal */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function GalleryClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const galleryReveal = useReveal();
  const ctaReveal = useReveal();

  useEffect(() => { setHasAnimated(true); }, []);

  // Filter based on category
  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxItem]);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — cinematic, bottom-anchored text
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783655218/Hero_Section_qqjriv.png"
          alt="Nine Arch Bridge Sri Lanka"
          fill
          priority
          className="object-cover gallery-hero-img"
          style={{ filter: 'brightness(0.65) saturate(1.1)' }}
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
            {[{ num: '11+', label: 'Stunning Photos' }, { num: '6', label: 'Categories' }, { num: '10+', label: 'Destinations' }, { num: '100%', label: 'Real Moments' }].map((s, i) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] mb-8">Photo & Video <span className="text-[#8B5E0A]">Gallery</span></h2>

            {/* Filter Pills with count badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const count = cat === 'All' ? galleryData.length : galleryData.filter(g => g.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
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
            {filteredItems.map((item, idx) => {
              if (item.type === 'video') {
                return (
                  <VideoCard
                    key={item.id}
                    item={item}
                    onOpen={() => setLightboxItem(item)}
                  />
                );
              }
              // Image card (exactly as before)
              return (
                <div
                  key={item.id}
                  className="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#F39C12]/12 transition-all duration-500 hover:-translate-y-1"
                  onClick={() => setLightboxItem(item)}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div className={`w-full relative overflow-hidden ${item.span === 'tall' ? 'aspect-[3/4]' : item.span === 'wide' ? 'aspect-[16/9]' : 'aspect-square'}`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-[1.07] transition-transform duration-700 ease-out"
                    />
                    {/* Cinematic overlay — subtle always, full on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E05]/65 via-[#1A0E05]/10 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Category chip — always visible top-left */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex px-2.5 py-1 bg-black/45 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded-lg border border-white/15">
                        {item.category}
                      </span>
                    </div>
                    {/* Zoom badge top-right on hover */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-400">
                      <IcoZoom />
                    </div>
                    {/* Title slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-6 h-0.5 bg-[#F39C12] mb-2" />
                      <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{item.title}</h3>
                    </div>
                  </div>
                  {/* Gold bottom accent reveal */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-[#6B5744]">
              <p>No items found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 sm:py-32 overflow-hidden" ref={ctaReveal.ref}>
        <div className="absolute inset-0">
          <Image src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783654794/Bottom_Section_xdau57.png" alt="Adam's Peak Sri Lanka" fill className="object-cover object-center" style={{ filter: 'brightness(0.5) saturate(1.1)' }} />
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
          LIGHTBOX MODAL (supports both image & video)
      ══════════════════════════════════════════════════════ */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setLightboxItem(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 z-[101]"
            onClick={() => setLightboxItem(null)}
          >
            <IcoClose />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === 'video' ? (
              /* ── Video lightbox ── */
              <div className="relative w-full" style={{ maxHeight: '80vh' }}>
                <video
                  src={lightboxItem.src}
                  poster={lightboxItem.poster}
                  controls
                  controlsList="nodownload"
                  autoPlay
                  loop
                  className="w-full rounded-lg shadow-2xl"
                  style={{ maxHeight: '80vh', background: '#000' }}
                />
              </div>
            ) : (
              /* ── Image lightbox (exactly as before) ── */
              <div className="relative w-full h-[80vh]">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold tracking-wide">{lightboxItem.title}</h3>
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
        .group-hover\\:scale-108:hover { transform: scale(1.08); }

        /* Lightbox entrance */
        @keyframes galleryLightbox { 0%{opacity:0} 100%{opacity:1} }
        .gallery-lightbox { animation: galleryLightbox 0.25s ease both; }
        @keyframes galleryLightboxInner { 0%{opacity:0;transform:scale(0.96) translateY(8px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        .gallery-lightbox-inner { animation: galleryLightboxInner 0.3s cubic-bezier(0.22,1,0.36,1) both; }

        /* Video card pulse ring */
        @keyframes galleryPlayPulse { 0%,100%{transform:scale(1);opacity:0.7} 50%{transform:scale(1.12);opacity:1} }
        .gallery-play-pulse { animation: galleryPlayPulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
