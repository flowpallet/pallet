import React from 'react';
import { Sparkles, MessageSquare, ClipboardCheck, Calculator, Box, CheckSquare2, Truck, ArrowLeft } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenQuoteModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      num: '01',
      title: 'أخبرنا بما تحتاج',
      desc: 'أرسل مواصفات البالتة (المقاس، الخامة، الحمولة، الكمية، أو الرسم الهندسي) عبر نموذج التسعير أو واتساب.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'نراجع متطلباتك',
      desc: 'يقوم الفريق الفني بدراسة متطلبات التشغيل والأوزان وملاءمة البالتة مع خطوطك أو مستودعاتك.',
      icon: ClipboardCheck
    },
    {
      num: '03',
      title: 'نقدم عرض السعر',
      desc: 'إرسال عرض سعر رسمي B2B واضح ومفصل يشمل شروط التوريد وجداول التسليم.',
      icon: Calculator
    },
    {
      num: '04',
      title: 'نقوم بالتوريد',
      desc: 'تجهيز وتصنيع الدفعات المطلوبة وفق المواصفات المعتمدة وشهادات المعالجة إن طلبت.',
      icon: Box
    },
    {
      num: '05',
      title: 'مراجعة الجودة',
      desc: 'فحص عينات عشوائية واختبار المتانة والاستواء قبل خروج الشحنة من منشأتنا.',
      icon: CheckSquare2
    },
    {
      num: '06',
      title: 'التوصيل',
      desc: 'شحن وتوصيل البالتات إلى موقع مصنعك أو مخزنك في الموعد المحدد بكل دقة.',
      icon: Truck
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] text-[#F5F5F4] relative overflow-hidden bg-industrial-grid-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>آلية العمل الاحترافية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight mb-4">
            كيف نعمل؟
          </h2>
          <p className="text-zinc-400 font-body text-base sm:text-lg leading-relaxed">
            خطوات بسيطة ومحكمة تضمن لك الحصول على البالتات المناسبة بأعلى كفاءة وسرعة توريد.
          </p>
        </div>

        {/* Timeline Visual Steps Grid with Connecting Logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#141414] border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#22C55E]/40 transition-all duration-300 text-right group"
              >
                {/* Step Number with Industrial Typography */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 group-hover:bg-[#22C55E] group-hover:text-[#0A0A0A] text-[#22C55E] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-brand-en font-black text-3xl sm:text-4xl text-zinc-700 group-hover:text-[#22C55E] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-black font-heading text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                  {step.title}
                </h3>

                <p className="text-zinc-400 font-body text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Progress bar accent */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-zinc-500">
                  <span>المرحلة {idx + 1} من 6</span>
                  <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#22C55E] rounded-full"
                      style={{ width: `${((idx + 1) / 6) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-[#0A0A0A] font-black text-base rounded-xl transition-all shadow-lg shadow-[#22C55E]/20 cursor-pointer"
          >
            <span>ابدأ بالخطوة الأولى — اطلب عرض سعر</span>
            <ArrowLeft className="w-4 h-4 mr-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
