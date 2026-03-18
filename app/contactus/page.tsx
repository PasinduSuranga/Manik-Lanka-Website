"use client";

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_8lltwvh';
    const templateId = 'template_1jgllce';
    const publicKey = 'MaqnHFNUsh3klIu9N';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Manik Lanka',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success('Thank you! Your message has been sent successfully.');

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] mobile-dark-bg">
      {/* Hero Section - Full Width Cinematic */}
      <div className="relative h-[500px] sm:h-[580px] lg:h-[650px] xl:h-[720px] overflow-hidden">
        {/* Background Image - sharp, no animation */}
        <img
          src="/images/contactus.png"
          alt="Get In Touch"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Cinematic gradient: transparent at top, dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Ambient orb */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#F39C12]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Text content - bottom anchored */}
        <div className={`absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16 ${hasAnimated ? 'animate-hero-text-in' : 'opacity-0'}`}>
          <div className="w-14 h-1 bg-gradient-to-r from-[#F39C12] to-[#F5B041] rounded-full mb-5" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)' }}>
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#F8C471] max-w-2xl font-medium"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hero-text-in {
          0% { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-text-in {
          animation: hero-text-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B041]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F39C12]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#F59E42]/10"
            >
              <h2 className="text-3xl font-bold text-[#8B6914] mb-2">Send Us a Message</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F5B041] to-[#F39C12] mb-8 rounded-full" />

              <div className="space-y-6">

                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#8B6914]"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John"
                    disabled={isSubmitting}
                    className="flex h-12 w-full rounded-xl border-2 border-[#F5E6D3] bg-white px-4 py-2 text-[#1A1A1A] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F5B041] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#2C4A52]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="flex h-12 w-full rounded-xl border-2 border-[#F5E6D3] bg-white px-4 py-2 text-[#1A1A1A] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F5B041] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[#2C4A52]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans or ask us any questions..."
                    rows={6}
                    disabled={isSubmitting}
                    className="flex min-h-[120px] w-full rounded-xl border-2 border-[#F5E6D3] bg-white px-4 py-3 text-[#1A1A1A] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#F5B041] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#F5B041] to-[#F39C12] hover:from-[#F39C12] hover:to-[#F5B041] text-white font-semibold h-12 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Message
                    </>
                  )}
                </motion.button>

              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-[#F59E42]/10"
              >
                <h2 className="text-3xl font-bold text-[#8B6914] mb-2">Contact Information</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F5B041] to-[#F39C12] mb-8 rounded-full" />

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gradient-to-br from-[#F5B041] to-[#F39C12] text-white p-3 rounded-xl shadow-lg flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-[#8B6914] font-bold mb-1 text-lg">Address</h3>
                      <p className="text-[#784212]">No. 67/C, Walpola, Ragama, Sri Lanka</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gradient-to-br from-[#F59E42] to-[#E88B2F] text-white p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-[#8B6914] font-bold mb-1 text-lg">Phone</h3>
                      <p className="text-[#784212]">+94 77 767 3814</p>
                      {/*<p className="text-[#6B7280]">+94 77 123 4567 (Mobile)</p>*/}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gradient-to-br from-[#F59E42] to-[#E88B2F] text-white p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-[#8B6914] font-bold mb-1 text-lg">Email</h3>
                      <p className="text-[#784212]">mlankaholidays@gmail.com</p>
                      {/*<p className="text-[#6B7280]">bookings@maniklanka.com</p>*/}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gradient-to-br from-[#F59E42] to-[#E88B2F] text-white p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-[#8B6914] font-bold mb-1 text-lg">Business Hours</h3>
                      <p className="text-[#784212]">Monday - Friday: 9:00 AM - 5:30 PM</p>
                      <p className="text-[#784212]">Saturday, Sunday: Closed</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[#8B6914] via-[#784212] to-[#5D4E37] rounded-3xl shadow-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Stay connected with us on social media for travel inspiration and updates.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.facebook.com/share/1BgCs3V8wR/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-xl hover:bg-gradient-to-br hover:from-[#F5B041] hover:to-[#F39C12] transition-all duration-300"
                  >
                    <Facebook className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/manik_lankaholidays?igsh=MTBubms2c3BrMm9nNA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-xl hover:bg-gradient-to-br hover:from-[#F5B041] hover:to-[#F39C12] transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/94777673814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-xl hover:bg-[#10B981] transition-all duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* Map Integration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-[#F59E42]/10"
              >
                <h3 className="text-2xl font-bold text-[#8B6914] mb-2">Find Us</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F5B041] to-[#F39C12] mb-6 rounded-full" />
                <div className="rounded-2xl overflow-hidden border-4 border-[#F5E6D3] shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.6264683369404!2d79.92381667499775!3d7.05310249294921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDMnMTEuMiJOIDc5wrA1NSczNS4wIkU!5e0!3m2!1sen!2slk!4v1767452545011!5m2!1sen!2slk"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}