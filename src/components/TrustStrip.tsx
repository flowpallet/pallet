import React from 'react';
import { Layers, Boxes, Sliders, Truck, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      id: 'new-used',
      title: 'جديد ومستعمل',
      icon: Layers
    },
    {
      id: 'wood-plastic',
      title: 'خشب وبلاستيك',
      icon: Boxes
    },
    {
      id: 'custom-order',
      title: 'حسب الطلب',
      icon: Sliders
    },
    {
      id: 'b2b-supply',
      title: 'توريد للشركات',
      icon: Truck
    },
    {
      id: 'delivery',
      title: 'إمكانية التوصيل',
      icon: MapPin
    }
  ];

  return (
    <section className="relative z-20 bg-[#F4F5F7] border-y border-zinc-200/80 py-4 sm:py-5 text-[#111417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-zinc-200/80">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2.5 py-1.5 px-2 text-center"
              >
                <span className="text-xs sm:text-sm md:text-base font-extrabold font-heading text-[#0F172A] whitespace-nowrap">
                  {item.title}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-zinc-200 shadow-xs flex items-center justify-center text-[#1E5631] shrink-0">
                  <Icon className="w-4 h-4 text-[#1E5631]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

