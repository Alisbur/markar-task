import { baseUrl, proxyUrl } from '@/shared/config/routes';
import { normalizeResponseModel } from './normalize';

const ERROR_MESSAGES = {
  WRONG_DATA_STRUCTURE: 'Ошибка структуры данных',
  NETWORK_ERROR: 'Ошибка сети',
  DATA_LOADING_ERROR: 'Ошибка загрузки данных',
};

export const fetchData = async (
  params: Record<string, string | string[] | undefined>,
  proxy: boolean
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

    const url = proxy
      ? `${proxyUrl}?${urlParams.toString()}`
      : `${baseUrl}?${urlParams.toString()}`;

    const response = await fetch(url);

    if (!response.ok) {
      let errorDetails;
      try {
        errorDetails = await response.json();
      } catch (e) {
        errorDetails = await response.text();
      }

      throw {
        message: `${ERROR_MESSAGES.DATA_LOADING_ERROR}: ${response.status}`,
        status: response.status,
        details: errorDetails,
      } as TErrorModel;
    }

    const rawData = await response.json();
    const normalizedData = normalizeResponseModel(rawData);

    if (!normalizedData.data || !normalizedData.meta) {
      throw {
        message: ERROR_MESSAGES.WRONG_DATA_STRUCTURE,
        details: normalizedData,
      } as TErrorModel;
    }

    return normalizedData;
  } catch (error) {
    const errorToThrow: TErrorModel = {
      message: 'Не удалось загрузить данные',
    };

    if (error instanceof TypeError) {
      errorToThrow.message = ERROR_MESSAGES.NETWORK_ERROR;
      errorToThrow.details = error.message;
    } else if (typeof error === 'object' && error !== null) {
      Object.assign(errorToThrow, error);
    }

    console.error(`${ERROR_MESSAGES.DATA_LOADING_ERROR}:`, errorToThrow);
    throw errorToThrow;
  }
};
