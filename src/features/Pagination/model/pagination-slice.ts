import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TPaginationState = {
  currentPage: number | null;
  totalPages: number | null;
  itemsPerPage: number | null;
};

const initialState: TPaginationState = {
  currentPage: 1,
  totalPages: null,
  itemsPerPage: 12,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<TPaginationState | undefined>) => {
      if (action.payload) {
        console.log('payload', action.payload);
        return { ...state, ...action.payload };
      } else {
        state = initialState;
      }
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      if (state.currentPage && action.payload && action.payload !== state.itemsPerPage)
        state.itemsPerPage = action.payload;
    },
    goToPage: (state, action: PayloadAction<number>) => {
      if (state.currentPage && state.totalPages && state.currentPage !== action.payload)
        state.currentPage = action.payload;
    },
    goToNextPage: (state) => {
      if (state.currentPage && state.totalPages && state.currentPage < state.totalPages)
        state.currentPage += 1;
    },
    goToPrevPage: (state) => {
      if (state.currentPage && state.currentPage > 1) state.currentPage -= 1;
    },
    goToFirstPage: (state) => {
      if (state.currentPage !== 1) state.currentPage = 1;
    },
    goToLastPage: (state) => {
      if (state.currentPage && state.totalPages && state.currentPage !== state.totalPages)
        state.currentPage = state.totalPages;
    },
  },
});

export const {
  setPagination,
  goToNextPage,
  goToPrevPage,
  goToPage,
  goToFirstPage,
  goToLastPage,
  setItemsPerPage,
} = paginationSlice.actions;

export default paginationSlice.reducer;
