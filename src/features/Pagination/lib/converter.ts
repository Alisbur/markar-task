export const convertMetaModelToPaginationModel = (meta: TMetaModel): TPaginationModel => ({
  currentPage: meta.page ?? null,
  totalPages: meta.count ?? null,
  itemsPerPage: meta.limit ?? null,
  firstPageUrl: meta.firstPageUrl ?? null,
  lastPageUrl: meta.lastPageUrl ?? null,
  nextPageUrl: meta.nextPageUrl ?? null,
});
