'use client';

import { useQuery } from '@tanstack/react-query';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { CarCard, CarCardSkeleton } from '@/entities/CarCard';
import { usePagination } from '@/features/Pagination/lib/usePagination';
import { useSearchString } from '@/features/SearchString/lib/useSearchString';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { PaginationBar } from '@/widgets/PaginationBar';
import { fetchData } from '@/shared/api/lib/fetchData';
import { Header } from '@/widgets/Header';
import { FilterBar } from '@/widgets/FilterBar';

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}): ReactNode {
  const [carsData, setCarsData] = useState<TCarModel[]>([]);
  const { setPagination } = usePagination();
  const { newSearchString } = useSearchString();
  const router = useRouter();
  const pathname = usePathname();

  const { data, isLoading, error } = useQuery({
    queryKey: ['cars', searchParams],
    queryFn: () => fetchData(searchParams, true),
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (data && !isLoading && !error) {
      setCarsData(data.data);
      setPagination(data.meta);
    }
    if (error) {
      console.log(error.message);
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    if (newSearchString !== '') router.push(pathname + '?' + newSearchString, { scroll: false });
  }, [newSearchString]);

  const handleCardClick = useCallback((id: number) => {
    console.log('Card', id, 'isCLicked');
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header>
        <FilterBar />
      </Header>
      <main className={`w-full flex flex-col gap-[60px]`}>
        <div
          className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px] gap-y-[20px]`}
        >
          {carsData.length && !isLoading
            ? carsData.map((car) => (
                <CarCard key={car.id} carData={car} onCardClick={handleCardClick} />
              ))
            : new Array(12).fill('').map((_, i) => <CarCardSkeleton key={i} />)}
        </div>
        <div
          className={`flex items-center justify-center w-full h-[100px] border border-red mb-[100px]`}
        >
          <PaginationBar />
        </div>
      </main>
    </>
  );
}
