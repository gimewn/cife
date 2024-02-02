import Main from '@components/MainContainer';
import { useState } from 'react';

import Picture from '@assets/picture.png';
import Pencil from '@assets/pencil.png';
import MenuCircle from '@components/Home/MenuCircle';
import { CATEGORY } from '@util/variable';
import Cart from '@assets/cart.png';
import ReservationList from '@components/Home/ReservationList';
import SeeList from '@components/Home/SeeList';
import Review from './Review';

const Home = () => {
  const [category, setCategory] = useState(CATEGORY.RESERVATION);

  const onClickCategory = (categoryParam) => {
    if (category !== categoryParam) {
      setCategory(categoryParam);
    }
  };

  return (
    <Main>
      <section className="flex gap-14">
        <MenuCircle
          isFocus={category === CATEGORY.RESERVATION}
          title={'예매 대기 목록'}
          image={Cart}
          onClickFun={() => onClickCategory(CATEGORY.RESERVATION)}
        />
        <MenuCircle
          isFocus={category === CATEGORY.SEE}
          title={'관람 대기 목록'}
          image={Picture}
          onClickFun={() => onClickCategory(CATEGORY.SEE)}
        />
        <MenuCircle
          isFocus={category === CATEGORY.REVIEW}
          title={'후기 대기 목록'}
          image={Pencil}
          onClickFun={() => onClickCategory(CATEGORY.REVIEW)}
        />
      </section>
      <section className="w-full">
        {category === CATEGORY.RESERVATION && <ReservationList />}
        {category === CATEGORY.SEE && <SeeList />}
        {category === CATEGORY.REVIEW && <Review />}
      </section>
    </Main>
  );
};

export default Home;
