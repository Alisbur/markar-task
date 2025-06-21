import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import HomePage from '@/views';
import { Suspense } from 'react';
import { fetchData } from '@/shared/api/lib/fetchData';

const INIT_PAGINATION_LIMIT = 12;
const INIT_PAGINATION_PAGE = 1;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const queryClient = new QueryClient();
  const awaitedSearchParams = await searchParams;

  if (awaitedSearchParams.undefined) {
    delete awaitedSearchParams.undefined;
  }

  if (!awaitedSearchParams['_limit']) {
    awaitedSearchParams['_limit'] = INIT_PAGINATION_LIMIT.toString();
  }

  if (!awaitedSearchParams['_page']) {
    awaitedSearchParams['_page'] = INIT_PAGINATION_PAGE.toString();
  }

  if (Object.keys(awaitedSearchParams).length > 0) {
    await queryClient.prefetchQuery({
      queryKey: ['cars', awaitedSearchParams],
      queryFn: () => fetchData(awaitedSearchParams, false),
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading</p>}>
        <HomePage searchParams={awaitedSearchParams} />
      </Suspense>
    </HydrationBoundary>
  );
}
