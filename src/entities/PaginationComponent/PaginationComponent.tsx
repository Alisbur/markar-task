import { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';

type TPaginationComponentProps = {
  currentPage: number | null;
  totalPages: number | null;
  goToPrevPage: VoidFunction;
  goToNextPage: VoidFunction;
  goToLastPage: VoidFunction;
  goToFirstPage: VoidFunction;
} & HTMLAttributes<HTMLDivElement>;

export const PaginationComponent: FC<TPaginationComponentProps> = ({
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToLastPage,
  goToFirstPage,
  ...props
}) => {
  if (currentPage === null || totalPages === null) return <></>;

  return (
    <div className={cn(`flex items-center flex-wrap gap-3`, props.className)} {...props}>
      {currentPage > 1 && (
        <Button variant={'ghost'} className={`p-3`} onClick={goToPrevPage}>
          {`<`}
        </Button>
      )}

      {currentPage > 1 && (
        <Button variant={'ghost'} className={`p-3`} onClick={goToFirstPage}>
          1
        </Button>
      )}

      {currentPage > 3 && <span className={'text-m'}>...</span>}

      {currentPage > 3 && (
        <Button variant={'ghost'} className={`p-3`} onClick={goToPrevPage}>
          {currentPage - 1}
        </Button>
      )}

      <Button variant={'ghost'} disabled className={` p-3 border border-[#555]`}>
        {currentPage}
      </Button>

      {currentPage <= totalPages - 3 && (
        <Button variant={'ghost'} className={`p-3`} onClick={goToNextPage}>
          {currentPage + 1}
        </Button>
      )}

      {currentPage < totalPages - 3 && <span className={'text-m'}>...</span>}

      {currentPage <= totalPages - 1 && (
        <Button variant={'ghost'} className={`p-3`} onClick={() => goToLastPage()}>
          {totalPages}
        </Button>
      )}

      {currentPage <= totalPages - 1 && (
        <Button variant={'ghost'} className={`p-3`} onClick={goToNextPage}>
          {`>`}
        </Button>
      )}
    </div>
  );
};
