import Main from '@components/MainContainer';
import LeftArrow from '@assets/left_arrow.svg';
import RightArrow from '@assets/right_arrow.svg';
import { useState } from 'react';
import { MONTH_NAME } from '@util/variable';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import SwiperCard from '@components/Monthly/SwiperCard';

const getNowMonth = () => {
  const now = new Date();
  return now.getMonth() + 1;
};

const getNowYear = () => {
  const now = new Date();
  return now.getFullYear();
};

const Monthly = () => {
  const [month, setMonth] = useState(getNowMonth());
  const [year, setYear] = useState(getNowYear());

  const swiperOptions = {
    slideShadows: false,
  };

  return (
    <Main className="w-full">
      <header className="flex gap-20 w-full justify-between">
        <img
          className="cursor-pointer"
          src={LeftArrow}
          onClick={() => {
            if (month > 1) {
              setMonth(month - 1);
            } else {
              setMonth(12);
              setYear(year - 1);
            }
          }}
        />
        <div className="flex flex-col items-center gap-2">
          <p className="font-serif text-5xl">{MONTH_NAME[month]}</p>
          <p className="font-bold">
            {year}.{String(month).padStart(2, '0')}
          </p>
        </div>
        <img
          className="cursor-pointer"
          src={RightArrow}
          onClick={() => {
            if (month < 12) {
              setMonth(month + 1);
            } else {
              setYear(year + 1);
              setMonth(1);
            }
          }}
        />
      </header>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-3/4 overflow-visible mt-8"
        cardsEffect={swiperOptions}
        loop={true}
      >
        <SwiperSlide>
          <SwiperCard
            data={{
              culture_id: 1,
              category: '뮤지컬',
              title: '난쟁이들',
              reserved_date: '2024-11-31',
              saw_date: '2024-03-15',
              score: 4,
              reviewId: 1,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            data={{
              culture_id: 1,
              category: '연극',
              title: '난쟁이들',
              reserved_date: '2024-11-31',
              saw_date: '2024-03-15',
              score: 4,
              reviewId: 1,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            data={{
              culture_id: 1,
              category: '클래식',
              title: '난쟁이들',
              reserved_date: '2024-11-31',
              saw_date: '2024-03-15',
              score: 4,
              reviewId: 1,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Main>
  );
};

export default Monthly;
