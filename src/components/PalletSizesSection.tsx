import React, { useState } from 'react';
import { PALLET_SIZES_DATA } from '../data/palletSizes';
import { PalletSizeItem } from '../types';
import { Ruler, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PalletSizesSectionProps {
  onOpenQuoteModal: (sizeContext?: string) => void;
}

export const PalletSizesSection: React.FC<PalletSizesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeSize, setActiveSize] = useState<PalletSizeItem>(PALLET_SIZES_DATA[0]);

  return (
    <section id="pallet-sizes" className="py-16 lg:py-24 bg-[#0C0E11] relative overflow-hidden border-t border-white/10 text-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-bold mb-2.5">
            <Ruler className="w-3.5 h-3.5" />
            <span>المقاسات والأبعاد</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
            دليل مقاسات البالتات
          </h2>
          <p className="text-zinc-400 font-body text-xs sm:text-sm mt-1">
            اختر المقاس لعرض الحمولة والخامات المتاحة أو اطلب مقاساً خاصاً.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Quick Size Selectors (Col 7) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {PALLET_SIZES_DATA.map((item) => {
                const isSelected = activeSize.dimensions === item.dimensions;
                return (
                  <button
                    key={item.dimensions}
                    onClick={() => setActiveSize(item)}
                    className={`p-3 rounded-xl text-right transition-all border cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#161B22] text-white border-[#22C55E] shadow-md'
                        : 'bg-[#12151A] hover:bg-[#161B22] text-zinc-300 border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[11px] px-1.5 py-0.5 rounded font-mono font-bold ${
                        isSelected ? 'bg-[#22C55E] text-[#08090A]' : 'bg-white/10 text-zinc-300'
                      }`}>
                        {item.dimensions}
                      </span>
                    </div>

                    <div className={`text-xs font-extrabold font-heading ${isSelected ? 'text-[#22C55E]' : 'text-white'}`}>
                      {item.standardName}
                    </div>

                    <div className="text-[10px] text-zinc-400 truncate mt-1">
                      {item.typicalLoad}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Spec Card (Col 5) */}
          <div className="lg:col-span-5 bg-[#12151A] rounded-2xl p-5 border border-white/10 text-right shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-[11px] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded">
                بطاقة المقاس
              </span>
              <span className="font-mono font-black text-xl text-white">
                {activeSize.dimensions}
              </span>
            </div>

            <h3 className="text-base font-black font-heading text-white mb-1">
              {activeSize.standardName}
            </h3>

            <p className="text-xs text-zinc-400 font-body mb-4">
              {activeSize.usageType}
            </p>

            <div className="space-y-2 mb-5 text-xs">
              <div className="p-2.5 bg-[#08090A] rounded-lg border border-white/5 flex items-center justify-between">
                <span className="text-zinc-500">سعة التحميل النمطية</span>
                <span className="font-bold text-[#22C55E]">{activeSize.typicalLoad}</span>
              </div>

              <div className="p-2.5 bg-[#08090A] rounded-lg border border-white/5">
                <span className="text-zinc-500 block mb-1">الخامات المتاحة</span>
                <div className="flex flex-wrap gap-1">
                  {activeSize.materialOptions.map((mat, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-white/10 text-zinc-300 rounded">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal(`طلب تسعير مقاس ${activeSize.dimensions}`)}
              className="w-full py-3 bg-[#22C55E] hover:bg-[#16A34A] text-[#08090A] font-extrabold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>طلب عرض سعر لهذا المقاس ({activeSize.dimensions})</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
