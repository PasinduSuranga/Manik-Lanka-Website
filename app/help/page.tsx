"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, MessageCircle, ChevronDown, Mail, Phone, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I book a tour package?',
      answer: 'You can book a tour package by browsing our Packages page, selecting your preferred tour, and clicking "Contact Us". Our team will get in touch with you to finalize the booking details, answer any questions, and arrange payment. You can also call us directly or send us an email with your tour preference.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. A deposit is typically required to confirm your booking, with the balance due before the tour starts. We\'ll provide detailed payment instructions once you contact us.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 30 days or more before the tour start date receive a full refund minus a 10% administrative fee. Cancellations made 15-29 days before receive a 50% refund. Cancellations made less than 14 days before the tour are non-refundable. We recommend purchasing travel insurance to protect your investment.',
    },
    {
      question: 'Are meals and accommodations included in the package price?',
      answer: 'Most of our packages include accommodations and breakfast. Some packages also include lunch and dinner, which will be clearly specified in the tour details. All accommodations are carefully selected for comfort, cleanliness, and location. Specific dietary requirements can be accommodated with advance notice.',
    },
    {
      question: 'Do I need a visa to visit Sri Lanka?',
      answer: 'Most visitors to Sri Lanka require a visa or Electronic Travel Authorization (ETA). The requirements vary by nationality. Citizens of many countries can obtain an ETA online before arrival. We recommend checking the official Sri Lankan immigration website or contacting your local embassy for the most current visa requirements. Our team can provide guidance but cannot process visas on your behalf.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] mobile-dark-bg">
      {/* Hero Section - Image Left, Text Right */}
      <div className="relative flex flex-col lg:flex-row lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
        {/* Background Image - Top on Mobile, Left on Desktop */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-full">
          <img
            src="/images/help.jpg"
            alt="How Can We Help"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/20 via-black/30 to-black/60 lg:to-transparent" />
        </div>

        {/* Decorative Elements - Hidden on Mobile */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-64 h-64 bg-[#F39C12]/15 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F5B041]/15 rounded-full blur-3xl" />

        {/* Text Container - Bottom on Mobile, Right on Desktop */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-[#2C1810]/85 via-[#3D2F1F]/80 to-[#4A3C2A]/85 border-2 border-[#8B6914]/60 w-full flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl shadow-black/50 lg:min-h-[400px] lg:h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              How Can We Help?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#F8C471] max-w-2xl drop-shadow-lg font-medium">
              Find answers to frequently asked questions about our tours and services
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B041]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F39C12]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#F59E42]/10"
          >
            <h2 className="text-4xl font-bold text-[#8B6914] mb-4 text-center">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F5B041] to-[#F39C12] mx-auto mb-10 rounded-full" />

            <div className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#F5E6D3] rounded-2xl overflow-hidden hover:border-[#F59E42]/30 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left font-semibold text-[#8B6914] hover:text-[#F5B041] transition-colors py-5 px-6 bg-gradient-to-r from-[#FFF8F0] to-white"
                  >
                    <span className="text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-6 w-6 text-[#F5B041] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white"
                      >
                        <p className="px-6 py-5 text-[#784212] leading-relaxed text-lg border-t border-[#F5E6D3]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8B6914] via-[#784212] to-[#BA4A00] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5B041]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F39C12]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F5B041] to-[#F39C12] rounded-full mb-6 shadow-2xl">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Still Have Questions?</h2>
            <p className="text-white/95 mb-10 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md">
              If you couldn't find the answer you're looking for, our friendly team is here to help. Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#F5B041] to-[#F39C12] text-white font-semibold rounded-full px-10 py-4 shadow-2xl hover:shadow-[#F5B041]/50 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
              <a href="tel:+94777673814" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#8B6914] font-semibold rounded-full px-10 py-4 shadow-2xl hover:shadow-white/30 transition-all duration-300"
                >
                  Call: +94 77 767 3814
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#E8F4F8] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF8F0] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#8B6914] mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F5B041] to-[#F39C12] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#FFF8F0] via-white to-[#F5E6D3] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-[#F59E42]/10 group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F5B041] to-[#F39C12] rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8B6914] mb-3">Email Support</h3>
              <p className="text-[#784212] mb-4">Send us an email anytime</p>
              <a href="mailto:mlankaholidays@gmail.com" className="text-[#F5B041] hover:text-[#F39C12] font-semibold text-lg transition-colors">
                mlankaholidays@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#F5B041] via-[#F5B041] to-[#F39C12] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-[#F5B041]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone Support</h3>
              <p className="text-white/90 mb-4">Mon-Fri, 9am-5.30pm</p>
              <a href="tel:+94777673814" className="text-white font-semibold text-lg hover:text-white/90 transition-colors">
                +94 77 767 3814
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#10B981] via-[#10B981] to-[#059669] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Send className="h-8 w-8 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-white/90 mb-4">Quick responses</p>
              <a href="https://wa.me/94777673814" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-lg hover:text-white/90 transition-colors">
                Message Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}