import React from 'react';
import Hero from '../components/home/Hero'; // Back to working version
// import HomeHero from '../components/home/HomeHero'; // Has issues
import PortfolioSection from '../components/home/PortfolioSection';
import MutualFundsSection from '../components/home/MutualFundsSection';
import GlobalMarketsSection from '../components/home/GlobalMarketsSection';
import GlobalMarkets2Section from '../components/home/GlobalMarkets2Section';
import MarginSection2 from '../components/home/MarginSection2';
import WhyAlistithmarSection from '../components/home/WhyAlistithmarSection';
import NewsroomSection from '../components/home/NewsroomSection';
import CtaSection from '../components/home/CtaSection';

const Home: React.FC = () => {
  return (
    <>
          <Hero />
          <PortfolioSection />
          <MutualFundsSection />
          <GlobalMarkets2Section />
          {/* <GlobalMarketsSection /> */}
      <MarginSection2 />
      <WhyAlistithmarSection />
      <NewsroomSection />
      <CtaSection />
    </>
  );
};

export default Home; 