import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import NavigationCardGrid from './NavigationCardGrid';
import type { NavigationCardProps } from './NavigationCard';

export interface NavigationCardSectionProps {
  title: string;
  subtitle?: string;
  cards: Omit<NavigationCardProps, 'size'>[];
  layout?: 'two-cards' | 'three-cards' | 'four-grid' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  backgroundImage?: string;
  titleTransComponents?: React.ReactElement[];
  showControls?: boolean;
  onLayoutChange?: (layout: string) => void;
  currentLayout?: string;
}

const NavigationCardSection: React.FC<NavigationCardSectionProps> = ({
  title,
  subtitle,
  cards,
  layout = 'three-cards',
  size = 'md',
  className = '',
  backgroundImage,
  titleTransComponents = [<span className="text-[#A44F17]" key="highlight" />],
  showControls = false,
  onLayoutChange,
  currentLayout
}) => {
  const { t } = useTranslation();

  const layoutOptions = [
    { key: 'two-cards', label: '2-Card Layout' },
    { key: 'three-cards', label: '3-Card Layout' },
    { key: 'four-grid', label: '4-Card Grid' },
    { key: 'responsive', label: 'Responsive Layout' }
  ];

  return (
    <section 
      className={`py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="section-title text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Trans
              i18nKey={title}
              components={titleTransComponents}
            />
          </motion.h2>
          
          {subtitle && (
            <motion.p
              className="section-subtitle text-black leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: t(subtitle) }}
            />
          )}
        </div>

        {/* Interactive Controls */}
        {showControls && onLayoutChange && (
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            {layoutOptions.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onLayoutChange(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentLayout === key
                    ? 'bg-[#A44F17] text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Navigation Cards Grid */}
        <NavigationCardGrid
          cards={cards}
          layout={layout}
          size={size}
        />
      </div>
    </section>
  );
};

export default NavigationCardSection; 