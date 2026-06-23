"use client";

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';

/* ════════════════════════════════════════════════════════════
   SVG ICONS
════════════════════════════════════════════════════════════ */
const IcoArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcoCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER HOOK
════════════════════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */
export default function InquiryClient() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [inquiryType, setInquiryType] = useState<'short' | 'long'>('short');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formReveal = useReveal();

  useEffect(() => { setHasAnimated(true); }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    whatsapp: '',
    arrivalDate: '',
    departureDate: '',
    noOfPax: '',
    adults: '',
    children: '',
    hotelCategory: '',
    noOfRooms: '',
    mealPlan: '',
    interests: [] as string[],
    budget: '',
    otherRequirements: ''
  });

  const hotelCategories = ['Boutique', '5 Star', '4 Star', '3 Star', 'Budget'];
  const mealPlans = ['Bed and Breakfast', 'Half Board', 'Full Board'];
  const interestOptions = ['Culture and Heritage', 'Nature', 'Ancient and Archaeology', 'Wildlife', 'Adventure', 'Beach', 'Shopping'];
  const budgetOptions = ['0 - $500', '$500 - $1000', '$1000 - $2000', '$2000 - $3500', '$3500 - $5000', '$5000+'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // JS Validations
    const name = formData.name.trim();
    const country = formData.country.trim();
    const email = formData.email.trim();
    const whatsapp = formData.whatsapp.trim();
    const noOfPax = formData.noOfPax.toString().trim();
    const adults = formData.adults.toString().trim();
    const children = formData.children.toString().trim();
    const noOfRooms = formData.noOfRooms.toString().trim();

    if (!name) return toast.error('Name cannot be empty.');
    if (name.length > 100) return toast.error('Name cannot exceed 100 characters.');
    
    if (!country) return toast.error('Country cannot be empty.');
    if (country.length > 100) return toast.error('Country cannot exceed 100 characters.');

    if (!email) return toast.error('Email cannot be empty.');
    if (email.length > 500) return toast.error('Email cannot exceed 500 characters.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error('Please enter a valid email address with an @ mark.');

    if (!formData.arrivalDate) return toast.error('Arrival date is required.');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const arrivalDateObj = new Date(formData.arrivalDate);
    if (arrivalDateObj < today) return toast.error('Arrival date cannot be in the past.');

    if (!formData.departureDate) return toast.error('Departure date is required.');
    const departureDateObj = new Date(formData.departureDate);
    if (departureDateObj < today) return toast.error('Departure date cannot be in the past.');
    if (departureDateObj < arrivalDateObj) return toast.error('Departure date cannot be before the arrival date.');

    if (!noOfPax) return toast.error('Total Pax cannot be empty.');
    if (noOfPax.length > 5) return toast.error('Total Pax cannot exceed 5 digits.');

    if (!adults) return toast.error('Adults cannot be empty.');
    if (adults.length > 5) return toast.error('Adults cannot exceed 5 digits.');

    if (!children) return toast.error('Children cannot be empty.');
    if (children.length > 5) return toast.error('Children cannot exceed 5 digits.');

    if (inquiryType === 'long') {
      if (whatsapp && !/^\+?[0-9\s\-()]{7,20}$/.test(whatsapp)) {
        return toast.error('Please enter a valid WhatsApp number.');
      }
      if (!formData.hotelCategory) return toast.error('Hotel category is required.');
      if (!noOfRooms) return toast.error('No of Rooms cannot be empty.');
      if (noOfRooms.length > 5) return toast.error('No of Rooms cannot exceed 5 digits.');
      if (!formData.mealPlan) return toast.error('Meal plan is required.');
    }

    setIsSubmitting(true);
    
    const messageDetails = `
=========================================
          NEW TOUR INQUIRY
=========================================

--- Personal Details ---
Inquiry Type : ${inquiryType === 'short' ? 'Quick Inquiry' : 'Detailed Inquiry'}
Name         : ${formData.name}
Email        : ${formData.email}
Country      : ${formData.country}
WhatsApp     : ${formData.whatsapp || 'N/A'}

--- Travel Details ---
Arrival Date : ${formData.arrivalDate}
Departure    : ${formData.departureDate}
Total Pax    : ${formData.noOfPax || 'N/A'}
Adults       : ${formData.adults}
Children     : ${formData.children || '0'}

--- Hotel & Stay ---
Category     : ${formData.hotelCategory || 'N/A'}
Rooms        : ${formData.noOfRooms || 'N/A'}
Meal Plan    : ${formData.mealPlan || 'N/A'}

--- Preferences ---
Interests    : ${formData.interests.length > 0 ? formData.interests.join(', ') : 'None'}
Budget       : ${formData.budget || 'N/A'}
Other Reqs   : ${formData.otherRequirements || 'None'}

=========================================
    `.trim();

    const serviceId = 'service_8lltwvh';
    const templateId = 'template_1jgllce';
    const publicKey = 'MaqnHFNUsh3klIu9N';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: messageDetails,
      to_name: 'Manik Lanka',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success('Thank you! Your inquiry has been sent successfully.');
      setFormData({
        name: '', country: '', email: '', whatsapp: '', arrivalDate: '',
        departureDate: '', noOfPax: '', adults: '', children: '',
        hotelCategory: '', noOfRooms: '', mealPlan: '', interests: [],
        budget: '', otherRequirements: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Toaster position="top-center" toastOptions={{ style: { background: '#FDF8F2', border: '1px solid #E8D5B5', color: '#3D2314', borderRadius: '14px', fontFamily: 'inherit' }, classNames: { error: 'inq-toast-error', success: 'inq-toast-success' } }} />
    <div className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">
      
      {/* ══════════════════════════════════════════════════════
          HERO — cinematic, bottom-anchored text
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[48vh] sm:h-[55vh] min-h-[380px] max-h-[600px] overflow-hidden">
        <img
          src="/images/beachImage.jpg"
          alt="Inquire About Your Custom Tour"
          className="absolute inset-0 w-full h-full object-cover inquiry-hero-img"
          style={{ filter: 'brightness(0.65) saturate(1.1)' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-[#F39C12]/10 blur-3xl pointer-events-none" />

        <div className={`absolute bottom-0 left-0 right-0 px-5 sm:px-14 lg:px-24 pb-12 sm:pb-16 ${hasAnimated ? 'inquiry-hero-text' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-[#F39C12] to-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.25em] uppercase">Tailored For You</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-3"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8)' }}
          >
            Custom Tour
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B041] via-[#F39C12] to-[#E67E22]">
              Inquiry
            </span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-xl font-light leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            Tell us your preferences and let our experts craft the perfect Sri Lankan itinerary for you.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INQUIRY FORM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FDFCFA] via-[#F5EFE6] to-[#FDFCFA]" ref={formReveal.ref}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Section header */}
          <div className={`text-center mb-10 transition-all duration-700 ${formReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F39C12]" />
              <span className="text-[#B8730A] text-xs font-semibold tracking-[0.25em] uppercase">Plan Your Journey</span>
              <div className="w-8 h-px bg-[#F39C12]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2314] mb-2">Share Your <span className="text-[#8B5E0A]">Travel Plans</span></h2>
            <p className="text-[#6B5744]/70 text-sm max-w-sm mx-auto">Choose an inquiry type and our experts will craft a personalized itinerary.</p>
          </div>

          {/* Form Type Selector */}
          <div className={`flex justify-center mb-10 transition-all duration-700 delay-100 ${formReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white border border-[#E8D5B5] p-1.5 rounded-2xl flex gap-1 shadow-md shadow-[#F39C12]/5">
              <button
                onClick={() => setInquiryType('short')}
                className={`px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${inquiryType === 'short' ? 'bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white shadow-lg shadow-[#F39C12]/25' : 'text-[#6B5744] hover:text-[#8B5E0A] hover:bg-[#FDF4E7]'}`}
              >
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                  Quick Inquiry
                </span>
              </button>
              <button
                onClick={() => setInquiryType('long')}
                className={`px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${inquiryType === 'long' ? 'bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white shadow-lg shadow-[#F39C12]/25' : 'text-[#6B5744] hover:text-[#8B5E0A] hover:bg-[#FDF4E7]'}`}
              >
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  Detailed Inquiry
                </span>
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className={`bg-white rounded-3xl border border-[#E8D5B5] shadow-2xl shadow-[#F39C12]/8 p-6 sm:p-10 transition-all duration-700 delay-200 ${formReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5EFE6]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 border border-[#F39C12]/25 flex items-center justify-center text-[#8B5E0A] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="text-[#3D2314] text-base font-bold">Personal Details</h3>
                <div className="flex-1 h-px bg-[#F5EFE6]" />
                <span className="text-[10px] text-[#B8A090] uppercase tracking-wider font-medium">Step 1</span>
              </div>

              {/* Basic Details (Common to both) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Country *</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="United Kingdom" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="john@example.com" />
                </div>
                {inquiryType === 'long' && (
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#6B5744]">WhatsApp Contact</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                      className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="+44 123 456 789" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 mb-6 pt-6 pb-4 border-b border-[#F5EFE6]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 border border-[#F39C12]/25 flex items-center justify-center text-[#8B5E0A] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <h3 className="text-[#3D2314] text-base font-bold">Travel Details</h3>
                <div className="flex-1 h-px bg-[#F5EFE6]" />
                <span className="text-[10px] text-[#B8A090] uppercase tracking-wider font-medium">Step 2</span>
              </div>

              {/* Travel Details (Common) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Arrival Date *</label>
                  <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} required
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Departure Date *</label>
                  <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Total Pax *</label>
                  <input type="number" name="noOfPax" value={formData.noOfPax} onChange={handleChange} required min="1" onWheel={(e) => e.currentTarget.blur()}
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="2" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Adults *</label>
                  <input type="number" name="adults" value={formData.adults} onChange={handleChange} required min="1" onWheel={(e) => e.currentTarget.blur()}
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="2" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Children (under 12) *</label>
                  <input type="number" name="children" value={formData.children} onChange={handleChange} required min="0" onWheel={(e) => e.currentTarget.blur()}
                    className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="0" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#6B5744]">Hotel Category</label>
                  <div className="relative">
                    <select name="hotelCategory" value={formData.hotelCategory} onChange={handleChange}
                      className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 appearance-none">
                      <option value="">Select Category</option>
                      {hotelCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] pointer-events-none">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                </div>

                {/* Long Inquiry Specific Fields */}
                {inquiryType === 'long' && (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#6B5744]">No of Rooms *</label>
                      <input type="number" name="noOfRooms" value={formData.noOfRooms} onChange={handleChange} required min="1" onWheel={(e) => e.currentTarget.blur()}
                        className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300" placeholder="1" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#6B5744]">Meal Plan</label>
                      <div className="relative">
                        <select name="mealPlan" value={formData.mealPlan} onChange={handleChange}
                          className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 appearance-none">
                          <option value="">Select Meal Plan</option>
                          {mealPlans.map(plan => (
                            <option key={plan} value={plan}>{plan}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] pointer-events-none">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#6B5744]">Target Budget (USD)</label>
                      <div className="relative">
                        <select name="budget" value={formData.budget} onChange={handleChange}
                          className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 appearance-none">
                          <option value="">Select Budget Range</option>
                          {budgetOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A090] pointer-events-none">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {inquiryType === 'long' && (
                <>
                  <div className="flex items-center gap-3 mb-6 pt-6 pb-4 border-b border-[#F5EFE6]">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 border border-[#F39C12]/25 flex items-center justify-center text-[#8B5E0A] flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </div>
                    <h3 className="text-[#3D2314] text-base font-bold">Your Interests</h3>
                    <p className="text-xs text-[#B8A090] hidden sm:block">Select all that apply</p>
                    <div className="flex-1 h-px bg-[#F5EFE6]" />
                    <span className="text-[10px] text-[#B8A090] uppercase tracking-wider font-medium">Step 3</span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interestOptions.map(interest => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 text-left ${
                            isSelected 
                              ? 'border-[#F39C12] bg-[#FDF4E7] text-[#8B5E0A]' 
                              : 'border-[#E8D5B5] bg-white text-[#6B5744] hover:border-[#F39C12]/50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isSelected ? 'bg-[#F39C12] border-[#F39C12] text-white' : 'border-[#E8D5B5] bg-[#FDFCFA]'
                          }`}>
                            {isSelected && <IcoCheck />}
                          </div>
                          {interest}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              <div className="flex items-center gap-3 mb-6 pt-6 pb-4 border-b border-[#F5EFE6]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 border border-[#F39C12]/25 flex items-center justify-center text-[#8B5E0A] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </div>
                <h3 className="text-[#3D2314] text-base font-bold">Other Requirements</h3>
                <div className="flex-1 h-px bg-[#F5EFE6]" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#6B5744]">Tell us more about your ideal trip</label>
                <textarea name="otherRequirements" value={formData.otherRequirements} onChange={handleChange} rows={4}
                  className="w-full bg-[#FDFCFA] border border-[#E8D5B5] focus:border-[#F39C12] rounded-xl px-4 py-3 text-sm text-[#3D2314] outline-none transition-all duration-300 resize-none" 
                  placeholder="Any specific places you want to visit, dietary requirements, or special occasions?" />
              </div>

              <div className="pt-6">
                <button type="submit" disabled={isSubmitting}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F39C12] to-[#E67E22] hover:from-[#F5B041] hover:to-[#F39C12] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#F39C12]/20 hover:shadow-[#F39C12]/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  {!isSubmitting && <span className="transition-transform duration-300 group-hover:translate-x-1"><IcoArrow /></span>}
                </button>
                <p className="text-xs text-[#B8A090] mt-4 text-center sm:text-left">
                  We aim to respond to all inquiries within 24 hours with a personalized itinerary proposal.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* Image break — sigiriya, slim, reassurance strip */}
      <section className="relative h-48 sm:h-60 overflow-hidden">
        <img src="/images/sigiriya.jpg" alt="Sri Lanka" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: 'brightness(0.55) saturate(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#F5B041]" />
            <span className="text-[#F5B041] text-xs font-semibold tracking-[0.2em] uppercase">Our Promise</span>
            <div className="w-8 h-px bg-[#F5B041]" />
          </div>
          <p className="text-white text-lg sm:text-2xl font-bold" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>We respond within <span className="text-[#F5B041]">24 hours</span> with a personalized itinerary.</p>
          <p className="text-white/65 text-sm mt-2">Every inquiry is handled personally by our expert travel consultants.</p>
        </div>
      </section>

      <style>{`
        @keyframes inquiryHeroFade { 0%{opacity:0} 100%{opacity:1} }
        .inquiry-hero-img { animation: inquiryHeroFade 1.2s ease both; }
        @keyframes inquiryHeroText { 0%{opacity:0;transform:translateY(28px)} 100%{opacity:1;transform:translateY(0)} }
        .inquiry-hero-text { animation: inquiryHeroText 1s cubic-bezier(0.22,1,0.36,1) both; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; margin:0; }
        input[type=date]::-webkit-calendar-picker-indicator { opacity: 0.4; cursor: pointer; }
        .inq-toast-success { border-color: #F39C12 !important; }
        .inq-toast-error { border-color: #C0392B !important; }
      `}</style>
    </div>
    </>
  );
}
