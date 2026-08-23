import React from 'react';
import { ArrowLeft, CheckCircle2, Shield, Layers, Scale, Sparkles, FileText } from 'lucide-react';
import woodenImg from '../assets/images/custom_pallets_1787260446885.jpg';

interface WoodenPalletsFeatureProps {
  onOpenQuoteModal: (productTitle?: string) => void;
  onExploreWoodenSpecs: () => void;
}

export const WoodenPalletsFeature: React.FC<WoodenPalletsFeatureProps> = ({
  onOpenQuoteModal,
  onExploreWoodenSpecs
}) => {
  const specs = [
    { label: 'حالة التوريد', value: 'جديدة تماماً أو مستعملة مفروزة Grade A' },
    { label: 'المقاسات المتوفرة', value: '100×120، 80×120 (Euro)، 110×110 ومقاسات خاصة' },
    { label: 'قدرات التحميل', value: 'أحمال ديناميكية حتى 2.5 طن واستاتيكية حتى 6 أطنان' },
    { label: 'المواصفات الفنية', value: 'سماكات ألواح من 18 مم إلى 28 مم ومسامير حلزونية' },
    { label: 'المعالجة والتصدير', value: 'متاحة بالمعالجة الحرارية HT وفق معيار ISPM 15' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F0F0F] relative overflow-hidden border-t border-white/10 text-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: Editorial Typography & Content */}
          <div className="lg:col-span-6 text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#D97706]/15 border border-[#D97706]/30 text-[#F59E0B] text-xs font-black mb-4">
              <Layers className="w-4 h-4 text-[#F59E0B]" />
              <span>العمود الفقري لسلاسل الإمداد</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-6">
              بالتات خشب
            </h2>

            <p className="text-zinc-300 font-body text-base sm:text-lg leading-relaxed mb-8">
              حلول متكاملة من البالتات الخشبية المصنعة والمفروزة بأعلى المعايير، لتلبية مختلف متطلبات الشحن والتخزين الصناعي والتكديس في المخازن الحديثة.
            </p>

            {/* Spec Cards / Breakdown */}
            <div className="space-y-3 mb-8">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#141414] border border-white/10 text-right"
                >
                  <div className="text-xs sm:text-sm font-bold text-[#22C55E]">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#F5F5F4] flex items-center gap-2">
                    <span>{item.label}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('بالتات خشب')}
                className="flex items-center gap-2 px-7 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-[#0A0A0A] font-black text-base rounded-xl transition-all shadow-lg shadow-[#22C55E]/20 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                <span>اطلب عرض سعر</span>
                <ArrowLeft className="w-4 h-4 mr-1" />
              </button>

              <button
                onClick={onExploreWoodenSpecs}
                className="flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 hover:text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
              >
                <span>مواصفات الخشب ومقاساته</span>
              </button>
            </div>

          </div>

          {/* Left Column: Large Detailed Pallet Photograph */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={woodenImg}
                alt="FLOW Wooden Pallets Close-up and Warehouse Stacking"
                className="w-full h-[420px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glass Card */}
              <div className="absolute top-6 right-6 p-4 rounded-xl bg-[#141414]/95 backdrop-blur-md border border-white/15 shadow-2xl text-right max-w-xs">
                <div className="text-xs font-black text-[#F59E0B] mb-1">توريد B2B فوري</div>
                <div className="text-sm font-bold text-zinc-200">دفعات منتظمة ومخزون جاهز للتوريد السريع</div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0A0A]/95 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-2xl">
                <div className="text-right">
                  <div className="text-xs text-[#22C55E] font-bold">المتانة والتحمل</div>
                  <div className="text-sm font-extrabold text-white">تحمل ميكانيكي عالي للأحمال المركزة</div>
                </div>
                <Scale className="w-6 h-6 text-[#F59E0B]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
