import React, { useState } from 'react';
import NavigationCardSection from '../ui/NavigationCardSection';
import type { NavigationCardProps } from '../ui/NavigationCard';

const NavigationCardDemo: React.FC = () => {
  const [currentLayout, setCurrentLayout] = useState('three-cards');

  // Demo cards data
  const demoCards: Omit<NavigationCardProps, 'size'>[] = [
    {
      title: "Local Market",
      subtitle: "Access Tadawul-listed equities, sukuk, and IPOs with powerful tools and real-time insights tailored to local investors.",
      route: "/local-market"
    },
    {
      title: "International Markets",
      subtitle: "Tap into global exchanges with a single platform. Explore stocks, ETFs, and more across major international markets with ease.",
      route: "/international-markets"
    },
    {
      title: "Margin Lending",
      subtitle: "A diversified mix of Sharia-compliant Sukuk, fixed income, trade finance, money market instruments, and similar funds.",
      route: "/margin-lending"
    },
    {
      title: "Asset Management",
      subtitle: "Professional portfolio management with tailored investment strategies designed to maximize your portfolio's potential.",
      route: "/asset-management"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Interactive Demo Section */}
      <NavigationCardSection
        title="NavigationCard System Demo"
        subtitle="Interactive demonstration of different layouts and variants"
        cards={demoCards}
        layout={currentLayout as 'two-cards' | 'three-cards' | 'four-grid' | 'responsive'}
        size="md"
        showControls={true}
        onLayoutChange={setCurrentLayout}
        currentLayout={currentLayout}
      />

      {/* Static Examples */}
      <NavigationCardSection
        title="2-Card Layout Example"
        subtitle="Asset Management style with larger cards"
        cards={demoCards.slice(0, 2)}
        layout="two-cards"
        size="xl"
      />

      <NavigationCardSection
        title="4-Card Grid Example"
        subtitle="Complete service showcase"
        cards={demoCards}
        layout="four-grid"
        size="md"
      />

      <NavigationCardSection
        title="Responsive Layout Example"
        subtitle="Mobile-first design approach"
        cards={demoCards.slice(0, 3)}
        layout="responsive"
        size="md"
      />
    </div>
  );
};

export default NavigationCardDemo; 