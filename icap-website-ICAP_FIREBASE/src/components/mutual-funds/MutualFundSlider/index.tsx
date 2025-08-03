import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FundCard } from './FundCard';
import { useFundSlider } from '../../../hooks/useFundSlider';
import { useTypography } from '../../../hooks/useTypography';
import { useTranslation } from 'react-i18next';

export function MutualFundSlider() {
  const { getTypographyClasses } = useTypography();
  const { data, isLoading, error } = useFundSlider();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [shouldShowNavigation, setShouldShowNavigation] = useState(true);
  const [maxSlide, setMaxSlide] = useState(0);
  const { i18n } = useTranslation();

  // Calculate slides per view based on screen width
  const getSlidesPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  // Update navigation visibility and max slide based on screen size and number of funds
  useEffect(() => {
    const updateSliderSettings = () => {
      if (!data?.funds) return;
      
      const slidesPerView = getSlidesPerView();
      const totalFunds = data.funds.length;
      
      // Show navigation based on number of funds vs visible slides
      setShouldShowNavigation(totalFunds > slidesPerView);
      
      // For page-based navigation: calculate number of pages (groups of 3)
      // Always show 3 funds per page regardless of screen size for pagination
      const fundsPerPage = 3;
      const totalPages = Math.ceil(totalFunds / fundsPerPage);
      setMaxSlide(Math.max(0, totalPages - 1));
    };

    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);
    
    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, [data?.funds]);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    rtl: i18n.language === 'ar',
    slides: { 
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      // Tablet - 2 cards
      '(min-width: 768px)': {
        slides: { 
          perView: 2,
          spacing: 0,
        }
      },
      // Desktop - 3 cards
      '(min-width: 1024px)': {
        slides: { 
          perView: 3,
          spacing: 0,
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
      // Force slider to update with new RTL configuration
      instanceRef.current.update();
    }
  }, [i18n.language, instanceRef]);

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-[1062px] mx-auto px-6 py-12">
        <div className="animate-pulse">
          <div className="h-[454px] bg-gray-200 rounded-[20px]"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !data) {
    return (
      <div className="max-w-[1062px] mx-auto px-6 py-12 text-center">
        <p className={`text-red-500 ${getTypographyClasses('body')}`}>Failed to load mutual funds.</p>
      </div>
    );
  }

  // Defensive check: if no data or no funds, show a message and do not render the slider
  if (!data || !data.funds || data.funds.length === 0) {
    return (
      <div className="max-w-[1062px] mx-auto px-6 py-12 text-center">
        <p className={`text-red-500 ${getTypographyClasses('body')}`}>{error || 'No mutual funds available.'}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1062px] mx-auto px-6">
      {/* Section Title and Subtitle */}
      <div className="text-center mb-12">
        {/* Title: 'Grow' in #A44F17, rest black */}
        <h2 className={`text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.2] tracking-tight ${getTypographyClasses('title')}`}
            style={{ color: 'black' }}>
          {/* Split the title so 'Grow' is colored */}
          {data.title.startsWith('Grow') ? (
            <>
              <span style={{ color: '#A44F17' }}>Grow</span>
              {data.title.slice(4)}
            </>
          ) : (
            data.title
          )}
        </h2>
        {/* Subtitle: all black, preserve bold if present in CMS */}
        <p className={`mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-black max-w-[90%] sm:max-w-[80%] md:max-w-2xl mx-auto whitespace-nowrap ${getTypographyClasses('body')}`}
           dangerouslySetInnerHTML={{ __html: data.subtitle }} />
      </div>

      <div className="py-[12px]">
        <div ref={sliderRef} className="keen-slider">
          {data.funds.map((fund, idx) => (
            <div 
              key={fund.id} 
              className="keen-slider__slide"
              style={{
                minWidth: 'calc(330px + 24px + (0.02 * 330px))',
                minHeight: 'calc(454px + 24px + (0.02 * 454px))',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px'
              }}
            >
              <FundCard {...fund} iconEn={fund.iconEn} />
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && shouldShowNavigation && (
          <div className="flex justify-between items-center mt-12">
            <div className="flex gap-2">
              {[...Array(maxSlide + 1)].map((_, idx) => {
                // Calculate which page we're currently on (groups of 3)
                const currentPage = Math.floor(currentSlide / 3);
                const isActive = currentPage === idx;
                
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      // Navigate to the first slide of the selected page
                      const targetSlide = idx * 3;
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

            <div className="flex gap-4">
              {i18n.language === 'ar' ? (
                <>
                  {/* Next (right) arrow for RTL */}
                  <button
                    onClick={() => {
                      // Navigate to next page (group of 3)
                      const currentPage = Math.floor(currentSlide / 3);
                      const nextPage = Math.min(currentPage + 1, maxSlide);
                      const targetSlide = nextPage * 3;
                      instanceRef.current?.moveToIdx(targetSlide);
                    }}
                    disabled={Math.floor(currentSlide / 3) >= maxSlide}
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
                      const currentPage = Math.floor(currentSlide / 3);
                      const prevPage = Math.max(currentPage - 1, 0);
                      const targetSlide = prevPage * 3;
                      instanceRef.current?.moveToIdx(targetSlide);
                    }}
                    disabled={Math.floor(currentSlide / 3) === 0}
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
                  const currentPage = Math.floor(currentSlide / 3);
                  const prevPage = Math.max(currentPage - 1, 0);
                  const targetSlide = prevPage * 3;
                  instanceRef.current?.moveToIdx(targetSlide);
                }}
                disabled={Math.floor(currentSlide / 3) === 0}
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
                  const currentPage = Math.floor(currentSlide / 3);
                  const nextPage = Math.min(currentPage + 1, maxSlide);
                  const targetSlide = nextPage * 3;
                  instanceRef.current?.moveToIdx(targetSlide);
                }}
                disabled={Math.floor(currentSlide / 3) >= maxSlide}
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
    </div>
  );
} 