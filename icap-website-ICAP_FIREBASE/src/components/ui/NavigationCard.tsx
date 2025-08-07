import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface NavigationCardProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  route: string;
  variant?: 'default' | 'large' | 'medium' | 'small';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  title,
  subtitle,
  backgroundImage,
  route,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
  disabled = false
}) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const handleCardClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    } else {
      navigate(route);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  // Size configurations
  const sizeConfig = {
    sm: {
      width: 'w-full max-w-xs',
      height: 'min-h-80',
      titleSize: 'text-xl md:text-2xl',
      subtitleSize: 'text-sm md:text-base',
      padding: 'p-4 md:p-6',
      arrowSize: 'w-8 h-8 md:w-10 md:h-10',
      iconSize: 'w-4 h-4 md:w-5 md:h-5'
    },
    md: {
      width: 'w-full max-w-sm',
      height: 'min-h-96',
      titleSize: 'text-2xl md:text-4xl',
      subtitleSize: 'text-base md:text-lg',
      padding: 'p-6 md:p-8',
      arrowSize: 'w-10 h-10 md:w-12 md:h-12',
      iconSize: 'w-5 h-5 md:w-6 md:h-6'
    },
    lg: {
      width: 'w-full max-w-md',
      height: 'min-h-[28rem]',
      titleSize: 'text-3xl md:text-5xl',
      subtitleSize: 'text-lg md:text-xl',
      padding: 'p-6 md:p-8',
      arrowSize: 'w-12 h-12 md:w-14 md:h-14',
      iconSize: 'w-6 h-6 md:w-7 md:h-7'
    },
    xl: {
      width: 'w-full max-w-lg',
      height: 'min-h-[32rem]',
      titleSize: 'text-4xl md:text-5xl',
      subtitleSize: 'text-lg md:text-xl',
      padding: 'p-6 md:p-8',
      arrowSize: 'w-12 h-12 md:w-14 md:h-14',
      iconSize: 'w-6 h-6 md:w-7 md:h-7'
    }
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className={`
        ${config.width} ${config.height} 
        rounded-[32px] flex flex-col 
        ${config.padding} 
        hover:scale-[1.02] group-hover:scale-[0.99] 
        transition-transform duration-300 
        cursor-pointer relative overflow-hidden
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex={disabled ? -1 : 0}
      role="button"
      aria-label={`Navigate to ${title} page`}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {/* Background Layer - Only this gets flipped */}
      <div 
        className="absolute inset-0 rounded-[32px]"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'radial-gradient(105.43% 97.74% at 81.91% 50.09%, #7F501D 0%, #402106 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isArabic && backgroundImage ? 'scaleX(-1)' : 'none',
        }}
      />
      
      {/* Content - Never flipped */}
      <div className="flex flex-col h-full relative z-10">
        {/* Title */}
        <h3 
          className="navigation-card-title text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        
        {/* Subtitle */}
        <p 
          className="navigation-card-subtitle text-white"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        
        {/* Arrow Button */}
        <button 
          className={`${config.arrowSize} bg-[#F2D794] rounded-lg flex items-center justify-center`}
          disabled={disabled}
        >
          <svg 
            className={`${config.iconSize} text-[#1D1306]`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M7 17L17 7M17 7H7M17 7V17" 
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default NavigationCard; 