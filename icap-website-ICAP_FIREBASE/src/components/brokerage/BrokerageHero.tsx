import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../common/ReusableHero';
import Header from '../layout/Header';

const BrokerageHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Header/Navbar */}
      <Header position="absolute" />
      
      {/* Hero Content */}
      <ReusableHero
        // Content
        title={t('brokerageHero.title')}
        subtitle={t('brokerageHero.subtitle')}
        ctaText={t('brokerageHero.button')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/brokeragebackground.png"
        
        // Layout
        layout="left-aligned"
        
        // Styling
        overlay={true}
        overlayOpacity={0.3}
        
        // Animation
        enableAnimations={true}
        
        // RTL
        enableRTLFlip={true}
        
        // Typography - Using the new header typography
        titleTypography="header-title"
        subtitleTypography="header-subtitle"
      />
    </div>
  );
};

export default BrokerageHero; 