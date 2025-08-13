import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';
import { useTypography } from '../../hooks/useTypography';

const InvestmentBankingClientsSection: React.FC = () => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();
  // Gold accent for all titles
  const goldAccent = <span className="slide-title-highlight" />;

  const cards = [
    <GridCard
      key="private-companies"
      variant="glassmorphism"
      title="investmentBankingClients.privateCompanies.title"
      subtitle="investmentBankingClients.privateCompanies.subtitle"
      titleTransComponents={[goldAccent, <br />]}
      backgroundImage="/images/cards/mobileapplication.png"
      align="bottom"
    />,
    <GridCard
      key="publicly-listed"
      variant="glassmorphism"
      title="investmentBankingClients.publiclyListed.title"
      subtitle="investmentBankingClients.publiclyListed.subtitle"
      titleTransComponents={[goldAccent, <br />, goldAccent]}
      backgroundImage="/images/cards/riskmanagment.png"
    />,
    <GridCard
      key="gres"
      variant="glassmorphism"
      title="investmentBankingClients.gres.title"
      subtitle="investmentBankingClients.gres.subtitle"
      titleTransComponents={[goldAccent, <br />]}
      backgroundImage="/images/client-corner-middle.png"
    />,
    <GridCard
      key="family-offices"
      variant="glassmorphism"
      title="investmentBankingClients.familyOffices.title"
      subtitle="investmentBankingClients.familyOffices.subtitle"
      titleTransComponents={[goldAccent, <br />]}
      backgroundImage="/images/cards/Family.png"
    />,
    <GridCard
      key="sovereign-entities"
      variant="glassmorphism"
      title="investmentBankingClients.sovereignEntities.title"
      subtitle="investmentBankingClients.sovereignEntities.subtitle"
      titleTransComponents={[goldAccent, <br />]}
      backgroundImage="/images/cards/extensive.png"
    />,
    <GridCard
      key="institutional-investors"
      variant="glassmorphism"
      title="investmentBankingClients.institutionalInvestors.title"
      subtitle="investmentBankingClients.institutionalInvestors.subtitle"
      titleTransComponents={[goldAccent, <br />]}
      backgroundImage="/images/cards/institutional.png"
    />,
  ];

  const title = t('investmentBankingClientsSection.title');
  // Split only the first word for accent
  const [accent, ...rest] = title.split(' ');

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/images/darkbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="section-container text-center mb-12">
        <h2 className={`section-title mb-4 ${getTypographyClasses('title')}`}
            style={{ color: 'white', lineHeight: 1.15 }}>
          <span className="slide-title-highlight">{accent}</span>{' '}{rest.join(' ')}
        </h2>
        <div className={`mt-2 text-lg md:text-xl text-white ${getTypographyClasses('body')}`}
             style={{ lineHeight: 1.5 }}>
          {t('investmentBankingClientsSection.subtitle').split('<0/>')[0]}
          <br />
          {t('investmentBankingClientsSection.subtitle').split('<0/>')[1]}
        </div>
      </div>
      <GridLayout
        type="investment-strategy"
        variant="production"
        cards={cards}
        gap={24}
      />
    </section>
  );
};

export default InvestmentBankingClientsSection;
