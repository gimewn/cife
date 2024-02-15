import { API_URL } from '@util/path';
import { defaultFetchOptions } from '@util/options';

export const login = async (id, password) => {
  try {
    const response = await fetch(API_URL.LOGIN, {
      method: 'POST',
      ...defaultFetchOptions,
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    });
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.log('로그인 실패 :', error);
  }
};
