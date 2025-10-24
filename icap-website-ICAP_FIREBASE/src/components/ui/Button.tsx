import React from 'react';
import clsx from 'clsx';
import { useTypography } from '../../hooks/useTypography';

type ButtonVariant = 'primary' | 'secondary' | 'black' | 'white' | 'open-account' | 'log-in';

interface ButtonProps<C extends React.ElementType = 'button'> {
  as?: C;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const Button = <C extends React.ElementType = 'button'>({
  as,
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>) => {
  const Component = as || 'button';
  const { getTypographyClasses } = useTypography();

  const baseStyles = `inline-block px-8 py-4 transition-colors text-center ${getTypographyClasses('button')}`;

  const variantStyles = {
    primary: 'rounded-[16px] bg-[#A44F17] text-white hover:opacity-90',
    secondary: 'rounded-[32px] bg-transparent border border-white text-white hover:bg-white hover:text-icap-primary',
    black: 'rounded-[32px] bg-black text-white hover:bg-gray-800',
    white: 'rounded-[32px] bg-white text-icap-primary hover:bg-gray-100',
    'open-account': 'rounded-[16px] bg-[#F0E1BC] border border-white text-black hover:opacity-90',
    'log-in': 'rounded-[16px] bg-white/20 border border-white/50 text-black hover:opacity-90',
  };

  return (
    <Component
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button; 