import React, { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import Button from '../ui/Button';

// Country data
const countries = [
  { name: 'Dubai', flag: '/images/flags/Dubai.png' },
  { name: 'Abu Dhabi', flag: '/images/flags/AbuDhabi.png' },
  { name: 'Qatar', flag: '/images/flags/Qatar.png' },
  { name: 'Oman', flag: '/images/flags/Oman.png' },
  { name: 'Bahrain', flag: '/images/flags/Bahrain.png' },
  { name: 'Kuwait', flag: '/images/flags/Kuwait.png' },
  { name: 'Jordan', flag: '/images/flags/Jordan.png' },
  { name: 'Egypt', flag: '/images/flags/Egypt.png' }
];

// Mini Card Component
const CountryCard: React.FC<{ country: { name: string; flag: string } }> = ({ country }) => {
  return (
    <div className="gcc-country-card">
      <img 
        src={country.flag} 
        alt={`${country.name} flag`}
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <span className="gcc-country-text">
        {country.name}
      </span>
    </div>
  );
};

const GCCRegional: React.FC = () => {
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
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut"
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 30 },
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
      className="relative bg-white py-[150px] md:py-[200px] overflow-hidden"
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
            <h2 className={`text-4xl lg:text-[52px] text-black mb-6 ${getTypographyClasses('title')} ${isArabic ? 'leading-relaxed' : 'leading-tight'}`}>
              <Trans
                i18nKey="gccRegional.title"
                components={[
                  <span className="text-[#A44F17]" />, // <0> - Portfolio (copper accent)
                ]}
              />
            </h2>
            <p className={`text-[22px] text-black max-w-4xl mx-auto ${getTypographyClasses('body')} mb-12`}>
              {t('gccRegional.subtitle')}
            </p>
          </motion.div>

          {/* Country Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="gcc-cards-grid"
          >
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                variants={itemVariants}
              >
                <CountryCard country={country} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Button Section - Separate container for proper spacing */}
        <div className="text-center pt-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Button
              variant="primary"
              as="a"
              href="#"
            >
              {t('gccRegional.button')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GCCRegional;
