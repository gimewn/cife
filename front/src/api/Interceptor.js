import { defaultFetchOptions } from '@util/options';
import { refreshSession } from './RefreshSession';
import { PAGE_URL } from '@util/path';

export const interceptor = async (url, options) => {
  const refreshResponse = await refreshSession();

  if (refreshResponse.status === 401) {
    localStorage.removeItem('isLogin');
    window.location.href = PAGE_URL.LOGIN;
  }

  const response = await fetch(url, {
    ...options,
    ...defaultFetchOptions,
  });

  return response;
};
