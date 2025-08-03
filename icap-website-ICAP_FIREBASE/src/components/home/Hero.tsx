import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useStrapiHero } from '../../hooks/useStrapiHero';
import { useTypography } from '../../hooks/useTypography';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();
  
  // Fetch Strapi data instead of Hygraph
  const { data: strapiData, loading: strapiLoading, error: strapiError } = useStrapiHero();
  
  // Use Strapi data if available, fallback to translation keys
  const title = strapiData?.hero?.attributes?.title || t('home.title');
  const subtitle = strapiData?.hero?.attributes?.subtitle || t('home.subtitle');
  const ctaPrimary = t('home.login');
  const ctaSecondary = t('home.signup');

  // Show loading state if Strapi data is being fetched
  if (strapiLoading) {
    return (
      <div className="relative h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className={getTypographyClasses('body')}>{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  // Show error state if Strapi data failed to load (but still show fallback content)
  if (strapiError) {
    console.warn('Strapi data failed to load, using fallback content:', strapiError);
  }

  return (
    <div className="relative h-screen bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/images/herobackground.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support mp4 */}
        <source src="/images/hero-background.jpg" type="image/jpeg" />
      </video>

      <motion.div
        className="relative z-10 text-center max-w-[90%] sm:max-w-[700px] lg:max-w-[920px] mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className={`text-5xl md:text-7xl mb-4 leading-tight tracking-tight break-words ${getTypographyClasses('hero-title')}`}
          variants={itemVariants}
        >
          {title.split('\\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </motion.h1>
        <motion.p
          className={`mb-8 ${getTypographyClasses('subtitle-hero')}`}
          variants={itemVariants}
        >
          {subtitle.split('\\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </motion.p>
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <Button variant="primary">{t('home.startInvesting')}</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 