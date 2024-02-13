import { API_URL } from '@util/path';
import { interceptor } from './Interceptor';
import { formatDateJSON } from '@util/funcs';

export const deleteCulture = async (cultureId) => {
  try {
    const response = await interceptor(API_URL.CULTURE_RUD(cultureId), {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error();
    }

    const { result } = response.json();
    return result;
  } catch (err) {
    console.log('문화생활 삭제 실패 :', err);
  }
};

export const updateReservedDate = async (cultureId, date) => {
  try {
    const response = await interceptor(API_URL.RESERVATION_UD(cultureId), {
      method: 'PATCH',
      body: JSON.stringify({
        date: formatDateJSON(date),
      }),
    });

    if (!response.ok) {
      throw new Error();
    }

    const { result } = await response.json();

    return result;
  } catch (err) {
    console.log('예매일 수정 실패 :', err);
  }
};

export const deleteReservedDate = async (cultureId) => {
  try {
    const response = await interceptor(API_URL.RESERVATION_UD(cultureId), {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error();
    }

    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('예매일 삭제 실패 :', err);
  }
};
