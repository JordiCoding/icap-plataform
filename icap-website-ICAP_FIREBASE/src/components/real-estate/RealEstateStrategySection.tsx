import React from 'react';
import FeatureSection from '../ui/FeatureSection';

const RealEstateStrategySection: React.FC = () => {
  return (
    <FeatureSection
      variant="slider"
      title="realEstateStrategy.title"
      subtitle="realEstateStrategy.subtitle"
      titleHighlight="Key Pillars"
      titleHighlightColor="#D0A457"
      items={[
        {
          id: "feature1",
          icon: "/images/icons/realstate1.png",
          title: "realEstateStrategy.feature1.title",
          description: "realEstateStrategy.feature1.subtitle"
        },
        {
          id: "feature2",
          icon: "/images/icons/banking2.png",
          title: "realEstateStrategy.feature2.title",
          description: "realEstateStrategy.feature2.subtitle"
        },
        {
          id: "feature3",
          icon: "/images/icons/realstate3.png",
          title: "realEstateStrategy.feature3.title",
          description: "realEstateStrategy.feature3.subtitle"
        },
        {
          id: "feature4",
          icon: "/images/icons/realstate4.png",
          title: "realEstateStrategy.feature4.title",
          description: "realEstateStrategy.feature4.subtitle"
        },
        {
          id: "feature5",
          icon: "/images/icons/local3.png",
          title: "realEstateStrategy.feature5.title",
          description: "realEstateStrategy.feature5.subtitle"
        },
        {
          id: "feature6",
          icon: "/images/icons/local1.png",
          title: "realEstateStrategy.feature6.title",
          description: "realEstateStrategy.feature6.subtitle"
        }
      ]}
    />
  );
};

export default RealEstateStrategySection;
