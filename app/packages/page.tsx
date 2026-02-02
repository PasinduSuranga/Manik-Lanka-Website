"use client";

import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from 'lucide-react';
import { packagesData } from "@/app/data/packages"; // Make sure this path matches where you created Step 1

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFFFFF] to-[#E8F4F8] mobile-dark-bg">

      {/* Hero Section - Mobile: Stack Vertically, Desktop: Side by Side */}
      <div className="relative flex flex-col lg:flex-row lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        {/* Background Image - Top on Mobile, Left on Desktop */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-full">
          <img
            src="/package.jpg"
            alt="Tour Packages"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/20 via-black/30 to-black/60 lg:to-transparent" />
        </div>

        {/* Decorative Elements - Hidden on Mobile */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-64 h-64 bg-[#F39C12]/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F5B041]/15 rounded-full blur-3xl animate-pulse-slow" />

        {/* Text Container - Bottom on Mobile, Right on Desktop */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-[#2C1810]/85 via-[#3D2F1F]/80 to-[#4A3C2A]/85 border-2 border-[#8B6914]/60 w-full flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl shadow-black/50 lg:min-h-[400px] lg:h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              Our Tour Packages
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#F8C471] max-w-2xl drop-shadow-lg font-medium">
              Choose from our carefully crafted tour packages designed to showcase the best of Sri Lanka
            </p>
          </div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8B6914] mb-3">
              Discover Your Perfect Journey
            </h2>
            <p className="text-[#784212] max-w-2xl mx-auto">
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
                <Link href={`/packages/${pkg.id}`} className="block h-full">
                  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-[#8B6914]/30 hover:border-[#F5B041]/40 bg-gradient-to-br from-[#C9A96E]/95 via-[#B8935D]/90 to-[#A67C52]/95 relative group cursor-pointer">

                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F5B041]/30 to-[#F39C12]/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

                    <div className="relative h-full flex flex-col">
                      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/80 via-[#784212]/30 to-transparent" />

                        <div className="absolute top-4 right-4 w-10 h-10 bg-[#F5B041] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          {pkg.id}
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 flex flex-col flex-grow bg-gradient-to-br from-[#2C1810]/10 via-[#3D2F1F]/5 to-transparent backdrop-blur-sm">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 text-[#2C1810] group-hover:text-[#F5B041] transition-colors duration-300">
                          {pkg.name}
                        </h2>
                        <p className="text-[#3D2F1F] mb-4 text-sm leading-relaxed flex-grow">
                          {pkg.description}
                        </p>

                        <div className="space-y-2 mb-2 bg-gradient-to-r from-[#FFF8F0] to-[#F5E6D3] p-3 rounded-xl border border-[#F5B041]/10">
                          <div className="flex items-center gap-2 text-sm text-[#2C1810]">
                            <div className="w-8 h-8 bg-[#F5B041]/10 rounded-lg flex items-center justify-center">
                              <Clock className="h-4 w-4 text-[#F5B041]" />
                            </div>
                            <span className="font-medium">{pkg.duration}</span>
                          </div>
                        </div>
                        
                        <div className="text-center mt-2 text-[#FFF8F0] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2C1810]/20 rounded-lg py-1">
                          Click to View Details
                        </div>

                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8B6914] via-[#784212] to-[#BA4A00] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F5B041]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F39C12]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block px-6 py-2 bg-[#F5B041]/20 backdrop-blur-md border border-[#F5B041]/40 rounded-full">
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
                className="bg-white text-[#8B6914] hover:bg-[#FFF8F0] border-none rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold shadow-2xl hover:shadow-[#F5B041]/50 hover:scale-105 transition-all duration-300"
              >
                Contact Us for Custom Tours
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.08); }
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