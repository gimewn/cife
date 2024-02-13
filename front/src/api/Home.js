import { API_URL, PAGE_URL } from '@util/path';
import { interceptor } from './Interceptor';

export const getReservationList = async () => {
  try {
    const response = await interceptor(API_URL.HOME_RESERVATION, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error();
    }

    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('예매 대기 목록 조회 실패 :', err);
  }
};
