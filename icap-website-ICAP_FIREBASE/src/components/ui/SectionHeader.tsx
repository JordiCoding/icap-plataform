import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
  textColor?: string;
  subtitleColor?: string;
  alignment?: 'left' | 'center' | 'right';
  titleTransComponents?: React.ReactElement[];
  className?: string;
  variants?: React.ComponentProps<typeof motion.div>['variants'];
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleSize = 'text-[52px]',
  subtitleSize = 'text-[22px]',
  textColor = 'text-white',
  subtitleColor = 'text-white/80',
  alignment = 'center',
  titleTransComponents = [<br />],
  className = '',
  variants
}) => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const isArabic = i18n.language === 'ar';

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Line height for Arabic
  const lineHeightClass = isArabic ? 'leading-relaxed' : 'leading-tight';

  return (
    <motion.div 
      variants={variants}
      className={`mb-16 ${alignmentClasses[alignment]} ${className}`}
    >
      {/* Main Title */}
      <h2 className={`${titleSize} font-light ${textColor} mb-4 ${lineHeightClass} ${getTypographyClasses('title')}`}>
        <Trans
          i18nKey={title}
          components={titleTransComponents}
        />
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className={`${subtitleSize} ${subtitleColor} ${getTypographyClasses('body')}`}>
          {t(subtitle)}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 