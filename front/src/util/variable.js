export const CATEGORY = {
  RESERVATION: 'reservation',
  SEE: 'see',
  REVIEW: 'review',
};

export const MODALOPENER = {
  DELETE: 'delete',
  INPUT: 'input',
  LINK: 'link',
  INITIAL: 'initial',
};

export const DUMMY_DATA = [
  {
    culture_id: 1,
    d_day: 13,
    title: '난쟁이들',
    category: '뮤지컬',
    is_important: true,
    saw_date: '2024 - 11 - 30',
    reservated_date: '2024-10-02',
    link: 'https://naver.com',
  },
  {
    culture_id: 2,
    d_day: 23,
    title: '난쟁이들',
    category: '뮤지컬',
    is_important: false,
    saw_date: '2024 - 11 - 30',
    reservated_date: '2024-10-02',
    link: null,
  },
];
