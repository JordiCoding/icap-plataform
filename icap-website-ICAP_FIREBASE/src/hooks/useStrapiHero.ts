import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import strapiHeroService from '../services/strapi-hero-service';

interface HeroContent {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    locale: 'en' | 'ar';
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export const useStrapiHero = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as 'en' | 'ar';

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching hero content for locale:', currentLanguage);
        const content = await strapiHeroService.getHeroContent(currentLanguage);
        
        console.log('Strapi hero content:', content);
        setHeroContent(content);
      } catch (err) {
        console.error('Failed to fetch Strapi hero data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch hero data');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, [currentLanguage, i18n.language]);

  return {
    data: { hero: heroContent },
    loading,
    error,
  };
}; 