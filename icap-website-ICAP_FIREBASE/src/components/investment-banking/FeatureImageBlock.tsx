import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useTypography } from '../../hooks/useTypography';

interface FeaturePoint {
  title: string;
  subtitle: string;
}

interface FeatureImageBlockProps {
  image: string;
  title: string;
  points: FeaturePoint[];
  variant: 'text-image' | 'image-text';
}

const FeatureImageBlock: React.FC<FeatureImageBlockProps> = ({ image, title, points, variant }) => {
  const { i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: isArabic ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const textVariants = {
    hidden: { opacity: 0, x: isArabic ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Determine order classes
  let imageOrder = 'order-1';
  let textOrder = 'order-2';
  if (isArabic) {
    if (variant === 'image-text') {
      imageOrder = 'order-2';
      textOrder = 'order-1';
    } else {
      imageOrder = 'order-1';
      textOrder = 'order-2';
    }
  } else {
    if (variant === 'text-image') {
      imageOrder = 'order-2';
      textOrder = 'order-1';
    }
  }

  return (
    <div
      ref={ref}
      className="w-full py-20 flex justify-center"
    >
      <div className={"flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"}>
        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`flex-1 flex justify-center items-center min-w-[320px] ${imageOrder}`}
        >
          <div className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] rounded-[32px] overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt="feature"
              className="object-cover w-full h-full"
              style={{ aspectRatio: '1/1', borderRadius: 32 }}
            />
          </div>
        </motion.div>
        {/* Text block */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`flex-1 min-w-[320px] max-w-xl ${isArabic ? 'text-right items-end' : 'text-left items-start'} ${textOrder}`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <h2
            className={`mb-10 ${getTypographyClasses('title')}`}
            style={{
              fontSize: isArabic ? 36 : 32,
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#A44F17',
              fontFamily: undefined,
            }}
          >
            {title}
          </h2>
          <ul className="flex flex-col gap-7">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img src="/images/icons/point.svg" alt="point" className="w-4 h-4 mt-1" />
                <div>
                  <div
                    className={`${getTypographyClasses('body')} font-normal`}
                    style={{ fontSize: isArabic ? 20 : 18, color: '#232323' }}
                  >
                    {point.title}
                  </div>
                  <div
                    className={`${getTypographyClasses('body')} font-light`}
                    style={{ fontSize: isArabic ? 18 : 16, color: '#7A7A7A', marginTop: 2 }}
                  >
                    {point.subtitle}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureImageBlock;
