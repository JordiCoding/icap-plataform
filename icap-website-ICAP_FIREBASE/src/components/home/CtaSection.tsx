import React, { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';

const CtaSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isArabic = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      ref={ref}
      className="relative bg-no-repeat bg-cover bg-center py-[112px] md:py-[150px] overflow-hidden"
      style={{ backgroundImage: 'url(/images/content01-background.png)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Pre-title */}
          <motion.div variants={itemVariants} className="mb-4">
            <p className={`text-[22px] text-gray-600 ${getTypographyClasses('body')}`}>
              {t('cta.preTitle')}
            </p>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className={`text-[52px] font-bold text-icap-primary ${isArabic ? 'leading-relaxed' : 'leading-tight'} ${getTypographyClasses('title')}`}>
              <Trans
                i18nKey="cta.mainTitle"
                components={[
                  <br />, // <0/> - line break
                  <span className="text-[#A44F17]" />, // <1> - colored text
                ]}
              />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${getTypographyClasses('body')}`}>
              {t('cta.description')}
            </p>
          </motion.div>

          {/* QR Code */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col items-center">
              <img
                src="/images/qrcode.png"
                alt="QR Code"
                className="w-32 h-32 mb-4"
              />
              <p className={`text-gray-600 text-lg ${getTypographyClasses('body')}`}>
                {t('cta.scanMe')}
              </p>
            </div>
          </motion.div>

          {/* App Download Buttons */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#" className="inline-block">
                <img
                  src="/images/d-badge-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14 md:h-16"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="/images/d-badge-google-play.svg"
                  alt="Get it on Google Play"
                  className="h-14 md:h-16"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection; 