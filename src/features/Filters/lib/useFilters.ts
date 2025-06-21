import { useAppDispatch, useAppSelector } from '@/app/store';
import { resetFilter, setFilter } from '../model/filters-slice';

export const useFilters = () => {
  const { filter, sort } = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  return {
    filter,
    sort,
    setFilter: (filter: { filter: TFilter | null; sort: TSort }) => dispatch(setFilter(filter)),
    resetFilter: () => dispatch(resetFilter()),
  };
};
