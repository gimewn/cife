import { API_URL } from '@util/path';
import { defaultFetchOptions } from '@util/options';

export const logout = async () => {
  try {
    const response = await fetch(API_URL.LOGOUT, {
      method: 'GET',
      ...defaultFetchOptions,
    });
    if (!response.ok) {
      throw new Error('올바른 네트워크 응답이 아닙니다.');
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('로그아웃 실패 : ', err);
  }
};
