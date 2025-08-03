import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import strapiNewsService from '../services/strapi-news-service';
import type { NewsArticle, UseNewsDataReturn } from '../types/news';

export const useStrapiNews = (): UseNewsDataReturn => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();
  
  // Get current language, ensuring it's either 'en' or 'ar'
  const currentLanguage = (i18n.language === 'ar' ? 'ar' : 'en') as 'en' | 'ar';

  const fetchArticleBySlug = useCallback(async (slug: string): Promise<NewsArticle | null> => {
    try {
      console.log('Fetching article by slug:', slug, 'for locale:', currentLanguage);
      const article = await strapiNewsService.getArticleBySlug(slug, currentLanguage);
      return article;
    } catch (err) {
      console.error('useStrapiNews: Failed to fetch article:', err);
      throw err; // Let the component handle the error
    }
  }, [currentLanguage]);

  // Auto-fetch articles when language changes
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching articles for locale:', currentLanguage);
        const fetchedArticles = await strapiNewsService.getArticles(currentLanguage, 10);
        
        console.log('Strapi articles fetched:', fetchedArticles);
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Failed to fetch news articles from Strapi:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch news articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentLanguage]);

  return {
    articles,
    loading,
    error,
    fetchArticles: async () => {}, // Deprecated, but kept for compatibility
    fetchArticleBySlug
  };
};