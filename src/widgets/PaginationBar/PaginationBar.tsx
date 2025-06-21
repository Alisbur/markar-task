import { PaginationComponent } from '@/entities/PaginationComponent/PaginationComponent';
import { usePagination } from '@/features/Pagination';
import { cn } from '@/shared/lib/cn';
import { Select } from '@/shared/ui/Select';
import { FC, HTMLAttributes } from 'react';
import { PAGINATION_LIMIT_OPTIONS } from './config/config';

export const PaginationBar: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const {
    itemsPerPage,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    goToLastPage,
    goToFirstPage,
    setItemsPerPage,
  } = usePagination();

  if (!totalPages) return <></>;

  return (
    <div
      className={cn(
        `w-full py-[30px] px-[15px] grid grid-cols-1 grid-rows-[50px] lg:grid-cols-[1fr_fit-content(600px)_1fr] items-center gap-y-5`,
        className
      )}
      {...props}
    >
      <div className={`hidden lg:block`} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToLastPage={goToLastPage}
        goToFirstPage={goToFirstPage}
        className={`justify-self-center`}
      />
      <div className={`flex gap-6 items-center justify-self-center lg:justify-self-end`}>
        <span className={`text-sm md:text-m font-semibold`}>Показывать по:</span>
        <Select
          className={'ml-auto w-[80px]'}
          paramName={'Items per page'}
          items={PAGINATION_LIMIT_OPTIONS}
          selectedItem={{ label: itemsPerPage?.toString() ?? '-', value: itemsPerPage }}
          setSelectedItem={(_, value) => {
            if (typeof value === 'number') setItemsPerPage(value);
          }}
          placeholder={itemsPerPage?.toString() ?? '-'}
        />
      </div>
    </div>
  );
};
