import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import InvestmentBankingDifferent from '../components/investment-banking/InvestmentBankingDifferent';
import InvestmentBankingServices from '../components/investment-banking/InvestmentBankingServices';
import CapitalSolutions from '../components/investment-banking/CapitalSolutions';
import CapitalSolutionsSection from '../components/investment-banking/CapitalSolutionsSection';
import CtaSection from '../components/home/CtaSection';

const InvestmentBanking: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content
        title="investmentBanking.hero.title"
        ctaText={t('investmentBanking.hero.button')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/HeroSlides/investmentbankingHero.png"
        
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
      
      {/* Investment Banking Services Section */}
      <CapitalSolutionsSection />
      <InvestmentBankingServices />
      <CapitalSolutions />
      {/* What Makes Us Different Section */}
      <InvestmentBankingDifferent />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default InvestmentBanking; 