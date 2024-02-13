export const PAGE_URL = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  CULTURE: '/culture',
  REVIEW: '/review',
  MONTHLY: '/monthly',
  CULTURE_DETAIL: (cultureId) => `/culture/${cultureId}`,
  REVIEW_DETAIL: (reviewId) => `/review/${reviewId}`,
  CULTURE_EDIT: '/culture/edit',
  REVIEW_EDIT: '/review/edit',
};

export const BASE_URL = 'http://localhost:8080';

export const API_URL = {
  SIGNUP: BASE_URL + '/signup',
  CHECK_ID: (checkId) => `${BASE_URL}/signup?check_id=${checkId}`,
  LOGIN: BASE_URL + '/login',
  LOGOUT: BASE_URL + '/logout',
  HOME_SEE_LIST: BASE_URL + '/seeList',
  HOME_RESERVATION: BASE_URL + '/reservation',
  NOT_REVIEWED_LIST: BASE_URL + '/notReviewedList',
  MONTHLY: (year, month) => `${BASE_URL}/monthly?year=${year}&month=${month}`,
  CULTURE_RUD: (cultureId) => `${BASE_URL}/culture?cultureId=${cultureId}`,
  CULTURE_CREATE: BASE_URL + '/culture',
  CULTURE_LIST: BASE_URL + '/culture/all',
  RESERVATION_UD: (cultureId) => `${BASE_URL}/culture/reservation?cultureId=${cultureId}`,
  REVIEW_CREATE: BASE_URL + '/review',
  REVIEW_RUD: (reviewId) => `${BASE_URL}/review?reviewId=${reviewId}`,
  REVIEW_LIST: BASE_URL + '/review/all',
  REFRESH_SESSION: BASE_URL + '/refreshSession',
};
