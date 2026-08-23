import React from 'react';
import { MessageSquare, PhoneCall, Grid } from 'lucide-react';

interface MobileActionBarProps {
  onExploreProducts: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onExploreProducts }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-white/15 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201556913037?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20FLOW%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%A8%D8%A7%D9%84%D8%AA%D8%A7%D8%AA%20FLOW"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-center"
        >
          <MessageSquare className="w-4 h-4 text-[#22C55E] mb-0.5" />
          <span className="text-[11px] font-bold">واتساب</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+201556913037"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-center"
          title="اتصال مباشر 01556913037"
        >
          <PhoneCall className="w-4 h-4 text-[#F59E0B] mb-0.5" />
          <span className="text-[11px] font-bold">اتصال</span>
        </a>

        {/* Explore Products Gallery */}
        <button
          onClick={onExploreProducts}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#22C55E] text-[#0A0A0A] hover:bg-[#16A34A] transition-colors text-center shadow-lg shadow-[#22C55E]/20 font-black cursor-pointer"
        >
          <Grid className="w-4 h-4 text-[#0A0A0A] mb-0.5" />
          <span className="text-[11px] font-black">معرض المنتجات</span>
        </button>

      </div>
    </div>
  );
};
