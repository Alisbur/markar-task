import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: TFiltersSet = {
  filter: null,
  sort: null,
};

const filtersSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    resetFilter: (state) => {
      state = initialState;
    },
    setFilter: (state, action: PayloadAction<{ filter: TFilter | null; sort: TSort }>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter, resetFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
