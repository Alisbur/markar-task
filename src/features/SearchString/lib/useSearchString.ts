import { useFilters } from '@/features/Filters/model/useFilters';
import { usePagination } from '@/features/Pagination/lib/usePagination';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useSearchString = () => {
  const searchParams = useSearchParams();
  const pagination = usePagination();
  const filters = useFilters();
  const [newSearchParams, setNewSearchParams] = useState<URLSearchParams>();

  useEffect(() => {
    const filter: TFilter | null = searchParams.get('_sort') as TFilter;
    const sort: TSort | null = searchParams.get('_order') as TSort;

    if (filter && (filter !== filters.filter || sort !== filters.sort))
      filters.setFilter({ filter, sort });

    console.log('FILTER', filter);
    console.log('SORT', sort);
    console.log('PAGE', pagination.currentPage);
    console.log('LIMIT', pagination.itemsPerPage);

    const page: string | null = searchParams.get('_page');
    const limit: string | null = searchParams.get('_limit');

    if (!page) 
      filters.setFilter({ filter, sort });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (pagination.itemsPerPage) params.set('_limit', pagination.itemsPerPage.toString());
    if (pagination.currentPage) params.set('_page', pagination.currentPage.toString());
    console.log('Im IN USEFFECT');
    if (filters.filter && filters.sort) {
      params.set('_sort', filters.filter);
      params.set('_order', filters.sort);
    }
    setNewSearchParams(params);
    console.log('PARAMS', params.toString());
  }, [pagination.currentPage, pagination.itemsPerPage, filters.filter, filters.sort]);

  return { newSearchString: newSearchParams?.toString() };
};
