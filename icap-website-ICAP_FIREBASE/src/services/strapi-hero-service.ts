// Strapi Hero Content API Service
// This service will replace the Hygraph integration for Hero content

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_URL = `${STRAPI_URL}/api`;

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

class StrapiHeroService {
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
      console.error('Strapi API call failed:', error);
      throw error;
    }
  }

  // Get Hero content by locale
  async getHeroContent(locale: 'en' | 'ar'): Promise<HeroContent | null> {
    try {
      const response: StrapiResponse<HeroContent[]> = await this.apiCall(
        `/hero-contents?filters[locale][$eq]=${locale}&populate=*`
      );
      
      // Return the first hero content for this locale
      return response.data?.[0] || null;
    } catch (error) {
      console.error('Failed to fetch hero content:', error);
      return null;
    }
  }

  // Get all Hero content
  async getAllHeroContent(): Promise<HeroContent[]> {
    try {
      const response: StrapiResponse<HeroContent[]> = await this.apiCall(
        '/hero-contents?populate=*'
      );
      return response.data || [];
    } catch (error) {
      console.error('Failed to fetch all hero content:', error);
      return [];
    }
  }

  // Create new Hero content
  async createHeroContent(data: {
    title: string;
    subtitle: string;
    locale: 'en' | 'ar';
  }): Promise<HeroContent | null> {
    try {
      const response: StrapiResponse<HeroContent> = await this.apiCall(
        '/hero-contents',
        {
          method: 'POST',
          body: JSON.stringify({ data }),
        }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to create hero content:', error);
      return null;
    }
  }

  // Update Hero content
  async updateHeroContent(id: number, data: {
    title?: string;
    subtitle?: string;
    locale?: 'en' | 'ar';
  }): Promise<HeroContent | null> {
    try {
      const response: StrapiResponse<HeroContent> = await this.apiCall(
        `/hero-contents/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ data }),
        }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to update hero content:', error);
      return null;
    }
  }
}

// Create and export a singleton instance
const strapiHeroService = new StrapiHeroService();
export default strapiHeroService; 