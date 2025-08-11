import React, { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import Button from '../ui/Button';

const InternationalUSSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isArabic = i18n.language === 'ar';

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-x-[100px] rtl:lg:flex-row-reverse">
          {/* Text content - Left side */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-1 w-full lg:min-w-[450px]"
          >
            <div className="text-center lg:text-left">
              {/* Title */}
              <h2 className={`text-4xl lg:text-5xl font-bold text-icap-primary ${getTypographyClasses('title')} ${isArabic ? 'leading-relaxed' : 'leading-tight'}`}>
                <Trans
                  i18nKey="internationalUS.title"
                  components={[
                    <span className="text-[#A44F17]" />, // <0> - US Stocks
                    <br />, // <1/> - line breaks
                  ]}
                />
              </h2>
              
              {/* Subtitle */}
              <p className={`text-lg text-black ${getTypographyClasses('body')} mb-8`}>
                {t('internationalUS.subtitle')}
              </p>
              
              {/* Button */}
              <Button 
                variant="primary" 
                as="a" 
                href="#"
              >
                {t('internationalUS.button')}
              </Button>
            </div>
          </motion.div>

          {/* Image - Right side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <img
              src="/images/internationalUS.png"
              alt="Trading US Stocks"
              className="w-[400px] md:w-[450px] lg:w-[500px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternationalUSSection;
