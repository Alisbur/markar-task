import { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

export const LayoutMain: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return (
    <div className={cn('max-w-[1920px] min-w-[376px] mx-auto box-border w-full', className)}>
      {children}
    </div>
  );
};
