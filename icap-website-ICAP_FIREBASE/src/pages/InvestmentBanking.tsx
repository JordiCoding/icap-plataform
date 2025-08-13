import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import InvestmentBankingServices from '../components/investment-banking/InvestmentBankingServices';
import InvestmentBankingDifferent from '../components/investment-banking/InvestmentBankingDifferent';
import CapitalSolutionsSection from '../components/investment-banking/CapitalSolutionsSection';
import InvestmentBankingClientsSection from '../components/investment-banking/InvestmentBankingClientsSection';
import CtaSection from '../components/home/CtaSection';
import GridLayoutDemo from '../components/testing/GridLayoutDemo';
import LeadCaptureSection from '../components/layout/LeadCaptureSection';

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
      <InvestmentBankingServices />
      {/* Investment Banking Different Section */}
      <InvestmentBankingDifferent />
      {/* Capital Solutions Section */}
      <CapitalSolutionsSection />
      {/* Clients Who Trust Us Section */}
      <InvestmentBankingClientsSection />
      
  
      {/* Lead Capture Section */}
      <LeadCaptureSection />
      
 
  
    </div>
  );
};

export default InvestmentBanking; 