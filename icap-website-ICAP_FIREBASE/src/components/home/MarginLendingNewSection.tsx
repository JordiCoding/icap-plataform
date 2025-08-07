import React, { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import Button from '../ui/Button';

const MarginLendingNewSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isArabic = i18n.language === 'ar';
  


  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section 
      ref={ref}
      className="relative bg-white py-[150px] md:py-[200px] overflow-hidden"
      style={{ 
        backgroundImage: 'url(/images/content01-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-30">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-x-[80px] rtl:lg:flex-row-reverse">
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-shrink-0 flex justify-center lg:justify-start"
          >
            <img
              src="/images/marginlending.png"
              alt="Margin Lending"
              className="w-[586px] h-auto object-contain"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-1 w-full lg:min-w-[450px]"
          >
            <div className="text-center lg:text-right">
              {/* Title */}
              <h2 className={`text-4xl lg:text-5xl font-bold text-icap-primary ${getTypographyClasses('title')} ${isArabic ? 'leading-relaxed' : 'leading-tight'}`}>
                <Trans
                  i18nKey="marginLendingHome.title"
                  components={[
                    <span className="text-[#A44F17]" />, // <0> - Margin Lending
                    <br />, // <1/> - line breaks
                  ]}
                />
              </h2>
              
              {/* Subtitle */}
              <p className={`text-lg max-w-xl text-black ${getTypographyClasses('body')} mb-8`}>
                {isArabic ? (
                  <Trans
                    i18nKey="marginLendingHome.subtitle"
                    components={[
                      <span className="font-bold" style={{ fontFamily: 'Almarai, sans-serif' }} />, // <0> - عزز إمكانيات تداولك
                      <br />, // <1/> - line break
                      <span className="font-bold" style={{ fontFamily: 'Almarai, sans-serif' }} />, // <2> - الاستثمار كابيتال
                    ]}
                  />
                ) : (
                  <Trans
                    i18nKey="marginLendingHome.subtitle"
                    components={[
                      <span className="font-medium" />, // <0> - Enhance your trading potential
                      <br />, // <1/> - line breaks
                      <span className="font-medium" />, // <2> - Alistithmar Capital
                    ]}
                  />
                )}
              </p>
              
              {/* Button */}
              <Button 
                variant="black" 
                as="a" 
                href="#"
              >
                {t('marginLendingHome.button')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarginLendingNewSection; 