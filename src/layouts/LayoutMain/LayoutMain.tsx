import { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

interface ILayoutMain {
  children?: ReactNode;
  className?: string;
}

export const LayoutMain: FC<ILayoutMain> = ({ children, className }) => {
  return (
    <div className={cn('max-w-[1920px] min-w-[376px] mx-auto box-border w-full', className)}>
      {children}
    </div>
  );
};
