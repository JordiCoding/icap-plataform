// Strapi News/Articles API Service
// This service will replace the Hygraph integration for News/Articles

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_URL = `${STRAPI_URL}/api`;

interface StrapiArticle {
  id: number;
  attributes: {
    Title: string;
    slug: string;
    excerpt: string;
    content: any; // Rich text blocks from Strapi
    Date: string;
    featured: boolean;
    Media: {
      data: {
        id: number;
        attributes: {
          url: string;
          name: string;
          alternativeText?: string;
        };
      } | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Transform Strapi article to match our existing NewsArticle interface
interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: {
    html: string;
  };
  publishedDate: string;
  featuredImage: {
    url: string;
  };
  heroImage: {
    url: string;
  };
  featured: boolean;
}

class StrapiNewsService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_URL;
  }

  // Generic API call method
  private async apiCall(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Strapi News API call failed:', error);
      throw error;
    }
  }

  // Transform Strapi article to our NewsArticle format
  private transformArticle(strapiArticle: StrapiArticle): NewsArticle {
    const { attributes } = strapiArticle;
    
    // Handle featured image URL
    const featuredImageUrl = attributes.Media?.data?.attributes?.url 
      ? `${STRAPI_URL}${attributes.Media.data.attributes.url}`
      : '';

    // Convert Strapi rich text blocks to HTML
    // For now, we'll handle this simply - you may need to adjust based on your rich text structure
    const contentHtml = this.convertRichTextToHtml(attributes.content);

    return {
      id: strapiArticle.id.toString(),
      slug: attributes.slug,
      title: attributes.Title,
      excerpt: attributes.excerpt,
      content: {
        html: contentHtml
      },
      publishedDate: attributes.Date || attributes.publishedAt,
      featuredImage: {
        url: featuredImageUrl
      },
      heroImage: {
        url: featuredImageUrl // Using same image for hero for now
      },
      featured: attributes.featured || false
    };
  }

  // Convert Strapi rich text blocks to HTML
  // This is a simplified version - you may need to expand based on your content structure
  private convertRichTextToHtml(richTextBlocks: any): string {
    if (!richTextBlocks) return '';
    
    // If it's already a string, return it
    if (typeof richTextBlocks === 'string') {
      return richTextBlocks;
    }

    // If it's rich text blocks, convert to HTML
    // This is a basic implementation - you may need to customize
    if (Array.isArray(richTextBlocks)) {
      return richTextBlocks.map(block => {
        if (block.type === 'paragraph') {
          const text = block.children?.map((child: any) => child.text).join('') || '';
          return `<p>${text}</p>`;
        }
        if (block.type === 'heading') {
          const text = block.children?.map((child: any) => child.text).join('') || '';
          const level = block.level || 2;
          return `<h${level}>${text}</h${level}>`;
        }
        return '';
      }).join('');
    }

    return '';
  }

  // Get all articles for a specific locale with fallback
  async getArticles(locale: 'en' | 'ar', limit: number = 10): Promise<NewsArticle[]> {
    try {
      const response: StrapiResponse<StrapiArticle[]> = await this.apiCall(
        `/articles?locale=${locale}&populate=*&sort=Date:desc&pagination[limit]=${limit}`
      );
      
      // If no articles found for requested locale and it's Arabic, try English as fallback
      if (response.data.length === 0 && locale === 'ar') {
        console.log('No Arabic articles found, falling back to English');
        const fallbackResponse: StrapiResponse<StrapiArticle[]> = await this.apiCall(
          `/articles?locale=en&populate=*&sort=Date:desc&pagination[limit]=${limit}`
        );
        return fallbackResponse.data.map(article => this.transformArticle(article));
      }
      
      return response.data.map(article => this.transformArticle(article));
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      return [];
    }
  }

  // Get featured articles for a specific locale
  async getFeaturedArticles(locale: 'en' | 'ar', limit: number = 5): Promise<NewsArticle[]> {
    try {
      const response: StrapiResponse<StrapiArticle[]> = await this.apiCall(
        `/articles?locale=${locale}&populate=*&filters[featured][$eq]=true&sort=Date:desc&pagination[limit]=${limit}`
      );
      
      return response.data.map(article => this.transformArticle(article));
    } catch (error) {
      console.error('Failed to fetch featured articles:', error);
      return [];
    }
  }

  // Get single article by slug and locale with fallback
  async getArticleBySlug(slug: string, locale: 'en' | 'ar'): Promise<NewsArticle | null> {
    try {
      const response: StrapiResponse<StrapiArticle[]> = await this.apiCall(
        `/articles?locale=${locale}&populate=*&filters[slug][$eq]=${slug}`
      );
      
      if (response.data && response.data.length > 0) {
        return this.transformArticle(response.data[0]);
      }
      
      // If no article found for requested locale and it's Arabic, try English as fallback
      if (locale === 'ar') {
        console.log(`No Arabic article found for slug: ${slug}, falling back to English`);
        const fallbackResponse: StrapiResponse<StrapiArticle[]> = await this.apiCall(
          `/articles?locale=en&populate=*&filters[slug][$eq]=${slug}`
        );
        
        if (fallbackResponse.data && fallbackResponse.data.length > 0) {
          return this.transformArticle(fallbackResponse.data[0]);
        }
      }
      
      return null;
    } catch (error) {
      console.error('Failed to fetch article by slug:', error);
      return null;
    }
  }
}

// Create and export a singleton instance
const strapiNewsService = new StrapiNewsService();
export default strapiNewsService;