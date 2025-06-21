import { combineReducers, configureStore } from '@reduxjs/toolkit';
import paginationReducer from '@/features/Pagination';
import filtersReducer from '@/features/Filters/model/filters-slice';

const rootReducer = combineReducers({
  pagination: paginationReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
