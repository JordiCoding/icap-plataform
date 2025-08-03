import { useLanguage } from './useLanguage';

export type TextType = 'title' | 'body' | 'body2' | 'subtitle-hero' | 'hero-title' | 'button';
export type FontWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

// Centralized Typography Configuration
const TYPOGRAPHY_CONFIG = {
  en: {
    title: { family: 'Chap', weight: 'light' as FontWeight, cssClass: 'font-title-en' },
    body: { family: 'Jokker', weight: 'light' as FontWeight, cssClass: 'font-body-en' },
    body2: { family: 'Jokker', weight: 'light' as FontWeight, cssClass: 'font-body-en' }, // Using light for now, easy to change to medium later
    'subtitle-hero': { family: 'Jokker', weight: 'light' as FontWeight, cssClass: 'subtitle-hero' },
    'hero-title': { family: 'Jokker', weight: 'semibold' as FontWeight, cssClass: 'font-body-en' },
    'button': { family: 'Jokker', weight: 'regular' as FontWeight, cssClass: 'font-body-en' }
  },
  ar: {
    title: { family: 'Almarai', weight: 'light' as FontWeight, cssClass: 'font-title-ar' },
    body: { family: 'Riada', weight: 'light' as FontWeight, cssClass: 'font-body-ar' },
    body2: { family: 'Riada', weight: 'light' as FontWeight, cssClass: 'font-body-ar' }, // Only light available for Arabic
    'subtitle-hero': { family: 'Riada', weight: 'light' as FontWeight, cssClass: 'subtitle-hero-ar' },
    'hero-title': { family: 'Almarai', weight: 'bold' as FontWeight, cssClass: 'font-title-ar' },
    'button': { family: 'Riada', weight: 'regular' as FontWeight, cssClass: 'font-body-ar' }
  }
} as const;

export const useTypography = () => {
  const { currentLanguage } = useLanguage();
  
  const getFontClass = (type: TextType): string => {
    const config = TYPOGRAPHY_CONFIG[currentLanguage];
    return config[type].cssClass;
  };
  
  const getFontFamily = (type: TextType): string => {
    const config = TYPOGRAPHY_CONFIG[currentLanguage];
    return `var(--font-${currentLanguage}-${type === 'title' ? 'title' : 'body'})`;
  };
  
  const getFontWeight = (type: TextType): string => {
    const config = TYPOGRAPHY_CONFIG[currentLanguage];
    const weight = config[type].weight;
    
    switch (weight) {
      case 'light': return 'font-light';
      case 'regular': return 'font-normal';
      case 'medium': return 'font-medium';
      case 'semibold': return 'font-semibold';
      case 'bold': return 'font-bold';
      default: return 'font-light';
    }
  };
  
  const getTypographyClasses = (type: TextType): string => {
    return `${getFontClass(type)} ${getFontWeight(type)}`;
  };
  
  return {
    getFontClass,
    getFontFamily,
    getFontWeight,
    getTypographyClasses,
    currentLanguage,
    config: TYPOGRAPHY_CONFIG[currentLanguage]
  };
}; 