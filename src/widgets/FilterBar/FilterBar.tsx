import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { cn } from '@/shared/lib/cn';
import { FC, useEffect, useState } from 'react';
import { FILTER_OPTIONS } from './config/config';
import { useFilters } from '@/features/Filters/lib/useFilters';

type TFilterBarProps = {
  className?: string;
};

export const FilterBar: FC<TFilterBarProps> = ({ className }) => {
  const [selectedFilter, setSelectedFilter] = useState<TFilter | null>(null);
  const [selectedSort, setSelectedSort] = useState<TSort>(null);
  const { filter, sort, setFilter } = useFilters();

  useEffect(() => {
    if (filter !== undefined) {
      setSelectedFilter(filter);
    }
    if (sort !== undefined) {
      setSelectedSort(sort);
    }
  }, [filter, sort]);

  return (
    <nav className={cn(`w-full flex items-center justify-between`, className)}>
      <div
        className={`grid grid-rows md:grid-cols-[min-content_200px_200px] items-center gap-x-8 gap-y-2`}
      >
        <span className={`text-m font-semibold`}>Фильтр:</span>
        <Select
          paramName={'Filter'}
          items={FILTER_OPTIONS.map((fo) => fo.filter)}
          selectedItem={
            FILTER_OPTIONS.find((el) => el.filter.value === selectedFilter)?.filter ?? null
          }
          setSelectedItem={(_, value) => setSelectedFilter(value as TFilter | null)}
          placeholder="Параметр"
          className={`rounded-0 w-full`}
        />
        <Select
          paramName={'Sort'}
          items={FILTER_OPTIONS.find((fo) => fo.filter.value === selectedFilter)?.sortOptions ?? []}
          selectedItem={
            FILTER_OPTIONS.find((fo) => fo.filter.value === selectedFilter)?.sortOptions.find(
              (el) => el.value === selectedSort
            ) ?? null
          }
          setSelectedItem={(_, value) => setSelectedSort(value as TSort)}
          placeholder="Сортировка"
          disabled={!selectedFilter}
          className={`rounded-0 w-full`}
        />
      </div>
      <Button
        variant={'secondary'}
        onClick={() => {
          setFilter({ filter: selectedFilter, sort: selectedSort });
        }}
      >
        Применить фильтры
      </Button>
    </nav>
  );
};
