import React from 'react';
import { LayoutGrid, Scale, Layers, Compass, Eye } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductItem } from '../types';
import imgCustomPallets from '../assets/images/custom_pallets_1787260446885.jpg';

interface CustomPalletsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const CustomPalletsSection: React.FC<CustomPalletsSectionProps> = ({
  onSelectProduct
}) => {
  const customPallet = PRODUCTS_DATA.find((p) => p.id === 'custom-pallets') || PRODUCTS_DATA[4];

  const specBadges = [
    { title: 'التصميم', subtitle: 'حسب المواصفات', icon: Compass },
    { title: 'الكمية', subtitle: 'حسب طلبك', icon: Layers },
    { title: 'الحمولة', subtitle: 'حسب الحاجة', icon: Scale },
    { title: 'المقاس', subtitle: 'حسب الطلب', icon: LayoutGrid }
  ];

  return (
    <section id="custom-pallets" className="py-12 sm:py-16 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container with Industrial Carpentry Background */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A0D12] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-zinc-800">
          
          {/* Background Workshop Photo with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={imgCustomPallets}
              alt="Custom Pallet Crafting"
              className="w-full h-full object-cover opacity-25 filter"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0A0D12] via-[#0A0D12]/90 to-[#0A0D12]/75" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (in RTL: appears on the left): 4 Technical Badges + View Button */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              
              {/* 4 Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {specBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#22C55E]/40 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mb-2 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm font-extrabold text-white">
                        {badge.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 font-medium mt-0.5 whitespace-nowrap">
                        {badge.subtitle}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectProduct(customPallet)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1E5631] hover:bg-[#164324] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#1E5631]/30 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>استعراض قدرات التصنيع المخصص</span>
                </button>
              </div>

            </div>

            {/* Right Column (in RTL: appears on the right): Text content */}
            <div className="lg:col-span-6 text-right order-1 lg:order-2 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
                مواصفاتك. حلنا.
              </h2>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-zinc-200">
                تحتاج مقاساً أو تصميماً خاصاً؟
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-body leading-relaxed max-w-lg">
                نوفر تصاميم هندسية وتصنيع دقيق لأي حمولة، مقاس، أو طريقة رص ورفع تناسب خطوط إنتاجك ومستودعاتك.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
