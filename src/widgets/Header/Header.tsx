'use client';

import { useFilters } from '@/features/Filters/model/useFilters';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { cn } from '@/shared/lib/cn';
import { FC, HTMLAttributes } from 'react';
import { FilterBar } from '../FilterBar/FilterBar';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  const filters = useFilters();

  return (
    <header
      className={cn(
        `w-full p-[30px] flex items-center justify-center
        bg-red border border-red rounded-es-sm shadow-md mb-[30px]`,
        className
      )}
    >
      <FilterBar />
      {children}
    </header>
  );
};
