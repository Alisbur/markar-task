// import { TParams } from '../types/types';

// type TObjConvertRules<T> = {
//   [key in keyof T]: (value: T[key]) => object;
// };

// export const QUERY_PARAMS_CONVERT_RULES: TObjConvertRules<TParams> = {
//   titleSearch: (value) => ({ filters: { title: { $containsi: value } } }),
//   categoryIdList: (value) => ({ filters: { productCategory: { documentId: { $in: value } } } }),
//   exceptProductIdList: (value) => ({ filters: { documentId: { $notIn: value } } }),
//   productIdList: (value) => ({ filters: { documentId: { $in: value } } }),
//   paginationPage: (value) => ({ pagination: { page: value } }),
//   paginationLimit: (value) => ({ pagination: { limit: value } }),
//   paginationItemsPerPage: (value) => ({ pagination: { pageSize: value } }),
//   isInStock: (value) => ({ filters: { isInStock: { $eq: value } } }),
//   priceSort: (value) => ({ sort: { price: value } }),
//   discountPercentSort: (value) => ({ sort: { discountPercent: value } }),
//   ratingSort: (value) => ({ sort: { rating: value } }),
// };
