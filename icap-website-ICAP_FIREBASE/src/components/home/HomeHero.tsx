import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../common/ReusableHero';
import Header from '../layout/Header';

const HomeHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Header/Navbar */}
      <Header position="absolute" />
      
      {/* Hero Content */}
      <ReusableHero
        // Content
        title={t('home.title')}
        subtitle={t('home.subtitle')}
        ctaText={t('home.startInvesting')}
        
        // Background
        backgroundType="video"
        backgroundSrc="/images/herobackground.mp4"
        backgroundFallback="/images/hero-background.jpg"
        
        // Layout
        layout="centered"
        
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

export default HomeHero;