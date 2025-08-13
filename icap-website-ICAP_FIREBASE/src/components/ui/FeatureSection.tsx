import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useTypography } from '../../hooks/useTypography';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// Feature Item Interface
export interface FeatureItem {
  id: string;
  icon: string; // URL to image or video
  title: string; // Translation key for title
  description: string; // Translation key for description
  alt?: string; // Alt text for icon
}

// Component Props Interface
export interface FeatureSectionProps {
  // Content
  title: string; // Translation key for main title
  subtitle?: string; // Translation key for subtitle (optional)
  items: FeatureItem[];
  
  // Variant
  variant: 'three-items' | 'four-items' | 'slider';
  
  // Styling
  titleHighlight?: string; // Text to highlight in title (e.g., "Why" in "Why Alistithmar")
  titleHighlightColor?: string; // Color for highlighted text
  backgroundImage?: string; // Background image URL
  className?: string;
  
  // Slider options (for variant 3)
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

// Video/Image Icon Component
const MediaIcon: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string;
}> = ({ src, alt, className = "w-40 h-40 mx-auto object-contain" }) => {
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
    />
  );
};

// Feature Item Component
const FeatureItemComponent: React.FC<{ 
  item: FeatureItem; 
  className?: string;
}> = ({ item, className = "" }) => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();

  return (
    <div className={`text-center ${className}`}>
      <div className="mb-6">
        <MediaIcon
          src={item.icon}
          alt={item.alt || t(item.title)}
          className="w-40 h-40 mx-auto object-contain"
        />
      </div>
      <h3 className={`text-[28px] text-white mb-4 ${getTypographyClasses('title')}`}>
        <Trans
          i18nKey={item.title}
          components={[<br />]}
        />
      </h3>
      <p className={`text-lg text-gray-300 leading-relaxed ${getTypographyClasses('body')}`}>
        <Trans
          i18nKey={item.description}
          components={[<br />]}
        />
      </p>
    </div>
  );
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  items,
  variant,
  titleHighlight,
  titleHighlightColor = '#F3B660',
  backgroundImage = '/images/darkbackground.png',
  className = '',
  slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
}) => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Slider setup for variant 3
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    rtl: i18n.language === 'ar',
    slides: { 
      perView: slidesPerView.mobile || 1,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { 
          perView: slidesPerView.tablet || 2,
          spacing: 24,
        }
      },
      '(min-width: 1024px)': {
        slides: { 
          perView: slidesPerView.desktop || 3,
          spacing: 24,
        }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Update slider when language changes
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [i18n.language, instanceRef]);

  // Render title with highlight
  const renderTitle = () => {
    if (titleHighlight) {
      // For highlighted titles, we need to handle both highlighting and line breaks
      return (
        <Trans
          i18nKey={title}
          components={[
            <span style={{ color: titleHighlightColor }} />,
            <br />
          ]}
        />
      );
    }
    
    // For regular titles, just handle line breaks
    return (
      <Trans
        i18nKey={title}
        components={[<br />]}
      />
    );
  };

  // Render content based on variant
  const renderContent = () => {
    if (variant === 'three-items') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.slice(0, 3).map((item) => (
            <FeatureItemComponent key={item.id} item={item} />
          ))}
        </div>
      );
    }

    if (variant === 'four-items') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items.slice(0, 4).map((item) => (
            <FeatureItemComponent key={item.id} item={item} />
          ))}
        </div>
      );
    }

    if (variant === 'slider') {
      return (
        <div className="relative">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {items.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <FeatureItemComponent item={item} />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {loaded && instanceRef.current && items.length > (slidesPerView.desktop || 3) && (
            <div className="flex justify-between items-center mt-12">
              {/* Pagination Dots - Left Side */}
              <div className="flex gap-2">
                {[...Array(Math.ceil(items.length / (slidesPerView.desktop || 3)))].map((_, idx) => {
                  // Calculate which page we're currently on (groups of 3)
                  const currentPage = Math.floor(currentSlide / (slidesPerView.desktop || 3));
                  const isActive = currentPage === idx;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        // Navigate to the first slide of the selected page
                        const targetSlide = idx * (slidesPerView.desktop || 3);
                        instanceRef.current?.moveToIdx(targetSlide);
                      }}
                      className="transition-all duration-300"
                      aria-label={`Go to page ${idx + 1}`}
                    >
                      <img
                        src={isActive ? "/images/activedot.svg" : "/images/inactivedot.svg"}
                        alt=""
                        className="w-3 h-3"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Navigation Arrows - Right Side */}
              <div className="flex gap-4">
                {i18n.language === 'ar' ? (
                  <>
                    {/* Next (right) arrow for RTL */}
                    <button
                      onClick={() => {
                        // Navigate to next page (group of 3)
                        const currentPage = Math.floor(currentSlide / (slidesPerView.desktop || 3));
                        const maxPage = Math.ceil(items.length / (slidesPerView.desktop || 3)) - 1;
                        const nextPage = Math.min(currentPage + 1, maxPage);
                        const targetSlide = nextPage * (slidesPerView.desktop || 3);
                        instanceRef.current?.moveToIdx(targetSlide);
                      }}
                      disabled={Math.floor(currentSlide / (slidesPerView.desktop || 3)) >= Math.ceil(items.length / (slidesPerView.desktop || 3)) - 1}
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        bg-gradient-to-r from-[#F2D794] to-[#D0A457] text-black
                        hover:opacity-90 disabled:opacity-50
                        transition-all duration-200
                      `}
                      aria-label="Next page"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    {/* Previous (left) arrow for RTL */}
                    <button
                      onClick={() => {
                        // Navigate to previous page (group of 3)
                        const currentPage = Math.floor(currentSlide / (slidesPerView.desktop || 3));
                        const prevPage = Math.max(currentPage - 1, 0);
                        const targetSlide = prevPage * (slidesPerView.desktop || 3);
                        instanceRef.current?.moveToIdx(targetSlide);
                      }}
                      disabled={Math.floor(currentSlide / (slidesPerView.desktop || 3)) === 0}
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        border border-gray-200 bg-white
                        hover:bg-gray-50 disabled:opacity-50
                        transition-all duration-200
                      `}
                      aria-label="Previous page"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    {/* Previous (left) arrow for LTR */}
                    <button
                      onClick={() => {
                        // Navigate to previous page (group of 3)
                        const currentPage = Math.floor(currentSlide / (slidesPerView.desktop || 3));
                        const prevPage = Math.max(currentPage - 1, 0);
                        const targetSlide = prevPage * (slidesPerView.desktop || 3);
                        instanceRef.current?.moveToIdx(targetSlide);
                      }}
                      disabled={Math.floor(currentSlide / (slidesPerView.desktop || 3)) === 0}
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        border border-gray-200 bg-white
                        hover:bg-gray-50 disabled:opacity-50
                        transition-all duration-200
                      `}
                      aria-label="Previous page"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    {/* Next (right) arrow for LTR */}
                    <button
                      onClick={() => {
                        // Navigate to next page (group of 3)
                        const currentPage = Math.floor(currentSlide / (slidesPerView.desktop || 3));
                        const maxPage = Math.ceil(items.length / (slidesPerView.desktop || 3)) - 1;
                        const nextPage = Math.min(currentPage + 1, maxPage);
                        const targetSlide = nextPage * (slidesPerView.desktop || 3);
                        instanceRef.current?.moveToIdx(targetSlide);
                      }}
                      disabled={Math.floor(currentSlide / (slidesPerView.desktop || 3)) >= Math.ceil(items.length / (slidesPerView.desktop || 3)) - 1}
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        bg-gradient-to-r from-[#F2D794] to-[#D0A457] text-black
                        hover:opacity-90 disabled:opacity-50
                        transition-all duration-200
                      `}
                      aria-label="Next page"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <section 
      className={`relative bg-[#221200] py-[150px] md:py-[200px] overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className={`text-4xl lg:text-[52px] text-white mb-6 ${getTypographyClasses('title')}`}>
              {renderTitle()}
            </h2>
            {subtitle && (
              <p className={`text-[22px] text-gray-300 mx-auto ${getTypographyClasses('body')}`}>
                <Trans
                  i18nKey={subtitle}
                  components={[<br />]}
                />
              </p>
            )}
          </div>

          {/* Feature Items */}
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
