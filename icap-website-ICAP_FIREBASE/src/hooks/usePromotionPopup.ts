// TEMPORARY STUB: Promotion popups disabled after Hygraph removal
// TODO: Migrate to Strapi if promotional popups are needed

import type { PromotionPopup } from '../types/promotion';

export const usePromotionPopup = () => {
  // Return safe defaults - no popups shown
  const closePopup = () => {
    // No-op
  };

  return {
    popup: null as PromotionPopup | null,
    isVisible: false,
    closePopup,
    loading: false,
    error: null
  };
}; 