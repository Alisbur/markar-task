'use client';

import { normalizeResponseModel } from '@/shared/api';
import { HomePage } from '@/views/Home/Page';
import { useCallback, useEffect, useState, useTransition } from 'react';
import { CarCard, CarCardSkeleton } from '@/entities/CarCard';
import { baseUrl, baseUrlTestParams } from '@/shared/config/routes';
import { usePagination } from '@/features/Pagination/lib/usePagination';
import { PaginationComponent } from '@/entities/Pagination/PaginationComponent';
import { useAppSelector } from './store';
import { useSearchString } from '@/features/SearchString/lib/useSearchString';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { PaginationBar } from '@/widgets/PaginationBar';

export default function Home() {
  const [carsData, setCarsData] = useState<TCarModel[]>([]);
  const { setPagination } = usePagination();
  const { currentPage } = useAppSelector((store) => store.pagination);
  const [isLoading, setIsLoading] = useState(true);
  const { newSearchString } = useSearchString();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log('SS', newSearchString);
    console.log(searchParams.toString());
    setIsLoading(true);
    if (searchParams.size) {
      const data = fetch(baseUrl + '?' + searchParams.toString())
        .then((res) => res.json())
        .then((res) => normalizeResponseModel(res))
        .then(({ data, meta }) => {
          setCarsData(data);
          setPagination(meta);
        })
        .catch((err) => console.log('Ошибка', err))
        .finally(() => setIsLoading(false));
    }
  }, [searchParams]);

  useEffect(() => {
    console.log('NEW SS UPDATE', newSearchString?.toString());
    if (newSearchString !== '') router.push(pathname + '?' + newSearchString, { scroll: false });
  }, [newSearchString]);

  const handleCardClick = useCallback((id: number) => {
    console.log('Card', id, 'isCLicked');
  }, []);

  return (
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
  );
}
