import { API_URL, PAGE_URL } from '@util/path';
import { Interceptor } from './Interceptor';

export const getReservationList = async () => {
  try {
    const response = await Interceptor(API_URL.HOME_RESERVATION, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error();
    }

    const { result } = response.json();
    console.log('데이터 확인', result);
    return result;
  } catch (err) {
    console.log('예매 대기 목록 조회 실패 :', err);
  }
};
