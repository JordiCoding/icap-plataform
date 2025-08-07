import React from 'react';
import { useTranslation } from 'react-i18next';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';

const TailoredFunds: React.FC = () => {
  const { t } = useTranslation();
  
  // 4 cards for tailored funds (reusing investment-strategy layout)
  const tailoredFundsCards = [
    <GridCard
      key="real-estate-development"
      title="realEstate.tailoredFunds.card1.title"
      subtitle="realEstate.tailoredFunds.card1.subtitle"
      variant="flat"
      align="bottom"
      height="h-full"
      className="rounded-lg"
      backgroundImage="/images/cards/mobileapplication.png"
    />,
    <GridCard
      key="infrastructure-development"
      title="realEstate.tailoredFunds.card2.title"
      subtitle="realEstate.tailoredFunds.card2.subtitle"
      variant="flat"
      align="center"
      height="h-[290px]"
      className="rounded-lg"
      backgroundImage="/images/cards/realstate2.png"
    />,
    <GridCard
      key="real-estate-income"
      title="realEstate.tailoredFunds.card3.title"
      subtitle="realEstate.tailoredFunds.card3.subtitle"
      variant="flat"
      align="center"
      height="h-[290px]"
      className="rounded-lg"
      backgroundImage="/images/cards/realstate3.png"
    />,
    <GridCard
      key="reits"
      title="realEstate.tailoredFunds.card4.title"
      subtitle="realEstate.tailoredFunds.card4.subtitle"
      variant="flat"
      align="top"
      height="h-full"
      className="rounded-lg"
      backgroundImage="/images/cards/realstate4.png"
    />
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">
            {t('realEstate.tailoredFunds.title')}
          </h2>
          <p className="section-subtitle text-black">
            {t('realEstate.tailoredFunds.subtitle')}
          </p>
        </div>

        {/* Grid Layout - Using investment-strategy layout */}
        <GridLayout
          type="investment-strategy"
          variant="production"
          cards={tailoredFundsCards}
          showControls={false}
          gap={24}
        />
      </div>
    </section>
  );
};

export default TailoredFunds; 