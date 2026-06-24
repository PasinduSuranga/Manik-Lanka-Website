"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/* ════════════════════════════════════════════════════════════
   SVG ICONS (replace lucide Menu/X)
════════════════════════════════════════════════════════════ */
const IcoMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IcoClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* Split nav: main links (row-2) + CTA links (row-1 right) */
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Travel Guide', path: '/travelguide' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
  ];
  const ctaLinks = [
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Contact Us', path: '/contactus' },
  ];
  const allLinks = [...mainLinks, ...ctaLinks];

  const isActive = (path: string) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── SHARED LOGO ── */
  const Logo = ({ scrolled }: { scrolled: boolean }) => (
    <div
      className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0"
      onClick={() => router.push('/')}
    >
      <div className={`w-9 h-9 sm:w-11 sm:h-11 relative rounded-xl flex items-center justify-center overflow-visible shadow-lg transition-all duration-500 group-hover:scale-110 ${scrolled
        ? 'border-2 border-[#F39C12]/60 bg-gradient-to-br from-[#F8C471]/20 to-[#F39C12]/20'
        : 'border-2 border-white/30 bg-white/10 backdrop-blur-sm'}`}>
        <img src="/logo.png" alt="Manik Lanka Holidays Logo" className="w-[80%] h-[80%] object-contain relative z-10" />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-sm sm:text-base tracking-wide leading-tight transition-all duration-500 ${scrolled
          ? 'bg-gradient-to-r from-[#F8C471] via-[#F39C12] to-[#F8C471] bg-clip-text text-transparent group-hover:from-[#F5B041] group-hover:via-[#FFD700] group-hover:to-[#F5B041]'
          : 'text-white group-hover:text-[#F5B041] drop-shadow-lg'}`}>
          Manik Lanka Holidays
        </span>
        <span className={`hidden sm:block text-[10px] tracking-widest ${scrolled ? 'text-[#D4AF37] opacity-90' : 'text-white/75 drop-shadow-md'}`}>
          Your Journey Begins Here
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* ══════════════════════════════════════════════
          TRANSPARENT HEADER (hero / top of page)
          Two-row layout:
          Row 1 → Logo + CTA buttons
          Row 2 → 8 main nav links
      ══════════════════════════════════════════════ */}
      <nav className="absolute top-0 left-0 right-0 z-40 w-full">
        <div className="w-full bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ROW 1: Logo + CTAs + Mobile hamburger */}
            <div className="flex justify-between items-center h-14 sm:h-16">
              <Logo scrolled={false} />

              {/* Desktop CTA buttons — top-right */}
              <div className="hidden md:flex items-center gap-2">
                {ctaLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => router.push(link.path)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 hover:scale-105 ${
                      link.name === 'Contact Us'
                        ? 'bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white shadow-md shadow-[#F39C12]/30 hover:from-[#F5B041] hover:to-[#F39C12]'
                        : isActive(link.path)
                          ? 'text-white bg-white/20 backdrop-blur-md shadow border border-white/30'
                          : 'text-white/90 border border-white/25 hover:bg-white/15 backdrop-blur-sm'
                    }`}
                  >
                    {link.name}
                    {link.name === 'Contact Us' && <IcoArrow />}
                  </button>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/30 text-white shadow-md"
              >
                {isOpen ? <IcoClose /> : <IcoMenu />}
              </button>
            </div>

            {/* ROW 2: 8 main nav links — desktop only */}
            <div className="hidden md:flex items-center justify-center gap-0.5 pb-2">
              {mainLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => router.push(link.path)}
                  className={`relative px-3 lg:px-4 py-1.5 rounded-md font-medium text-xs lg:text-sm transition-all duration-300 hover:scale-105 ${
                    isActive(link.path)
                      ? 'text-white bg-white/20 backdrop-blur-md shadow border border-white/30'
                      : 'text-white/85 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  <span className="relative z-10 drop-shadow-md">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu — all 10 links in a 2-col grid */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-2 gap-2 pt-3">
                {allLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => { router.push(link.path); setIsOpen(false); }}
                    className={`px-3 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 text-left ${
                      isActive(link.path)
                        ? 'text-white bg-white/20 backdrop-blur-md shadow border border-white/30'
                        : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          STICKY HEADER (appears on scroll)
          Same two-row layout, warm brown bg
      ══════════════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="w-full bg-gradient-to-r from-[#5D4E37] via-[#4A3C2A] to-[#3D2F1F] border-b-2 border-[#F39C12]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ROW 1: Logo + CTA buttons */}
            <div className="flex justify-between items-center h-14 sm:h-16">
              <Logo scrolled={true} />

              {/* Desktop CTA buttons */}
              <div className="hidden md:flex items-center gap-2">
                {ctaLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => router.push(link.path)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 hover:scale-105 ${
                      link.name === 'Contact Us'
                        ? 'bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white shadow-md shadow-[#F39C12]/30 hover:from-[#F5B041] hover:to-[#F39C12]'
                        : isActive(link.path)
                          ? 'text-white bg-gradient-to-r from-[#F5B041] via-[#E67E22] to-[#F39C12] shadow'
                          : 'text-[#F8C471] border border-[#F39C12]/40 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    {link.name === 'Contact Us' && <IcoArrow />}
                  </button>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-lg bg-gradient-to-br from-[#F5B041]/30 to-[#E67E22]/30 hover:from-[#F5B041]/40 hover:to-[#E67E22]/40 transition-all duration-300 border border-[#F39C12]/50 text-[#F8C471] shadow-md"
              >
                {isOpen ? <IcoClose /> : <IcoMenu />}
              </button>
            </div>

            {/* ROW 2: 8 main nav links */}
            <div className="hidden md:flex items-center justify-center gap-0.5 pb-2">
              {mainLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => router.push(link.path)}
                  className={`relative px-3 lg:px-4 py-1.5 rounded-md font-medium text-xs lg:text-sm transition-all duration-300 hover:scale-105 ${
                    isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-[#F5B041] via-[#E67E22] to-[#F39C12] shadow'
                      : 'text-[#F8C471] hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu — 2-col grid */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-2 gap-2 pt-3">
                {allLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => { router.push(link.path); setIsOpen(false); }}
                    className={`px-3 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 text-left ${
                      isActive(link.path)
                        ? 'text-white bg-gradient-to-r from-[#F5B041] via-[#E67E22] to-[#F39C12] shadow'
                        : 'text-[#F8C471] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}