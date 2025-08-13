import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import FeatureImageBlock from './FeatureImageBlock';
import { useTypography } from '../../hooks/useTypography';

const placeholderImage = '/images/capitalsolutions1.png';

const slides = [
  {
    image: '/images/investmentbanking/banking1.png',
    titleKey: 'capitalSolutions.slide2.title',
    features: [
      { titleKey: 'capitalSolutions.slide2.feature1.title', subtitleKey: 'capitalSolutions.slide2.feature1.subtitle' },
      { titleKey: 'capitalSolutions.slide2.feature2.title', subtitleKey: 'capitalSolutions.slide2.feature2.subtitle' },
      { titleKey: 'capitalSolutions.slide2.feature3.title', subtitleKey: 'capitalSolutions.slide2.feature3.subtitle' },
      { titleKey: 'capitalSolutions.slide2.feature4.title', subtitleKey: 'capitalSolutions.slide2.feature4.subtitle' },
    ],
    variant: 'image-text' as 'image-text',
  },
  {
    image: '/images/investmentbanking/banking2.png',
    titleKey: 'capitalSolutions.slide3.title',
    features: [
      { titleKey: 'capitalSolutions.slide3.feature1.title', subtitleKey: 'capitalSolutions.slide3.feature1.subtitle' },
      { titleKey: 'capitalSolutions.slide3.feature2.title', subtitleKey: 'capitalSolutions.slide3.feature2.subtitle' },
      { titleKey: 'capitalSolutions.slide3.feature3.title', subtitleKey: 'capitalSolutions.slide3.feature3.subtitle' },
      { titleKey: 'capitalSolutions.slide3.feature4.title', subtitleKey: 'capitalSolutions.slide3.feature4.subtitle' },
    ],
    variant: 'text-image' as 'text-image',
  },
  {
    image: '/images/investmentbanking/banking3.png',
    titleKey: 'capitalSolutions.slide4.title',
    features: [
      { titleKey: 'capitalSolutions.slide4.feature1.title', subtitleKey: 'capitalSolutions.slide4.feature1.subtitle' },
      { titleKey: 'capitalSolutions.slide4.feature2.title', subtitleKey: 'capitalSolutions.slide4.feature2.subtitle' },
      { titleKey: 'capitalSolutions.slide4.feature3.title', subtitleKey: 'capitalSolutions.slide4.feature3.subtitle' },
      { titleKey: 'capitalSolutions.slide4.feature4.title', subtitleKey: 'capitalSolutions.slide4.feature4.subtitle' },
    ],
    variant: 'image-text' as 'image-text',
  },
  {
    image: '/images/investmentbanking/banking4.png',
    titleKey: 'capitalSolutions.slide5.title',
    features: [
      { titleKey: 'capitalSolutions.slide5.feature1.title', subtitleKey: 'capitalSolutions.slide5.feature1.subtitle' },
      { titleKey: 'capitalSolutions.slide5.feature2.title', subtitleKey: 'capitalSolutions.slide5.feature2.subtitle' },
      { titleKey: 'capitalSolutions.slide5.feature3.title', subtitleKey: 'capitalSolutions.slide5.feature3.subtitle' },
      { titleKey: 'capitalSolutions.slide5.feature4.title', subtitleKey: 'capitalSolutions.slide5.feature4.subtitle' },
    ],
    variant: 'text-image' as 'text-image',
  },
  {
    image: '/images/investmentbanking/banking5.png',
    titleKey: 'capitalSolutions.slide6.title',
    features: [
      { titleKey: 'capitalSolutions.slide6.feature1.title', subtitleKey: 'capitalSolutions.slide6.feature1.subtitle' },
      { titleKey: 'capitalSolutions.slide6.feature2.title', subtitleKey: 'capitalSolutions.slide6.feature2.subtitle' },
      { titleKey: 'capitalSolutions.slide6.feature3.title', subtitleKey: 'capitalSolutions.slide6.feature3.subtitle' },
      { titleKey: 'capitalSolutions.slide6.feature4.title', subtitleKey: 'capitalSolutions.slide6.feature4.subtitle' },
    ],
    variant: 'image-text' as 'image-text',
  },
  {
    image: '/images/investmentbanking/banking6.png',
    titleKey: 'capitalSolutions.slide7.title',
    features: [
      { titleKey: 'capitalSolutions.slide7.feature1.title', subtitleKey: 'capitalSolutions.slide7.feature1.subtitle' },
      { titleKey: 'capitalSolutions.slide7.feature2.title', subtitleKey: 'capitalSolutions.slide7.feature2.subtitle' },
      { titleKey: 'capitalSolutions.slide7.feature3.title', subtitleKey: 'capitalSolutions.slide7.feature3.subtitle' },
      { titleKey: 'capitalSolutions.slide7.feature4.title', subtitleKey: 'capitalSolutions.slide7.feature4.subtitle' },
      { titleKey: 'capitalSolutions.slide7.feature5.title', subtitleKey: 'capitalSolutions.slide7.feature5.subtitle' },
    ],
    variant: 'text-image' as 'text-image',
  },
];

const CapitalSolutionsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const isArabic = i18n.language === 'ar';

  return (
    <section className="w-full">
      {/* Slide 1: Big title and subtitle */}
      <div className="w-full max-w-4xl mx-auto text-center py-24">
        <h1 className={`text-5xl md:text-6xl font-bold mb-8 ${getTypographyClasses('title')}`}
            style={{ lineHeight: 1.15 }}>
          {t('capitalSolutions.slide1.title.pre')}{' '}
          <span className="text-[#A44F17]">{t('capitalSolutions.slide1.title.accent')}</span>
        </h1>
        <p className={`text-xl md:text-2xl text-[#635E5E] ${getTypographyClasses('body')}`}
           style={{ lineHeight: 1.5 }}>
          {t('capitalSolutions.slide1.subtitle')}
        </p>
      </div>
      {/* Slides 2-7 */}
      {slides.map((slide, idx) => (
        <FeatureImageBlock
          key={idx}
          image={slide.image}
          title={t(slide.titleKey)}
          points={slide.features.map(f => ({
            title: t(f.titleKey),
            subtitle: t(f.subtitleKey),
          }))}
          variant={slide.variant}
        />
      ))}
    </section>
  );
};

export default CapitalSolutionsSection;
