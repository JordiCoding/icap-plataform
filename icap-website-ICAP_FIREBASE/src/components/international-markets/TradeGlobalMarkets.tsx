import React from 'react';
import { useTranslation } from 'react-i18next';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';

const TradeGlobalMarkets: React.FC = () => {
  const { t } = useTranslation();
  
  // 4 cards for trade global markets (reusing investment-strategy layout)
  const tradeGlobalCards = [
    <GridCard
      key="real-time-data"
      title="internationalMarkets.tradeGlobalMarkets.card1.title"
      subtitle="internationalMarkets.tradeGlobalMarkets.card1.subtitle"
      variant="flat"
      align="center"
      height="h-[500px]"
      className="rounded-lg"
      backgroundImage="/images/cards/realtime.png"
    />,
    <GridCard
      key="margin-lending"
      title="internationalMarkets.tradeGlobalMarkets.card2.title"
      subtitle="internationalMarkets.tradeGlobalMarkets.card2.subtitle"
      variant="flat"
      align="top"
      textAlign="right"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/margin.png"
    />,
    <GridCard
      key="pre-post-market"
      title="internationalMarkets.tradeGlobalMarkets.card3.title"
      subtitle="internationalMarkets.tradeGlobalMarkets.card3.subtitle"
      variant="flat"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/premarket.png"
    />,
    <GridCard
      key="stop-orders"
      title="internationalMarkets.tradeGlobalMarkets.card4.title"
      subtitle="internationalMarkets.tradeGlobalMarkets.card4.subtitle"
      variant="flat"
      align="center"
      height="h-[500px]"
      className="rounded-lg"
      backgroundImage="/images/cards/stoporder.png"
    />
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">
            {t('internationalMarkets.tradeGlobalMarkets.title')}
          </h2>
          <p className="section-subtitle text-black">
            {t('internationalMarkets.tradeGlobalMarkets.subtitle')}
          </p>
        </div>

        {/* Grid Layout - Using investment-strategy layout */}
        <GridLayout
          type="investment-strategy"
          variant="production"
          cards={tradeGlobalCards}
          showControls={false}
          gap={24}
        />
      </div>
    </section>
  );
};

export default TradeGlobalMarkets; 