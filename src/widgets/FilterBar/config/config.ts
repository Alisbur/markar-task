export const FILTER_OPTIONS: TFilterOption[] = [
  {
    filter: { label: 'Без фильтров', value: null },
    sortOptions: [],
  },
  {
    filter: { label: 'По цене', value: 'price' },
    sortOptions: [
      { label: 'Нет сортировки', value: null },
      { label: 'Сначала подешевле', value: 'asc' },
      { label: 'Сначала подороже', value: 'desc' },
    ],
  },
  {
    filter: { label: 'По году', value: 'year' },
    sortOptions: [
      { label: 'Нет сортировки', value: null },
      { label: 'Сначала новее', value: 'desc' },
      { label: 'Сначала старее', value: 'asc' },
    ],
  },
];
