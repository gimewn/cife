import { API_URL } from '@util/path';
import { defaultFetchOptions } from '@util/options';

export const checkIsExist = async (checkId) => {
  try {
    const response = await fetch(API_URL.CHECK_ID(checkId), {
      method: 'GET',
      ...defaultFetchOptions,
    });
    if (!response.ok) {
      throw new Error('올바른 네트워크 응답이 아닙니다.');
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('아이디 중복 체크 실패 :', err);
  }
};

export const signup = async (userId, password) => {
  try {
    const response = await fetch(API_URL.SIGNUP, {
      method: 'POST',
      ...defaultFetchOptions,
      body: JSON.stringify({
        id: userId,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('올바른 네트워크 응답이 아닙니다.');
    }

    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('회원가입 실패 :', err);
  }
};
