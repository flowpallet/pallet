import React, { useEffect } from 'react';
import { ProductItem } from '../types';
import { 
  X, 
  CheckCircle2, 
  Ruler, 
  Scale, 
  Flame, 
  Building2, 
  MessageSquare,
  Phone
} from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose
}) => {
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#0A0A0A] text-[#F5F5F4] rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-8 text-right"
      >
        
        {/* Modal Top Banner with Product Photography */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#111417]">
          <img
            src={product.heroImage || product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Badges & Title in Banner */}
          <div className="absolute bottom-6 right-6 left-6 text-right text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-bold rounded-md bg-[#22C55E] text-[#0A0A0A]">
                {product.material === 'wood' ? 'خشب طبيعي' : product.material === 'plastic' ? 'بلاستيك HDPE' : product.material === 'compressed_wood' ? 'مواد مضغوطة' : 'هندسي مخصص'}
              </span>
              {product.heatTreatmentAvailable && (
                <span className="px-3 py-1 text-xs font-bold rounded-md bg-[#D97706] text-[#0A0A0A]">
                  معالجة حرارية ISPM 15 متاحة
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white leading-tight">
              {product.title}
            </h2>
            <div className="text-xs sm:text-sm text-zinc-300 font-brand-en tracking-wider mt-1">
              {product.titleEn}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto bg-[#0A0A0A]">
          
          {/* Overview & Full Description */}
          <div>
            <h3 className="text-lg font-black font-heading text-white mb-3">
              نظرة عامة على المنتج
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-body leading-relaxed">
              {product.fullDescription || product.description}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div>
            <h3 className="text-lg font-black font-heading text-white mb-4">
              المواصفات الفنية
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              
              <div className="p-4 rounded-xl bg-[#141414] border border-white/10">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                  <Ruler className="w-4 h-4 text-[#22C55E]" />
                  <span>المقاس القياسي</span>
                </div>
                <div className="text-sm font-black text-white">{product.dimensions}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/10">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                  <Scale className="w-4 h-4 text-[#22C55E]" />
                  <span>الحمولة الديناميكية</span>
                </div>
                <div className="text-sm font-black text-white">{product.dynamicLoad}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/10">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                  <Building2 className="w-4 h-4 text-[#22C55E]" />
                  <span>الحمولة الساكنة</span>
                </div>
                <div className="text-sm font-black text-white">{product.staticLoad}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/10">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                  <Flame className="w-4 h-4 text-[#22C55E]" />
                  <span>دخول الشوكات</span>
                </div>
                <div className="text-sm font-black text-white">{product.entryType === '4-way' ? '4 اتجاهات (4-Way)' : 'اتجاهين (2-Way)'}</div>
              </div>

            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 className="text-lg font-black font-heading text-white mb-3">
              مميزات التوريد والهيكل
            </h3>
            <div className="space-y-2">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#141414] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-zinc-200 font-body">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Dimensions & Uses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2">المقاسات المتاحة:</h4>
              <div className="flex flex-wrap gap-2">
                {product.standardSizes.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 text-zinc-200 rounded-lg text-xs font-bold border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2">الاستخدامات المثالية:</h4>
              <div className="flex flex-wrap gap-2">
                {product.idealFor.map((use, i) => (
                  <span key={i} className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] rounded-lg text-xs font-bold border border-[#22C55E]/20">
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Contact Options */}
        <div className="p-6 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/201556913037?text=${encodeURIComponent(`مرحباً FLOW، أستفسر عن ${product.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#08090A] font-black text-sm rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استفسار واتساب عن المنتج</span>
            </a>
            
            <a
              href="tel:+201556913037"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold text-sm rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>اتصال</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            إغلاق المعاينة
          </button>
        </div>

      </div>
    </div>
  );
};
