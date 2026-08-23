import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/industries';
import { 
  Factory, 
  UtensilsCrossed, 
  Pill, 
  FlaskConical, 
  Wine, 
  Layers, 
  Sprout, 
  Truck, 
  Warehouse, 
  Globe2, 
  Boxes,
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { IndustryItem } from '../types';

interface IndustriesSectionProps {
  onOpenQuoteModal: (industryContext?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenQuoteModal
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return Factory;
      case 'UtensilsCrossed': return UtensilsCrossed;
      case 'Pill': return Pill;
      case 'FlaskConical': return FlaskConical;
      case 'Wine': return Wine;
      case 'Layers': return Layers;
      case 'Sprout': return Sprout;
      case 'Truck': return Truck;
      case 'Warehouse': return Warehouse;
      case 'Globe2': return Globe2;
      case 'Boxes': return Boxes;
      default: return Factory;
    }
  };

  return (
    <section id="industries" className="py-16 lg:py-24 bg-[#08090A] text-[#F5F5F4] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-bold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>القطاعات والصناعات</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
            حلول متخصصة لكل صناعة
          </h2>
          <p className="text-zinc-400 font-body text-xs sm:text-sm mt-1">
            نوفر البالتات المطابقة لاشتراطات سلامة الغذاء، التصدير الزراعي، والمستودعات الثقيلة.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {INDUSTRIES_DATA.slice(0, 8).map((ind) => {
            const Icon = getIcon(ind.iconName);
            const isSelected = selectedIndustry?.id === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-3.5 rounded-xl transition-all cursor-pointer border text-right ${
                  isSelected
                    ? 'bg-[#12151A] border-[#22C55E] shadow-md'
                    : 'bg-[#12151A]/60 hover:bg-[#12151A] border-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${
                  isSelected ? 'bg-[#22C55E] text-[#08090A]' : 'bg-white/5 text-zinc-300'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className={`text-xs sm:text-sm font-black font-heading leading-snug mb-1 ${
                  isSelected ? 'text-[#22C55E]' : 'text-white'
                }`}>
                  {ind.name}
                </h3>

                <p className="text-[11px] text-zinc-400 font-body line-clamp-1">
                  {ind.keyRequirement}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Bar */}
        {selectedIndustry && (
          <div className="p-4 sm:p-5 rounded-xl bg-[#12151A] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-right">
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>البالتات الموصى بها لقطاع {selectedIndustry.name}:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedIndustry.recommendedPallets.map((p, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 text-[11px] font-bold bg-white/5 text-zinc-300 rounded border border-white/10">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal(`عرض سعر لقطاع ${selectedIndustry.name}`)}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#08090A] font-black text-xs rounded-lg transition-colors cursor-pointer text-center"
            >
              طلب تسعير لهذا القطاع
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
