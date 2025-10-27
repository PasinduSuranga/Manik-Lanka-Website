"use client";

import { useState, useEffect } from 'react';
// Use Next.js imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Sparkles } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Use Next.js hook
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Use Next.js pathname
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div className={`backdrop-blur-2xl border-b transition-all duration-700 relative overflow-hidden ${
        isScrolled 
          ? 'bg-white/30 border-white/40 shadow-2xl shadow-orange-500/10' 
          : 'bg-white/20 border-white/30 shadow-xl shadow-orange-400/5'
      }`}>
        {/* Liquid crystal animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-white/10 to-orange-400/5 animate-liquid-flow" 
             style={{
               backgroundSize: '200% 200%',
             }} 
        />
        
        {/* Iridescent shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-300/5 to-transparent animate-shimmer-diagonal" 
             style={{
               backgroundSize: '200% 200%',
             }} 
        />
        
        {/* Floating glass orbs */}
        <div className="absolute -top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -top-20 right-1/3 w-48 h-48 bg-gradient-to-br from-orange-300/15 to-white/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -top-10 left-1/2 w-32 h-32 bg-gradient-to-br from-white/30 to-orange-200/20 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* Glass reflection lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center gap-3 group relative">
              {/* Glow effect behind logo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Use Next.js Image component */}
              <Image
                src="/logo.png"
                alt="Manik Lanka Holidays Logo"
                width={40}
                height={40}
                className="relative rounded-xl border border-white/50 backdrop-blur-sm bg-white/30 shadow-lg shadow-orange-200/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-orange-300/50"
              />

              <div className="flex flex-col relative">
                <span className="font-semibold text-[#222222] tracking-wide drop-shadow-sm transition-all duration-500 group-hover:text-[#FF6A00]">
                  Manik Lanka Holidays
                </span>
                {!isScrolled && (
                  <span className="text-gray-600 text-xs tracking-widest opacity-80">Your Journey Begins Here</span>
                )}
              </div>
              
              {/* Sparkle effect on hover */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
                    isActive(link.path)
                      ? 'text-white shadow-xl shadow-orange-400/30'
                      : 'text-[#222222] hover:text-white backdrop-blur-md'
                  }`}
                >
                  {/* Liquid glass background for active state */}
                  {isActive(link.path) && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00] via-orange-500 to-orange-600 animate-gradient-shift" 
                           style={{ backgroundSize: '200% 200%' }} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-white/50" />
                    </>
                  )}
                  
                  {/* Hover glass effect */}
                  {!isActive(link.path) && (
                    <>
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/80 via-orange-500/80 to-orange-600/80 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                           style={{ backgroundSize: '200% 200%' }} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </>
                  )}
                  
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active indicator crystal */}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2.5 rounded-xl transition-all duration-500 transform hover:scale-110 group overflow-hidden backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-[#222222] group-hover:text-[#FF6A00] transition-colors duration-300">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/30 backdrop-blur-2xl relative z-10 bg-white/20">
            {/* Liquid background for mobile menu */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
            
            <div className="px-2 pt-2 pb-3 space-y-2 relative z-10">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative block px-5 py-3 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
                    isActive(link.path)
                      ? 'text-white shadow-xl shadow-orange-400/30'
                      : 'text-[#222222] hover:text-white backdrop-blur-md'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideIn 0.5s ease-out forwards',
                    opacity: 0
                  }}
                >
                  {/* Active state liquid glass */}
                  {isActive(link.path) && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00] via-orange-500 to-orange-600 animate-gradient-shift" 
                           style={{ backgroundSize: '200% 200%' }} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10" />
                    </>
                  )}
                  
                  {/* Hover glass effect */}
                  {!isActive(link.path) && (
                    <>
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/80 via-orange-500/80 to-orange-600/80 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </>
                  )}
                  
                  <span className="relative z-10">{link.name}</span>
                  
                  {isActive(link.path) && (
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Custom liquid crystal animations */}
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
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(-15px); }
          66% { transform: translateY(-25px) translateX(10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-liquid-flow {
          animation: liquid-flow 8s ease-in-out infinite;
        }
        .animate-shimmer-diagonal {
          animation: shimmer-diagonal 6s linear infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}