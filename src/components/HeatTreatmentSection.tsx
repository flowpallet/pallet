import React from 'react';
import { Flame, ShieldCheck, Globe2, FileCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import heatTreatmentImg from '../assets/images/wooden_block_pallet_1787260425757.jpg';

interface HeatTreatmentSectionProps {
  onOpenQuoteModal: (context?: string) => void;
}

export const HeatTreatmentSection: React.FC<HeatTreatmentSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="heat-treatment" className="py-20 lg:py-28 bg-[#0A0A0A] text-[#F5F5F4] relative overflow-hidden bg-industrial-grid-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: High Quality Wooden Pallet / Export Stamp Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={heatTreatmentImg}
                alt="FLOW Wooden Pallets with Heat Treatment ISPM 15 Stamp"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

              {/* Heat Treatment Stamp Mockup Badge */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-xl bg-[#141414]/95 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-2xl">
                <div className="text-right">
                  <div className="text-xs font-mono text-[#22C55E]">HT / ISPM 15 COMPLIANT</div>
                  <div className="text-sm font-bold text-white">معالجة حرارية للأخشاب المعدة للتصدير</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#D97706] flex items-center justify-center shrink-0 shadow-sm">
                  <Flame className="w-5 h-5 text-[#0A0A0A]" />
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Clear, Accurate Informational Content */}
          <div className="lg:col-span-6 text-right">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#D97706]/15 border border-[#D97706]/30 text-[#F59E0B] text-xs font-black mb-4">
              <Flame className="w-4 h-4 text-[#F59E0B]" />
              <span>اشتراطات التصدير والشحن الدولي</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-6">
              المعالجة الحرارية HT
            </h2>

            <div className="p-4 rounded-xl bg-[#141414] border border-white/10 mb-6 shadow-sm">
              <p className="text-base sm:text-lg font-bold text-[#22C55E] font-heading leading-relaxed">
                يمكن توفير البالتات التي تتطلب معالجة حرارية حسب توافر الخدمة لدى جهة التوريد أو التصنيع.
              </p>
            </div>

            <p className="text-zinc-300 font-body text-base leading-relaxed mb-6">
              تعد المعالجة الحرارية (Heat Treatment - HT) وفق المعيار الدولي لتدابير الصحة النباتية (ISPM 15) شرطاً أساسياً لقبول شحنات التصدير الخشبية في الموانئ والجمارك الدولية في الاتحاد الأوروبي، أمريكا الشمالية، ومختلف دول العالم.
            </p>

            {/* Key Information Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">القضاء على الآفات الحشرية</div>
                  <div className="text-xs text-zinc-400 font-body">تسخين لب الخشب لدرجة حرارة 56° مئوية لمدة لا تقل عن 30 دقيقة داخل أفران مخصصة.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">تسهيل التخليص الجمركي للشاحنات والحاويات</div>
                  <div className="text-xs text-zinc-400 font-body">تفادي غرامات الحجر الزراعي أو رفض دخول الحاويات في موانئ الوصول.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">بدائل معفاة (بالتات البلاستيك والمواد المضغوطة)</div>
                  <div className="text-xs text-zinc-400 font-body">نوفر أيضاً بالتات دكمة تبن مضغوطة وبالتات بلاستيك معفاة بطبيعتها من شهادات التبخير.</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('بالتات معالجة حرارياً للتصدير')}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#0A0A0A] font-black text-sm rounded-xl transition-all shadow-md cursor-pointer shadow-[#22C55E]/20"
              >
                <span>طلب بالتات بمعالجة حرارية HT</span>
                <ArrowLeft className="w-4 h-4 mr-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
