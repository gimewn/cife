import { defaultFetchOptions } from '@util/options';
import { RefreshSession } from './RefreshSession';
import { PAGE_URL } from '@util/path';

export const Interceptor = async (url, options) => {
  const response = await fetch(url, {
    ...options,
    ...defaultFetchOptions,
  });

  if (response.status !== 401) {
    return response;
  }

  const refreshResponse = await RefreshSession();

  if (refreshResponse.status === 401) {
    localStorage.removeItem('isLogin');
    window.location.href = PAGE_URL.LOGIN;
  }

  const reFetchResponse = await fetch(url, {
    ...options,
    ...defaultFetchOptions,
  });

  return reFetchResponse;
};
