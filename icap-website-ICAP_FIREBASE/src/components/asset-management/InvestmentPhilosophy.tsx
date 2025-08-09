import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useTypography } from '../../hooks/useTypography';

interface PhilosophyFeature {
  id: string;
  icon: string;
  title: string;
  alt: string;
}

const InvestmentPhilosophy: React.FC = () => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();

  // Define the philosophy features
  const philosophyFeatures: PhilosophyFeature[] = [
    {
      id: 'long-term-vision',
      icon: '/images/icons/managment1.png',
      title: 'assetManagement.investmentPhilosophy.feature1.title',
      alt: 'Long-Term Vision'
    },
    {
      id: 'research-led-decisions',
      icon: '/images/icons/managment2.png',
      title: 'assetManagement.investmentPhilosophy.feature2.title',
      alt: 'Research-Led Decisions'
    },
    {
      id: 'adaptive-risk-control',
      icon: '/images/icons/managment3.png',
      title: 'assetManagement.investmentPhilosophy.feature3.title',
      alt: 'Adaptive Risk Control'
    }
  ];

  return (
    <section className="relative bg-[#221200] py-[150px] md:py-[200px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/darkbackground.png')" }}
        aria-hidden="true"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className={`text-4xl lg:text-[52px] text-white mb-6 ${getTypographyClasses('title')}`}>
              <Trans
                i18nKey="assetManagement.investmentPhilosophy.title"
                components={[
                  <span style={{ color: '#F3B660' }} />,
                  <br />
                ]}
              />
            </h2>
            <p className={`text-[22px] text-gray-300 max-w-4xl mx-auto ${getTypographyClasses('body')}`}>
              <Trans
                i18nKey="assetManagement.investmentPhilosophy.subtitle"
                components={[<br />]}
              />
            </p>
          </div>

          {/* Philosophy Features - Icons with Titles Only */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {philosophyFeatures.map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="mb-6">
                  {feature.icon.endsWith('.webm') ? (
                    <video
                      src={feature.icon}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-40 h-40 mx-auto object-contain"
                    >
                      <source src={feature.icon} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={feature.icon} 
                      alt={feature.alt} 
                      className="w-40 h-40 mx-auto object-contain"
                      onError={(e) => {
                        console.error('Image failed to load:', feature.icon);
                      }}
                    />
                  )}
                </div>
                <h3 className={`text-[28px] text-white ${getTypographyClasses('title')}`}>
                  <Trans
                    i18nKey={feature.title}
                    components={[<br />]}
                  />
                </h3>
              </div>
            ))}
          </div>

          {/* Full-width Description Paragraph */}
          <div className="max-w-6xl mx-auto">
            <p className={`text-lg text-gray-300 leading-relaxed ${getTypographyClasses('body')}`}>
              {t('assetManagement.investmentPhilosophy.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
