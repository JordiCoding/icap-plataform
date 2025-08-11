import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import InternationalUSSection from '../components/international-markets/InternationalUSSection';
import GCCRegional from '../components/international-markets/GCCRegional';
import TradeGlobalMarkets from '../components/international-markets/TradeGlobalMarkets';
import GlobalSecurities from '../components/international-markets/GlobalSecurities';
import CtaSection from '../components/home/CtaSection';

const InternationalMarkets: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content
        title="internationalMarkets.hero.title"
        subtitle="internationalMarkets.hero.subtitle"
        ctaText={t('internationalMarkets.hero.primaryButton')}
        secondaryCtaText={t('internationalMarkets.hero.secondaryButton')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/HeroSlides/interhero.jpg"
        
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
      
      {/* Trading US Stocks Section */}
      <InternationalUSSection />
      
      {/* GCC Regional Section */}
      <GCCRegional />

      {/* Global Securities Section */}
      <GlobalSecurities />
      
      {/* Trade Global Markets Section */}
      <TradeGlobalMarkets />
      

      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default InternationalMarkets; 