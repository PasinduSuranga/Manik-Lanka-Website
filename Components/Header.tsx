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

  const isActive = (path: string) => pathname === path;

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
        className="max-w-7xl mx-auto backdrop-blur-2xl border transition-all duration-700 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#2C4A52]/85 border-[#F59E42]/30 shadow-xl shadow-[#E88B2F]/10"
      >
        <>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#F59E42]/10 via-[#FFF8F0]/5 to-[#E88B2F]/10 animate-liquid-flow"
            style={{ backgroundSize: '200% 200%' }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-[#F59E42]/10 to-transparent animate-shimmer-diagonal"
            style={{ backgroundSize: '200% 200%' }}
          />

          <div className="absolute -top-20 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-[#F59E42]/20 to-[#E88B2F]/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -top-20 right-1/3 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br from-[#F59E42]/15 to-[#FFF8F0]/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute -top-10 left-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#FFF8F0]/20 to-[#F5E6D3]/15 rounded-full blur-2xl animate-pulse-slow" />
        </>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3 group relative cursor-pointer">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F59E42]/30 to-[#E88B2F]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="w-12 h-12 sm:w-16 sm:h-16 relative rounded-lg sm:rounded-xl border-2 border-[#F59E42]/50 backdrop-blur-sm bg-[#FFF8F0]/20 shadow-lg shadow-[#F59E42]/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[#F59E42]/50 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Manik Lanka Holidays Logo"
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>

              <div className="flex flex-col relative">
                <span className="font-semibold text-[#FFF8F0] text-sm sm:text-base tracking-wide transition-all duration-500 group-hover:text-[#F59E42]">
                  Manik Lanka Holidays
                </span>
                <span className="hidden sm:block text-[#F5E6D3] text-xs tracking-widest opacity-80">
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
                  className={`relative px-3 lg:px-5 py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
                    isActive(link.path)
                      ? 'text-white shadow-xl shadow-[#F59E42]/40'
                      : 'text-[#FFF8F0] hover:text-white backdrop-blur-md'
                  }`}
                >
                  {isActive(link.path) && (
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#F59E42] via-[#E88B2F] to-[#F59E42] animate-gradient-shift"
                      style={{ backgroundSize: '200% 200%' }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-xl backdrop-blur-md bg-[#F59E42]/20 hover:bg-[#F59E42]/30 transition-all duration-300 border border-[#F59E42]/30 text-[#FFF8F0]"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
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