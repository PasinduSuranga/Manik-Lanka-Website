import Image from 'next/image';

/* ════════════════════════════════════════════════════════════
   FOOTER COMPONENT
   Design thought:
   - No background images here — a solid dark warm-brown base
     grounds the page and gives the footer its own identity.
   - Gold top border acts as an elegant visual separator.
   - 4-column layout: Brand · Quick Links · Contact · Social
   - Quick Links are new — tourists need bottom navigation.
   - All lucide replaced with inline SVGs for consistency.
════════════════════════════════════════════════════════════ */

const IcoPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.29 6.29l1.1-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IcoMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const IcoPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IcoFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IcoInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const IcoWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Travel Guide', path: '/travelguide' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About Us', path: '/about' },
  { name: 'Help & FAQs', path: '/help' },
  { name: 'Inquiry', path: '/inquiry' },
  { name: 'Contact Us', path: '/contactus' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/share/1BgCs3V8wR/?mibextid=wwXIfr', Icon: IcoFacebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/manik_lankaholidays?igsh=MTBubms2c3BrMm9nNA%3D%3D&utm_source=qr', Icon: IcoInstagram, label: 'Instagram' },
  { href: 'https://wa.me/94777673814', Icon: IcoWhatsApp, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1A0E05] to-[#0D0704] text-white overflow-hidden">
      {/* Gold top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F39C12] to-transparent opacity-60" />

      {/* Ambient gold orbs — subtle depth, no image */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#8B5E0A] rounded-full blur-[120px] opacity-8 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D68910] rounded-full blur-[120px] opacity-6 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-8">

        {/* 4-COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 rounded-xl border border-[#F39C12]/40 bg-white/8 flex items-center justify-center flex-shrink-0">
                <Image src="https://res.cloudinary.com/bnhex8aj/image/upload/v1783672260/logo_ef2rw8.png" alt="Manik Lanka Holidays Logo" fill className="object-contain p-1" />
              </div>
              <div>
                <span className="block font-bold text-sm sm:text-base bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#F5B041] bg-clip-text text-transparent leading-tight">
                  Manik Lanka Holidays
                </span>
                <span className="block text-[10px] text-[#D4AF37]/70 tracking-widest">Your Journey Begins Here</span>
              </div>
            </div>
            <div className="w-8 h-px bg-[#F39C12] mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premier Sri Lankan travel specialists crafting unforgettable, tailor-made journeys for travelers from across the globe.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl border border-[#F39C12]/30 hover:border-[#F39C12] bg-white/5 hover:bg-[#F39C12]/15 flex items-center justify-center text-[#F39C12] transition-all duration-300 hover:scale-110">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-4 h-px bg-[#F39C12]" />
              <h4 className="text-xs font-bold text-[#F5B041] uppercase tracking-[0.2em]">Quick Links</h4>
            </div>
            <ul className="space-y-2">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <a href={link.path}
                    className="group flex items-center gap-2 text-white/55 hover:text-[#F5B041] text-sm transition-colors duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"><IcoArrow /></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: More Links ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-4 h-px bg-[#F39C12]" />
              <h4 className="text-xs font-bold text-[#F5B041] uppercase tracking-[0.2em]">Explore</h4>
            </div>
            <ul className="space-y-2">
              {quickLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <a href={link.path}
                    className="group flex items-center gap-2 text-white/55 hover:text-[#F5B041] text-sm transition-colors duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"><IcoArrow /></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-4 h-px bg-[#F39C12]" />
              <h4 className="text-xs font-bold text-[#F5B041] uppercase tracking-[0.2em]">Get In Touch</h4>
            </div>
            <div className="space-y-4">
              <a href="tel:+94777673814"
                className="group flex items-start gap-3 text-white/60 hover:text-[#F5B041] text-sm transition-colors duration-300">
                <span className="mt-0.5 text-[#F39C12]/70 group-hover:text-[#F5B041]"><IcoPhone /></span>
                +94 77 767 3814
              </a>
              <a href="mailto:mlankaholidays@gmail.com"
                className="group flex items-start gap-3 text-white/60 hover:text-[#F5B041] text-sm transition-colors duration-300 break-all">
                <span className="mt-0.5 text-[#F39C12]/70 group-hover:text-[#F5B041] flex-shrink-0"><IcoMail /></span>
                mlankaholidays@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <span className="text-[#F39C12]/70"><IcoPin /></span>
                <span>No. 67/C, Walpola,<br />Ragama, Sri Lanka</span>
              </div>
              <div className="pt-2">
                <a href="/inquiry"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-[#F39C12]/20">
                  Plan Your Tour
                  <IcoArrow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Manik Lanka Holidays. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center">
            Crafted with care for unforgettable Sri Lanka journeys.
          </p>
        </div>
      </div>
    </footer>
  );
}