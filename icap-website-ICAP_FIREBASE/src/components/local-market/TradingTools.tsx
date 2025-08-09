import React from 'react';
import FeatureSection from '../ui/FeatureSection';
import type { FeatureItem } from '../ui/FeatureSection';

const TradingTools: React.FC = () => {
  // Define the trading tools features
  const tradingToolsItems: FeatureItem[] = [
    {
      id: 'realtime-data',
      icon: '/images/icons/local1.png',
      title: 'localMarket.tradingTools.feature1.title',
      description: 'localMarket.tradingTools.feature1.description',
      alt: 'Real-time Data'
    },
    {
      id: 'margin-lending',
      icon: '/images/icons/local2.png',
      title: 'localMarket.tradingTools.feature2.title',
      description: 'localMarket.tradingTools.feature2.description',
      alt: 'Margin Lending'
    },
    {
      id: 'premarket-trading',
      icon: '/images/icons/local3.png',
      title: 'localMarket.tradingTools.feature3.title',
      description: 'localMarket.tradingTools.feature3.description',
      alt: 'Pre-Market Trading'
    },
    {
      id: 'stop-orders',
      icon: '/images/icons/local4.png',
      title: 'localMarket.tradingTools.feature4.title',
      description: 'localMarket.tradingTools.feature4.description',
      alt: 'Stop Orders'
    }
  ];

  return (
    <FeatureSection
      title="localMarket.tradingTools.title"
      subtitle="localMarket.tradingTools.subtitle"
      items={tradingToolsItems}
      variant="four-items"
      titleHighlight="Powerful Tools"
      titleHighlightColor="#F3B660"
      backgroundImage="/images/darkbackground.png"
    />
  );
};

export default TradingTools;
