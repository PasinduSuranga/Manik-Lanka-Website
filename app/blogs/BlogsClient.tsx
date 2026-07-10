"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { blogsData, Blog } from '../data/blogsData';

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
   ICONS
════════════════════════════════════════════════════════════ */
const IcoClose = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IcoArrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="9 18 15 12 9 6"></polyline></svg>;
const IcoCalendar = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IcoUser = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;

export default function BlogsClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const blogsReveal = useReveal();

  useEffect(() => {
    setHasAnimated(true);
    // Prevent scrolling when modal is open
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedBlog]);

  return (
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783588081/Hero_Section_s7auld.png"
          alt="Our Blogs"
          fill
          priority
          className="object-cover blogs-hero-img"
          style={{ filter: 'brightness(0.6) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className={`absolute bottom-12 left-0 right-0 px-6 sm:px-14 lg:px-24 ${hasAnimated ? 'blogs-hero-text' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Travel Stories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            Our <span className="text-[#F5B041]">Blogs</span>
          </h1>
          <p className="text-white/80 max-w-lg text-sm sm:text-base leading-relaxed">
            Discover tips, inspiration, and untold stories from the beautiful island of Sri Lanka.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOGS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FDFCFA]" ref={blogsReveal.ref}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${blogsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {blogsData.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F5EFE6] flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#B8730A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#3D2314] mb-3">No Blogs Yet</h3>
                <p className="text-[#6B5744] text-sm sm:text-base max-w-md leading-relaxed">
                  We&apos;re crafting inspiring travel stories for you. Check back soon for tips, guides, and unforgettable moments from Sri Lanka.
                </p>
              </div>
            ) : blogsData.map((blog, idx) => (
              <div
                key={blog.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8D5B5] shadow-sm hover:shadow-2xl hover:shadow-[#F39C12]/15 transition-all duration-500 cursor-pointer hover:-translate-y-1 flex flex-col"
                onClick={() => setSelectedBlog(blog)}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Cover Image */}
                <div className="w-full h-60 relative overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#8B5E0A] uppercase tracking-wider shadow-sm">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-[#B8A090] font-medium mb-3">
                    <span className="flex items-center gap-1.5"><IcoCalendar /> {blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#3D2314] mb-3 leading-tight group-hover:text-[#F39C12] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#6B5744] text-sm line-clamp-3 mb-6">
                    {blog.content[0]}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-[#F5EFE6] pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-[#8B5E0A] font-semibold"><IcoUser /> {blog.author}</span>
                    <span className="text-[#F39C12] group-hover:translate-x-1 transition-transform duration-300">
                      <IcoArrow />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MODAL (FULL BLOG)
      ══════════════════════════════════════════════════════ */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300"
              onClick={() => setSelectedBlog(null)}
            >
              <IcoClose />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto w-full h-full">
              {/* Header Image */}
              <div className="w-full h-[40vh] min-h-[300px] relative">
                <Image src={selectedBlog.coverImage} alt={selectedBlog.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-[#F39C12] text-white text-[11px] font-bold uppercase tracking-wider rounded-md mb-3">
                    {selectedBlog.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {selectedBlog.title}
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-white/80 font-medium">
                    <span className="flex items-center gap-2"><IcoCalendar /> {selectedBlog.date}</span>
                    <span className="flex items-center gap-2"><IcoUser /> {selectedBlog.author}</span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 sm:p-12 bg-white">
                <div className="max-w-3xl mx-auto space-y-6 text-[#4A3B2C] text-base sm:text-lg leading-relaxed">
                  {/* Paragraphs */}
                  {selectedBlog.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {/* Optional Multiple Images */}
                  {selectedBlog.images && selectedBlog.images.length > 0 && (
                    <div className={`grid gap-4 my-10 ${selectedBlog.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {selectedBlog.images.map((img, i) => (
                        <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                          <Image src={img} alt="Blog highlight" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optional Video */}
                  {selectedBlog.videoUrl && (
                    <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-[#E8D5B5] relative pt-[56.25%]">
                      <iframe
                        src={selectedBlog.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blogsHeroFade { 0%{opacity:0} 100%{opacity:1} }
        .blogs-hero-img { animation: blogsHeroFade 1.2s ease both; }
        
        @keyframes blogsHeroText { 0%{opacity:0;transform:translateY(28px)} 100%{opacity:1;transform:translateY(0)} }
        .blogs-hero-text { animation: blogsHeroText 1s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </div>
  );
}
