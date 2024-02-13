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

export const getAllCultureList = async () => {
  try {
    const response = await interceptor(API_URL.CULTURE_LIST, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('문화생활 목록 조회 실패 :', err);
  }
};

export const getCulture = async (cultureId) => {
  try {
    const response = await interceptor(API_URL.CULTURE_RUD(cultureId), {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error();
    }

    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('특정 문화생활 조회 실패 :', err);
  }
};

export const updateCulture = async (cultureData) => {
  try {
    const response = await interceptor(API_URL.CULTURE_RUD(cultureData.cultureId), {
      method: 'PUT',
      body: JSON.stringify({
        categoryId: cultureData.categoryId,
        title: cultureData.title,
        sawDate: cultureData.sawDate,
        reservedDate: cultureData.reservedDate,
        limitDate: cultureData.limitDate,
        isImportant: cultureData.isImportant,
        link: cultureData.link,
        expectation: cultureData.expectation,
      }),
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('문화생활 수정 실패 :', err);
  }
};
