import type { Fund } from './types';

export const INITIAL_FUNDS: Fund[] = [
  {
    id: 'diversified-fund',
    title: 'Diversified Fund',
    titleAr: 'صندوق متنوع',
    description: 'A diversified mix of Sharia-compliant Sukuk, fixed income, trade finance, money market instruments, and similar funds',
    descriptionAr: 'مزيج متنوع من الصكوك المتوافقة مع الشريعة، والدخل الثابت، وتمويل التجارة، وأدوات سوق النقد، والصناديق المشابهة',
    riskLevel: 'low',
    isShariaCompliant: true,
    icon: '/images/rombo.webm'
  },
  {
    id: 'mena-equity-fund',
    title: 'MENA Equity Fund',
    titleAr: 'صندوق أسهم الشرق الأوسط وشمال أفريقيا',
    description: 'A diversified portfolio of listed equities, IPOs, REITs, ETFs, short-term instruments, and trade finance products',
    descriptionAr: 'محفظة متنوعة من الأسهم المدرجة، والاكتتابات العامة، وصناديق الاستثمار العقاري، والصناديق المتداولة، والأدوات قصيرة الأجل، ومنتجات تمويل التجارة',
    riskLevel: 'medium',
    isShariaCompliant: true,
    icon: '/images/square.webm'
  },
  {
    id: 'freestyle-equity-fund',
    title: 'Freestyle Equity Fund',
    titleAr: 'صندوق الأسهم الحرة',
    description: 'A balanced mix of Saudi equities, public offerings, short-term Islamic instruments, trade finance, and similar funds',
    descriptionAr: 'مزيج متوازن من الأسهم السعودية، والعروض العامة، والأدوات الإسلامية قصيرة الأجل، وتمويل التجارة، والصناديق المشابهة',
    riskLevel: 'high',
    isShariaCompliant: true,
    icon: '/images/triangle.webm'
  },
  {
    id: 'global-sukuk-fund',
    title: 'Global Sukuk Fund',
    titleAr: 'صندوق الصكوك العالمية',
    description: 'International Sharia-compliant fixed income securities and Sukuk investments across various markets',
    descriptionAr: 'الأوراق المالية ذات الدخل الثابت المتوافقة مع الشريعة والاستثمارات في الصكوك عبر الأسواق المختلفة',
    riskLevel: 'low',
    isShariaCompliant: true,
    icon: '/images/rombo.webm'
  },
  {
    id: 'money-market-fund',
    title: 'Money Market Fund',
    titleAr: 'صندوق سوق النقد',
    description: 'Short-term, highly liquid Sharia-compliant investments in money market instruments and trade finance',
    descriptionAr: 'استثمارات قصيرة الأجل عالية السيولة متوافقة مع الشريعة في أدوات سوق النقد وتمويل التجارة',
    riskLevel: 'low',
    isShariaCompliant: true,
    icon: '/images/square.webm'
  },
  {
    id: 'real-estate-fund',
    title: 'Real Estate Fund',
    titleAr: 'صندوق العقارات',
    description: 'Direct and indirect investments in premium real estate assets and REITs across the MENA region',
    descriptionAr: 'استثمارات مباشرة وغير مباشرة في الأصول العقارية المتميزة وصناديق الاستثمار العقاري عبر منطقة الشرق الأوسط وشمال أفريقيا',
    riskLevel: 'medium',
    isShariaCompliant: true,
    icon: '/images/triangle.webm'
  },
  {
    id: 'balanced-fund',
    title: 'Balanced Fund',
    titleAr: 'الصندوق المتوازن',
    description: 'Strategic allocation across multiple asset classes including equities, Sukuk, and alternative investments',
    descriptionAr: 'توزيع استراتيجي عبر فئات أصول متعددة تشمل الأسهم والصكوك والاستثمارات البديلة',
    riskLevel: 'medium',
    isShariaCompliant: true,
    icon: '/images/rombo.webm'
  },
  {
    id: 'growth-fund',
    title: 'Growth Fund',
    titleAr: 'صندوق النمو',
    description: 'Aggressive growth strategy focusing on emerging opportunities in the MENA region and beyond',
    descriptionAr: 'استراتيجية نمو عدوانية تركز على الفرص الناشئة في منطقة الشرق الأوسط وشمال أفريقيا وما بعدها',
    riskLevel: 'high',
    isShariaCompliant: true,
    icon: '/images/square.webm'
  }
];

export const SLIDES_PER_VIEW = {
  default: 3
} as const; 