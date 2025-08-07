import React from 'react';
import { useTranslation } from 'react-i18next';
import NavigationCardSection from '../ui/NavigationCardSection';
import type { NavigationCardProps } from '../ui/NavigationCard';

const InvestmentOpportunities: React.FC = () => {
  const { t } = useTranslation();

  const cards: Omit<NavigationCardProps, 'size'>[] = [
    {
      title: t('assetManagement.investmentOpportunities.card1.title'),
      subtitle: t('assetManagement.investmentOpportunities.card1.subtitle'),
              backgroundImage: '/images/cards/assetmanagment.png',
      route: '/mutual-funds'
    },
    {
      title: t('assetManagement.investmentOpportunities.card2.title'),
      subtitle: t('assetManagement.investmentOpportunities.card2.subtitle'),
      route: '/portfolio-management'
    }
  ];

  return (
    <NavigationCardSection
      title="assetManagement.investmentOpportunities.title"
      subtitle="assetManagement.investmentOpportunities.subtitle"
      cards={cards}
      layout="two-cards"
      size="xl"
      titleTransComponents={[<span className="text-[#A44F17]" key="highlight" />]}
    />
  );
};

export default InvestmentOpportunities; 