import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import Button from '../ui/Button';

const GlobalMarkets2Section: React.FC = () => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat h-[891px] overflow-hidden"
      style={{
        backgroundImage: 'url(/images/background/HomeGlobalbackground.png)'
      }}
    >
      {/* Level 1: Global Market Background Image Container */}
      <div className="absolute inset-0 flex items-end justify-center pb-2 md:pb-4">
        <div className="relative w-full h-full max-w-4xl max-h-[600px] flex items-center justify-center">
          <img 
            src="/images/background/HomeGlobalMarketbackground.png" 
            alt="Global Markets Map"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Level 2: Content Container */}
      <div className="relative z-10 h-full flex items-start justify-center pt-20">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${getTypographyClasses('title')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Trans
              i18nKey="globalMarkets2.title"
              components={[
                <br />, // <0/> - line break
                <span className="text-[#A44F17]" />, // <1> - colored text
              ]}
            />
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className={`text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto ${getTypographyClasses('body')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Trans
              i18nKey="globalMarkets2.subtitle"
              components={[<br />]}
            />
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="primary"
              className="text-lg px-8 py-4"
            >
              {t('globalMarkets2.button')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets2Section;
