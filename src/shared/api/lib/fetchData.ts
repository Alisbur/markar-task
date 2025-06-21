import { baseUrl } from '@/shared/config/routes';
import { normalizeResponseModel } from './normalize';

export const fetchData = async (
  params: Record<string, string | string[] | undefined>
): Promise<TResponseModel> => {
  try {
    const urlParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        value.forEach((v) => v && urlParams.append(key, v));
      } else if (value !== undefined) {
        urlParams.set(key, value);
      }
    }

    const url = `${baseUrl}?${urlParams.toString()}`;

    const response = await fetch(url);

    if (!response.ok) {
      let errorDetails;
      try {
        errorDetails = await response.json();
      } catch (e) {
        errorDetails = await response.text();
      }

      throw {
        message: `Ошибка получения данных: ${response.status}`,
        status: response.status,
        details: errorDetails,
      } as TErrorModel;
    }

    const rawData = await response.json();
    const normalizedData = normalizeResponseModel(rawData);

    if (!normalizedData.data || !normalizedData.meta) {
      throw {
        message: 'Ошибка структур данных',
        details: normalizedData,
      } as TErrorModel;
    }

    return normalizedData;
  } catch (error) {
    const errorToThrow: TErrorModel = {
      message: 'Не удалось загрузить данные',
    };

    if (error instanceof TypeError) {
      errorToThrow.message = 'Ошибка сети';
      errorToThrow.details = error.message;
    } else if (typeof error === 'object' && error !== null) {
      Object.assign(errorToThrow, error);
    }

    console.error('Ошибка загрузки данных:', errorToThrow);
    throw errorToThrow;
  }
};
