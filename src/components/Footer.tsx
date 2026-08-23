import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductItem } from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenBrandKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectProduct
}) => {
  return (
    <footer className="bg-[#0A0D12] text-[#F5F5F4] pt-14 pb-24 sm:pb-12 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-zinc-800/80 text-right">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Logo variant="horizontal" theme="dark" size="md" showTagline />
            
            <p className="text-zinc-400 font-body text-xs sm:text-sm leading-relaxed max-w-sm">
              معرض وتوريد البالتات الخشبية والبلاستيكية ومواصفات التخزين والنقل والتوريد الصناعي لكافة أنحاء الجمهورية.
            </p>

            <div className="pt-1">
              <a
                href="https://wa.me/201556913037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-zinc-300 border border-white/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>واتساب مباشر للاستفسارات</span>
              </a>
            </div>
          </div>

          {/* Col 2: Products Showcase (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold font-heading text-white">
              معرض المنتجات
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-body">
              {PRODUCTS_DATA.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProduct(p)}
                    className="hover:text-[#22C55E] transition-colors cursor-pointer text-right block"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold font-heading text-white">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-body">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors cursor-pointer">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  عن FLOW
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer">
                  معرض المنتجات
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom-pallets')} className="hover:text-white transition-colors cursor-pointer">
                  مواصفات خاصة
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold font-heading text-white">
              بيانات التواصل
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400 font-body">
              <a href="tel:+201556913037" className="flex items-center gap-2 hover:text-[#22C55E] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span dir="ltr">01556913037</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>info@flow-pallets.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>جمهورية مصر العربية — تغطية شاملة</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} FLOW Industrial Pallets. جميع الحقوق محفوظة.
          </div>
          <div className="text-zinc-500">
            توريد موثوق. حلول مرنة.
          </div>
        </div>

      </div>
    </footer>
  );
};
