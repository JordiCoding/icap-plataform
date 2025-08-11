import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureImageBlock from './FeatureImageBlock';

const CapitalSolutions: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Points: use translation keys for i18n
  const points = [
    {
      title: t('capitalSolutions.point1.title'),
      subtitle: t('capitalSolutions.point1.subtitle'),
    },
    {
      title: t('capitalSolutions.point2.title'),
      subtitle: t('capitalSolutions.point2.subtitle'),
    },
    {
      title: t('capitalSolutions.point3.title'),
      subtitle: t('capitalSolutions.point3.subtitle'),
    },
    {
      title: t('capitalSolutions.point4.title'),
      subtitle: t('capitalSolutions.point4.subtitle'),
    },
  ];

  return (
    <FeatureImageBlock
      image="/images/capitalsolutions1.png"
      title={t('capitalSolutions.title')}
      points={points}
      imageLeft={!isArabic}
    />
  );
};

export default CapitalSolutions;
