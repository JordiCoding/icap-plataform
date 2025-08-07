import React from 'react';
import GridLayout from '../ui/GridLayout';
import GridCard from '../ui/GridCard';

const LocalInvestmentProducts: React.FC = () => {
  // 4 cards for local investment products (reusing investment-strategy layout but only 4 cards)
  const localProductCards = [
    <GridCard
      key="equity-investments"
      title="localMarket.localProducts.card1.title"
      subtitle="localMarket.localProducts.card1.subtitle"
      variant="flat"
      align="bottom"
      height="h-[500px]"
      className="rounded-lg"
      backgroundImage="/images/cards/mobileapplication.png"
    />,
    <GridCard
      key="fixed-income-sukuk"
      title="localMarket.localProducts.card2.title"
      subtitle="localMarket.localProducts.card2.subtitle"
      variant="flat"
      align="top"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/skuk.png"
    />,
    <GridCard
      key="public-offerings"
      title="localMarket.localProducts.card3.title"
      subtitle="localMarket.localProducts.card3.subtitle"
      variant="flat"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
      backgroundImage="/images/cards/public1.png"
    />,
    <GridCard
      key="alternative-investments"
      title="localMarket.localProducts.card4.title"
      subtitle="localMarket.localProducts.card4.subtitle"
      variant="flat"
      align="center"
      height="h-[500px]"
      className="rounded-lg"
      backgroundImage="/images/cards/public2.png"
    />
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">
            Local Investment <span className="text-[#A44F17]">Products</span>
          </h2>
          <p className="section-subtitle text-black">
            Step into a diverse world of investments, trade confidently in a market you trust.
          </p>
        </div>

        {/* Grid Layout - Using investment-strategy but only 4 cards */}
        <GridLayout
          type="investment-strategy"
          variant="production"
          cards={localProductCards}
          showControls={false}
          gap={24}
        />
      </div>
    </section>
  );
};

export default LocalInvestmentProducts; 