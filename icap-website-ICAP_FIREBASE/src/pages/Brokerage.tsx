import React from 'react';
import { BrokerageHero, BrokerageProducts, SlidePlatformAccess } from '../components/brokerage';
import CtaSection from '../components/home/CtaSection';

const Brokerage: React.FC = () => {
  return (
    <>
      <BrokerageHero />
      <BrokerageProducts />
      <SlidePlatformAccess />
      <CtaSection />
    </>
  );
};

export default Brokerage; 