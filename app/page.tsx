"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MapPin, Users, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImage = '/images/hero1.jpeg';
const sigiriyaImage = '/images/sigiriya.jpg';
const beachImage = '/images/beachImage.jpg';
const wildLifeImage = '/images/wildLifeImage.jpg';
const foodImage = '/images/food.jpg';
const greenHillImage = '/images/nuwaraEliya.jpg';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const featuredDestinations = [
    {
      id: 1,
      name: 'Journey Through History',
      description: "Explore Sri Lanka's ancient wonders and step into a world of timeless history and breathtaking heritage.",
      image: sigiriyaImage,
    },
    {
      id: 2,
      name: 'Green Hills',
      description: "Explore Sri Lanka's hill country and enjoy the cool air and beautiful green landscapes.",
      image: greenHillImage,
    },
    {
      id: 3,
      name: 'Delicious Flavors',
      description: "Taste the flavors of Sri Lanka and enjoy its spicy, fresh, and tasty dishes.",
      image: foodImage,
    },
    {
      id: 4,
      name: 'Wildlife Adventures',
      description: "Discover Sri Lanka's wildlife and see amazing animals in their natural homes.",
      image: wildLifeImage,
    },
    {
      id: 5,
      name: 'Tropical Shores',
      description: "Discover Sri Lanka's pristine beaches and unwind along golden sands kissed by turquoise waters.",
      image: beachImage,
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Best Destinations',
      description: "Discover our expertly crafted tours to Sri Lanka's most breathtaking locations",
      gradient: 'from-[#C9A96E] via-[#B8935D] to-[#A67C52]',
      iconColor: 'text-[#5D4E37]',
      glowColor: 'shadow-[#B8935D]/40',
      textColor: 'text-[#2C1810]',
      descColor: 'text-[#3D2F1F]',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Friendly local professionals bringing you authentic Sri Lankan experiences',
      gradient: 'from-[#A67C52] via-[#8B6914] to-[#715310]',
      iconColor: 'text-[#5D4E37]',
      glowColor: 'shadow-[#8B6914]/40',
      textColor: 'text-[#2C1810]',
      descColor: 'text-[#3D2F1F]',
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'Your safety and comfort are always our top priorities',
      gradient: 'from-[#B8935D] via-[#9A7B4F] to-[#8B6914]',
      iconColor: 'text-[#5D4E37]',
      glowColor: 'shadow-[#9A7B4F]/40',
      textColor: 'text-[#2C1810]',
      descColor: 'text-[#3D2F1F]',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredDestinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredDestinations.length) % featuredDestinations.length);
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  // Trigger entrance animation on first load
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredDestinations.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Remove dependency to prevent recreation

  const getCardScale = (index: any) => {
    const total = featuredDestinations.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return 'scale-100 md:scale-110 z-30 opacity-100';
    if (diff === 1 || diff === total - 1) return 'scale-90 z-20 opacity-70';
    return 'scale-75 z-10 opacity-40';
  };

  const getCardPosition = (index: any) => {
    const total = featuredDestinations.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return 'translate-x-0';
    if (diff === 1) return 'translate-x-[70%] md:translate-x-[60%]';
    if (diff === 2) return 'translate-x-[140%] md:translate-x-[120%]';
    if (diff === total - 1) return '-translate-x-[70%] md:-translate-x-[60%]';
    if (diff === total - 2) return '-translate-x-[140%] md:-translate-x-[120%]';
    return 'translate-x-[200%]';
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#FDFEFE] via-[#F8F9F9] to-[#E8DAEF] mobile-dark-bg"
    >
      {/* Hero Section - Full Width Cinematic */}
      <div className="relative h-[500px] sm:h-[580px] lg:h-[650px] xl:h-[720px] overflow-hidden">
        {/* Background Image - sharp, no animation */}
        <img
          src={heroImage}
          alt="Sri Lanka Train Bridge"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Cinematic gradient: transparent at top, dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        {/* Side vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

        {/* Ambient golden orbs – subtle, behind text */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#F39C12]/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />

        {/* Text content - bottom anchored */}
        <div className={`absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16 ${hasAnimated ? 'animate-hero-text-in' : 'opacity-0'}`}>
          {/* Golden accent bar */}
          <div className="w-14 h-1 bg-gradient-to-r from-[#F39C12] to-[#F5B041] rounded-full mb-5" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)' }}>
            Experience the Magic of<br />Sri Lanka with Manik Lanka Holidays
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-[#F8C471] max-w-2xl font-medium"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            Your Gateway to Unforgettable Adventures and Cultural Experiences
          </p>
          <a
            href="/packages"
            className="inline-block bg-gradient-to-r from-[#F39C12] via-[#E67E22] to-[#D68910] hover:from-[#FFD700] hover:via-[#F39C12] hover:to-[#E67E22] border border-[#FFD700]/60 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-2xl">
            Explore Packages
          </a>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FDFEFE] via-[#F8F9F9] to-[#E8DAEF] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-[#F5B041]/15 to-[#F8C471]/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-[#E67E22]/15 to-[#F39C12]/15 rounded-full blur-3xl opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 sm:p-8 overflow-hidden bg-gradient-to-br ${feature.gradient} shadow-xl ${feature.glowColor} hover:shadow-2xl hover:shadow-[#F5B041]/50 transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-3 md:opacity-100 md:translate-x-0 animate-slide-in-mobile`}
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 5px 15px rgba(139,105,20,0.3)',
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/50 rounded-full animate-pulse-delayed" />
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/55 rounded-full animate-pulse" />

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-4 sm:mb-6" style={{ perspective: '1000px' }}>
                    <div className="absolute inset-0 rounded-full bg-white/30 blur-xl opacity-70 w-20 sm:w-24 h-20 sm:h-24 -left-2 sm:-left-3 -top-2 sm:-top-3 animate-pulse-slow" />

                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-110 transition-all duration-500 animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
                      <feature.icon className={`h-8 sm:h-10 w-8 sm:w-10 ${feature.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold ${feature.textColor} mb-2 sm:mb-3 drop-shadow-lg`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm sm:text-base ${feature.descColor} leading-relaxed drop-shadow-md`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#F5E6D3] via-[#FFF8F0] to-[#E8DAEF] mobile-dark-section-bg relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#F39C12]/20 to-[#F5B041]/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-[#E67E22]/15 to-[#F8C471]/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B6914] mb-3 sm:mb-4">
              Top Sri Lankan Experiences
            </h2>
            <p className="text-base sm:text-lg text-[#784212]/90 max-w-2xl mx-auto font-medium">
              Discover our island's must-see places, cultural wonders, and unforgettable flavors.
            </p>
          </div>

          {/* Stacked Card Carousel */}
          <div className="relative">
            <div className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-visible">
              {featuredDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className={`absolute transition-all duration-700 ease-out ${getCardScale(index)} ${getCardPosition(index)} cursor-pointer transform-gpu will-change-transform`}
                  style={{ width: '420px', maxWidth: '92vw' }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="relative group">
                    <div
                      className="relative backdrop-blur-2xl bg-white/70 border-2 border-[#F39C12]/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(139,105,20,0.4)] transition-all duration-500 transform hover:-translate-y-2"
                      style={{
                        boxShadow: '0 15px 40px rgba(0,0,0,0.15), 0 8px 20px rgba(243,156,18,0.25), inset 0 1px 0 rgba(255,255,255,0.7)',
                      }}
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <div className="relative w-full h-full">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            style={{
                              filter: 'brightness(1.15) contrast(1.2) saturate(1.4)',
                              imageRendering: '-webkit-optimize-contrast'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                      </div>

                      {/* Colored Text Box */}
                      <div className="p-5 sm:p-7 bg-gradient-to-br from-[#E8D5B5]/98 via-[#DCC9A8]/95 to-[#D9C5A3]/98 backdrop-blur-xl relative shadow-inner">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F39C12]/70 to-transparent" />

                        <h3 className="text-xl sm:text-2xl font-bold text-[#5D4E37] mb-2 drop-shadow-sm">
                          {destination.name}
                        </h3>
                        <p className="text-sm sm:text-base text-[#4A3C2A]/90 line-clamp-3 leading-relaxed">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Below Cards */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="backdrop-blur-xl bg-white/70 hover:bg-white/90 border-2 border-[#F39C12]/50 hover:border-[#F5B041]/70 rounded-full p-3 sm:p-4 hover:shadow-[#F5B041]/50 transition-all duration-500 group"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-[#8B6914] group-hover:text-[#F39C12] transition-colors duration-300" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {featuredDestinations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                      ? 'w-10 h-3 bg-gradient-to-r from-[#F39C12] via-[#E67E22] to-[#D68910]'
                      : 'w-3 h-3 bg-[#8B6914]/40 hover:bg-[#F5B041]/70'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="backdrop-blur-xl bg-white/70 hover:bg-white/90 border-2 border-[#F39C12]/50 hover:border-[#F5B041]/70 rounded-full p-3 sm:p-4 hover:shadow-[#F5B041]/50 transition-all duration-500 group"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-[#8B6914] group-hover:text-[#F39C12] transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8B6914] via-[#784212] to-[#BA4A00] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F39C12]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#F5B041]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F8C471]/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#F8C471] max-w-2xl mx-auto drop-shadow-md font-medium">
            Browse our tours and craft the Sri Lankan experience you've always dreamed of
          </p>
          <a
            href="/packages"
            className="backdrop-blur-xl bg-white/20 border-2 border-white/40 hover:bg-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base inline-block">
            View All Packages
          </a>
        </div>
      </section>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(-15px) translateX(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-25px) translateX(-25px); }
          66% { transform: translateY(-35px) translateX(15px); }
        }
        @keyframes shimmer-slow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes rotate-3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes slide-in-mobile {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse-delayed 3.5s ease-in-out infinite;
        }
        .animate-rotate-3d {
          animation: rotate-3d 8s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-slide-in-mobile {
            animation: slide-in-mobile 0.6s ease-out forwards;
          }
        }
        @media (min-width: 769px) {
          .animate-slide-in-mobile {
            opacity: 1;
            transform: translateX(0);
          }
        }
        /* Dark mode disabled */
        .hero-glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.06) 100%);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 8px 48px rgba(0,0,0,0.35), 0 2px 0 rgba(255,255,255,0.12) inset;
        }
        @keyframes hero-text-in {
          0% { opacity: 0; transform: translateY(32px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-hero-text-in {
          animation: hero-text-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}