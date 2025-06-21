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
    // resetFilter: (state, action: PayloadAction<TFilter>) => {
    //   return { ...state, [action.payload]: null };
    // },
    setFilter: (state, action: PayloadAction<{ filter: TFilter | null; sort: TSort }>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter, resetFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
