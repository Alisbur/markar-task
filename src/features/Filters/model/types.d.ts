type TFilter = 'price' | 'year';

type TSort = 'asc' | 'desc' | null;

type TFiltersSet = { filter: TFilter | null; sort: TSort };
