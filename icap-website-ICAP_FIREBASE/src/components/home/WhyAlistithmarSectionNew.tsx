import React from 'react';
import { FeatureSection, FeatureItem } from '../ui/FeatureSection';

const WhyAlistithmarSectionNew: React.FC = () => {
  // Define the feature items
  const featureItems: FeatureItem[] = [
    {
      id: 'secure',
      icon: '/images/why-arrow.webm',
      title: 'whyAlistithmar.secureTitle',
      description: 'whyAlistithmar.secureDescription',
      alt: 'Secure & Trusted'
    },
    {
      id: 'sharia',
      icon: '/images/why-invest.webm',
      title: 'whyAlistithmar.shariaTitle',
      description: 'whyAlistithmar.shariaDescription',
      alt: 'Shariah-Compliant Options'
    },
    {
      id: 'global',
      icon: '/images/why-circle.webm',
      title: 'whyAlistithmar.globalTitle',
      description: 'whyAlistithmar.globalDescription',
      alt: 'Global Reach, Local Roots'
    }
  ];

  return (
    <FeatureSection
      title="whyAlistithmar.title"
      subtitle="whyAlistithmar.subtitle"
      items={featureItems}
      variant="three-items"
      titleHighlight="Why"
      titleHighlightColor="#F3B660"
      backgroundImage="/images/darkbackground.png"
    />
  );
};

export default WhyAlistithmarSectionNew;
