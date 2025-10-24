import React, { useRef, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTypography } from '../../hooks/useTypography';

const WhyAlistithmarSection: React.FC = () => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();

  // WebM Video Component
  const VideoIcon: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = "w-40 h-40 mx-auto object-contain" }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    
    const isWebm = useMemo(() => {
      return src.toLowerCase().endsWith('.webm');
    }, [src]);

    useEffect(() => {
      if (isWebm && videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('✅ Video started playing for:', alt);
            })
            .catch((error) => {
              console.warn('⚠️ Video play prevented for:', alt, error);
            });
        }
      }
    }, [src, isWebm, alt]);

    return isWebm ? (
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className={className}
        onError={(e) => {
          console.error('Video failed to load:', src);
        }}
        onLoadStart={() => {
          console.log('Video loading started:', src);
        }}
        onCanPlay={() => {
          console.log('Video can play:', src);
        }}
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        onError={(e) => {
          console.error('Image failed to load:', src);
        }}
        onLoad={() => {
          console.log('Image loaded successfully:', src);
        }}
      />
    );
  };

  return (
    <section 
      className="relative bg-[#221200] py-[150px] md:py-[200px] overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/darkbackground.png)' }}
        aria-hidden="true"
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className={`text-4xl lg:text-[52px] text-[#A44F17] mb-6 ${getTypographyClasses('title')}`}>
              {/* Split the title so 'Why' is colored same as 'Multiple Markets' */}
              {t('whyAlistithmar.title').startsWith('Why') ? (
                <>
                  <span style={{ color: '#A44F17' }}>Why</span>
                  {t('whyAlistithmar.title').slice(3)}
                </>
              ) : t('whyAlistithmar.title').startsWith('لماذا') ? (
                <>
                  <span style={{ color: '#A44F17' }}>لماذا</span>
                  {t('whyAlistithmar.title').slice(4)}
                </>
              ) : (
                t('whyAlistithmar.title')
              )}
            </h2>
            <p className={`text-[22px] text-[#1A1C1E] max-w-4xl mx-auto ${getTypographyClasses('body')}`}>
              {t('whyAlistithmar.subtitle')}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: Secure & Trusted */}
            <div className="text-center">
              <div className="mb-6">
                <VideoIcon
                  src="/images/goldassets/Harrow.png"
                  alt={t('whyAlistithmar.secureTitle')}
                  className="w-40 h-40 mx-auto object-contain"
                />
              </div>
              <h3 className={`text-[28px] text-[#A44F17] mb-4 ${getTypographyClasses('title')}`}>
                {t('whyAlistithmar.secureTitle')}
              </h3>
              <p className={`text-lg text-[#1A1C1E] leading-relaxed ${getTypographyClasses('body')}`}>
                {t('whyAlistithmar.secureDescription')}
              </p>
            </div>

            {/* Card 2: Shariah-Compliant Options */}
            <div className="text-center">
              <div className="mb-6">
                <VideoIcon
                  src="/images/goldassets/Hgraph.png"
                  alt={t('whyAlistithmar.shariaTitle')}
                  className="w-40 h-40 mx-auto object-contain"
                />
              </div>
              <h3 className={`text-[28px] text-[#A44F17] mb-4 ${getTypographyClasses('title')}`}>
                {t('whyAlistithmar.shariaTitle')}
              </h3>
              <p className={`text-lg text-[#1A1C1E] leading-relaxed ${getTypographyClasses('body')}`}>
                {t('whyAlistithmar.shariaDescription')}
              </p>
            </div>

            {/* Card 3: Global Reach, Local Roots */}
            <div className="text-center">
              <div className="mb-6">
                <VideoIcon
                  src="/images/goldassets/HCircle.png"
                  alt={t('whyAlistithmar.globalTitle')}
                  className="w-40 h-40 mx-auto object-contain"
                />
              </div>
              <h3 className={`text-[28px] text-[#A44F17] mb-4 ${getTypographyClasses('title')}`}>
                {t('whyAlistithmar.globalTitle')}
              </h3>
              <p className={`text-lg text-[#1A1C1E] leading-relaxed ${getTypographyClasses('body')}`}>
                {t('whyAlistithmar.globalDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlistithmarSection; 