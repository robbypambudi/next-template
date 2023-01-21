import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum TypographyVariant {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  's1',
  's2',
  'b1',
  'b2',
  'c1',
  'c2',
  'l1',
  'l2',
  'l3',
}

enum TypographyColor {
  'white',
  'primary',
  'gray',
  'danger',
  'success',
  'warning',
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: keyof typeof TypographyColor;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  className,
  color = 'primary',
  variant = 'p',
  ...rest
}: TypographyProps<T>) {
  const Component = as || 'p';

  return (
    <Component
      className={clsxm(
        // Variants
        [
          variant === 'h1' && 'text-4xl font-bold md:text-6xl',
          variant === 'h2' && 'text-3xl font-semibold md:text-5xl',
          variant === 'h3' && 'text-2xl font-semibold',
          variant === 'h4' && 'text-xl font-normal md:text-2xl',
          variant === 'h5' && 'text-lg font-normal md:text-xl',
          variant === 'h6' && 'text-base font-semibold',
          variant === 'p' && 'text-sm font-normal md:text-base',
          variant === 's1' && 'text-sm font-semibold',
          variant === 's2' && 'text-xs font-semibold',
          variant === 'b1' && 'text-base font-medium',
          variant === 'b2' && 'text-sm font-medium',
          variant === 'c1' && 'text-base font-normal',
          variant === 'c2' && 'md:text-sm font-normal text-sm',
          variant === 'l1' && 'text-base font-light',
          variant === 'l2' && 'text-sm font-light',
          variant === 'l3' && 'text-xs font-light',
        ],

        // Colors
        [
          color === 'primary' && 'text-gray-900',
          color === 'danger' && 'text-red-500',
        ],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
