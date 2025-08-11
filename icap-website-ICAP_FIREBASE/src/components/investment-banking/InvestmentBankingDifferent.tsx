import React from 'react';
import FeatureSection from '../ui/FeatureSection';
import type { FeatureItem } from '../ui/FeatureSection';

const InvestmentBankingDifferent: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'strategic-alignment',
      icon: '/images/icons/banking1.png',
      title: 'investmentBankingDifferent.feature1.title',
      description: 'investmentBankingDifferent.feature1.description',
      alt: 'Strategic Alignment'
    },
    {
      id: 'analytical-depth',
      icon: '/images/icons/banking2.png',
      title: 'investmentBankingDifferent.feature2.title',
      description: 'investmentBankingDifferent.feature2.description',
      alt: 'Analytical Depth'
    },
    {
      id: 'execution-precision',
      icon: '/images/icons/banking3.png',
      title: 'investmentBankingDifferent.feature3.title',
      description: 'investmentBankingDifferent.feature3.description',
      alt: 'Execution with Precision'
    }
  ];

  return (
    <FeatureSection
      title="investmentBankingDifferent.title"
      items={features}
      variant="three-items"
      titleHighlight="Different"
      titleHighlightColor="#EECA60"
      backgroundImage="/images/darkbackground.png"
    />
  );
};

export default InvestmentBankingDifferent;
