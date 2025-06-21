type TCarApi = {
  mark_id: string;
  folder_id: string;
  modification_id: string;
  body_type: string;
  color: string;
  run: number;
  year: number;
  price: number;
  images: {
    image: string[];
  };
  unique_id: number;
  engine_volume: number;
  engine_power: string;
  engine_type: string;
  gearbox: string;
  drive: string;
  images_amount: number;
};

type TCarModel = {
  brand: string;
  model: string;
  modification: string;
  bodyType: string;
  color: string;
  run: number;
  year: number;
  price: number;
  images: string[];
  id: number;
  engineVolume: number;
  enginePower: string;
  engineType: string;
  gearbox: string;
  drive: string;
  imagesNumber: number;
};
