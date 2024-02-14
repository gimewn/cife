import Main from '@components/MainContainer';
import LeftArrow from '@assets/left_arrow.svg';
import RightArrow from '@assets/right_arrow.svg';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { MONTH_NAME } from '@util/variable';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import SwiperCard from '@components/Monthly/SwiperCard';
import { getMonthlyCultureList } from '@api/Monthly';
import Loader from '@components/Loader';

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

  const { data, isLoading } = useQuery(['monthly', year, month], () =>
    getMonthlyCultureList(year, month),
  );

  if (isLoading) return <Loader />;

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
      {data.length > 1 && (
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-3/4 overflow-visible mt-8"
          cardsEffect={swiperOptions}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.cultureId} className="w-full">
              <SwiperCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {data.length === 1 && (
        <div className="w-3/4 overflow-visible mt-8">
          <SwiperCard data={data[0]} />
        </div>
      )}
    </Main>
  );
};

export default Monthly;
