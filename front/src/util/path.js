export const PAGE_URL = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  CULTURE: '/culture',
  REVIEW: '/review',
  MONTHLY: '/monthly',
  CULTURE_DETAIL: (cultureId) => `/culture/${cultureId}`,
  REVIEW_DETAIL: (reviewId) => `/review/${reviewId}`,
};
