type TPaginationModel = {
  currentPage: number | null;
  totalPages: number | null;
  itemsPerPage: number | null;
  nextPageUrl: string | null;
  firstPageUrl: string | null;
  lastPageUrl: string | null;
};
