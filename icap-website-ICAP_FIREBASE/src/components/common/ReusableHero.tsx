import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../ui/Button';
import Breadcrumbs from './Breadcrumbs';

export interface HeroProps {
  // Content
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  
  // Secondary button
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  
  // Background
  backgroundType: 'image' | 'video';
  backgroundSrc: string;
  backgroundFallback?: string;
  
  // Layout
  layout: 'centered' | 'left-aligned' | 'right-aligned';
  
  // Styling
  overlay?: boolean;
  overlayOpacity?: number;
  
  // Animation
  enableAnimations?: boolean;
  
  // RTL
  enableRTLFlip?: boolean;
  
  // Typography
  titleTypography?: 'hero-title' | 'header-title' | 'custom';
  subtitleTypography?: 'hero-subtitle' | 'header-subtitle' | 'custom';
  
  // Custom styling
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  
  // Breadcrumbs
  showBreadcrumbs?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}

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

const ReusableHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundType,
  backgroundSrc,
  backgroundFallback,
  layout = 'centered',
  overlay = true,
  overlayOpacity = 0.3,
  enableAnimations = true,
  enableRTLFlip = false,
  titleTypography = 'header-title',
  subtitleTypography = 'header-subtitle',
  titleClassName = '',
  subtitleClassName = '',
  containerClassName = '',
  showBreadcrumbs = false,
  breadcrumbs,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Determine layout classes based on layout prop and RTL
  const getLayoutClasses = () => {
    if (layout === 'centered') {
      return 'text-center';
    }
    if (layout === 'left-aligned') {
      return isArabic ? 'text-right' : 'text-left';
    }
    if (layout === 'right-aligned') {
      return isArabic ? 'text-left' : 'text-right';
    }
    return 'text-center';
  };

  // Determine content alignment classes
  const getContentAlignmentClasses = () => {
    if (layout === 'centered') {
      return 'max-w-[90%] sm:max-w-[700px] lg:max-w-[920px] mx-auto';
    }
    if (layout === 'left-aligned') {
      return isArabic ? 'ml-auto' : ''; // Removed max-w-2xl constraint
    }
    if (layout === 'right-aligned') {
      return isArabic ? '' : 'ml-auto'; // Removed max-w-2xl constraint
    }
    return 'max-w-[90%] sm:max-w-[700px] lg:max-w-[920px] mx-auto';
  };

  // Handle RTL flipping for background
  const getBackgroundStyle = () => {
    const baseStyle = {
      backgroundImage: `url(${backgroundSrc})`,
    };
    
    if (enableRTLFlip && isArabic) {
      return {
        ...baseStyle,
        transform: 'scaleX(-1)',
      };
    }
    
    return baseStyle;
  };

  // Handle RTL flipping for content
  const getContentStyle = () => {
    if (enableRTLFlip && isArabic) {
      return { transform: 'scaleX(-1)' };
    }
    return {};
  };

  // Get typography classes based on type and language
  const getTitleTypographyClasses = () => {
    const baseClasses = 'font-bold text-white mb-6 leading-tight';
    
    switch (titleTypography) {
      case 'hero-title':
        return `${baseClasses} text-5xl md:text-7xl tracking-tight break-words`;
      case 'header-title':
        return `${baseClasses} text-[68px] font-jokker-semibold`;
      case 'custom':
        return baseClasses;
      default:
        return `${baseClasses} text-[68px] font-jokker-semibold`;
    }
  };

  const getSubtitleTypographyClasses = () => {
    const baseClasses = 'text-white mb-8 leading-relaxed';
    
    switch (subtitleTypography) {
      case 'hero-subtitle':
        return `${baseClasses} text-lg md:text-xl`;
      case 'header-subtitle':
        return `${baseClasses} text-lg md:text-xl font-jokker-light`;
      case 'custom':
        return baseClasses;
      default:
        return `${baseClasses} text-lg md:text-xl font-jokker-light`;
    }
  };

  // Get line height classes based on language
  const getLineHeightClasses = () => {
    return isArabic ? 'leading-relaxed lg:leading-relaxed' : 'leading-tight lg:leading-tight';
  };

  const MotionWrapper = enableAnimations ? motion.div : 'div';
  const MotionTitle = enableAnimations ? motion.h1 : 'h1';
  const MotionSubtitle = enableAnimations ? motion.p : 'p';
  const MotionCTA = enableAnimations ? motion.div : 'div';

  return (
    <div 
      className={`relative h-screen bg-cover bg-center flex items-center ${containerClassName}`}
      style={{
        ...getBackgroundStyle(),
        backgroundColor: '#361704' // Loading hero background
      }}
    >
      {/* Background Video (if video type) */}
      {backgroundType === 'video' && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src={backgroundSrc} type="video/mp4" />
          {backgroundFallback && (
            <source src={backgroundFallback} type="image/jpeg" />
          )}
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity, zIndex: 1 }}
        />
      )}
      
      {/* Content container */}
      <div 
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${getContentAlignmentClasses()}`}
        style={getContentStyle()}
      >
        <MotionWrapper
          variants={enableAnimations ? containerVariants : undefined}
          initial={enableAnimations ? "hidden" : undefined}
          animate={enableAnimations ? "visible" : undefined}
          className={`${getLayoutClasses()}`}
        >
          {/* Breadcrumbs */}
          {showBreadcrumbs && (
            <Breadcrumbs rtl={isArabic} breadcrumbs={breadcrumbs} />
          )}
          <MotionTitle
            className={`${getTitleTypographyClasses()} ${getLineHeightClasses()} ${titleClassName}`}
            variants={enableAnimations ? itemVariants : undefined}
          >
            {/* Use Trans component for line break support */}
            <Trans
              i18nKey={title.includes('\\n') ? undefined : title}
              components={[<br />]}
              values={title.includes('\\n') ? undefined : { title }}
            >
              {title.includes('\\n') ? title.split('\\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              )) : title}
            </Trans>
          </MotionTitle>

          {subtitle && (
            <MotionSubtitle
              className={`${getSubtitleTypographyClasses()} ${getLineHeightClasses()} ${subtitleClassName}`}
              style={{ fontSize: '22px' }}
              variants={enableAnimations ? itemVariants : undefined}
            >
              {/* Use Trans component for line break support */}
              <Trans
                i18nKey={subtitle.includes('\\n') ? undefined : subtitle}
                components={[<br />]}
                values={subtitle.includes('\\n') ? undefined : { subtitle }}
              >
                {subtitle.includes('\\n') ? subtitle.split('\\n').map((line, idx) => (
                  <div key={idx}>{line}</div>
                )) : subtitle}
              </Trans>
            </MotionSubtitle>
          )}
          
          {(ctaText || secondaryCtaText) && (
            <MotionCTA variants={enableAnimations ? itemVariants : undefined}>
              <div className="flex flex-col sm:flex-row gap-4">
                {ctaText && (
                  <Button 
                    variant="primary" 
                    className="text-lg px-8 py-4"
                    as={ctaLink ? 'a' : 'button'}
                    {...(ctaLink ? { href: ctaLink } : {})}
                  >
                    {ctaText}
                  </Button>
                )}
                {secondaryCtaText && (
                  <Button 
                    variant="secondary" 
                    className="text-lg px-8 py-4"
                    as={secondaryCtaLink ? 'a' : 'button'}
                    {...(secondaryCtaLink ? { href: secondaryCtaLink } : {})}
                  >
                    {secondaryCtaText}
                  </Button>
                )}
              </div>
            </MotionCTA>
          )}
        </MotionWrapper>
      </div>
    </div>
  );
};

export default ReusableHero; 