type TSortOption = { label: string; value: TSort | null };

type TFilterType = { label: string; value: TFilter | null };

type TFilterOption = {
  filter: TFilterType;
  sortOptions: TSortOption[];
};
