import * as React from 'react';

import NextImage from '@/components/NextImage';
import clsxm from '@/lib/clsxm';

type LogoProps = { className?: string };

export default function Logo({ className }: LogoProps) {
  return (
    <NextImage
      className={clsxm('w-20', className)}
      src='/logo.png'
      width='152'
      height='108'
      alt='logo'
    />
  );
}
