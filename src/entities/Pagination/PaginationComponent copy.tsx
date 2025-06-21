'use client';

import { FC, useEffect } from 'react';
import { usePagination } from '../../features/Pagination/lib/usePagination';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/Pagination';
import { cn } from '@/shared/lib/cn';

type TPaginationComponentProps = {
  className?: string;
  currentPage: number | null;
  totalPages: number | null;
  goToPrevPage: VoidFunction;
  goToNextPage: VoidFunction;
  goToLastPage: VoidFunction;
  goToFirstPage: VoidFunction;
  goToPage: (n: number) => void;
};

export const PaginationComponent: FC<TPaginationComponentProps> = ({
  className,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToLastPage,
  goToFirstPage,
  goToPage,
}) => {
  if (currentPage === null || totalPages === null) return <></>;

  return (
    <Pagination className={cn(`w-[50%]`, className)}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => goToPrevPage()} />
          </PaginationItem>
        )}

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={goToFirstPage}>
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => goToPage(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage <= totalPages - 2 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => goToPage(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage <= totalPages - 1 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={goToLastPage}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage <= totalPages - 1 && (
          <PaginationItem>
            <PaginationNext href="#" onClick={goToNextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
