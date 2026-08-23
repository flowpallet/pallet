import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { FeaturedPalletsCompare } from './components/FeaturedPalletsCompare';
import { CustomPalletsSection } from './components/CustomPalletsSection';
import { ContactShowcaseSection } from './components/ContactShowcaseSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BrandIdentityShowcase } from './components/BrandIdentityShowcase';
import { ProductItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isBrandKitOpen, setIsBrandKitOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#0F172A] font-['Cairo',sans-serif] selection:bg-[#22C55E] selection:text-[#08090A] relative antialiased">
      
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBrandKit={() => setIsBrandKitOpen(true)}
      />

      <main className="pb-12 sm:pb-0">
        {/* 1. HERO SECTION */}
        <HeroSection
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* 2. TRUST / CAPABILITIES STRIP (5 Items Bar) */}
        <TrustStrip />

        {/* 3. ABOUT FLOW (Split Layout) */}
        <AboutSection
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* 4. PRODUCTS GRID (6 Modern Photographic Cards) */}
        <ProductsSection
          onSelectProduct={handleSelectProduct}
        />

        {/* 5. FEATURED PALLETS COMPARISON (Plastic vs Wooden) */}
        <FeaturedPalletsCompare
          onSelectProduct={handleSelectProduct}
        />

        {/* 6. CUSTOM PALLETS (مواصفاتك. حلنا.) */}
        <CustomPalletsSection
          onSelectProduct={handleSelectProduct}
        />

        {/* 7. CONTACT & INQUIRIES SHOWCASE BANNER */}
        <ContactShowcaseSection />
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onSelectProduct={handleSelectProduct}
        onOpenBrandKit={() => setIsBrandKitOpen(true)}
      />

      {/* MOBILE ACTION BAR */}
      <MobileActionBar
        onExploreProducts={() => handleNavigate('products')}
      />

      {/* MODALS */}
      {/* 1. Product Detail Modal (Exhibition Viewer) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* 2. Brand Identity Showcase Modal */}
      <BrandIdentityShowcase
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />

    </div>
  );
}
