import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import MarginLendingUnlockSection from '../components/margin-lending/MarginLendingUnlockSection';
import MurabahaFinancing from '../components/margin-lending/MurabahaFinancing';
import MarginLendingFeatures from '../components/margin-lending/MarginLendingFeatures';
import CtaSection from '../components/home/CtaSection';
import MarginOverdraftSection from '../components/margin-lending/MarginOverdraftSection';

const MarginLending: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content
        title="marginLending.hero.title"
        subtitle="marginLending.hero.subtitle"
        ctaText={t('marginLending.hero.button')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/HeroSlides/marginHero.jpg"
        
        // Layout
        layout="left-aligned"
        
        // Styling
        overlay={true}
        overlayOpacity={0.3}
        
        // Animation
        enableAnimations={true}
        
        // RTL
        enableRTLFlip={true}
        
        // Typography
        titleTypography="header-title"
        subtitleTypography="header-subtitle"
        
        // Breadcrumbs
        showBreadcrumbs={true}
      />
      
      {/* Unlock More with Less Barriers Section */}
      <MarginLendingUnlockSection />
      <MarginOverdraftSection />
      
      {/* Murabaha Financing Section */}
      <MurabahaFinancing />
      
      {/* Margin Lending Features Section */}
      <MarginLendingFeatures />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default MarginLending; 