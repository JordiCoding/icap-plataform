import React from 'react';
import { motion } from 'framer-motion';
import NavigationCard from './NavigationCard';
import type { NavigationCardProps } from './NavigationCard';

export interface NavigationCardGridProps {
  cards: Omit<NavigationCardProps, 'size'>[];
  layout?: 'two-cards' | 'three-cards' | 'four-grid' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
  alignment?: 'center' | 'start' | 'end';
}

const NavigationCardGrid: React.FC<NavigationCardGridProps> = ({
  cards,
  layout = 'three-cards',
  size = 'md',
  className = '',
  gap = 'md',
  alignment = 'center'
}) => {
  // Gap configurations
  const gapConfig = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  // Layout configurations
  const layoutConfig = {
    'two-cards': 'flex justify-center items-start',
    'three-cards': 'flex justify-center items-start',
    'four-grid': 'grid grid-cols-2 max-w-4xl mx-auto',
    'responsive': 'flex flex-col md:flex-row justify-center items-start'
  };

  // Alignment configurations
  const alignmentConfig = {
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end'
  };

  const containerClasses = `
    ${layoutConfig[layout]} 
    ${gapConfig[gap]} 
    ${alignmentConfig[alignment]}
    group
    ${className}
  `;

  const renderCards = () => {
    switch (layout) {
      case 'two-cards':
        return cards.slice(0, 2).map((card, index) => (
          <NavigationCard
            key={index}
            {...card}
            size={size}
          />
        ));

      case 'three-cards':
        return cards.slice(0, 3).map((card, index) => (
          <NavigationCard
            key={index}
            {...card}
            size={size}
          />
        ));

      case 'four-grid':
        return cards.slice(0, 4).map((card, index) => (
          <NavigationCard
            key={index}
            {...card}
            size={size}
            className="w-full h-[400px]"
          />
        ));

      case 'responsive':
        return cards.slice(0, 3).map((card, index) => (
          <NavigationCard
            key={index}
            {...card}
            size={size}
            className="w-full md:w-auto h-[400px] md:h-auto"
          />
        ));

      default:
        return cards.map((card, index) => (
          <NavigationCard
            key={index}
            {...card}
            size={size}
          />
        ));
    }
  };

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {renderCards()}
    </motion.div>
  );
};

export default NavigationCardGrid; 