import React, { useState, useEffect } from 'react';
import { Logo, LogoSymbol } from './Logo';
import { 
  X, 
  Sparkles, 
  Layers, 
  Palette, 
  Type, 
  Truck, 
  CreditCard, 
  FileCheck, 
  Flame, 
  Check, 
  Copy, 
  ShieldCheck 
} from 'lucide-react';

interface BrandIdentityShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandIdentityShowcase: React.FC<BrandIdentityShowcaseProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'logos' | 'colors' | 'mockups' | 'typography'>('logos');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const brandColors = [
    { name: 'Deep Charcoal (الأساسي)', hex: '#111417', role: 'الخلفيات الداكنة، الكتل الهيكلية، النصوص الرئيسية', text: 'text-white' },
    { name: 'Forest Green (علامة الثقة والتوريد)', hex: '#1E5631', role: 'لون الهوية المحوري، الأزرار الأساسية، رمزية الحركة والنمو', text: 'text-white' },
    { name: 'Bright Green Accent', hex: '#22C55E', role: 'مؤشرات التدفق والنشاط، الحواف الحية، التباين في الوضع الليلي', text: 'text-black' },
    { name: 'Natural Wood Brown (الخشب الطبيعي)', hex: '#9A6B38', role: 'إشارة مباشرة لخامات البالتات الخشبية، المعالجة، الأختام', text: 'text-white' },
    { name: 'Off-White Industrial (الخلفية والأسطح)', hex: '#F8F9FA', role: 'المساحات السلبية النظيفة، البطاقات، التباين المريح للعين', text: 'text-black' }
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0A0A0A] text-[#F5F5F4] rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-6 text-right"
      >
        
        {/* Header */}
        <div className="p-6 bg-[#141414] text-white flex items-center justify-between border-b border-white/10">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-xs font-black text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-0.5 rounded border border-[#22C55E]/30">
                منظومة الهوية البصرية الرسمية
              </span>
              <h3 className="text-xl font-black font-heading text-white">
                FLOW Brand Identity System
              </h3>
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              توريد موثوق. حلول مرنة. — الدليل البصري المتكامل
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-[#141414] px-6 pt-3 gap-2 overflow-x-auto">
          {[
            { id: 'logos', label: 'إصدارات الشعار (Logo Variations)', icon: Layers },
            { id: 'colors', label: 'لوحة الألوان الرسمية (Color Palette)', icon: Palette },
            { id: 'mockups', label: 'تطبيقات العلامة (Truck, Stamp, Cards)', icon: Truck },
            { id: 'typography', label: 'نظام الخطوط والتايبوغرافي', icon: Type }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'border-[#22C55E] text-[#22C55E] bg-[#0A0A0A] rounded-t-xl shadow-sm'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Container */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto bg-[#0A0A0A]">
          
          {/* TAB 1: LOGO VARIATIONS */}
          {activeTab === 'logos' && (
            <div className="space-y-8">
              <div className="text-right">
                <h4 className="text-lg font-black font-heading text-white">
                  حزم وإصدارات شعار FLOW المعتمدة
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-body mt-1">
                  رمز هندسي متميز يجمع بين هيكل ألواح البالتات الخشبية، متانة عوارض الرافعات، وسهم التدفق والحركة اللوجستية الانسيابية.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Horizontal Dark on Light */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col justify-between">
                  <div className="text-xs font-bold text-zinc-400 mb-4">1. الشعار الأفقي الرئيسي (Light Background)</div>
                  <div className="py-8 flex justify-center items-center bg-white rounded-xl border border-zinc-200">
                    <Logo variant="horizontal" theme="light" size="lg" showTagline />
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-3 text-right">
                    الاستخدام: الموقع الإلكتروني، المراسلات الرسمية، العروض التقديمية، الفواتير.
                  </div>
                </div>

                {/* 2. Horizontal Light on Dark */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 text-white flex flex-col justify-between">
                  <div className="text-xs font-bold text-zinc-400 mb-4">2. الشعار الأفقي على خلفيات داكنة (Dark Background)</div>
                  <div className="py-8 flex justify-center items-center bg-[#0A0A0A] rounded-xl border border-white/10">
                    <Logo variant="horizontal" theme="dark" size="lg" showTagline />
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-3 text-right">
                    الاستخدام: واجهات المعارض، لافتات المخازن، الهيدر الداكن، شاحنات التوريد.
                  </div>
                </div>

                {/* 3. Stacked / Vertical Logo */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col justify-between">
                  <div className="text-xs font-bold text-zinc-400 mb-4">3. الشعار الرأسي المكدس (Stacked Emblem)</div>
                  <div className="py-6 flex justify-center items-center bg-white rounded-xl border border-zinc-200">
                    <Logo variant="stacked" theme="light" size="md" showTagline />
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-3 text-right">
                    الاستخدام: بروفايل واتساب للأعمال، كروت العمل المربعة، ملصقات البالتات، الأكياس الصناعية.
                  </div>
                </div>

                {/* 4. Icon-Only Symbol & Favicon */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col justify-between">
                  <div className="text-xs font-bold text-zinc-400 mb-4">4. الرمز الهندسي المستقل (Independent Brand Mark & Favicon)</div>
                  <div className="py-6 flex justify-center items-center gap-6 bg-[#0A0A0A] rounded-xl border border-white/10">
                    <div className="p-3 bg-white rounded-2xl">
                      <LogoSymbol size={48} theme="light" />
                    </div>
                    <div className="h-12 w-[1px] bg-white/10"></div>
                    <div className="p-3 bg-[#141414] rounded-2xl border border-white/10">
                      <LogoSymbol size={48} theme="dark" />
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-3 text-right">
                    الاستخدام: أيقونة المتصفح، أختام الحرق على الخشب، أزرار التطبيقات، شارات الزي الموحد.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: COLOR PALETTE */}
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="text-right">
                <h4 className="text-lg font-black font-heading text-white">
                  لوحة الألوان الرسمية (Brand Palette)
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-body mt-1">
                  تناغم صناعي يدمج هيبة الفحم الداكن، موثوقية الأخضر الطبيعي، ولمسة الخشب الدافئ.
                </p>
              </div>

              <div className="space-y-4">
                {brandColors.map((col) => (
                  <div
                    key={col.hex}
                    className="p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141414]"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl shadow-md shrink-0 border border-white/10 flex items-center justify-center"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div className="text-right">
                        <div className="text-sm font-extrabold text-white">{col.name}</div>
                        <div className="text-xs text-zinc-400 font-body mt-0.5">{col.role}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(col.hex)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono font-bold text-white transition-colors cursor-pointer border border-white/10"
                    >
                      {copiedColor === col.hex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                          <span>تم النسخ!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{col.hex}</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REAL-WORLD MOCKUPS */}
          {activeTab === 'mockups' && (
            <div className="space-y-8">
              <div className="text-right">
                <h4 className="text-lg font-black font-heading text-white">
                  تطبيقات الهوية في البيئة الصناعية والتشغيلية
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-body mt-1">
                  محاكاة حقيقية لكيفية ظهور العلامة التجارية على الشاحنات، البالتات، كروت العمل، والفواتير.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Delivery Truck Livery Mockup */}
                <div className="p-6 rounded-2xl bg-[#141414] text-white border border-white/10">
                  <div className="text-xs font-bold text-[#22C55E] mb-3 flex items-center gap-1.5">
                    <Truck className="w-4 h-4" />
                    <span>كسوة شاحنات التوريد (Fleet & Trucks)</span>
                  </div>
                  <div className="h-44 rounded-xl bg-gradient-to-r from-[#0A0A0A] via-zinc-900 to-[#0A0A0A] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-full bg-[#22C55E]/30 opacity-80 -skew-x-12 transform origin-top-right" />
                    <div className="relative z-10">
                      <Logo variant="horizontal" theme="dark" size="sm" showTagline />
                    </div>
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-300 font-bold border-t border-white/10 pt-2">
                      <span>توريد موثوق لكافة المدن الصناعية</span>
                      <span className="text-[#22C55E]">FLOW LOGISTICS</span>
                    </div>
                  </div>
                </div>

                {/* 2. Hot-Stamp Pallet Branding Simulation */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-[#D97706]/30">
                  <div className="text-xs font-bold text-[#F59E0B] mb-3 flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    <span>ختم الحرق على خشب البالتة (Wood Burn Stamp)</span>
                  </div>
                  <div className="h-44 rounded-xl bg-[#2A1E14] border-2 border-dashed border-[#D97706]/50 p-6 flex flex-col items-center justify-center text-center">
                    <div className="p-3 border-2 border-[#D97706] rounded-lg rotate-[-2deg] opacity-90">
                      <div className="font-brand-en font-black text-2xl text-[#F59E0B] tracking-wider">
                        FLOW-PALLET
                      </div>
                      <div className="text-[10px] font-mono text-[#FCD34D] font-bold mt-0.5">
                        EG - 0422 / HT - ISPM 15
                      </div>
                    </div>
                    <div className="text-[11px] text-[#FBBF24] font-bold mt-2">
                      ختم حراري دائم ومقاوم للعوامل الجوية
                    </div>
                  </div>
                </div>

                {/* 3. Executive Business Card Mockup */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/10">
                  <div className="text-xs font-bold text-zinc-300 mb-3 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#22C55E]" />
                    <span>كارت العمل المؤسسي (Corporate Business Card)</span>
                  </div>
                  <div className="h-44 rounded-xl bg-[#0A0A0A] text-white p-6 flex flex-col justify-between shadow-xl border border-white/10">
                    <div className="flex justify-between items-start">
                      <Logo variant="horizontal" theme="dark" size="sm" />
                      <span className="text-[10px] text-[#F59E0B] font-bold">B2B SUPPLY</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">إدارة المبيعات والتعاقدات</div>
                      <div className="text-xs text-[#22C55E] font-mono" dir="ltr">01556913037 • sales@flow-pallets.com</div>
                    </div>
                  </div>
                </div>

                {/* 4. Corporate Invoice & Quotation Sheet */}
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/10">
                  <div className="text-xs font-bold text-zinc-300 mb-3 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#22C55E]" />
                    <span>نموذج عرض السعر والفاتورة (Quotation Header)</span>
                  </div>
                  <div className="h-44 rounded-xl bg-[#0A0A0A] border border-white/10 p-4 flex flex-col justify-between shadow-sm text-white">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <Logo variant="horizontal" theme="dark" size="sm" />
                      <div className="text-right">
                        <div className="text-[11px] font-bold text-[#22C55E]">عرض سعر توريد B2B</div>
                        <div className="text-[9px] text-zinc-400">REF: FLW-2026-901</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-zinc-300 bg-[#141414] p-2 rounded border border-white/5">
                      <div>الكمية: 1,000 بالتة</div>
                      <div>المقاس: 100×120 سم</div>
                      <div>المعالجة: ISPM 15</div>
                    </div>
                    <div className="text-[9px] text-zinc-500 text-left border-t border-white/10 pt-1">
                      FLOW For Pallet Solutions & Industrial Supply
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="text-right">
                <h4 className="text-lg font-black font-heading text-white">
                  النظام الطباعي والخطوط (Typography System)
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-body mt-1">
                  اعتماد خط **Cairo** للعناوين الرئيسية و **Tajawal** للنصوص التفسيرية، مع **Syne** اللاتيني الهندسي لكلمة FLOW.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 text-right">
                  <div className="text-xs font-bold text-[#22C55E] mb-1">العناوين الرئيسية (Headlines & Titles)</div>
                  <div className="font-heading font-black text-2xl text-white">
                    Cairo Font — خط كايرو العربي الحديث
                  </div>
                  <div className="text-xs text-zinc-400 font-body mt-1">
                    أوزان مستخدمة: Black (900) و Bold (700) لقوة الحضور والوضوح الصناعي.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 text-right">
                  <div className="text-xs font-bold text-[#22C55E] mb-1">النصوص والقراءة (Body & Descriptions)</div>
                  <div className="font-body font-normal text-base text-zinc-300 leading-relaxed">
                    Tajawal Font — خط تجوال المتزن للقراءة السلسة والمواصفات الفنية الدقيقة.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#141414] text-white border border-white/10 text-right">
                  <div className="text-xs font-bold text-[#22C55E] mb-1">الاسم التجاري اللاتيني (Brand English Display)</div>
                  <div className="font-brand-en font-black text-3xl tracking-tight text-white">
                    FLOW INDUSTRIAL PALLET SOLUTIONS
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141414] border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white/10 hover:bg-[#22C55E] hover:text-[#0A0A0A] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer border border-white/10"
          >
            إغلاق الدليل البصري
          </button>
        </div>

      </div>
    </div>
  );
};
