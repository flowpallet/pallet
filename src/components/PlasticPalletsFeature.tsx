import React from 'react';
import { ArrowLeft, Sparkles, Droplets, ShieldCheck, ThermometerSnowflake, FileText, CheckCircle2 } from 'lucide-react';
import plasticImg from '../assets/images/plastic_pallets_1787260436301.jpg';

interface PlasticPalletsFeatureProps {
  onOpenQuoteModal: (productTitle?: string) => void;
  onExplorePlasticDetails: () => void;
}

export const PlasticPalletsFeature: React.FC<PlasticPalletsFeatureProps> = ({
  onOpenQuoteModal,
  onExplorePlasticDetails
}) => {
  const highlights = [
    { title: 'معايير صحية وغرف نظيفة', desc: 'سطح غير مسامي يمنع امتصاص السوائل والبكتيريا ومطابق لمعايير الغذاء والدواء' },
    { title: 'مقاومة الكيماويات والحرارة', desc: 'تحمل درجات حرارة من -30° مئوية في غرف التجميد وحتى +60° مئوية مع مقاومة للأحماض' },
    { title: 'توافق تام مع الراكات العالية', desc: 'نماذج مدعمة بقضبان فولاذية داخلية (Steel Reinforced) لتخزين آمن على الارتفاعات' },
    { title: 'عمر افتراضي ممتد واقتصادي', desc: 'عمر تشغيلي يتجاوز 10 أضعاف البالتات الخشبية مع إمكانية إعادة التدوير الكاملة' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] text-[#F5F5F4] relative overflow-hidden border-t border-white/10">
      {/* Visual background accents */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: Large Plastic Pallet Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={plasticImg}
                alt="FLOW Heavy-Duty Blue and Black Plastic Pallets"
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Floating Feature Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 text-xs font-bold text-[#22C55E] flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5" />
                  مقاومة تامة للماء والرطوبة
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <ThermometerSnowflake className="w-3.5 h-3.5" />
                  جاهز لغرف التبريد والتجميد
                </span>
              </div>

              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-xl bg-[#141414]/95 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-2xl">
                <div className="text-right">
                  <div className="text-xs text-[#22C55E] font-bold">خامات HDPE و PP عالية النقاء</div>
                  <div className="text-sm font-extrabold text-white">تصميمات شبكية مفرغة أو مصمتة Smooth Top</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Headline & Details */}
          <div className="lg:col-span-6 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>حلول النظافة والكفاءة العالية</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-6">
              توريد البالتات البلاستيك
            </h2>

            <p className="text-zinc-300 font-body text-base sm:text-lg leading-relaxed mb-8">
              بالتات بلاستيك بمقاسات وتصميمات وقدرات تحميل مختلفة حسب احتياجات الاستخدام والتخزين والمناولة.
            </p>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-[#22C55E]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#22C55E] mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{h.title}</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-body leading-relaxed">
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePlasticDetails}
                className="flex items-center gap-2 px-7 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-[#0A0A0A] font-black text-base rounded-xl transition-all shadow-lg shadow-[#22C55E]/20 cursor-pointer"
              >
                <span>استكشف بالتات البلاستيك</span>
                <ArrowLeft className="w-4 h-4 mr-1" />
              </button>

              <button
                onClick={() => onOpenQuoteModal('بالتات بلاستيك')}
                className="flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-xl border border-white/15 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#22C55E]" />
                <span>طلب تسعير بلاستيك</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
