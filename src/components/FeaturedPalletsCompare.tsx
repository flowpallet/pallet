import React from 'react';
import { Eye, Check } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductItem } from '../types';
import imgNewWooden from '../assets/images/new_wooden_pallets_1787260458446.jpg';
import imgPlasticPallets from '../assets/images/plastic_pallets_1787260436301.jpg';

interface FeaturedPalletsCompareProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const FeaturedPalletsCompare: React.FC<FeaturedPalletsCompareProps> = ({
  onSelectProduct
}) => {
  const woodenProduct = PRODUCTS_DATA.find((p) => p.id === 'wooden-new') || PRODUCTS_DATA[0];
  const plasticProduct = PRODUCTS_DATA.find((p) => p.id === 'plastic-pallets') || PRODUCTS_DATA[3];

  return (
    <section className="py-10 sm:py-14 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: PLASTIC PALLETS (Dark Card on the left) */}
          <div className="rounded-3xl bg-[#0F1318] border border-zinc-800 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
            {/* Right side inside card: Text content */}
            <div className="flex-1 text-right space-y-3.5 z-10">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                توريد البالتات البلاستيك
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-body leading-relaxed max-w-sm">
                بالتات بلاستيكية قوية ومثالية مناسبة للاستخدام في مختلف البيئات الصناعية والغذائية والدوائية.
              </p>

              {/* Checkmarks */}
              <div className="space-y-2 pt-1 text-xs sm:text-sm">
                {[
                  'متينة وخفيفة الوزن',
                  'مقاومة للرطوبة والمواد الكيميائية',
                  'سهلة التنظيف والتعقيم',
                  'عمر افتراضي طويل'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-zinc-200">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => onSelectProduct(plasticProduct)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#22C55E]" />
                  <span>استعراض المواصفات</span>
                </button>
              </div>
            </div>

            {/* Left side inside card: Plastic Pallet Visual */}
            <div className="w-44 sm:w-56 shrink-0 z-10">
              <img
                src={imgPlasticPallets}
                alt="Plastic Pallets"
                className="w-full h-36 sm:h-44 object-cover rounded-xl drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 2: WOODEN PALLETS (Light / White Card on the right) */}
          <div className="rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-8 text-[#0F172A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            {/* Right side inside card: Text content */}
            <div className="flex-1 text-right space-y-3.5 z-10">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-[#0F172A]">
                بالتات خشب
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-body leading-relaxed max-w-sm">
                حلول خشبية متنوعة تناسب كافة احتياجات التخزين والمناولة والنقل الثقيل.
              </p>

              {/* Checkmarks */}
              <div className="space-y-2 pt-1 text-xs sm:text-sm">
                {[
                  'جديد أو مستعمل بجودة معتمدة',
                  'مقاسات وقدرات تحميل مختلفة',
                  'معالجة حرارية ISPM 15 للتصدير',
                  'مواصفات وتصاميم حسب الطلب'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-zinc-700">
                    <Check className="w-4 h-4 text-[#1E5631] shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => onSelectProduct(woodenProduct)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 hover:border-zinc-500 bg-zinc-50 hover:bg-zinc-100 text-[#0F172A] font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#1E5631]" />
                  <span>استعراض المواصفات</span>
                </button>
              </div>
            </div>

            {/* Left side inside card: Wooden Pallet Visual */}
            <div className="w-44 sm:w-56 shrink-0 z-10">
              <img
                src={imgNewWooden}
                alt="Wooden Pallets"
                className="w-full h-36 sm:h-44 object-cover rounded-xl drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
