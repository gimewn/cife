import { API_URL } from '@util/path';
import { interceptor } from './Interceptor';

export const getMonthlyCultureList = async (year, month) => {
  try {
    const response = await interceptor(API_URL.MONTHLY(year, month), {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('월간 문화생활 조회 실패 :', err);
  }
};
