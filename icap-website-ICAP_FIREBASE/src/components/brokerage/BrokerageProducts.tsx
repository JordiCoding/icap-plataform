import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const BrokerageProducts: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleCardClick = (route: string) => {
    navigate(route);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent, route: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(route);
    }
  };
  
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
            {t('brokerageProducts.subtitle')}
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="flex justify-center items-start gap-6 group">
          {/* Local Market Card */}
          <div 
            className="w-[360px] h-[550px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/localmarketasset.png)',
              backgroundSize: 'cover',
            }}
            onClick={() => handleCardClick('/local-market')}
            onKeyPress={(e) => handleKeyPress(e, '/local-market')}
            tabIndex={0}
            role="button"
            aria-label={`Navigate to ${t('brokerageProducts.localMarket.title')} page`}
          >
            <h3 className="card-title text-white mb-6" style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2' }}>
              {t('brokerageProducts.localMarket.title')}
            </h3>
            <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              {t('brokerageProducts.localMarket.description')}
            </p>
            <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>

          {/* International Market Card */}
          <div 
            className="w-[360px] h-[550px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/intermarketasset.png)',
              backgroundSize: 'cover',
            }}
            onClick={() => handleCardClick('/international-markets')}
            onKeyPress={(e) => handleKeyPress(e, '/international-markets')}
            tabIndex={0}
            role="button"
            aria-label={`Navigate to ${t('brokerageProducts.internationalMarket.title')} page`}
          >
            <h3 className="card-title text-white mb-6" style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2' }}>
              {t('brokerageProducts.internationalMarket.title')}
            </h3>
            <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              {t('brokerageProducts.internationalMarket.description')}
            </p>
            <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>

          {/* Margin Lending Card */}
          <div 
            className="w-[360px] h-[550px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/marginasset.png)',
              backgroundSize: 'cover',
            }}
            onClick={() => handleCardClick('/margin-lending')}
            onKeyPress={(e) => handleKeyPress(e, '/margin-lending')}
            tabIndex={0}
            role="button"
            aria-label={`Navigate to ${t('brokerageProducts.marginLending.title')} page`}
          >
            <h3 className="card-title text-white mb-6" style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.2' }}>
              {t('brokerageProducts.marginLending.title')}
            </h3>
            <p className="card-subtitle text-white leading-relaxed flex-1 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              {t('brokerageProducts.marginLending.description')}
            </p>
            <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerageProducts; 