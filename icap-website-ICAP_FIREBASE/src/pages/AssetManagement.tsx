import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import InvestmentOpportunities from '../components/asset-management/InvestmentOpportunities';
import InvestmentStrategy from '../components/asset-management/InvestmentStrategy';
import GridLayoutDemo from '../components/testing/GridLayoutDemo';
import Testing from '../components/testing/Testing';
import CtaSection from '../components/home/CtaSection';

const AssetManagement: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content
        title="assetManagement.hero.title"
        subtitle="assetManagement.hero.subtitle"
        ctaText={t('assetManagement.hero.button')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/HeroSlides/AssetMangHero.jpg"
        
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
      
      {/* Investment Opportunities Section */}
      <InvestmentOpportunities />
      
      {/* Investment Strategy Section */}
      <InvestmentStrategy />
      
      {/* Grid Layout Demo Section */}
      <GridLayoutDemo />
      
      {/* Testing Section */}
      <Testing />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default AssetManagement; 