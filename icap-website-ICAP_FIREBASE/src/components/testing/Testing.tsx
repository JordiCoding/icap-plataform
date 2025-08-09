import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FeatureSectionDemo from './FeatureSectionDemo';

type TestLayout = 'original-three' | 'two-cards' | 'four-grid' | 'responsive' | 'different-sizes' | 'feature-section';

const Testing: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedLayout, setSelectedLayout] = useState<TestLayout>('original-three');
  
  const handleCardClick = (route: string) => {
    navigate(route);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent, route: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(route);
    }
  };

  // Test data for different layouts
  const testCards = [
    {
      title: "Test Card 1",
      subtitle: "This is a test card with sample content for comparison",
      backgroundImage: "/images/localmarketasset.png",
      route: "/local-market"
    },
    {
      title: "Test Card 2", 
      subtitle: "Another test card to compare different designs and layouts",
      backgroundImage: "/images/intermarketasset.png",
      route: "/international-markets"
    },
    {
      title: "Test Card 3",
      subtitle: "Third test card for comprehensive comparison testing",
      backgroundImage: "/images/marginasset.png", 
      route: "/margin-lending"
    },
    {
      title: "Test Card 4",
      subtitle: "Fourth card for 4-card layout testing",
      backgroundImage: "/images/localmarketasset.png",
      route: "/asset-management"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/content01-background.png)' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="section-title text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Trans
              i18nKey="brokerageProducts.title"
              components={[
                <span className="text-[#A44F17]" key="highlight" />
              ]}
            />
          </motion.h2>
          
          <motion.p
            className="section-subtitle text-black max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Testing different card layouts and designs for comparison
          </motion.p>
        </div>

        {/* Interactive Controls */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {([
            { key: 'original-three', label: 'Original 3-Card' },
            { key: 'two-cards', label: '2-Card Layout' },
            { key: 'four-grid', label: '4-Card Grid' },
            { key: 'responsive', label: 'Responsive Layout' },
            { key: 'different-sizes', label: 'Different Sizes' },
            { key: 'feature-section', label: 'Feature Section' }
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedLayout(key as TestLayout)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedLayout === key
                  ? 'bg-[#A44F17] text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Conditional Layout Rendering */}
        {selectedLayout === 'original-three' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Original 3-Card Layout (BrokerageProducts)</h3>
            <div className="flex justify-center items-start gap-6 group">
              {testCards.slice(0, 3).map((card, index) => (
                <div 
                  key={index}
                  className="w-[360px] h-[550px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: 'cover',
                  }}
                  onClick={() => handleCardClick(card.route)}
                  onKeyPress={(e) => handleKeyPress(e, card.route)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Navigate to ${card.title} page`}
                >
                  <h3 className="card-title text-white mb-6" style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2' }}>
                    {card.title}
                  </h3>
                  <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                    {card.subtitle}
                  </p>
                  <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedLayout === 'two-cards' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">2-Card Layout (Perfect for Asset Management)</h3>
            <div className="flex justify-center items-start gap-6 group">
              {testCards.slice(0, 2).map((card, index) => (
                <div 
                  key={index}
                  className="w-[520px] h-[585px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: 'cover',
                  }}
                  onClick={() => handleCardClick(card.route)}
                  onKeyPress={(e) => handleKeyPress(e, card.route)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Navigate to ${card.title} page`}
                >
                  <h3 className="card-title text-white mb-6" style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2' }}>
                    {card.title}
                  </h3>
                  <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                    {card.subtitle}
                  </p>
                  <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedLayout === 'four-grid' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">4-Card Grid Layout (2×2 Grid)</h3>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testCards.map((card, index) => (
                <div 
                  key={index}
                  className="w-full h-[400px] rounded-[32px] flex flex-col p-6 hover:scale-[1.05] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: 'cover',
                  }}
                  onClick={() => handleCardClick(card.route)}
                  onKeyPress={(e) => handleKeyPress(e, card.route)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Navigate to ${card.title} page`}
                >
                  <h3 className="card-title text-white mb-4" style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1.2' }}>
                    {card.title}
                  </h3>
                  <p className="card-subtitle text-white leading-relaxed flex-1 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {card.subtitle}
                  </p>
                  <button className="w-10 h-10 bg-[#F2D794] rounded-lg flex items-center justify-center self-end">
                    <svg className="w-5 h-5 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedLayout === 'responsive' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Responsive Layout (Mobile-First)</h3>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 group">
              {testCards.slice(0, 3).map((card, index) => (
                <div 
                  key={index}
                  className="w-full md:w-[360px] h-[400px] md:h-[550px] rounded-[32px] flex flex-col p-6 md:p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: 'cover',
                  }}
                  onClick={() => handleCardClick(card.route)}
                  onKeyPress={(e) => handleKeyPress(e, card.route)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Navigate to ${card.title} page`}
                >
                  <h3 className="card-title text-white mb-4 md:mb-6" style={{ fontSize: '28px', fontWeight: 'bold', lineHeight: '1.2' }}>
                    {card.title}
                  </h3>
                  <p className="card-subtitle text-white leading-relaxed flex-1 mb-6 md:mb-8" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {card.subtitle}
                  </p>
                  <button className="w-10 h-10 md:w-12 md:h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedLayout === 'different-sizes' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Different Card Sizes Comparison</h3>
            <div className="flex justify-center items-start gap-6 group">
              {/* Large Card */}
              <div 
                className="w-[400px] h-[600px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  backgroundImage: `url(${testCards[0].backgroundImage})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleCardClick(testCards[0].route)}
                onKeyPress={(e) => handleKeyPress(e, testCards[0].route)}
                tabIndex={0}
                role="button"
                aria-label={`Navigate to ${testCards[0].title} page`}
              >
                <h3 className="card-title text-white mb-6" style={{ fontSize: '44px', fontWeight: 'bold', lineHeight: '1.2' }}>
                  {testCards[0].title}
                </h3>
                <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '20px', lineHeight: '1.6' }}>
                  {testCards[0].subtitle}
                </p>
                <button className="w-14 h-14 bg-[#F2D794] rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>

              {/* Medium Card */}
              <div 
                className="w-[360px] h-[550px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  backgroundImage: `url(${testCards[1].backgroundImage})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleCardClick(testCards[1].route)}
                onKeyPress={(e) => handleKeyPress(e, testCards[1].route)}
                tabIndex={0}
                role="button"
                aria-label={`Navigate to ${testCards[1].title} page`}
              >
                <h3 className="card-title text-white mb-6" style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2' }}>
                  {testCards[1].title}
                </h3>
                <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                  {testCards[1].subtitle}
                </p>
                <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>

              {/* Small Card */}
              <div 
                className="w-[320px] h-[500px] rounded-[32px] flex flex-col p-6 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  backgroundImage: `url(${testCards[2].backgroundImage})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleCardClick(testCards[2].route)}
                onKeyPress={(e) => handleKeyPress(e, testCards[2].route)}
                tabIndex={0}
                role="button"
                aria-label={`Navigate to ${testCards[2].title} page`}
              >
                <h3 className="card-title text-white mb-4" style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.2' }}>
                  {testCards[2].title}
                </h3>
                <p className="card-subtitle text-white leading-relaxed flex-1 mb-6" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {testCards[2].subtitle}
                </p>
                <button className="w-10 h-10 bg-[#F2D794] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedLayout === 'feature-section' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Feature Section Component Demo</h3>
            <FeatureSectionDemo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Testing; 