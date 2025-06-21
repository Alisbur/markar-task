const normalizeCarModel = (car: TCarApi): TCarModel => ({
  id: car.unique_id,
  brand: car.mark_id,
  model: car.folder_id,
  modification: car.modification_id,
  bodyType: car.body_type,
  color: car.color,
  run: car.run,
  year: car.year,
  price: car.price,
  images: [...car.images.image],
  engineVolume: car.engine_volume,
  enginePower: car.engine_power,
  engineType: car.engine_type,
  gearbox: car.gearbox,
  drive: car.drive,
  imagesNumber: car.images_amount,
});

const normalizeMetaModel = (meta: TMetaApi): TMetaModel => ({
  limit: meta.limit,
  page: meta.page,
  count: meta.count,
  lastPage: meta.last_page,
  firstPageUrl: meta.first_page_link,
  nextPageUrl: meta.next_page_link,
  lastPageUrl: meta.last_page_link,
  from: meta.from,
  to: meta.to,
});

export const normalizeResponseModel = (res: TResponseApi): TResponseModel => ({
  data: res.data.map((item: TCarApi) => normalizeCarModel(item)),
  meta: normalizeMetaModel(res.meta),
});
