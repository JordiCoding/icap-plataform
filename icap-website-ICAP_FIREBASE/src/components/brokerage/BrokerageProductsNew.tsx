import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BrokerageProductsNew: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cards = [
    {
      title: t('brokerageProducts.localMarket.title'),
      subtitle: t('brokerageProducts.localMarket.description'),
      backgroundImage: '/images/localmarketasset.png',
      route: '/local-market'
    },
    {
      title: t('brokerageProducts.internationalMarket.title'),
      subtitle: t('brokerageProducts.internationalMarket.description'),
      backgroundImage: '/images/intermarketasset.png',
      route: '/international-markets'
    },
    {
      title: t('brokerageProducts.marginLending.title'),
      subtitle: t('brokerageProducts.marginLending.description'),
      backgroundImage: '/images/marginasset.png',
      route: '/margin-lending'
    }
  ];

  const handleCardClick = (route: string) => {
    navigate(route);
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
            className="navigation-card-title text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            NavigationCard System Demo
          </motion.h2>
          
          <motion.p
            className="navigation-card-subtitle text-black max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            This is the new NavigationCard system - much cleaner and more maintainable
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="flex justify-center items-start gap-6 group">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="w-[360px] h-[550px] rounded-[32px] flex flex-col p-8 hover:scale-[1.05] group-hover:scale-[0.98] transition-transform duration-300 cursor-pointer relative overflow-hidden"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: 'cover',
              }}
              onClick={() => handleCardClick(card.route)}
              tabIndex={0}
              role="button"
              aria-label={`Navigate to ${card.title} page`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 
                className="navigation-card-title text-white"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <p 
                className="navigation-card-subtitle text-white"
                dangerouslySetInnerHTML={{ __html: card.subtitle }}
              />
              <button className="w-12 h-12 bg-[#F2D794] rounded-lg flex items-center justify-center self-end">
                <svg className="w-6 h-6 text-[#1D1306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrokerageProductsNew; 