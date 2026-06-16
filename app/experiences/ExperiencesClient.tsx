"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Mountain, Waves, Utensils, Camera, Heart, X } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Wildlife Safari Adventures",
    description: "Encounter majestic elephants, elusive leopards, and exotic birds in their natural habitat",
    fullDescription: "Experience the thrill of spotting wildlife in Sri Lanka's premier national parks. From the leopard-rich Yala to the elephant gatherings in Minneriya, every safari is an unforgettable adventure. Our expert guides ensure you get the best wildlife viewing opportunities while respecting nature.",
    image: "/images/wildLifeImage.jpg",
    icon: Compass,
    color: "from-[#8B6914] to-[#5D4E37]",
    category: "Adventure"
  },
  {
    id: 2,
    title: "Tea Plantation Tours",
    description: "Walk through emerald tea estates and learn the art of Ceylon tea making",
    fullDescription: "Discover the secrets of world-famous Ceylon tea in the misty hills of Nuwara Eliya. Visit working tea factories, meet tea pluckers, and enjoy fresh tea tastings while surrounded by breathtaking mountain scenery. Learn about the entire process from leaf to cup.",
    image: "/images/nuwaraEliya.jpg",
    icon: Mountain,
    color: "from-[#2E7D32] to-[#1B5E20]",
    category: "Culture"
  },
  {
    id: 3,
    title: "Beach & Water Sports",
    description: "Surf, dive, and relax on pristine golden beaches with crystal-clear waters",
    fullDescription: "Sri Lanka's coastline offers world-class surfing, snorkeling, and diving experiences. From the surf breaks of Arugam Bay to the coral reefs of Hikkaduwa, water enthusiasts will find paradise. Enjoy whale watching, jet skiing, or simply relax on untouched beaches.",
    image: "/images/beachImage.jpg",
    icon: Waves,
    color: "from-[#0277BD] to-[#01579B]",
    category: "Adventure"
  },
  {
    id: 4,
    title: "Culinary Experiences",
    description: "Savor authentic Sri Lankan cuisine and learn traditional cooking methods",
    fullDescription: "Embark on a flavorful journey through Sri Lankan cuisine. Join cooking classes, visit spice gardens, and taste authentic dishes from street food to fine dining. Experience the perfect blend of spices, coconut, and fresh ingredients that make Sri Lankan food unforgettable.",
    image: "/images/food.jpg",
    icon: Utensils,
    color: "from-[#D84315] to-[#BF360C]",
    category: "Culture"
  },
  {
    id: 5,
    title: "Ancient Heritage Sites",
    description: "Explore UNESCO World Heritage Sites and ancient kingdoms",
    fullDescription: "Step back in time at Sigiriya Rock Fortress, Polonnaruwa ruins, and the sacred Temple of the Tooth. Marvel at ancient engineering, intricate carvings, and centuries-old frescoes. Each site tells the story of Sri Lanka's rich cultural heritage.",
    image: "/images/sigiriya.jpg",
    icon: Camera,
    color: "from-[#6A1B9A] to-[#4A148C]",
    category: "Culture"
  },
  {
    id: 6,
    title: "Wellness & Ayurveda",
    description: "Rejuvenate with traditional Ayurvedic treatments and yoga retreats",
    fullDescription: "Experience authentic Ayurvedic healing in its birthplace. Enjoy therapeutic massages, herbal treatments, and personalized wellness programs. Combine with yoga sessions in serene settings for complete mind-body rejuvenation.",
    image: "/images/nuwaraEliya.jpg",
    icon: Heart,
    color: "from-[#C2185B] to-[#880E4F]",
    category: "Wellness"
  },
];

export default function ExperiencesClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const categories = ["All", "Adventure", "Culture", "Wellness"];
  
  const filteredExperiences = filter === "All" 
    ? experiences 
    : experiences.filter(exp => exp.category === filter);

  const selectedExp = experiences.find(exp => exp.id === selectedExperience);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFFFFF] to-[#E8F4F8]">
      
      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[580px] lg:h-[650px] xl:h-[720px] overflow-hidden">
        <img
          src="/images/hero1.jpeg"
          alt="Experiences in Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#F39C12]/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        
        <div className={`absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16 ${hasAnimated ? 'animate-hero-text-in' : 'opacity-0'}`}>
          <div className="w-14 h-1 bg-gradient-to-r from-[#F39C12] to-[#F5B041] rounded-full mb-5" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)' }}>
            Experiences in Sri Lanka
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#F8C471] max-w-2xl font-medium"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            Discover unforgettable adventures and authentic cultural encounters
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm sticky top-20 z-30 border-b border-[#F39C12]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#F5B041] to-[#F39C12] text-white shadow-lg'
                    : 'bg-white/80 text-[#8B6914] border-2 border-[#F39C12]/30 hover:border-[#F5B041]'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8B6914] mb-3">
              Curated Experiences
            </h2>
            <p className="text-[#784212] max-w-2xl mx-auto">
              Immerse yourself in the diverse wonders of Sri Lanka
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedExperience(experience.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${experience.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <experience.icon className="h-7 w-7 text-[#F39C12]" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                        {experience.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2C1810] mb-3 group-hover:text-[#F39C12] transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <p className="text-[#3D2F1F] text-sm leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-[#F39C12]/20">
                        <span className="text-[#F39C12] font-semibold text-sm">Learn More</span>
                        <svg className="w-5 h-5 text-[#F39C12] transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F5B041]/40 to-[#F39C12]/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal for Experience Details */}
      <AnimatePresence>
        {selectedExperience && selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
              >
                <X className="h-6 w-6 text-[#2C1810]" />
              </button>

              {/* Modal Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedExp.color} opacity-50`} />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <selectedExp.icon className="h-6 w-6 text-[#F39C12]" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      {selectedExp.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                    {selectedExp.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-[#3D2F1F] text-lg leading-relaxed mb-6">
                  {selectedExp.fullDescription}
                </p>
                
                <div className="bg-gradient-to-r from-[#FFF8F0] to-[#F5E6D3] p-6 rounded-2xl border border-[#F39C12]/20">
                  <h3 className="text-xl font-bold text-[#2C1810] mb-3">Ready to Experience This?</h3>
                  <p className="text-[#3D2F1F] mb-4">Contact us to include this experience in your custom tour package</p>
                  <a
                    href="/contactus"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-[#F5B041] to-[#F39C12] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
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
