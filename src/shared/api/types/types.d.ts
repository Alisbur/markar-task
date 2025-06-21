type TPagination = {
  limit: number | null;
  currentPage: number;
  totalPages: number;
};

type TSortType = 'asc' | 'desc' | null;

type TSortParams = {
  price: TSortType;
};

type TSearchParams = {
  _limit: number;
  _page: number;
  sort: TSortParams;
};
