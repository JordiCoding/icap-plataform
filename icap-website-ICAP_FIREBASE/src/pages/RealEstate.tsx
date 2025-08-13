import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import TailoredFunds from '../components/real-estate/TailoredFunds';
import RealEstateStrategySection from '../components/real-estate/RealEstateStrategySection';
import CtaSection from '../components/home/CtaSection';

const RealEstate: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content
        title="realEstate.hero.title"
        ctaText={t('realEstate.hero.button')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/HeroSlides/realstateHero.png"
        
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
        
        // Breadcrumbs
        showBreadcrumbs={true}
      />
      
      {/* Tailored Funds Section */}
      <TailoredFunds />
      
      {/* Strategy Section */}
      <RealEstateStrategySection />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default RealEstate; 