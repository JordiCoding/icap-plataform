import React, { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';
import Button from '../ui/Button';

const MarginSection2: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isArabic = i18n.language === 'ar';
  
  // Debug: Log the current language
  console.log('Current language:', i18n.language);
  console.log('Is Arabic:', isArabic);
  

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scaleX: isArabic ? -1 : 1,
      transition: { 
        duration: 0.8,
        scaleX: { duration: 0 } // No animation for flipping
      } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section 
      ref={ref}
      className="relative bg-white h-[777px] md:h-auto py-8 md:py-16 overflow-hidden"
    >
      {/* Mobile Layout */}
      <div className="md:hidden h-full relative">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat px-2" 
             style={{ backgroundImage: 'url(/images/backgroundmobile/MHomeMargin.png)' }} />
        
        {/* Mobile Text Content - Inside the image container */}
        <div className="absolute inset-0 flex items-start justify-center pt-8">
          <motion.div 
            className="text-center max-w-sm mx-auto"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Title */}
            <h2 className={`text-[28px] text-black leading-tight mb-6 ${getTypographyClasses('title')}`}>
              <Trans
                i18nKey="marginLendingHome.title"
                components={[
                  <span className="text-[#A44F17]" />, // <0> - colored text
                  <br />, // <1/> - line break
                ]}
              />
            </h2>
            
            {/* Subtitle */}
            <p className={`text-[14px] text-[#635E5E] leading-relaxed mb-8 ${getTypographyClasses('body')}`}>
              <Trans
                i18nKey="marginLendingHome.subtitle"
                components={[
                  <span className="font-bold" />, // <0> - bold text
                  <br />, // <1/> - line break
                  <span className="font-bold" />, // <2> - bold text
                ]}
              />
            </p>
            
            {/* Button */}
            <Button 
              variant="black" 
              as="a" 
              href="#"
              className="w-fit"
            >
              {t('marginLendingHome.button')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full flex items-center justify-center px-4 lg:px-8">
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Desktop Image */}
          <motion.img
            src="/images/background/HomeMarginlending1.png"
            alt="Margin Lending Main Panel"
            className="max-w-full h-auto object-contain"
            style={{
              transformOrigin: 'center'
            }}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          
          {/* Desktop Text Content Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center md:${isArabic ? 'justify-end' : 'justify-start'}`}>
            <motion.div 
              className={`max-w-2xl px-4 md:absolute md:${isArabic ? 'text-right right-20 top-1/2 -translate-y-1/2' : 'text-left left-20 top-1/2 -translate-y-1/2'} text-center md:text-left`}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Title */}
              <h2 className={`text-[28px] md:text-[52px] text-black leading-tight mb-6 ${getTypographyClasses('title')}`}>
                <Trans
                  i18nKey="marginLendingHome.title"
                  components={[
                    <span className="text-[#A44F17]" />, // <0> - colored text
                    <br />, // <1/> - line break
                  ]}
                />
              </h2>
              
              {/* Subtitle */}
              <p className={`text-[14px] md:text-[22px] text-[#635E5E] leading-relaxed mb-8 ${getTypographyClasses('body')}`}>
                <Trans
                  i18nKey="marginLendingHome.subtitle"
                  components={[
                    <span className="font-bold" />, // <0> - bold text
                    <br />, // <1/> - line break
                    <span className="font-bold" />, // <2> - bold text
                  ]}
                />
              </p>
              
              {/* Button */}
              <Button 
                variant="black" 
                as="a" 
                href="#"
                className="w-fit"
              >
                {t('marginLendingHome.button')}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MarginSection2;
