import React from 'react';
import FeatureSection from '../ui/FeatureSection';
import type { FeatureItem } from '../ui/FeatureSection';

const GlobalSecurities: React.FC = () => {
  // Define the global securities features
  const globalSecuritiesItems: FeatureItem[] = [
    {
      id: 'stocks',
      icon: '/images/icons/international1.png',
      title: 'internationalMarkets.globalSecurities.feature1.title',
      description: 'internationalMarkets.globalSecurities.feature1.description',
      alt: 'Stocks'
    },
    {
      id: 'etfs',
      icon: '/images/icons/international2.png',
      title: 'internationalMarkets.globalSecurities.feature2.title',
      description: 'internationalMarkets.globalSecurities.feature2.description',
      alt: 'ETFs'
    },
    {
      id: 'bonds',
      icon: '/images/icons/international3.png',
      title: 'internationalMarkets.globalSecurities.feature3.title',
      description: 'internationalMarkets.globalSecurities.feature3.description',
      alt: 'Bonds'
    },
    {
      id: 'options',
      icon: '/images/icons/international4.png',
      title: 'internationalMarkets.globalSecurities.feature4.title',
      description: 'internationalMarkets.globalSecurities.feature4.description',
      alt: 'Options'
    }
  ];

  return (
    <FeatureSection
      title="internationalMarkets.globalSecurities.title"
      subtitle="internationalMarkets.globalSecurities.subtitle"
      items={globalSecuritiesItems}
      variant="four-items"
      titleHighlight="Global Securities"
      titleHighlightColor="#EECA60"
      backgroundImage="/images/darkbackground.png"
    />
  );
};

export default GlobalSecurities;

