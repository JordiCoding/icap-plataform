import type { Fund } from './types';

export const INITIAL_FUNDS: Fund[] = [
  {
    id: 'saudi-equity-fund',
    title: 'Saudi Equity Fund',
    titleAr: 'صندوق الأسهم السعودية',
    description: 'Aims to achieve long-term capital growth through investing in Saudi equities and IPOs in the Saudi stock market.',
    descriptionAr: 'يهدف إلى تحقيق نمو رأس المال على المدى الطويل من خلال الاستثمار في الأسهم السعودية والاكتتابات العامة في السوق السعودي.',
    riskLevel: 'high',
    isShariaCompliant: false,
    icon: '/images/square.webm'
  },
  {
    id: 'saudi-companies-fund',
    title: 'Saudi Companies Fund',
    titleAr: 'صندوق الشركات السعودية',
    description: 'Seeks to realize long-term capital growth through investing in Shariah-compliant Saudi equities and IPOs in the Saudi stock market.',
    descriptionAr: 'يسعى إلى تحقيق نمو رأس المال على المدى الطويل من خلال الاستثمار في الأسهم السعودية المتوافقة مع الشريعة والاكتتابات العامة في السوق السعودي.',
    riskLevel: 'high',
    isShariaCompliant: true,
    icon: '/images/triangle.webm'
  },
  {
    id: 'mena-equity-fund-new',
    title: 'MENA Equity Fund',
    titleAr: 'صندوق أسهم الشرق الأوسط وشمال أفريقيا',
    description: 'Pursues long-term growth through diversified investments in equities listed in MENA Markets.',
    descriptionAr: 'يسعى إلى النمو طويل المدى من خلال استثمارات متنوعة في الأسهم المدرجة في أسواق الشرق الأوسط وشمال أفريقيا.',
    riskLevel: 'high',
    isShariaCompliant: false,
    icon: '/images/rombo.webm'
  },
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
  }
];

export const SLIDES_PER_VIEW = {
  default: 3
} as const; 