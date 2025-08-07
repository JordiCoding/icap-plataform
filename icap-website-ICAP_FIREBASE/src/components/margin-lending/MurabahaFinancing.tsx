import React from 'react';
import { useTranslation } from 'react-i18next';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const MurabahaFinancing: React.FC = () => {
  const { t } = useTranslation();
  
  // 4 cards for murabaha financing
  const murabahaCards = [
    <GridCard
      key="saudi-market-only"
      title="marginLending.murabahaFinancing.card1.title"
      subtitle="marginLending.murabahaFinancing.card1.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/margin1.png"
    />,
    <GridCard
      key="flexible-loan-usage"
      title="marginLending.murabahaFinancing.card2.title"
      subtitle="marginLending.murabahaFinancing.card2.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/margin2.png"
    />,
    <GridCard
      key="coverage-requirements"
      title="marginLending.murabahaFinancing.card3.title"
      subtitle="marginLending.murabahaFinancing.card3.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/margin3.png"
    />,
    <GridCard
      key="eligibility-criteria"
      title="marginLending.murabahaFinancing.card4.title"
      subtitle="marginLending.murabahaFinancing.card4.subtitle"
      variant="flat"
      align="center"
      className="rounded-lg"
      backgroundImage="/images/cards/margin4.png"
    />
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="marginLending.murabahaFinancing.title"
          subtitle="marginLending.murabahaFinancing.subtitle"
          textColor="text-black"
          subtitleColor="text-black"
          titleTransComponents={[<span className="text-[#A44F17]" />]}
          className="mb-12"
        />

        {/* Grid Layout - Using murabaha-four layout */}
        <GridLayout
          type="murabaha-four"
          variant="production"
          cards={murabahaCards}
          showControls={false}
          gap={24}
        />

        {/* Button */}
        <div className="text-center mt-12">
          <Button
            as="a"
            href="#"
            variant="primary"
            className="px-8 py-3"
          >
            {t('marginLending.murabahaFinancing.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MurabahaFinancing; 