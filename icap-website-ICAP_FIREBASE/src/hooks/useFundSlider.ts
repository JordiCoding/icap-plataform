import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './useLanguage';
import { INITIAL_FUNDS } from '../components/mutual-funds/MutualFundSlider/constants';
import type { FundCardProps } from '../components/mutual-funds/MutualFundSlider/types';

interface FundSliderData {
  title: string;
  subtitle: string;
  funds: FundCardProps[];
}

export function useFundSlider() {
  const [data, setData] = useState<FundSliderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    async function fetchData() {
      try {
        // Convert the constants data to the expected format
        const funds: FundCardProps[] = INITIAL_FUNDS.map(fund => ({
          id: fund.id,
          title: fund.title,
          titleAr: fund.titleAr,
          description: fund.description,
          descriptionAr: fund.descriptionAr,
          riskLevel: fund.riskLevel,
          isShariaCompliant: fund.isShariaCompliant,
          icon: { url: fund.icon, mimeType: undefined },
          iconEn: { url: fund.icon, mimeType: undefined }
        }));

        const fundSliderData: FundSliderData = {
          title: currentLanguage === 'ar' ? 'صناديقنا الاستثمارية' : 'Our Investment Funds',
          subtitle: currentLanguage === 'ar' ? 'اكتشف مجموعة متنوعة من الصناديق المتوافقة مع الشريعة' : 'Discover our diverse range of Sharia-compliant funds',
          funds: funds
        };

        setData(fundSliderData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load fund data');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentLanguage]);

  return { data, isLoading, error };
} 