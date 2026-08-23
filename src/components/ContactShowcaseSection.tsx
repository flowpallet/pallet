import React from 'react';
import { Phone, MessageSquare, MapPin, Mail } from 'lucide-react';
import contactImg from '../assets/images/used_wooden_pallets_1787260468898.jpg';

export const ContactShowcaseSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#07090C] text-white relative overflow-hidden">
      {/* Background Industrial Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactImg}
          alt="FLOW Industrial Pallets"
          className="w-full h-full object-cover object-center scale-105 opacity-30 filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/80 to-[#07090C]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white">
          تواصل مع فريق FLOW
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-body max-w-xl mx-auto">
          للاستفسارات والمعلومات الفنية وتفاصيل التوريد، نحن متاحون لخدمتك مباشرة.
        </p>

        {/* Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          
          {/* Direct Phone */}
          <a
            href="tel:+201556913037"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#08090A] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#22C55E]/20 transition-all"
          >
            <Phone className="w-4 h-4 text-[#08090A]" />
            <span dir="ltr">01556913037</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/201556913037?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20FLOW%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%A7%D9%84%D8%AA%D8%A7%D8%AA%20FLOW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-black/50 hover:bg-black/70 border border-white/20 rounded-xl backdrop-blur-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#22C55E]" />
            <span>محادثة واتساب مباشرة</span>
          </a>

        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#22C55E]" />
            <span>تغطية وتوريد لكافة المحافظات والمناطق الصناعية</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#22C55E]" />
            <span>info@flow-pallets.com</span>
          </div>
        </div>

      </div>
    </section>
  );
};
