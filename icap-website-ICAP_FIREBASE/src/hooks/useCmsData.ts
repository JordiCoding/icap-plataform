// TEMPORARY STUB: CMS data disabled after Hygraph removal
// TODO: Migrate to Strapi if dynamic hero content is needed

import type { HeroContent } from '../types/cms';

export const useCmsData = () => {
  // Return safe defaults - no dynamic content
  return {
    data: { hero: null as HeroContent | null },
    loading: false,
    error: null,
  };
}; 