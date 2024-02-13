import PlusButton from '@assets/plus_button.svg';

import Main from '@components/MainContainer';
import CultureListItem from '@components/Culture/CultureListItem';

import { DUMMY_DATA } from '@util/variable';
import { useNavigate } from 'react-router-dom';
import { PAGE_URL } from '@util/path';
import { useQuery } from 'react-query';
import { getAllCultureList } from '@api/Culture';
import Loader from '@components/Loader';

const Culture = () => {
  const navigate = useNavigate();
  const onClickCreateCultureButton = () => navigate(PAGE_URL.CULTURE_EDIT);
  const { data, isLoading, refetch } = useQuery(['cultureList'], getAllCultureList);

  if (isLoading) return <Loader />;
  return (
    <Main>
      <h1 className="main-section-title w-full mt-0 mb-7">등록하신 문화생활 목록이에요.</h1>
      <section className="grid grid-cols-2 w-full gap-3">
        <div
          className="bg-glass w-full h-full rounded-xl flex cursor-pointer justify-center items-center p-8"
          onClick={onClickCreateCultureButton}
        >
          <img src={PlusButton} />
        </div>
        {data.map((item) => (
          <CultureListItem
            key={item.cultureId}
            cultureId={item.cultureId}
            category={item.category}
            title={item.title}
            isImportant={item.isImportant}
            sawDate={item.sawDate}
            refetch={refetch}
          />
        ))}
      </section>
    </Main>
  );
};

export default Culture;
