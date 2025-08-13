import React from 'react';
import { useTranslation } from 'react-i18next';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';

const InvestmentStrategy: React.FC = () => {
  const { t } = useTranslation();
  
  // Cards with correct composition (tall, short, short, tall) + 2 bottom cards
  const strategyCards = [
    <GridCard
      key="strategy-1"
      title="assetManagement.investmentStrategy.card1.title"
      subtitle="assetManagement.investmentStrategy.card1.subtitle"
      variant="flat"
      align="bottom"
      height="h-[500px]"
      className="rounded-lg"
      backgroundImage="/images/cards/mobileapplication.png"
    />,
    <GridCard
      key="strategy-2"
      title="assetManagement.investmentStrategy.card2.title"
      subtitle="assetManagement.investmentStrategy.card2.subtitle"
      variant="flat"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/riskmanagment.png"
    />,
    <GridCard
      key="strategy-3"
      title="assetManagement.investmentStrategy.card3.title"
      subtitle="assetManagement.investmentStrategy.card3.subtitle"
      variant="flat"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
    />,
    <GridCard
      key="strategy-4"
      title="assetManagement.investmentStrategy.card4.title"
      subtitle="assetManagement.investmentStrategy.card4.subtitle"
      variant="flat"
      align="center"
      height="h-[500px]"
      className="rounded-lg"
      backgroundImage="/images/cards/tradingterminal.png"
    />,
    <GridCard
      key="strategy-5"
      title="assetManagement.investmentStrategy.card5.title"
      subtitle="assetManagement.investmentStrategy.card5.subtitle"
      variant="flat"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/extensive.png"
    />,
    <GridCard
      key="strategy-6"
      title="assetManagement.investmentStrategy.card6.title"
      subtitle="assetManagement.investmentStrategy.card6.subtitle"
      variant="flat"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/PerformanceEvaluation.png"
    />
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">
            {t('assetManagement.investmentStrategy.title')}
          </h2>
          <p className="section-subtitle text-black">
            {t('assetManagement.investmentStrategy.subtitle')}
          </p>
        </div>

        {/* Grid Layout */}
        <GridLayout
          type="investment-strategy"
          variant="production"
          cards={strategyCards}
          showControls={false}
          gap={24}
        />
      </div>
    </section>
  );
};

export default InvestmentStrategy; 