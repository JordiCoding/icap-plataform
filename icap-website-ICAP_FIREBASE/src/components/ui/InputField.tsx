import React from 'react';
import { useTranslation } from 'react-i18next';

interface InputFieldProps {
  id: string;
  type: 'text' | 'tel' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  className = '',
  required = false,
}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className={`lead-capture-input ${className}`}
      style={{
        fontFamily: isArabic ? 'var(--font-ar-body)' : 'var(--font-en-body)',
      }}
      dir={isArabic ? 'rtl' : 'ltr'}
    />
  );
};

export default InputField;
