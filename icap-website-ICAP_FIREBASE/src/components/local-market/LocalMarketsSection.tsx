import React, { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import LocalMarketCard from './LocalMarketCard';

const LocalMarketsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isArabic = i18n.language === 'ar';

  // Saudi market data (static for now)
  const saudiMarkets = [
    {
      symbol: 'TASI',
      value: 10592.21,
      change: -121.61,
      changePercent: -1.14,
      chartType: 'negative' as const,
      lastUpdate: 'Real Time'
    },
    {
      symbol: 'NOMU',
      value: 26214.21,
      change: 243.64,
      changePercent: 0.92,
      chartType: 'positive' as const,
      lastUpdate: 'Real Time'
    },
    {
      symbol: 'SUKUK',
      value: 911.41,
      change: 0.00,
      changePercent: 0.00,
      chartType: 'neutral' as const,
      lastUpdate: 'Real Time'
    },
    {
      symbol: 'MT30',
      value: 1365.60,
      change: -12.61,
      changePercent: -0.93,
      chartType: 'negative' as const,
      lastUpdate: 'Real Time'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section
      ref={ref}
      className="relative bg-[#221200] py-[150px] md:py-[200px] overflow-hidden"
      style={{
        backgroundImage: 'url(/images/content01-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title and Subtitle */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mb-16"
          >
            <h2 className={`text-4xl lg:text-[52px] mb-6 ${getTypographyClasses('title')} ${isArabic ? 'leading-relaxed' : 'leading-tight'}`}
                style={{ color: 'black' }}>
              <Trans
                i18nKey="localMarkets.title"
                components={[
                  <span className="text-[#A44F17]" />,
                ]}
              />
            </h2>
            <p className={`text-[22px] max-w-4xl mx-auto ${getTypographyClasses('body')}`}
               style={{ color: 'black' }}>
              {t('localMarkets.subtitle')}
            </p>
          </motion.div>

          {/* Market Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
          >
            {saudiMarkets.map((market, index) => (
              <motion.div
                key={market.symbol}
                variants={itemVariants}
              >
                <LocalMarketCard
                  symbol={market.symbol}
                  value={market.value}
                  change={market.change}
                  changePercent={market.changePercent}
                  chartType={market.chartType}
                  lastUpdate={market.lastUpdate}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalMarketsSection;
