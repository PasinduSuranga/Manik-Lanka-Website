"use client";

import { useState } from 'react';
import Link from 'next/link'; // Use Next.js Link
import Image from 'next/image'; // Use Next.js Image
import { Button } from '@/Components/ui/button'; // Assuming shadcn/ui components are in ./components/ui
import { Card } from '@/Components/ui/card'; // Assuming shadcn/ui components are in ./components/ui
import { MapPin, Users, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Use framer-motion

// --- IMPORTANT ---
// Figma assets and ImageWithFallback are not standard.
// I've replaced them with standard Next.js <Image> components.
// You MUST place your images in the `public` folder.
// For example, place 'heroImage.png' and 'sigiriyaImage.png' inside `public/images/`.
const heroImage = '/images/ninearch.jpeg'; // Updated path
const sigiriyaImage = '/images/sigiriya.jpeg';
const beachImage = '/images/beach.jpg';
const ancientTempleImage = '/images/ancienttemple.jpg';
const teaPlantationImage = '/images/teaplantations.jpg';
const wildLifeImage = '/images/wildlife.webp';  // Updated path
// -----------------

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredDestinations = [
    {
      id: 1,
      name: 'Sigiriya Rock Fortress',
      description: 'Discover the ancient wonder of Sigiriya, a UNESCO World Heritage Site offering breathtaking views and timeless history.',
      image: sigiriyaImage,
    },
    {
      id: 2,
      name: 'Ancient Temples',
      description: "Discover the spiritual beauty of Sri Lanka's ancient temples and timeless Buddhist heritage.",
      image: ancientTempleImage,
    },
    {
      id: 3,
      name: 'Tea Plantations',
      description: "Discover Sri Lanka's scenic tea estates and enjoy a cup of the finest Ceylon tea straight from the hills.",
      image: teaPlantationImage,
    },
    {
      id: 4,
      name: 'Beautiful Beaches',
      description: "Unwind on Sri Lanka's pristine golden beaches, where crystal-clear waters meet tropical paradise.",
      image: beachImage,
    },
    {
      id: 5,
      name: 'Wildlife Safari',
      description: "Encounter majestic elephants and a rich variety of wildlife in Sri Lanka's pristine national parks.",
      image: wildLifeImage,
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Best Destinations',
      description: "Discover our expertly crafted tours to Sri Lanka's most breathtaking locations",
      gradient: 'from-yellow-300 via-yellow-400 to-amber-400',
      iconColor: 'text-yellow-700',
      glowColor: 'shadow-amber-500/50',
      textColor: 'text-gray-800',
      descColor: 'text-gray-700/95',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Friendly local professionals bringing you authentic Sri Lankan experiences',
      gradient: 'from-yellow-200 via-yellow-300 to-amber-300',
      iconColor: 'text-amber-800',
      glowColor: 'shadow-orange-500/50',
      textColor: 'text-gray-800',
      descColor: 'text-gray-700/95',
    },
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'Your safety and comfort are always our top priorities',
      gradient: 'from-yellow-100 via-yellow-200 to-amber-200',
      iconColor: 'text-orange-900',
      glowColor: 'shadow-yellow-500/50',
      textColor: 'text-gray-800',
      descColor: 'text-gray-700/95',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredDestinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredDestinations.length) % featuredDestinations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardScale = (index: number) => {
    const total = featuredDestinations.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) return 'scale-110 z-30'; // Center - largest
    if (diff === 1 || diff === total - 1) return 'scale-90 z-20'; // Adjacent - medium
    return 'scale-75 z-10 opacity-50'; // Others - smallest
  };

  const getCardPosition = (index: number) => {
    const total = featuredDestinations.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) return 'translate-x-0';
    if (diff === 1) return 'translate-x-[60%]';
    if (diff === 2) return 'translate-x-[120%]';
    if (diff === total - 1) return '-translate-x-[60%]';
    if (diff === total - 2) return '-translate-x-[120%]';
    return 'translate-x-[200%]';
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        {/* Use Next.js Image with fill prop for backgrounds */}
        <Image
          src={heroImage}
          alt="Sri Lanka Train Bridge"
          className="absolute inset-0 w-full h-full object-cover"
          fill
          priority // Load this image first
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-white mb-6">Experience the Magic of Sri Lanka with Manik Lanka Holidays</h1>
          <p className="text-xl mb-8 text-gray-100">Your Gateway to Unforgettable Adventures and Cultural Experiences</p>
          {/* Use Next.js Link with href prop */}
          <Link href="/packages">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/40 text-white rounded-full px-8 shadow-lg shadow-black/20"
            >
              Explore Packages
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section - Warm Gradient Colors */}
      <section className="py-20 bg-[#F5F5F5] relative overflow-hidden">
        {/* Static decorative orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-2xl p-8 overflow-hidden bg-gradient-to-br ${feature.gradient} shadow-2xl ${feature.glowColor} hover:shadow-[0_25px_80px_-15px_rgba(251,191,36,0.5)] transition-all duration-500 group cursor-pointer`}
              >
                {/* Static decorative particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/30 rounded-full" />
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/35 rounded-full" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Animated Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  >
                    {/* Static pulsing glow ring */}
                    <div
                      className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-60"
                      style={{ width: '120px', height: '120px', left: '-20px', top: '-20px' }}
                    />
                    
                    {/* Icon background */}
                    <motion.div
                      className="w-20 h-20 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <feature.icon className={`h-10 w-10 ${feature.iconColor} relative z-10`} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Text content with white color for visibility */}
                  <motion.h3 
                    className={`${feature.textColor} mb-3 drop-shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className={`${feature.descColor} leading-relaxed drop-shadow-md`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Carousel - Click to Rotate (No Hover Pop-up) */}
      <section className="py-16 bg-[#FFFFFF] relative overflow-hidden">
        {/* Floating glass orbs background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF6A00]/10 to-orange-400/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/8 to-[#FF6A00]/8 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-[#222222] mb-4">Featured Destinations</h2>
            <p className="text-[#222222] max-w-2xl mx-auto font-medium">
              Discover the most captivating locations Sri Lanka has to offer
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="relative h-[500px] flex items-center justify-center overflow-visible">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  className={`absolute transition-all duration-700 ease-out ${getCardScale(index)} ${getCardPosition(index)} cursor-pointer`}
                  style={{ width: '400px' }}
                  onClick={() => goToSlide(index)}
                  whileHover={{
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{
                    rotate: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {/* Liquid Crystal Glass Card */}
                  <div className="relative group">
                    {/* Main glassmorphism card */}
                    <div className="relative backdrop-blur-2xl bg-white/40 border border-white/60 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_90px_-20px_rgba(255,106,0,0.4)] transition-all duration-700">
                      {/* Glass reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 pointer-events-none z-10" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                      
                      {/* Liquid shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 via-orange-300/10 to-[#FF6A00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer-slow pointer-events-none z-10" 
                           style={{ backgroundSize: '200% 200%' }} />
                      
                      {/* Image container with liquid crystal effect */}
                      <div className="aspect-[4/3] overflow-hidden relative">
                        {/* Multiple glass layers for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 z-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent z-10 pointer-events-none group-hover:from-[#FF6A00]/15 transition-all duration-700" />
                        
                        {/* Image with overlay shimmer */}
                        <div className="relative w-full h-full">
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            width={400}
                            height={300}
                          />
                          {/* Iridescent overlay on image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-[#FF6A00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                      </div>
                      
                      {/* Content area with frosted glass */}
                      <div className="p-6 bg-gradient-to-br from-white/60 via-white/40 to-white/50 backdrop-blur-xl relative">
                        {/* Glass border highlight */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                        
                        <h3 className="text-[#222222] mb-2 drop-shadow-sm">{destination.name}</h3>
                        <p className="text-[#222222]/80">{destination.description}</p>
                        
                        {/* Orange accent glow at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons - Glassmorphism Style */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="relative backdrop-blur-xl bg-white/40 hover:bg-white/60 border border-white/60 rounded-full p-3 shadow-lg shadow-[#FF6A00]/10 hover:shadow-xl hover:shadow-[#FF6A00]/20 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/10 group-hover:to-orange-400/10 transition-all duration-500 rounded-full" />
                <ChevronLeft className="h-6 w-6 text-[#FF6A00] relative z-10" />
              </button>
              <button
                onClick={nextSlide}
                className="relative backdrop-blur-xl bg-white/40 hover:bg-white/60 border border-white/60 rounded-full p-3 shadow-lg shadow-[#FF6A00]/10 hover:shadow-xl hover:shadow-[#FF6A00]/20 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/10 group-hover:to-orange-400/10 transition-all duration-500 rounded-full" />
                <ChevronRight className="h-6 w-6 text-[#FF6A00] relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Warm Gradient Colors */}
      <section className="py-16 bg-gradient-to-br from-yellow-300/80 via-orange-400/80 to-amber-500/80 text-white relative overflow-hidden backdrop-blur-sm">
        {/* Static decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white mb-4 drop-shadow-lg">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 text-white/95 drop-shadow-md">Browse our tours and craft the Sri Lankan experience you've always dreamed of</p>
          {/* Use Next.js Link with href prop */}
          <Link href="/packages">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/40 text-white rounded-full px-8 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Packages
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Custom Liquid Crystal Animations */}
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
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
        @keyframes float-particle-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-25px) translateX(10px); opacity: 0; }
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
        .animate-float-particle {
          animation: float-particle 3s ease-out infinite;
        }
        .animate-float-particle-delayed {
          animation: float-particle-delayed 3.5s ease-out infinite;
        }
      `}</style>
    </div>
  );
}