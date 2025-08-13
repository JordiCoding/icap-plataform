import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useTypography } from '../../hooks/useTypography';
import { motion, useInView } from 'framer-motion';

const requirements = [
  {
    flag: '/images/flags/saudi.png',
    translationKey: 'marginOverdraft.coverageRequirements.saudi',
    percent: '200%'
  },
  {
    flag: '/images/flags/us.png',
    translationKey: 'marginOverdraft.coverageRequirements.us',
    percent: '200%'
  },
  {
    flag: '/images/flags/Dubai.png',
    translationKey: 'marginOverdraft.coverageRequirements.emirates',
    percent: '300%'
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.09 // faster stagger
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45, // faster
      ease: 'easeOut'
    }
  }
};

const MarginOverdraftSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const isArabic = i18n.language === 'ar';
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative py-[120px] md:py-[160px] overflow-hidden"
      style={{
        backgroundImage: 'url(/images/marginbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Title & Subtitle */}
        <div className={`flex-1 min-w-[320px] max-w-xl ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2
            className={`text-4xl md:text-5xl mb-8 ${getTypographyClasses('title')} ${isArabic ? 'leading-relaxed' : 'leading-tight'}`}
          >
            <Trans
              i18nKey="marginOverdraft.title"
              components={[
                <span className="text-[#EECA60]" />, // Margin gold
                <span className="text-white" />     // Overdraft white
              ]}
            />
          </h2>
          <p className={`text-lg md:text-xl ${getTypographyClasses('body')} text-white`}>
            <Trans
              i18nKey="marginOverdraft.subtitle"
              components={[<br />]}
            />
          </p>
        </div>
        {/* Right: Glassmorphism Cards */}
        <div className="flex-1 flex flex-col gap-8 min-w-[320px] max-w-md w-full">
          {requirements.map((req, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-between px-6 py-5 rounded-[28px] backdrop-blur-md bg-white/10 border border-white/30 shadow-lg"
              style={{ boxShadow: '0 8px 32px 0 rgba(94, 45, 0, 0.10)', width: 485, height: 105 }}
              variants={cardVariants}
            >
              <div className="flex items-center gap-4">
                <img src={req.flag} alt="flag" className="w-12 h-12 rounded-full object-cover" />
                <div className={`font-body-en font-light text-[16px] text-white ${isArabic ? 'text-right' : 'text-left'}`}>
                  <Trans
                    i18nKey={req.translationKey}
                    components={[<br />]}
                  />
                </div>
              </div>
              <div className="font-body-en font-medium text-[22px] text-white ml-6">
                {req.percent}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MarginOverdraftSection;
