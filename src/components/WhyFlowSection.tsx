import React from 'react';
import { Sparkles, RotateCcw, ShieldCheck, BadgePercent, Truck } from 'lucide-react';

export const WhyFlowSection: React.FC = () => {
  const pillars = [
    {
      id: 'flexibility',
      title: 'مرونة في الكميات والمواصفات',
      desc: 'إمكانية توفير كميات كبيرة ومستمرة أو دفعات متغيرة حسب خطة إنتاجك مع خيارات جديد ومستعمل.',
      icon: RotateCcw,
      badge: 'مرونة تشغيلية'
    },
    {
      id: 'reliability',
      title: 'جاهزية توريد والتزام بالمواعيد',
      desc: 'مخزون استراتيجي دائم وجداول تسليم منضبطة لتفادي أي توقف في مستودعاتك وخطوط شحنك.',
      icon: ShieldCheck,
      badge: 'التزام كامل'
    },
    {
      id: 'pricing',
      title: 'تسعير مباشر وتنافسي B2B',
      desc: 'أسعار جملة وعقود سنوية عادلة تساعدك على ضبط تكاليف سلاسل الإمداد والتعبئة والتغليف.',
      icon: BadgePercent,
      badge: 'عقود B2B'
    },
    {
      id: 'delivery',
      title: 'شحن وتوصيل لكافة المدن الصناعية',
      desc: 'أسطول نقل يغطي العاشر من رمضان، 6 أكتوبر، السادات، برج العرب، وباقي المحافظات.',
      icon: Truck,
      badge: 'تغطية شاملة'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#08090A] relative overflow-hidden border-t border-white/10 text-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-bold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مزايا التعاقد</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
            لماذا تختار FLOW لتوريد البالتات؟
          </h2>
          <p className="text-zinc-400 font-body text-xs sm:text-sm mt-1">
            منظومة توريد مصممة خصيصاً لتلبية متطلبات المصانع والشركات بكفاءة.
          </p>
        </div>

        {/* 4 Clean Industrial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#12151A] border border-white/10 hover:border-[#22C55E]/40 transition-all duration-300 text-right flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 text-[#22C55E] flex items-center justify-center border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-black font-heading text-white mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-bold text-zinc-500 font-mono">
                  <span>B2B STANDARD</span>
                  <span className="text-[#22C55E]">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
