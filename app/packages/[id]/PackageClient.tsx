"use client";

import { packagesData, placeDescriptions, packageInclusions, packageExclusions } from "@/app/data/packages";
import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle2, XCircle, Users, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function PackageClient({ id }: { id: number }) {
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
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <Link href="/packages">
            <Button
              variant="outline"
              className="backdrop-blur-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:border-white/50 rounded-full transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Packages
            </Button>
          </Link>
        </div>
      </div>

      {/* Title + Price Banner */}
      <div className="w-full p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-[#E8D5B5]/98 via-[#DCC9A8]/95 to-[#D9C5A3]/98">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5D4E37] mb-4">
              {pkg.name}
            </h1>
            <p className="text-[#4A3C2A]/90 text-lg sm:text-xl max-w-3xl font-medium mb-8">
              {pkg.description}
            </p>

            {/* Pricing Card */}
            <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center bg-white/70 backdrop-blur-sm border border-[#F5B041]/30 rounded-2xl px-6 py-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5B041]/15 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-[#8B6914]" />
                </div>
                <div>
                  <p className="text-[#784212] text-xs font-semibold uppercase tracking-wide">Price per person</p>
                  <p className="text-[#2C1810] text-3xl font-extrabold">USD {pkg.pricePerPerson}</p>
                </div>
              </div>
              <div className="h-px sm:h-12 w-full sm:w-px bg-[#F5B041]/30" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5B041]/15 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#8B6914]" />
                </div>
                <div>
                  <p className="text-[#784212] text-xs font-semibold uppercase tracking-wide">Maximum persons</p>
                  <p className="text-[#2C1810] text-3xl font-extrabold">{pkg.maxPersons}</p>
                </div>
              </div>
              <div className="h-px sm:h-12 w-full sm:w-px bg-[#F5B041]/30" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5B041]/15 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-[#8B6914]" />
                </div>
                <div>
                  <p className="text-[#784212] text-xs font-semibold uppercase tracking-wide">Total for 2 persons</p>
                  <p className="text-[#2C1810] text-3xl font-extrabold">USD {pkg.pricePerPerson * pkg.maxPersons}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Included / Excluded */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14"
        >
          {/* Included */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              What's Included
            </h3>
            <ul className="space-y-3">
              {packageInclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-emerald-900 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="bg-gradient-to-br from-red-50 to-rose-100 border border-red-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Not Included
            </h3>
            <ul className="space-y-3">
              {packageExclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-red-900 text-sm">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Itinerary Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 lg:pb-16">
        <div className="flex items-center gap-3 mb-10">
          <MapPin className="h-6 w-6 text-[#F5B041]" />
          <h2 className="text-3xl font-bold text-[#8B6914]">Tour Itinerary</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#F5B041] before:via-[#8B6914]/20 before:to-transparent">
          {pkg.itinerary.map((stop, index) => {
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
              className="bg-[#8B6914] hover:bg-[#784212] text-white rounded-full px-10 py-6 text-lg hover:scale-105 transition-all"
            >
              Book This Tour Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}