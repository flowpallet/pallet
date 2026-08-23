import React from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductItem } from '../types';
import { ArrowLeft, Eye } from 'lucide-react';
import imgNewWooden from '../assets/images/new_wooden_pallets_1787260458446.jpg';
import imgUsedWooden from '../assets/images/used_wooden_pallets_1787260468898.jpg';
import imgWoodenBlock from '../assets/images/wooden_block_pallet_1787260425757.jpg';
import imgCompressedPulp from '../assets/images/compressed_pulp_pallet_1787260414350.jpg';
import imgPlasticPallets from '../assets/images/plastic_pallets_1787260436301.jpg';
import imgCustomPallets from '../assets/images/custom_pallets_1787260446885.jpg';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct
}) => {
  // 6 specific items matching the catalog:
  const productsList = [
    {
      id: 'wooden-block',
      title: 'دكمة خشب',
      image: imgWoodenBlock,
      data: PRODUCTS_DATA.find((p) => p.id === 'wooden-block') || PRODUCTS_DATA[2]
    },
    {
      id: 'wooden-used',
      title: 'بالتات خشب مستعملة',
      image: imgUsedWooden,
      data: PRODUCTS_DATA.find((p) => p.id === 'wooden-used') || PRODUCTS_DATA[1]
    },
    {
      id: 'wooden-new',
      title: 'بالتات خشب جديدة',
      image: imgNewWooden,
      data: PRODUCTS_DATA.find((p) => p.id === 'wooden-new') || PRODUCTS_DATA[0]
    },
    {
      id: 'compressed-pulp',
      title: 'دكمة تبن',
      image: imgCompressedPulp,
      data: PRODUCTS_DATA.find((p) => p.id === 'compressed-pulp') || PRODUCTS_DATA[3]
    },
    {
      id: 'custom-pallets',
      title: 'بالتات حسب الطلب',
      image: imgCustomPallets,
      data: PRODUCTS_DATA.find((p) => p.id === 'custom-pallets') || PRODUCTS_DATA[5]
    },
    {
      id: 'plastic-pallets',
      title: 'بالتات بلاستيك',
      image: imgPlasticPallets,
      data: PRODUCTS_DATA.find((p) => p.id === 'plastic-pallets') || PRODUCTS_DATA[4]
    }
  ];

  return (
    <section id="products" className="py-14 sm:py-20 bg-[#F4F5F7] text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Centered Underline Accent */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-[#0F172A] inline-block relative pb-3">
            معرض المنتجات
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1E5631] rounded-full"></span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-body mt-2">
            اضغط على أي منتج لاستعراض المواصفات الفنية وتفاصيل التصنيع
          </p>
        </div>

        {/* 6 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {productsList.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item.data)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-200/80 bg-zinc-900 transition-all duration-300 cursor-pointer"
            >
              {/* Product Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />

              {/* Bottom Label Strip with View Indicator */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 flex items-center justify-between text-white">
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#22C55E] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-200">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-black font-heading text-white tracking-wide text-right">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
