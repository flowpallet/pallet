import React from 'react';
import { ArrowLeft, Check, Truck } from 'lucide-react';
import { Logo } from './Logo';
import aboutImg from '../assets/images/used_wooden_pallets_1787260468898.jpg';

interface AboutSectionProps {
  onExploreProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreProducts
}) => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-[#F8FAFC] text-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Asymmetric Split Card Container */}
        <div className="rounded-3xl bg-[#0F1318] border border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Warehouse & Transport Real Visual with Branded Overlay */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px] overflow-hidden order-2 lg:order-1">
            <img
              src={aboutImg}
              alt="FLOW Industrial Headquarters and Logistics"
              className="w-full h-full object-cover object-center scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient blend on right */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0F1318]/30 to-[#0F1318]" />
            
            {/* FLOATING BRAND SIGN ON BUILDING */}
            <div className="absolute top-6 left-6 p-3 sm:p-4 rounded-xl bg-[#0F1318]/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3">
              <Logo variant="horizontal" theme="dark" size="sm" />
            </div>

            {/* Bottom Transport Fleet Indicator */}
            <div className="absolute bottom-6 right-6 left-6 p-3 rounded-xl bg-[#0F1318]/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#22C55E]" />
                <span>أسطول نقل وشحن للمناطق الصناعية</span>
              </div>
              <span className="text-[#22C55E] font-mono text-[11px]">B2B FLEET</span>
            </div>
          </div>

          {/* Right Column: About Content & Pillars */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-right order-1 lg:order-2">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Main Text (Col 7) */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-block text-xs font-bold text-[#22C55E] tracking-wider">
                  — من نحن —
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-black font-brand-en tracking-tight text-white">
                    FLOW
                  </h2>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-zinc-300 mt-1">
                    توريد البالتات والتوريدات الصناعية
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-body leading-relaxed">
                  نحن في <strong className="text-white">FLOW</strong> نوفر معرضاً وحلولاً متكاملة للبالتات الخشبية والبلاستيكية لتلبية متطلبات الشركات والمصانع والمخازن في مختلف القطاعات.
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 font-body leading-relaxed">
                  نلتزم بتقديم منتجات عالية الجودة، ومواصفات دقيقة، وحلول مرنة تدعم وتسهل عملياتك اللوجستية.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onExploreProducts}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <span>استعرض منتجاتنا</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 3 Pillars List (Col 5) */}
              <div className="md:col-span-5 space-y-4 pt-2 md:pt-6 border-t md:border-t-0 md:border-r border-white/10 md:pr-6">
                
                {/* Pillar 1 */}
                <div className="flex items-start gap-3 text-right">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">حلول مرنة</div>
                    <div className="text-xs text-zinc-400 mt-0.5">تصاميم وفق متطلباتك</div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-start gap-3 text-right">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">جودة موثوقة</div>
                    <div className="text-xs text-zinc-400 mt-0.5">خشب معالج وبلاستيك معتمد</div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-start gap-3 text-right">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">تنوع شامل</div>
                    <div className="text-xs text-zinc-400 mt-0.5">كافة المقاسات والأوزان</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
