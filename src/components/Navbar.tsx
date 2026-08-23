import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowLeft, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBrandKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'about', label: 'عن FLOW' },
    { id: 'products', label: 'معرض المنتجات' },
    { id: 'custom-pallets', label: 'مواصفات خاصة' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090C]/95 backdrop-blur-md text-white py-3.5 border-b border-white/10 shadow-lg'
            : 'bg-transparent text-white py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo on Right (in RTL) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center text-right focus:outline-none cursor-pointer"
            aria-label="FLOW Home"
          >
            <Logo variant="horizontal" theme="dark" size="sm" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#22C55E] bg-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action on Left: Direct Phone / Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+201556913037"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-extrabold text-[#08090A] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>01556913037</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:+201556913037"
              className="px-3 py-1.5 text-xs font-black bg-[#22C55E] text-[#08090A] rounded-lg"
            >
              اتصال
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl sm:hidden flex flex-col p-6 text-right animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
              <X className="w-6 h-6" />
            </button>
            <Logo variant="horizontal" theme="dark" size="sm" />
          </div>

          <div className="flex flex-col gap-4 py-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`py-3 text-lg font-bold text-right transition-colors ${
                  activeSection === link.id ? 'text-[#22C55E]' : 'text-zinc-200 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
            <a
              href="https://wa.me/201556913037"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#22C55E] text-[#08090A] font-black rounded-xl text-center block text-sm"
            >
              مراسلة واتساب
            </a>
          </div>
        </div>
      )}
    </>
  );
};
