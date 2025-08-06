import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Props {
  breadcrumbs?: Breadcrumb[];
  rtl?: boolean;
}

const Breadcrumbs: React.FC<Props> = ({ breadcrumbs, rtl = false }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Generate breadcrumbs from current path
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Define special routes that need parent breadcrumbs
  const routeHierarchy: { [key: string]: string[] } = {
    'local-market': ['brokerage'],
    'international-markets': ['brokerage'],
    'margin-lending': ['brokerage'],
  };
  
  const currentRoute = pathSegments[pathSegments.length - 1];
  const parentRoutes = routeHierarchy[currentRoute] || [];
  
  const generatedBreadcrumbs: Breadcrumb[] = [
    { label: t('breadcrumb.home'), href: '/' },
    ...parentRoutes.map(route => ({
      label: t(`breadcrumb.${route}`),
      href: `/${route}`
    })),
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      // Use translation key if available, otherwise convert kebab-case to readable text
      const translationKey = `breadcrumb.${segment}`;
      const label = t(translationKey, { defaultValue: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) });
      return { label, href };
    }),
  ];

  const crumbs = breadcrumbs || generatedBreadcrumbs;

  return (
    <nav aria-label="Breadcrumb" className="text-white text-sm mb-4">
      <ol className="flex items-center space-x-2">
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            {crumb.href && idx !== crumbs.length - 1 ? (
              <Link 
                to={crumb.href} 
                className="hover:underline text-white/70 transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white">{crumb.label}</span>
            )}
            {idx < crumbs.length - 1 && (
              <span className="mx-2 text-white/40">
                {isArabic || rtl ? '‹' : '›'}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 