import React from 'react';
import { useTranslation } from 'react-i18next';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';
import SectionHeader from '../ui/SectionHeader';

const InvestmentBankingServices: React.FC = () => {
  const { t } = useTranslation();
  
  // 3 cards for investment banking services
  const investmentBankingCards = [
    <GridCard
      key="investment-experts"
      title="investmentBanking.services.card1.title"
      subtitle="investmentBanking.services.card1.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/investment1.png"
    />,
    <GridCard
      key="full-scope-advisory"
      title="investmentBanking.services.card2.title"
      subtitle="investmentBanking.services.card2.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/investment2.png"
    />,
    <GridCard
      key="tailored-strategy"
      title="investmentBanking.services.card3.title"
      subtitle="investmentBanking.services.card3.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/investment3.png"
    />
  ];

  return (
    <section className="py-[150px] md:py-[200px] bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="investmentBanking.services.title"
          subtitle="investmentBanking.services.subtitle"
          textColor="text-black"
          subtitleColor="text-black"
          titleTransComponents={[<span className="text-[#A44F17]" />]}
          className="mb-12"
        />

        {/* Grid Layout - Using three-row layout */}
        <GridLayout
          type="three-row"
          variant="production"
          cards={investmentBankingCards}
          showControls={false}
          gap={24}
        />
      </div>
    </section>
  );
};

export default InvestmentBankingServices; 