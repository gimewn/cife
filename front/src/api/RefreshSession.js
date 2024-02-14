import { API_URL } from '@util/path';
import { defaultFetchOptions } from '@util/options';

export const refreshSession = async () => {
  const response = await fetch(API_URL.REFRESH_SESSION, {
    method: 'POST',
    ...defaultFetchOptions,
  });
  return response;
};
