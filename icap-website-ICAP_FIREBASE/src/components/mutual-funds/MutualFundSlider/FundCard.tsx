import { useTranslation } from 'react-i18next';
import { useMemo, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { useTypography } from '../../../hooks/useTypography';
import { useLanguage } from '../../../hooks/useLanguage';
import type { FundCardProps } from './types';
import type { IconAsset } from './types';

const RISK_STYLES = {
  low: {
    bg: 'bg-[#E0F0DD]', // Green
    text: 'text-black'
  },
  medium: {
    bg: 'bg-[#F9F3D5]', // Yellow
    text: 'text-black'
  },
  high: {
    bg: 'bg-[#F3D7D7]', // Red
    text: 'text-black'
  }
} as const;

export function FundCard({
  title,
  titleAr,
  description,
  descriptionAr,
  riskLevel,
  isShariaCompliant,
  icon,
  iconEn,
  className
}: FundCardProps) {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { getTypographyClasses } = useTypography();
  const riskStyle = RISK_STYLES[riskLevel];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Use appropriate language content
  const displayTitle = currentLanguage === 'ar' ? titleAr : title;
  const displayDescription = currentLanguage === 'ar' ? descriptionAr : description;

  // Use icon from current locale, or fallback to English/default icon
  const iconUrl = icon?.url || iconEn?.url;

  // Enhanced detection for webm files
  // Check multiple sources: mimeType, file extension, or known Hygraph video URLs
  const isWebm = useMemo(() => {
    if (!iconUrl) return false;
    
    // Check mimeType first (most reliable)
    if (icon?.mimeType === 'video/webm' || iconEn?.mimeType === 'video/webm') {
      return true;
    }
    
    // Check if URL contains webm (for Hygraph URLs that might not have extension)
    if (iconUrl.toLowerCase().includes('webm')) {
      return true;
    }
    
    // Check file extension
    if (iconUrl.toLowerCase().endsWith('.webm')) {
      return true;
    }
    
    // For Hygraph URLs, we can also check if it's a known video asset
    // This is a fallback for when mimeType is not available
    return false;
  }, [iconUrl, icon?.mimeType, iconEn?.mimeType]);

  // Programmatically start video playback
  useEffect(() => {
    if (isWebm && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch((error) => {
            // Video play prevented
          });
      }
    }
  }, [iconUrl, isWebm, title]);

  return (
    <div 
      className={clsx(
        "w-[330px] h-[454px]",
        "bg-white",
        "rounded-[32px]",
        "border border-[#E5E7EB]",
        "hover:scale-[1.02]",
        "transition-transform duration-300",
        "flex flex-col cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Top section: Cream background and icon */}
      <div className="relative w-full flex flex-col items-center justify-center" style={{ height: '35%' }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: '#FAF6ED',
            borderTopLeftRadius: '32px',
            borderTopRightRadius: '32px',
            zIndex: 1,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {iconUrl ? (
            isWebm ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-32 h-32 object-contain"
                onError={(e) => {
                  // Video failed to load
                }}
                onLoadStart={() => {
                  // Video loading started
                }}
                onCanPlay={() => {
                  // Video can play
                }}
              >
                <source src={iconUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={iconUrl} 
                alt={title} 
                className="w-32 h-32 object-contain"
                onError={(e) => {
                  // Image failed to load
                }}
                onLoad={() => {
                  // Image loaded successfully
                }}
              />
            )
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs">No Icon</span>
            </div>
          )}
        </div>
      </div>
      {/* Card content below top section */}
      <div className="flex-1 flex flex-col px-8 pb-8 pt-6">
        <h3 className={clsx(
          "mb-4 font-bold text-gray-900",
          currentLanguage === 'ar' ? 'text-right' : 'text-left',
          getTypographyClasses('title')
        )} style={{ fontSize: 20, lineHeight: '28px' }}>{displayTitle}</h3>
        {/* Badges Row */}
        <div className="flex flex-row items-center gap-3 mb-4">
          {/* Risk Badge */}
          <span className={clsx(
            "flex items-center justify-center px-3",
            riskStyle.bg,
            riskStyle.text,
            "rounded-[8px] h-8 text-[11px] font-medium",
            "whitespace-nowrap flex-shrink-0",
            getTypographyClasses('body')
          )}>
            {t(`mutualFunds.risk.${riskLevel}`)}
          </span>
          {/* Sharia Compliant Badge */}
          {isShariaCompliant && (
            <span className={clsx(
              "flex items-center justify-center px-3 rounded-[8px] h-8 text-[11px] font-medium bg-[#FBF7F1] text-black gap-1",
              "whitespace-nowrap flex-shrink-0",
              getTypographyClasses('body')
            )}>
              {t('mutualFunds.shariaCompliant')}
            </span>
          )}
        </div>
        {/* Description */}
        <p className={clsx(
          "text-gray-600 leading-relaxed",
          currentLanguage === 'ar' ? 'text-right' : 'text-left',
          getTypographyClasses('body')
        )} style={{ fontSize: 16, lineHeight: '26px' }}>{displayDescription}</p>
      </div>
    </div>
  );
}

export default FundCard; 