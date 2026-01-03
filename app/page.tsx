"use client";

import { useState } from 'react';
import { MapPin, Users, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const heroImage = '/images/hero1.jpeg'; 
const sigiriyaImage = '/images/sigiriya.jpg';
const beachImage = '/images/beachImage.jpg';
const wildLifeImage = '/images/wildLifeImage.jpg';
const foodImage = '/images/food.jpg';
const greenHillImage = '/images/nuwaraEliya.jpg';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      gradient: 'from-[#F59E42] via-[#E88B2F] to-[#F59E42]',
      iconColor: 'text-[#2C4A52]',
      glowColor: 'shadow-[#F59E42]/30',
      textColor: 'text-[#FFF8F0]',
      descColor: 'text-[#FFF8F0]/90',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Friendly local professionals bringing you authentic Sri Lankan experiences',
      gradient: 'from-[#E88B2F] via-[#F59E42] to-[#E88B2F]',
      iconColor: 'text-[#2C4A52]',
      glowColor: 'shadow-[#E88B2F]/30',
      textColor: 'text-[#FFF8F0]',
      descColor: 'text-[#FFF8F0]/90',
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'Your safety and comfort are always our top priorities',
      gradient: 'from-[#F59E42] via-[#E88B2F] to-[#F59E42]',
      iconColor: 'text-[#2C4A52]',
      glowColor: 'shadow-[#F59E42]/30',
      textColor: 'text-[#FFF8F0]',
      descColor: 'text-[#FFF8F0]/90',
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
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sri Lanka Train Bridge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A52]/80 to-[#2C4A52]/50" />
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F59E42]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E88B2F]/10 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFF8F0] mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Experience the Magic of Sri Lanka with Manik Lanka Holidays
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#F5E6D3] max-w-2xl mx-auto drop-shadow-lg">
            Your Gateway to Unforgettable Adventures and Cultural Experiences
          </p>
          <Link 
            href="/packages"
            className="bg-gradient-to-r from-[#F59E42] to-[#E88B2F] hover:from-[#E88B2F] hover:to-[#F59E42] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-[#F59E42]/30 hover:shadow-2xl hover:shadow-[#F59E42]/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base inline-block">
            Explore Packages
          </Link>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FFF8F0] to-[#F5E6D3] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-[#F59E42]/5 to-[#E88B2F]/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-[#E88B2F]/5 to-[#F59E42]/5 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 sm:p-8 overflow-hidden bg-gradient-to-br ${feature.gradient} shadow-xl ${feature.glowColor} hover:shadow-2xl hover:shadow-[#F59E42]/40 transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2`}
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FFF8F0]/40 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#FFF8F0]/30 rounded-full animate-pulse-delayed" />
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-[#FFF8F0]/35 rounded-full animate-pulse" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#FFF8F0]/20 blur-xl opacity-60 w-20 sm:w-24 h-20 sm:h-24 -left-2 sm:-left-3 -top-2 sm:-top-3 animate-pulse-slow" />
                    
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#FFF8F0]/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
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

      <section className="py-12 sm:py-16 md:py-20 bg-[#FFF8F0] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#F59E42]/8 to-[#E88B2F]/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-[#E88B2F]/6 to-[#F59E42]/8 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C4A52] mb-3 sm:mb-4">
              Top Sri Lankan Experiences
            </h2>
            <p className="text-base sm:text-lg text-[#2C4A52]/80 max-w-2xl mx-auto font-medium">
              Discover our island’s must-see places, cultural wonders, and unforgettable flavors.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-visible">
              {featuredDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className={`absolute transition-all duration-700 ease-out ${getCardScale(index)} ${getCardPosition(index)} cursor-pointer transform-gpu will-change-transform`}
                  style={{ width: '350px', maxWidth: '90vw' }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="relative group">
                    <div className="relative backdrop-blur-2xl bg-white/60 border-2 border-[#F59E42]/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#F59E42]/20 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none z-10" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E42]/60 to-transparent" />
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F59E42]/0 via-[#E88B2F]/10 to-[#F59E42]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer-slow pointer-events-none z-10" 
                           style={{ backgroundSize: '200% 200%' }} />
                      
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E42]/5 to-transparent z-10 pointer-events-none group-hover:from-[#F59E42]/15 transition-all duration-700" />
                        
                        <div className="relative w-full h-full">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-[#F59E42]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6 bg-gradient-to-br from-[#FFF8F0]/90 via-[#F5E6D3]/80 to-[#FFF8F0]/90 backdrop-blur-xl relative">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E42]/80 to-transparent" />
                        
                        <h3 className="text-lg sm:text-xl font-bold text-[#2C4A52] mb-2 drop-shadow-sm">
                          {destination.name}
                        </h3>
                        <p className="text-sm sm:text-base text-[#2C4A52]/80 line-clamp-3">
                          {destination.description}
                        </p>
                        
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F59E42]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevSlide}
                className="relative backdrop-blur-xl bg-white/60 hover:bg-white/80 border-2 border-[#F59E42]/30 hover:border-[#F59E42]/50 rounded-full p-2.5 sm:p-3 shadow-lg shadow-[#F59E42]/10 hover:shadow-xl hover:shadow-[#F59E42]/20 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F59E42]/0 to-[#F59E42]/0 group-hover:from-[#F59E42]/20 group-hover:to-[#E88B2F]/20 transition-all duration-500 rounded-full" />
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#F59E42] relative z-10" />
              </button>
              
              <div className="flex items-center gap-2">
                {featuredDestinations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex 
                        ? 'w-8 h-2 bg-gradient-to-r from-[#F59E42] to-[#E88B2F]' 
                        : 'w-2 h-2 bg-[#2C4A52]/30 hover:bg-[#F59E42]/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="relative backdrop-blur-xl bg-white/60 hover:bg-white/80 border-2 border-[#F59E42]/30 hover:border-[#F59E42]/50 rounded-full p-2.5 sm:p-3 shadow-lg shadow-[#F59E42]/10 hover:shadow-xl hover:shadow-[#F59E42]/20 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F59E42]/0 to-[#F59E42]/0 group-hover:from-[#F59E42]/20 group-hover:to-[#E88B2F]/20 transition-all duration-500 rounded-full" />
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#F59E42] relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2C4A52] via-[#2C4A52] to-[#F59E42] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F59E42]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#E88B2F]/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F59E42]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF8F0] mb-3 sm:mb-4 drop-shadow-lg">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#F5E6D3] max-w-2xl mx-auto drop-shadow-md">
            Browse our tours and craft the Sri Lankan experience you've always dreamed of
          </p>
          <Link 
            href="/packages"
            className="bg-gradient-to-r from-[#F59E42] to-[#E88B2F] hover:from-[#E88B2F] hover:to-[#F59E42] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-[#F59E42]/30 hover:shadow-2xl hover:shadow-[#F59E42]/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base inline-block">
            View All Packages
          </Link>
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
      `}</style>
    </div>
  );
}