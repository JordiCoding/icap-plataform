export type RiskLevel = 'low' | 'medium' | 'high';

export interface IconAsset {
  url: string;
  mimeType?: string;
}

export interface Fund {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  riskLevel: RiskLevel;
  isShariaCompliant: boolean;
  icon: string;
}

export interface FundCardProps {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  riskLevel: RiskLevel;
  isShariaCompliant: boolean;
  icon: IconAsset;
  iconEn?: IconAsset;
  className?: string;
}

export interface MutualFundSliderProps {
  className?: string;
} 