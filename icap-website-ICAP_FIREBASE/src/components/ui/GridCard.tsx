import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Button from './Button';

interface GridCardProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  align?: 'top' | 'center' | 'bottom';
  textAlign?: 'left' | 'center' | 'right';
  height?: string;
  className?: string;
  variant?: 'glassmorphism' | 'flat';
  backgroundImage?: string;
  titleTransComponents?: React.ReactElement[];
}

const GridCard: React.FC<GridCardProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref = '#',
  align = 'top',
  textAlign = 'left',
  height = 'h-full',
  className = '',
  variant = 'glassmorphism',
  backgroundImage,
  titleTransComponents
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  // Alignment classes
  const alignmentClasses = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end'
  };

  // Content alignment classes
  const contentAlignmentClasses = {
    top: '',
    center: 'justify-center',
    bottom: 'justify-end'
  };

  // Variant classes
  const variantClasses = {
    glassmorphism: 'glassmorphism-card',
    flat: 'flat-card'
  };

  return (
    <div className={`${height} ${className} ${variantClasses[variant]} flex flex-col ${alignmentClasses[align]} relative overflow-hidden`}>
      {/* Background Image Layer */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: isArabic ? 'scaleX(-1)' : 'none'
          }}
        />
      )}
      
      {/* Content Layer */}
      <div className={`relative z-10 flex flex-col h-full ${contentAlignmentClasses[align]}`}>
        {/* Content Section */}
        <div className={`flex flex-col ${
          textAlign === 'center' ? 'text-center' : 
          textAlign === 'right' ? 'text-right' : 
          isArabic ? 'text-right' : 'text-left'
        }`}>
          {title && (
            <h3 className="card-title">
              <Trans
                i18nKey={title}
                components={titleTransComponents || [<br />]}
              />
            </h3>
          )}
          
          {subtitle && (
            <p className="card-subtitle">
              <Trans
                i18nKey={subtitle}
                components={[<br />]}
              />
            </p>
          )}

          {/* Button Section - Directly after text */}
          {buttonText && (
            <div className="mt-2">
              <Button
                as="a"
                href={buttonHref}
                variant="primary"
                className="w-fit"
              >
                {t(buttonText)}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridCard; 