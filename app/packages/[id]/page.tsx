"use client";

import { packagesData, placeDescriptions } from "@/app/data/packages";
import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

export default function PackageDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  // Find the specific package
  const pkg = packagesData.find((p) => p.id === id);

  if (!pkg) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/40 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/packages">
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Packages
            </Button>
          </Link>
        </div>

        {/* Title Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-16 z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B041] text-[#2C1810] rounded-full font-bold text-sm mb-4">
                <Clock className="h-4 w-4" />
                {pkg.duration}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-xl">
                {pkg.name}
              </h1>
              <p className="text-[#F8C471] text-lg sm:text-xl max-w-3xl font-medium drop-shadow-md">
                {pkg.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <MapPin className="h-6 w-6 text-[#F5B041]" />
          <h2 className="text-3xl font-bold text-[#8B6914]">Tour Itinerary</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#F5B041] before:via-[#8B6914]/20 before:to-transparent">
          {pkg.itinerary.map((stop, index) => {
            // Check if we have a detailed description for this location
            const description = placeDescriptions[stop.stop] || placeDescriptions[Object.keys(placeDescriptions).find(k => stop.stop.includes(k)) || ""];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 mt-1.5 w-10 h-10 flex items-center justify-center bg-[#FFF8F0] border-4 border-[#F5B041] rounded-full z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#8B6914] font-bold text-sm">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className="ml-16 bg-white rounded-2xl p-6 shadow-md border border-[#F5B041]/10 hover:shadow-xl hover:border-[#F5B041]/30 transition-all duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-[#F5B041]/10 pb-4">
                    <h3 className="text-xl font-bold text-[#2C1810] flex items-center gap-2">
                      {stop.stop}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5B041]/10 text-[#8B6914] rounded-lg text-sm font-semibold whitespace-nowrap">
                      <Calendar className="h-4 w-4" />
                      {stop.duration}
                    </div>
                  </div>
                  
                  {description ? (
                    <p className="text-[#5D4E37] leading-relaxed">
                      {description}
                    </p>
                  ) : (
                    <p className="text-[#5D4E37]/60 italic text-sm">
                      Enjoy the beautiful sights and experiences of {stop.stop}.
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link href="/contactus">
            <Button 
              size="lg" 
              className="bg-[#8B6914] hover:bg-[#784212] text-white rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Book This Tour Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}