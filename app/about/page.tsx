"use client";

import React from 'react';
import Link from 'next/link';
import { Award, Heart, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We love what we do and it shows in every tour we organize',
      gradient: 'from-[#F59E42] via-[#E88B2F] to-[#F59E42]',
      iconColor: 'text-[#2C4A52]',
      glowColor: 'shadow-[#F59E42]/30',
      textColor: 'text-white',
      descColor: 'text-white/95',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Deep knowledge of Sri Lanka\'s hidden gems and cultural treasures',
      gradient: 'from-[#2C4A52] via-[#2C4A52] to-[#1e363d]',
      iconColor: 'text-[#F59E42]',
      glowColor: 'shadow-[#2C4A52]/30',
      textColor: 'text-white',
      descColor: 'text-white/95',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Committed to excellence in every aspect of your journey',
      gradient: 'from-[#FFF8F0] via-[#F5E6D3] to-[#FFF8F0]',
      iconColor: 'text-[#F59E42]',
      glowColor: 'shadow-[#F59E42]/20',
      textColor: 'text-[#2C4A52]',
      descColor: 'text-[#6B7280]',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and memorable experience is our priority',
      gradient: 'from-[#10B981] via-[#059669] to-[#10B981]',
      iconColor: 'text-[#2C4A52]',
      glowColor: 'shadow-[#10B981]/30',
      textColor: 'text-white',
      descColor: 'text-white/95',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/about.png"
          alt="About Explore Lanka"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C4A52]/90 via-[#2C4A52]/70 to-[#F59E42]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              About Manik Lanka Holidays
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Creating unforgettable travel experiences for over 10 years
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E42]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C4A52]/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#2C4A52] mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F59E42] to-[#E88B2F] mx-auto mb-8 rounded-full" />
            
            <p className="text-[#6B7280] mb-6 text-lg leading-relaxed">
              At Manik Lanka Holidays, we are passionate about showcasing the beauty, culture, and hospitality of Sri Lanka to travelers from around the world. Our mission is to turn every journey into a meaningful story by connecting people, cultures, and unforgettable experiences.
            </p>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              We believe that travel is more than just visiting places, it's about connecting with cultures, meeting people, and creating stories that last a lifetime. With our team of experienced guides and carefully curated tours, we ensure that every journey with us is extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#2C4A52] mb-6 text-center">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F59E42] to-[#E88B2F] mx-auto mb-10 rounded-full" />
            
            <div className="space-y-6 text-[#1A1A1A] text-lg leading-relaxed">
              <p className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#F59E42]/10">
                With over a decade of experience, Manik Lanka Holidays was built by passionate travel enthusiasts to share the wonders of Sri Lanka with the world. What began as a small operation with just a handful of tours has grown into one of the island's most trusted travel companies.
              </p>
              <p className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#F59E42]/10">
                Over the years, we've had the privilege of guiding thousands of travelers through Sri Lanka's ancient cities, pristine beaches, lush tea plantations, and wildlife sanctuaries. Each tour has taught us something new, and we've continuously refined our services to ensure the best possible experience for our guests.
              </p>
              <p className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#F59E42]/10">
                Today, we're proud to offer a diverse range of tour packages that cater to different interests and travel styles. Whether you're seeking adventure, relaxation, cultural immersion, or wildlife encounters, we have the perfect journey waiting for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8F4F8] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFF8F0] rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#2C4A52] mb-6 text-center">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F59E42] to-[#E88B2F] mx-auto mb-16 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br ${value.gradient} shadow-2xl ${value.glowColor} hover:shadow-3xl transition-all duration-500 group hover:scale-105`}
              >
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex flex-col items-center text-center relative z-10">
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
                    <div
                      className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-60"
                      style={{ width: '100px', height: '100px', left: '-18px', top: '-18px' }}
                    />
                    
                    <motion.div
                      className="w-20 h-20 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden border-2 border-white/50"
                      whileHover={{ scale: 1.15, rotate: 360 }}
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
                        <value.icon className={`h-10 w-10 ${value.iconColor} relative z-10`} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-xl font-bold ${value.textColor} mb-3 drop-shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {value.title}
                  </motion.h3>
                  <p className={`${value.descColor} leading-relaxed drop-shadow-md`}>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2C4A52] via-[#2C4A52] to-[#F59E42] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F59E42]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E88B2F]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Our Commitment to You</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F59E42] to-[#E88B2F] mx-auto mb-8 rounded-full" />
            
            <p className="text-white/95 text-lg mb-6 drop-shadow-md leading-relaxed">
              We are committed to providing safe, reliable, and enriching travel experiences. Our professional guides are trained to ensure your safety while sharing their deep knowledge of Sri Lankan culture and history.
            </p>
            <p className="text-white/95 text-lg drop-shadow-md leading-relaxed mb-10">
              Every tour is carefully planned with attention to detail, ensuring comfortable accommodations, authentic local experiences, and seamless logistics. Your satisfaction is our success.
            </p>
            
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#F59E42] to-[#E88B2F] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#F59E42]/50 transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}