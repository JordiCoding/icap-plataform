import React from 'react';
import FeatureSection from '../ui/FeatureSection';
import type { FeatureItem } from '../ui/FeatureSection';

const MarginLendingFeatures: React.FC = () => {
  // Define the margin lending features
  const marginLendingItems: FeatureItem[] = [
    {
      id: 'realtime-buying-power',
      icon: '/images/icons/margin1.png',
      title: 'marginLending.marginLendingFeatures.feature1.title',
      description: 'marginLending.marginLendingFeatures.feature1.description',
      alt: 'Real-time buying power'
    },
    {
      id: 'seamless-margin-access',
      icon: '/images/icons/margin2.png',
      title: 'marginLending.marginLendingFeatures.feature2.title',
      description: 'marginLending.marginLendingFeatures.feature2.description',
      alt: 'Seamless Margin Access'
    },
    {
      id: 'built-in-compliance',
      icon: '/images/icons/margin3.png',
      title: 'marginLending.marginLendingFeatures.feature3.title',
      description: 'marginLending.marginLendingFeatures.feature3.description',
      alt: 'Built-In Compliance'
    }
  ];

  return (
    <FeatureSection
      title="marginLending.marginLendingFeatures.title"
      subtitle="marginLending.marginLendingFeatures.subtitle"
      items={marginLendingItems}
      variant="three-items"
      titleHighlight="Margin Lending"
      titleHighlightColor="#F3B660"
      backgroundImage="/images/darkbackground.png"
    />
  );
};

export default MarginLendingFeatures;
