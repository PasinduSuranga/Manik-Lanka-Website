import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C4A52] via-[#1A1B1E] to-[#2C4A52] text-[#FFF8F0] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B9D] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C4B] to-[#FFD23F]">
              Manik Lanka Holidays
            </h3>
            <p className="text-[#E8E9EB] leading-relaxed">
              Discover the wonder of Sri Lanka with our curated tour packages.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#06D6A0] to-[#00B4D8] rounded-full"></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFD23F] mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="tel:+94777673814" 
                className="flex items-center gap-3 hover:text-[#00B4D8] transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00B4D8] to-[#06D6A0] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-[#1A1B1E]" />
                </div>
                <span className="text-[#E8E9EB]">+94 77 767 3814</span>
              </a>
              <a 
                href="mailto:mlankaholidays@gmail.com" 
                className="flex items-center gap-3 hover:text-[#00B4D8] transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#FF6B9D] to-[#FF8C4B] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-[#1A1B1E]" />
                </div>
                <span className="text-[#E8E9EB]">mlankaholidays@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 group">
                <div className="bg-gradient-to-br from-[#7209B7] to-[#FF6B9D] p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-[#1A1B1E] flex-shrink-0" />
                </div>
                <span className="text-[#E8E9EB]">No. 67/C, Walpola, Ragama, Sri</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFD23F] mb-4">Follow Us</h3>
            <p className="text-[#E8E9EB] mb-4">Stay updated with our latest offers.</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1BgCs3V8wR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gradient-to-br from-[#2C4A52] to-[#1A1B1E] p-3 rounded-xl border-2 border-[#00B4D8] hover:border-[#FFD23F] hover:shadow-lg hover:shadow-[#00B4D8]/50 hover:scale-110 transform transition-all duration-300"
              >
                <Facebook className="h-5 w-5 text-[#00B4D8]" />
              </a>
              <a
                href="https://www.instagram.com/manik_lankaholidays?igsh=MTBubms2c3BrMm9nNA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gradient-to-br from-[#2C4A52] to-[#1A1B1E] p-3 rounded-xl border-2 border-[#FF6B9D] hover:border-[#FFD23F] hover:shadow-lg hover:shadow-[#FF6B9D]/50 hover:scale-110 transform transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-[#FF6B9D]" />
              </a>
              <a
                href="https://wa.me/94777673814"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-gradient-to-br from-[#2C4A52] to-[#1A1B1E] p-3 rounded-xl border-2 border-[#06D6A0] hover:border-[#FFD23F] hover:shadow-lg hover:shadow-[#06D6A0]/50 hover:scale-110 transform transition-all duration-300"
              >
                <svg className="h-5 w-5 text-[#06D6A0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E8E9EB]/20 mt-12 pt-8 text-center">
          <p className="text-sm text-[#E8E9EB]">
            &copy; {new Date().getFullYear()} Manik Lanka Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}