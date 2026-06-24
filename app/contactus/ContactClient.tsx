"use client";

import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

/* ════ SVG ICONS ════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
  </svg>
);
const IcoSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IcoPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.29 6.29l1.1-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IcoClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
  </svg>
);
const IcoFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IcoInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IcoWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

/* ════ REVEAL HOOK ════ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const contactInfo = [
  { Icon: IcoPin,   label: 'Address',        value: 'No. 67/C, Walpola, Ragama, Sri Lanka', href: null },
  { Icon: IcoPhone, label: 'Phone',           value: '+94 77 767 3814',                        href: 'tel:+94777673814' },
  { Icon: IcoMail,  label: 'Email',           value: 'mlankaholidays@gmail.com',               href: 'mailto:mlankaholidays@gmail.com' },
  { Icon: IcoClock, label: 'Business Hours',  value: 'Mon–Fri: 9:00 AM – 5:30 PM',             href: null },
];

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const infoReveal  = useReveal();
  const formReveal  = useReveal();
  const ctaReveal   = useReveal();

  useEffect(() => { setHasAnimated(true); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = 'service_8lltwvh';
    const templateId = 'template_1jgllce';
    const publicKey = 'MaqnHFNUsh3klIu9N';
    try {
      await emailjs.send(serviceId, templateId, { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Manik Lanka' }, publicKey);
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
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative h-[65vh] sm:h-[75vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img src="/images/contactus.png" alt="Contact Manik Lanka Holidays" className="absolute inset-0 w-full h-full object-cover contact-hero-img" style={{ filter: 'brightness(0.65) saturate(1.05)' }} loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 right-8 sm:right-14 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white contact-scroll-line" />
          <span className="text-white text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2">Scroll</span>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-16 ${hasAnimated ? 'contact-hero-text' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Manik Lanka Holidays</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-3" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}>
            Get In Touch<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#E67E22]">We're Here</span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-xl font-light leading-relaxed" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* ══ CONTACT INFO STRIP — clean bg, no image ══ */}
      <section className="py-16 bg-[#FDFCFA]" ref={infoReveal.ref}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => {
              const Inner = (
                <div className={`group bg-white rounded-2xl border border-[#E8D5B5] hover:border-[#F39C12]/50 p-6 hover:shadow-xl hover:shadow-[#F39C12]/8 transition-all duration-500 relative overflow-hidden contact-info-card`}
                  style={{ animationDelay: `${i * 100}ms`, animationPlayState: infoReveal.visible ? 'running' : 'paused' }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF4E7] border border-[#F39C12]/20 group-hover:border-[#F39C12]/50 flex items-center justify-center text-[#8B5E0A] mb-4 transition-all duration-300 group-hover:scale-110">
                    <item.Icon />
                  </div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#F39C12] to-[#E67E22] mb-3 group-hover:w-10 transition-all duration-400" />
                  <p className="text-xs font-bold text-[#B8730A] uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-[#3D2314] text-sm font-medium leading-relaxed">{item.value}</p>
                </div>
              );
              return item.href
                ? <a key={i} href={item.href}>{Inner}</a>
                : <div key={i}>{Inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ══ FORM + SOCIAL — warm gradient bg, no image ══ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F5EFE6] to-[#FDFCFA]" ref={formReveal.ref}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Send a Message</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314]">Let's <span className="text-[#8B5E0A]">Start Planning</span></h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-700 ${formReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

            {/* Contact Form — lg:col-span-3 */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-[#E8D5B5] shadow-xl shadow-[#F39C12]/5 p-7 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Your Name *</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} disabled={isSubmitting}
                    placeholder="John Doe"
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 disabled:opacity-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Email Address *</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} disabled={isSubmitting}
                    placeholder="john@example.com"
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 disabled:opacity-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Message *</label>
                  <textarea id="message" name="message" required value={formData.message} onChange={handleChange} disabled={isSubmitting}
                    placeholder="Tell us about your travel plans or ask us any questions..."
                    rows={6}
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 resize-none disabled:opacity-50" />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#F39C12]/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full contact-spin" />Sending...</>
                  ) : (
                    <><IcoSend />Submit Message</>
                  )}
                </button>
                <p className="text-xs text-[#B8A090] text-center">We aim to respond within 24 hours.</p>
              </form>
            </div>

            {/* Right: Social + Map — lg:col-span-2 */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Social card */}
              <div className="bg-gradient-to-br from-[#3D2314] via-[#5D4E37] to-[#4A3C2A] rounded-3xl p-7 text-white">
                <div className="w-8 h-px bg-[#F5B041] mb-5" />
                <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-6">Stay connected with us on social media for travel inspiration and updates.</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.facebook.com/share/1BgCs3V8wR/?mibextid=wwXIfr', Icon: IcoFacebook },
                    { href: 'https://www.instagram.com/manik_lankaholidays?igsh=MTBubms2c3BrMm9nNA%3D%3D&utm_source=qr', Icon: IcoInstagram },
                    { href: 'https://wa.me/94777673814', Icon: IcoWhatsApp },
                  ].map(({ href, Icon }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-[#F5B041] hover:to-[#F39C12] border border-white/15 hover:border-[#F39C12]/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl border border-[#E8D5B5] p-5 shadow-sm flex-1">
                <div className="w-8 h-px bg-[#F39C12] mb-4" />
                <h3 className="text-base font-bold text-[#3D2314] mb-4">Find Us</h3>
                <div className="rounded-2xl overflow-hidden border-2 border-[#F5EFE6]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.6264683369404!2d79.92381667499775!3d7.05310249294921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDMnMTEuMiJOIDc5wrA1NSczNS4wIkU!5e0!3m2!1sen!2slk!4v1767452545011!5m2!1sen!2slk"
                    width="100%" height="260"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA STRIP — sigiriya image (intelligent image use) ══ */}
      <section className="relative py-20 sm:py-28 overflow-hidden" ref={ctaReveal.ref}>
        <div className="absolute inset-0">
          <img src="/images/sigiriya.jpg" alt="Sri Lanka" className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.55) saturate(1.1)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <div className={`transition-all duration-700 ${ctaReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#F5B041]" />
              <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Ready to Travel?</span>
              <div className="w-8 h-px bg-[#F5B041]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
              Plan Your Dream<br /><span className="text-[#F5B041]">Sri Lanka Journey</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Want a fully customized tour? Fill out our detailed inquiry form and our experts will craft the perfect itinerary just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/inquiry" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F39C12]/30 text-sm sm:text-base">
                Start Your Inquiry
                <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>
              </a>
              <a href="tel:+94777673814" className="inline-flex items-center gap-2.5 border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base">
                <IcoPhone />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes contactHeroFade { 0%{opacity:0} 100%{opacity:1} }
        .contact-hero-img { animation: contactHeroFade 1.2s ease both; }

        @keyframes contactHeroText { 0%{opacity:0;transform:translateY(28px)} 100%{opacity:1;transform:translateY(0)} }
        .contact-hero-text { animation: contactHeroText 1s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes contactScrollLine { 0%,100%{opacity:0.3} 50%{opacity:0.8} }
        .contact-scroll-line { animation: contactScrollLine 2s ease-in-out infinite; }

        @keyframes contactInfoCard { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
        .contact-info-card { animation: contactInfoCard 0.65s cubic-bezier(0.22,1,0.36,1) both; animation-play-state: paused; }

        @keyframes contactSpin { to{transform:rotate(360deg)} }
        .contact-spin { animation: contactSpin 0.8s linear infinite; }
      `}</style>
    </div>
  );
}