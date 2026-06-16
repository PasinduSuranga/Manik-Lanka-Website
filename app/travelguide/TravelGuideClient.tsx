"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Calendar, Plane, Wallet, Shield, Phone, 
  Sun, Cloud, Umbrella, Wind, ChevronDown, ChevronUp 
} from 'lucide-react';

const guideCategories = [
  {
    id: 1,
    title: "Best Time to Visit",
    icon: Calendar,
    color: "from-[#0277BD] to-[#01579B]",
    sections: [
      {
        subtitle: "Peak Season (December - March)",
        content: "Perfect weather on the west and south coasts. Ideal for beach holidays and cultural tours. Expect higher prices and more tourists."
      },
      {
        subtitle: "Shoulder Season (April - September)",
        content: "Great for east coast beaches and hill country. Less crowded with better deals. Some areas may experience monsoon rains."
      },
      {
        subtitle: "Off Season (October - November)",
        content: "Lowest prices and fewer tourists. Intermittent rains but still enjoyable. Perfect for budget travelers."
      }
    ]
  },
  {
    id: 2,
    title: "Visa & Entry Requirements",
    icon: Plane,
    color: "from-[#6A1B9A] to-[#4A148C]",
    sections: [
      {
        subtitle: "Electronic Travel Authorization (ETA)",
        content: "Most visitors need an ETA which can be obtained online before arrival. Valid for 30 days and can be extended. Apply at least 3 days before travel."
      },
      {
        subtitle: "Passport Requirements",
        content: "Passport must be valid for at least 6 months from date of entry. Ensure you have blank pages for stamps."
      },
      {
        subtitle: "Visa on Arrival",
        content: "Available at Colombo airport for eligible countries. However, online application is recommended to avoid queues."
      }
    ]
  },
  {
    id: 3,
    title: "Currency & Money",
    icon: Wallet,
    color: "from-[#2E7D32] to-[#1B5E20]",
    sections: [
      {
        subtitle: "Sri Lankan Rupee (LKR)",
        content: "The official currency. ATMs are widely available in cities and tourist areas. Credit cards accepted in major establishments."
      },
      {
        subtitle: "Exchange Tips",
        content: "Exchange money at banks or authorized dealers for best rates. Avoid street money changers. Keep small denominations for local purchases."
      },
      {
        subtitle: "Tipping Culture",
        content: "10% service charge often included in bills. Additional tips appreciated for good service. Tip guides and drivers directly."
      }
    ]
  },
  {
    id: 4,
    title: "Health & Safety",
    icon: Shield,
    color: "from-[#C2185B] to-[#880E4F]",
    sections: [
      {
        subtitle: "Vaccinations",
        content: "No mandatory vaccinations required. Recommended: Hepatitis A & B, Typhoid, and Tetanus. Consult your doctor before travel."
      },
      {
        subtitle: "Travel Insurance",
        content: "Highly recommended for medical emergencies and trip cancellations. Ensure coverage includes adventure activities if planned."
      },
      {
        subtitle: "Safety Tips",
        content: "Sri Lanka is generally safe for tourists. Be cautious with valuables in crowded areas. Follow local advice and respect cultural norms."
      }
    ]
  },
  {
    id: 5,
    title: "Getting Around",
    icon: MapPin,
    color: "from-[#D84315] to-[#BF360C]",
    sections: [
      {
        subtitle: "Private Drivers",
        content: "Most convenient option for tourists. Hire through reputable agencies. Drivers often double as guides and speak English."
      },
      {
        subtitle: "Trains",
        content: "Scenic and affordable. Book in advance for popular routes like Kandy to Ella. First class offers reserved seating and better views."
      },
      {
        subtitle: "Tuk-Tuks",
        content: "Perfect for short distances in cities. Always negotiate fare before starting. Use metered tuk-tuks or ride-hailing apps where available."
      }
    ]
  },
  {
    id: 6,
    title: "Essential Contacts",
    icon: Phone,
    color: "from-[#F57C00] to-[#E65100]",
    sections: [
      {
        subtitle: "Emergency Numbers",
        content: "Police: 119 | Ambulance: 110 | Fire: 111 | Tourist Police: +94 11 242 1052"
      },
      {
        subtitle: "Tourist Information",
        content: "Sri Lanka Tourism: +94 11 242 6900 | Airport Information: +94 19 733 3333"
      },
      {
        subtitle: "Useful Apps",
        content: "PickMe (ride-hailing) | Google Maps (navigation) | XE Currency (exchange rates) | Google Translate"
      }
    ]
  }
];

const weatherInfo = [
  { month: "Jan-Mar", icon: Sun, temp: "28-32°C", condition: "Sunny & Dry", best: "West & South Coast" },
  { month: "Apr-Jun", icon: Cloud, temp: "26-30°C", condition: "Warm & Humid", best: "East Coast" },
  { month: "Jul-Sep", icon: Wind, temp: "25-29°C", condition: "Windy", best: "Hill Country" },
  { month: "Oct-Dec", icon: Umbrella, temp: "24-28°C", condition: "Rainy", best: "North & East" },
];

export default function TravelGuideClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFFFFF] to-[#E8F4F8]">
      
      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[580px] lg:h-[650px] xl:h-[720px] overflow-hidden">
        <img
          src="/images/help.jpg"
          alt="Travel Guide to Sri Lanka"
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
            Sri Lanka Travel Guide
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#F8C471] max-w-2xl font-medium"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            Everything you need to know for your perfect Sri Lankan adventure
          </p>
        </div>
      </div>

      {/* Weather Overview */}
      <section className="py-12 bg-gradient-to-r from-[#8B6914] to-[#5D4E37] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B041]/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Weather Overview
            </h2>
            <p className="text-white/90">
              Plan your visit according to the season
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherInfo.map((weather, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <weather.icon className="h-12 w-12 text-[#F5B041] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{weather.month}</h3>
                <p className="text-white/90 text-sm mb-1">{weather.temp}</p>
                <p className="text-white/80 text-sm mb-3">{weather.condition}</p>
                <p className="text-[#F5B041] text-xs font-semibold">Best: {weather.best}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8B6914] mb-3">
              Essential Travel Information
            </h2>
            <p className="text-[#784212] max-w-2xl mx-auto">
              Click on each category to learn more
            </p>
          </motion.div>

          <div className="space-y-4">
            {guideCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#F39C12]/20 hover:border-[#F5B041]/40 transition-all duration-300"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-[#FFF8F0] hover:to-white transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${expandedCategory === category.id ? 'scale-110 rotate-12' : ''}`}>
                      <category.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C1810] text-left">
                      {category.title}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-[#F39C12]" />
                  </motion.div>
                </button>

                {/* Category Content */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 space-y-6 bg-gradient-to-br from-[#FFF8F0] to-white">
                        {category.sections.map((section, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="bg-white p-5 rounded-xl border border-[#F39C12]/20 shadow-sm"
                          >
                            <h4 className="text-lg font-bold text-[#8B6914] mb-2">
                              {section.subtitle}
                            </h4>
                            <p className="text-[#3D2F1F] leading-relaxed">
                              {section.content}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8B6914] via-[#784212] to-[#BA4A00] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F5B041]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F39C12]/20 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-2xl">
              Need Personalized Travel Advice?
            </h2>
            <p className="text-[#FFF8F0]/95 text-base sm:text-lg lg:text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
              Our travel experts are here to help you plan the perfect Sri Lankan adventure
            </p>
            <a
              href="/contactus"
              className="inline-block bg-white text-[#8B6914] hover:bg-[#FFF8F0] font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl text-base sm:text-lg"
            >
              Contact Our Experts
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
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
