import { useAppDispatch, useAppSelector } from '@/app/store';
import { convertMetaModelToPaginationModel } from './converter';
import {
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPage,
  goToPrevPage,
  setPagination,
  setItemsPerPage,
} from './pagination-slice';

export const usePagination = () => {
  const dispatch = useAppDispatch();

  const { currentPage, totalPages, itemsPerPage } = useAppSelector((store) => store.pagination);

  return {
    currentPage,
    totalPages,
    itemsPerPage,
    setItemsPerPage: (n: number) => dispatch(setItemsPerPage(n)),
    setPagination: (meta: TMetaModel) =>
      dispatch(setPagination(convertMetaModelToPaginationModel(meta))),
    goToNextPage: () => dispatch(goToNextPage()),
    goToPrevPage: () => dispatch(goToPrevPage()),
    goToFirstPage: () => dispatch(goToFirstPage()),
    goToLastPage: () => dispatch(goToLastPage()),
    goToPage: (n: number) => dispatch(goToPage(n)),
  };
};
