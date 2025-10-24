import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useTypography } from '../../hooks/useTypography';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
// import { useCmsData } from '../../hooks/useCmsData'; // Disabled after Hygraph removal

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { getTypographyClasses } = useTypography();
  return (
    <Link to={href} className={`text-black hover:text-primary-300 transition-colors duration-200 ${getTypographyClasses('body')}`}>
      {children}
    </Link>
  );
};

const NavLinkDropdown = ({ title, children, isOpen, onClick }: { title: string; children: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
  const { getTypographyClasses } = useTypography();
  return (
    <div className="relative group">
      <button onClick={onClick} className={`text-black hover:text-primary-300 transition-colors duration-200 flex items-center gap-2 ${getTypographyClasses('body')}`}>
        <span>{title}</span>
        <img src="/icons/chevron-down.svg" alt="dropdown" className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && children}
    </div>
  );
};

interface HeaderProps {
  background?: string;
  position?: 'absolute' | 'relative';
}

const Header: React.FC<HeaderProps> = ({ background, position = 'absolute' }) => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { getTypographyClasses } = useTypography();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Set CTA button labels using translation keys only
  const ctaPrimary = t('home.openAccount');
  const ctaSecondary = t('home.login');

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdown = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  return (
    <>
      <header 
        className={`${position} top-0 left-0 w-full z-10 py-4 bg-transparent`}
        style={{ backgroundColor: background || 'transparent' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Block 1: Logo + Links */}
            <div className="flex items-center gap-6">
              <Link to="/">
                <img className="h-12 w-auto" src="/logo/icap-logo.png" alt="ICAP Logo" />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <NavLink href="/brokerage">{t('navigation.brokerage')}</NavLink>
                <NavLink href="/asset-management">{t('navigation.assetManagment')}</NavLink>
                <NavLink href="/investment-banking">{t('navigation.investmentBanking')}</NavLink>
                <NavLink href="/real-estate">{t('navigation.realEstate')}</NavLink>
                <NavLink href="/about">{t('navigation.about')}</NavLink>
                {/* Removed Newsroom link */}
              </nav>
            </div>

            {/* Block 2: Search, Language Toggle, Buttons */}
            <div className="hidden md:flex items-center gap-6">
              <button>
                <img src="/icons/search.svg" alt="Search" className="w-6 h-6 filter brightness-0" />
              </button>
              <button
                onClick={toggleLanguage}
                className={`text-black hover:text-primary-300 transition-colors duration-200 font-medium font-title-ar font-normal text-base`}
              >
                {currentLanguage === 'en' ? 'العربية' : 'EN'}
              </button>
              {/* CTA Buttons with new variants */}
              <Button variant="log-in" className="px-4 py-2 text-sm">{ctaSecondary}</Button>
              <Button variant="open-account" className="px-4 py-2 text-sm">{ctaPrimary}</Button>
            </div>

            {/* Mobile: Arabic Language Toggle, Search, Hamburger Menu */}
            <div className="md:hidden flex items-center gap-6">
              {/* Arabic Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`text-black hover:text-primary-300 transition-colors duration-200 font-medium font-title-ar font-normal text-base`}
              >
                {currentLanguage === 'en' ? 'العربية' : 'EN'}
              </button>
              
              {/* Search Icon */}
              <button>
                <img src="/icons/search.svg" alt="Search" className="w-6 h-6 filter brightness-0" />
              </button>
              
              {/* Hamburger Menu Button */}
              <button onClick={toggleMobileMenu} className="text-black">
                {/* Hamburger Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Header; 