import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import Button from './Button';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  variant?: 'glassmorphism' | 'glassmorphism-with-image';
  backgroundImage?: string;
  height?: string;
  width?: string;
  layout?: 'compact' | 'spaced';
  className?: string;
  variants?: React.ComponentProps<typeof motion.div>['variants'];
  titleTransComponents?: React.ReactElement[];
  subtitleTransComponents?: React.ReactElement[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref = '#',
  variant = 'glassmorphism',
  backgroundImage,
  height = 'h-[180px] lg:h-[240px]',
  width = 'w-full',
  layout = 'compact',
  className = '',
  variants,
  titleTransComponents = [<br />],
  subtitleTransComponents = [<br />]
}) => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const isArabic = i18n.language === 'ar';

  // Line height for Arabic
  const lineHeightClass = isArabic ? 'leading-relaxed' : 'leading-tight';

  // Card class based on variant
  const cardClass = variant === 'glassmorphism-with-image' 
    ? 'glassmorphism-card-with-image' 
    : 'glassmorphism-card';

  return (
    <motion.div 
      variants={variants}
      className={`relative ${cardClass} p-6 md:p-8 ${height} ${width} ${className}`}
    >
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className={`relative z-10 h-full ${layout === 'compact' ? 'card-content-compact' : 'card-content-spaced'}`}>
        <div>
          <h3 className={`text-[28px] font-light text-white mb-4 ${lineHeightClass} ${getTypographyClasses('title')}`}>
            <Trans
              i18nKey={title}
              components={titleTransComponents}
            />
          </h3>
          <p className={`text-[16px] text-white/80 mb-6 ${getTypographyClasses('body')}`}>
            <Trans
              i18nKey={subtitle}
              components={subtitleTransComponents}
            />
          </p>
        </div>
        
        <Button 
          variant="primary" 
          as="a" 
          href={buttonHref}
          className="w-fit"
        >
          {t(buttonText)}
        </Button>
      </div>
    </motion.div>
  );
};

export default FeatureCard; 