import React from 'react';
import { ArrowLeft, MessageSquare, Check, Eye } from 'lucide-react';
import heroBg from '../assets/images/new_wooden_pallets_1787260458446.jpg';

interface HeroSectionProps {
  onExploreProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center bg-[#07090C] text-[#F5F5F4] pt-28 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Background Industrial Photography (Warehouse with pallets & forklift) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="FLOW Industrial Pallets Warehouse"
          className="w-full h-full object-cover object-center scale-105 opacity-40 filter brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Subtle cinematic radial & linear gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-[#07090C]/60 to-[#07090C]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07090C]/80 to-[#07090C]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-right mr-0 ml-auto space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading leading-[1.25] text-white tracking-tight">
            توريد <span className="text-[#22C55E]">البالتات</span>
            <br />
            المصممة لاحتياجات عملك
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-body leading-relaxed max-w-xl">
            معرض متكامل للحلول الخشبية والبلاستيكية ومواصفات التخزين والمناولة والنقل والتوريد الصناعي
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {/* Primary Explore Showcase */}
            <button
              id="hero-explore-btn"
              onClick={onExploreProducts}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-extrabold text-[#08090A] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl shadow-lg shadow-[#22C55E]/20 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>تصفح معرض المنتجات</span>
              <ArrowLeft className="w-4 h-4 mr-1" />
            </button>

            {/* Direct WhatsApp */}
            <a
              href="https://wa.me/201556913037?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20FLOW%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%20%D8%A8%D8%A7%D9%84%D8%AA%D8%A7%D8%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-black/40 hover:bg-black/60 border border-white/20 rounded-xl backdrop-blur-sm transition-all duration-200 active:scale-95"
            >
              <span>تواصل واتساب</span>
              <MessageSquare className="w-4 h-4 text-[#22C55E]" />
            </a>
          </div>

          {/* Micro Trust Note */}
          <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-bold">
            <Check className="w-4 h-4 text-[#22C55E] stroke-[3]" />
            <span>توريد موثوق. حلول مرنة.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
