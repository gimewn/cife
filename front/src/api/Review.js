import { API_URL } from '@util/path';
import { interceptor } from './Interceptor';

export const getReviewList = async () => {
  try {
    const response = await interceptor(API_URL.REVIEW_LIST, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('리뷰 목록 조회 실패 :', err);
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const response = await interceptor(API_URL.REVIEW_RUD(reviewId), {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('후기 삭제 실패 :', err);
  }
};

export const getReview = async (reviewId) => {
  try {
    const response = await interceptor(API_URL.REVIEW_RUD(reviewId), {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('특정 리뷰 조회 실패 :', err);
  }
};

export const updateReview = async (reviewData) => {
  try {
    const response = await interceptor(API_URL.REVIEW_RUD(reviewData.reviewId), {
      method: 'PUT',
      body: JSON.stringify({
        reviewId: reviewData.reviewId,
        score: reviewData.score,
        contents: reviewData.contents,
      }),
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('리뷰 수정 실패 :', err);
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await interceptor(API_URL.REVIEW_CREATE, {
      method: 'POST',
      body: JSON.stringify({
        reviewId: reviewData.reviewId,
        cultureId: reviewData.cultureId,
        score: reviewData.score,
        contents: reviewData.contents,
      }),
    });
    if (!response.ok) {
      throw new Error();
    }
    const { result } = await response.json();
    return result;
  } catch (err) {
    console.log('리뷰 수정 실패 :', err);
  }
};
