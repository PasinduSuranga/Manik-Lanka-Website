"use client";

import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, MapPin } from 'lucide-react';

const packagesData = [
  {
    id: 1,
    name: "Complete Sri Lanka Explorer",
    description: "Experience the best of Sri Lanka in one journey. This tour covers ancient cities, hill country, beaches, and cultural highlights with a relaxed stay plan.",
    //highlights: ["Negombo", "Polonnaruwa", "Kandy", "Nuwara Eliya", "Benthota", "Colombo" ],
    duration: "11 Days/ 10 Nights",
    //groupSize: "2-6 People",
    image: "/images/package1.jpg",
  },
  {
    id: 2,
    name: "Hill Country & Coast",
    description: "Experience the misty mountains of Kandy, Nuwara Eliya, and Ella before relaxing on the golden sands of Benthota.",
    //highlights: ["Kandy", "Nuwara Eliya", "Ella", "Benthota"],
    duration: "7 Days/ 6 Nights",
    //groupSize: "2-6 People",
    image: "/images/package2.jpg",
  },
  {
    id: 3,
    name: "The Grand Island Tour",
    description: "The ultimate Sri Lankan experience covering Colombo, the Hill Country, and the Southern coast including Yala and Mirissa.",
    //highlights: ["Colombo", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Mirissa", "Benthota" ],
    duration: "10 Days/ 9 Nights",
    //groupSize: "4-8 People",
    image: "/images/package3.jpg",
  },
  {
    id: 4,
    name: "East to South Explorer",
    description: "An adventure featuring the surfing hotspots of Trinco and Arugam Bay, the mountains of Ella, and historic Galle.",
    //highlights: ["Negombo", "Trincomalee", "Arugam Bay", "Ella", "Nuwara Eliya", "Galle"],
    duration: "11 Days/ 10 Nights",
    //groupSize: "4-10 People",
    image: "/images/package4.jpg",
  },
  {
    id: 5,
    name: "Wild & Cultural Expedition",
    description: "An immersive tour covering Pinnawala, eastern beaches, southern wildlife, and the Mask Museum in Benthota.",
    //highlights: ["Pinnawala", "Trincomalee", "Arugam Bay", "Ella", "Yala", "Mirissa", "Benthota", "Colombo" ],
    duration: "12 Days/ 11 Nights",
    //groupSize: "6-12 People",
    image: "/images/package5.jpg",
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFFFFF] to-[#E8F4F8]">
      
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/packagehero.jpg"
          alt="Tour Packages"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A52]/90 via-[#2C4A52]/70 to-[#F59E42]/60" />
        
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F59E42]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#E88B2F]/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mb-4 px-6 py-2 bg-[#F59E42]/20 backdrop-blur-md border border-[#F59E42]/40 rounded-full"
            >
              <span className="text-[#FFF8F0] text-sm font-semibold tracking-wider">EXPLORE SRI LANKA</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Our Tour Packages
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#FFF8F0]/95 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
              Choose from our carefully crafted tour packages designed to showcase the best of Sri Lanka
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C4A52] mb-3">
              Discover Your Perfect Journey
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Each package is thoughtfully designed to give you an authentic Sri Lankan experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packagesData.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-[#F5E6D3] hover:border-[#F59E42]/40 bg-white relative group">
                  
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F59E42]/30 to-[#E88B2F]/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        fill
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A52]/80 via-[#2C4A52]/30 to-transparent" />
                      
                      <div className="absolute top-4 right-4 w-10 h-10 bg-[#F59E42] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {pkg.id}
                      </div>
                    </div>
                    
                    <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
                      <h2 className="text-lg sm:text-xl font-bold mb-3 text-[#2C4A52] group-hover:text-[#F59E42] transition-colors duration-300">
                        {pkg.name}
                      </h2>
                      <p className="text-[#6B7280] mb-4 text-sm leading-relaxed flex-grow">
                        {pkg.description}
                      </p>

                      <div className="space-y-2 mb-5 bg-gradient-to-r from-[#FFF8F0] to-[#F5E6D3] p-3 rounded-xl border border-[#F59E42]/10">
                        <div className="flex items-center gap-2 text-sm text-[#2C4A52]">
                          <div className="w-8 h-8 bg-[#F59E42]/10 rounded-lg flex items-center justify-center">
                            <Clock className="h-4 w-4 text-[#F59E42]" />
                          </div>
                          <span className="font-medium">{pkg.duration}</span>
                        </div>
                        {/*<div className="flex items-center gap-2 text-sm text-[#2C4A52]">
                          <div className="w-8 h-8 bg-[#F59E42]/10 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-[#F59E42]" />
                          </div>
                          <span className="font-medium">{pkg.groupSize}</span>
                        </div>*/}
                      </div>

                      {/* Highlights Section */}
                      {/*
                      <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#2C4A52] mb-2 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-[#F59E42]" />
                          Highlights
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {pkg.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 text-xs font-semibold bg-gradient-to-r from-[#FFF8F0] to-[#F5E6D3] text-[#E88B2F] px-3 py-1.5 rounded-full border border-[#F59E42]/30 hover:border-[#F59E42] hover:shadow-md transition-all duration-300"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                      </div>
*/}
                      
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2C4A52] via-[#2C4A52] to-[#F59E42] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F59E42]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E88B2F]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block px-6 py-2 bg-[#F59E42]/20 backdrop-blur-md border border-[#F59E42]/40 rounded-full">
              <span className="text-[#FFF8F0] text-sm font-semibold tracking-wider">CUSTOM EXPERIENCES</span>
            </div>
            
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-2xl">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-[#FFF8F0]/95 text-base sm:text-lg lg:text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
              We can create a custom tour package tailored to your preferences and interests.
            </p>
            <Link href="/contactus">
              <Button 
                size="lg" 
                className="bg-white text-[#2C4A52] hover:bg-[#FFF8F0] border-none rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold shadow-2xl hover:shadow-[#F59E42]/50 hover:scale-105 transition-all duration-300"
              >
                Contact Us for Custom Tours
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
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
        .animate-subtle-zoom { animation: subtle-zoom 20s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}