import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTypography } from '../../hooks/useTypography';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

interface LeadCaptureSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onFormSubmit?: (data: { fullName: string; mobileNumber: string }) => void;
  className?: string;
}

const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({
  title = 'leadCapture.title',
  subtitle = 'leadCapture.subtitle',
  buttonText = 'leadCapture.buttonText',
  onFormSubmit,
  className = '',
}) => {
  const { t, i18n } = useTranslation();
  const { getTypographyClasses } = useTypography();
  const isArabic = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
  });

  const handleInputChange = (field: 'fullName' | 'mobileNumber', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  // Split title for accent ("Investment Banking" gets copper accent in English, "الخدمات المصرفية الاستثمارية" in Arabic)
  const titleText = t(title);
  const words = titleText.split(' ');
  
  let beforeAccent: string[], accentWords: string[], afterAccent: string[];
  
  if (isArabic) {
    // Arabic: accent "الخدمات المصرفية الاستثمارية"
    const accentStartIndex = words.findIndex(word => word === 'الخدمات');
    const accentEndIndex = accentStartIndex + 2; // "الخدمات المصرفية الاستثمارية" is 3 words
    
    beforeAccent = words.slice(0, accentStartIndex);
    accentWords = words.slice(accentStartIndex, accentEndIndex + 1);
    afterAccent = words.slice(accentEndIndex + 1);
  } else {
    // English: accent "Investment Banking"
    const accentStartIndex = words.findIndex(word => word === 'Investment');
    const accentEndIndex = accentStartIndex + 1; // "Investment Banking" is 2 words
    
    beforeAccent = words.slice(0, accentStartIndex);
    accentWords = words.slice(accentStartIndex, accentEndIndex + 1);
    afterAccent = words.slice(accentEndIndex + 1);
  }

  return (
    <section
      className={`w-full py-48 relative ${className}`}
      style={{
        backgroundImage: 'url(/images/content01-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-6 ${getTypographyClasses('title')}`}
          style={{ lineHeight: 1.2 }}
        >
          {beforeAccent.join(' ')}{' '}
          <span className="text-[#A44F17]">{accentWords.join(' ')}</span>
          {afterAccent.length > 0 && ' ' + afterAccent.join(' ')}
        </h2>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-center mb-12 text-[#232323] ${getTypographyClasses('body')}`}
          style={{ lineHeight: 1.6 }}
        >
          {t(subtitle)}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
          {/* Input Fields Container */}
          <div className={`flex gap-6 justify-center w-full ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Full Name Input */}
            <InputField
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(value) => handleInputChange('fullName', value)}
              placeholder={t('leadCapture.fullNamePlaceholder')}
            />

            {/* Mobile Number Input */}
            <InputField
              id="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={(value) => handleInputChange('mobileNumber', value)}
              placeholder={t('leadCapture.mobileNumberPlaceholder')}
            />
          </div>

          {/* Button */}
          <Button
            type="submit"
            variant="primary"
            className="px-8 py-4 text-lg"
          >
            {t(buttonText)}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
