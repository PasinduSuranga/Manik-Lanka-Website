"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Travel Guide', path: '/travelguide' },
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Transparent Header - Scrolls with page */}
      <nav className="absolute top-0 left-0 right-0 z-40 w-full">
        <div className="w-full bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo Section */}
              <div
                className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                onClick={() => router.push('/')}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-500 transform group-hover:scale-125 flex items-center justify-center overflow-visible shadow-lg">
                  <img
                    src="/logo.png"
                    alt="Manik Lanka Holidays Logo"
                    className="w-[80%] h-[80%] object-contain relative z-10"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm sm:text-base md:text-lg tracking-wide transition-all duration-500 group-hover:text-[#F5B041] leading-tight drop-shadow-lg">
                    Manik Lanka Holidays
                  </span>
                  <span className="hidden sm:block text-white/80 text-[10px] md:text-xs tracking-widest drop-shadow-md">
                    Your Journey Begins Here
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      router.push(link.path);
                    }}
                    className={`relative px-4 lg:px-6 py-2.5 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 overflow-hidden ${isActive(link.path)
                      ? 'text-white bg-white/20 backdrop-blur-md shadow-lg border border-white/30'
                      : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                      }`}
                  >
                    <span className="relative z-10 drop-shadow-md">{link.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/30 text-white shadow-md"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="flex flex-col space-y-2 pt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      router.push(link.path);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 text-left ${isActive(link.path)
                      ? 'text-white bg-white/20 backdrop-blur-md shadow-lg border border-white/30'
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

      {/* Colored Sticky Header - Appears on scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled
          ? 'translate-y-0 opacity-100 shadow-2xl'
          : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="w-full bg-gradient-to-r from-[#5D4E37] via-[#4A3C2A] to-[#3D2F1F] border-b-2 border-[#F39C12]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo Section */}
              <div
                className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                onClick={() => router.push('/')}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative rounded-xl border-2 border-[#F39C12]/60 bg-gradient-to-br from-[#F8C471]/20 to-[#F39C12]/20 transition-all duration-500 transform group-hover:scale-125 flex items-center justify-center overflow-visible shadow-lg">
                  <img
                    src="/logo.png"
                    alt="Manik Lanka Holidays Logo"
                    className="w-[80%] h-[80%] object-contain relative z-10"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold bg-gradient-to-r from-[#F8C471] via-[#F39C12] to-[#F8C471] bg-clip-text text-transparent text-sm sm:text-base md:text-lg tracking-wide transition-all duration-500 group-hover:from-[#F5B041] group-hover:via-[#FFD700] group-hover:to-[#F5B041] leading-tight">
                    Manik Lanka Holidays
                  </span>
                  <span className="hidden sm:block text-[#D4AF37] text-[10px] md:text-xs tracking-widest opacity-90">
                    Your Journey Begins Here
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      router.push(link.path);
                    }}
                    className={`relative px-4 lg:px-6 py-2.5 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 overflow-hidden ${isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-[#F5B041] via-[#E67E22] to-[#F39C12] shadow-lg'
                      : 'text-[#F8C471] hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-lg bg-gradient-to-br from-[#F5B041]/30 to-[#E67E22]/30 hover:from-[#F5B041]/40 hover:to-[#E67E22]/40 transition-all duration-300 border border-[#F39C12]/50 text-[#F8C471] shadow-md"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="flex flex-col space-y-2 pt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      router.push(link.path);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 text-left ${isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-[#F5B041] via-[#E67E22] to-[#F39C12] shadow-lg'
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