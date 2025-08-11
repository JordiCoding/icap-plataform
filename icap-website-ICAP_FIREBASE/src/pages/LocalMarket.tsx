import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import LocalMarketsSection from '../components/local-market/LocalMarketsSection';
import LocalInvestmentProducts from '../components/local-market/LocalInvestmentProducts';
import TradingTools from '../components/local-market/TradingTools';
import CtaSection from '../components/home/CtaSection';

const LocalMarket: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content
        title="localMarket.hero.title"
        subtitle="localMarket.hero.subtitle"
        ctaText={t('localMarket.hero.button')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/HeroSlides/LocalHero.jpg"
        
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
      
      {/* Local Markets Section */}
      <LocalMarketsSection />
      
      {/* Local Investment Products Section */}
      <LocalInvestmentProducts />
      
      {/* Trading Tools Section */}
      <TradingTools />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default LocalMarket; 