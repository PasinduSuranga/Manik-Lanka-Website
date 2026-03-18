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
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  const isActive = (path: string) => {
    // Exact match for home page to avoid it being active on all pages
    if (path === '/') {
      return pathname === path;
    }
    // Starts with check for other pages (e.g. /packages keeps /packages/1 active)
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-4">
      <div
        className="max-w-7xl mx-auto backdrop-blur-2xl border transition-all duration-700 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#5D4E37] via-[#4A3C2A] to-[#3D2F1F] border-[#8B6914]/40"
      >
        <>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#8B6914]/15 via-[#6B5320]/10 to-[#5D4E37]/15 animate-liquid-flow"
            style={{ backgroundSize: '200% 200%' }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-br from-[#D68910]/10 via-transparent to-[#8B6914]/10 animate-shimmer-diagonal"
            style={{ backgroundSize: '200% 200%' }}
          />

          <div className="absolute -top-20 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-[#8B6914]/25 to-[#5D4E37]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -top-20 right-1/3 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br from-[#D68910]/20 to-[#6B5320]/15 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute -top-10 left-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#8B6914]/25 to-[#5D4E37]/20 rounded-full blur-2xl animate-pulse-slow" />
        </>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D68910]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F39C12]/40 to-transparent" />

        <div className="px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div
              className="flex items-center gap-2 sm:gap-3 group relative cursor-pointer"
              onClick={() => router.push('/')}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F5B041]/40 via-[#E67E22]/30 to-[#F39C12]/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative rounded-lg sm:rounded-xl border-2 border-[#F39C12]/60 backdrop-blur-sm bg-gradient-to-br from-[#F8C471]/20 to-[#F39C12]/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F5B041]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/logo.png"
                  alt="Manik Lanka Holidays Logo"
                  className="w-[80%] h-[80%] object-contain relative z-10"
                />
              </div>

              <div className="flex flex-col relative">
                <span className="font-semibold bg-gradient-to-r from-[#F8C471] via-[#F39C12] to-[#F8C471] bg-clip-text text-transparent text-xs sm:text-sm md:text-base tracking-wide transition-all duration-500 group-hover:from-[#F5B041] group-hover:via-[#FFD700] group-hover:to-[#F5B041] leading-tight">
                  Manik Lanka Holidays
                </span>
                <span className="hidden sm:block text-[#D4AF37] text-[10px] md:text-xs tracking-widest opacity-90">
                  Your Journey Begins Here
                </span>
              </div>
            </div>

            <div className="hidden md:flex space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    router.push(link.path);
                  }}
                  className={`relative px-3 lg:px-5 py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-500 transform hover:scale-105 overflow-hidden group ${isActive(link.path)
                    ? 'text-white'
                    : 'text-[#F8C471] hover:text-white backdrop-blur-md'
                    }`}
                >
                  {isActive(link.path) && (
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#F5B041] via-[#E67E22] to-[#F39C12] animate-gradient-shift"
                      style={{ backgroundSize: '200% 200%' }}
                    />
                  )}
                  {!isActive(link.path) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F39C12]/0 via-[#F5B041]/0 to-[#F8C471]/0 group-hover:from-[#F39C12]/20 group-hover:via-[#F5B041]/15 group-hover:to-[#F8C471]/20 transition-all duration-500" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-xl backdrop-blur-md bg-gradient-to-br from-[#F5B041]/25 to-[#E67E22]/20 hover:from-[#F5B041]/35 hover:to-[#E67E22]/30 transition-all duration-300 border border-[#F39C12]/40 text-[#F8C471]"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
              }`}
          >
            <div className="flex flex-col space-y-2 pb-2 backdrop-blur-sm bg-gradient-to-br from-[#5D4E37]/95 via-[#4A3C2A]/90 to-[#3D2F1F]/95 rounded-2xl p-3 border-t border-[#8B6914]/30">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    router.push(link.path);
                    setIsOpen(false);
                  }}
                  className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 text-left overflow-hidden ${isActive(link.path)
                    ? 'text-white'
                    : 'text-[#F8C471] hover:text-white backdrop-blur-md hover:bg-gradient-to-r hover:from-[#F39C12]/15 hover:to-[#F5B041]/15'
                    }`}
                >
                  {isActive(link.path) && (
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#F5B041] via-[#E67E22] to-[#F39C12] animate-gradient-shift"
                      style={{ backgroundSize: '200% 200%' }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes liquid-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer-diagonal {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-liquid-flow { animation: liquid-flow 8s ease infinite; }
        .animate-shimmer-diagonal { animation: shimmer-diagonal 6s linear infinite; }
        .animate-gradient-shift { animation: gradient-shift 3s ease infinite; }
        .animate-float { animation: float 8s ease infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease infinite; }
      `}</style>
    </nav>
  );
}