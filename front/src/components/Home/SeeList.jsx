import { useQuery } from 'react-query';

import { getSeeList } from '@api/Home';

import Empty from '@components/Empty';
import SeeListItem from '@components/Home/SeeListItem';
import Loader from '@components/Loader';

const SeeList = () => {
  const { data, isLoading, refetch } = useQuery(['homeSeeList'], getSeeList);

  if (isLoading) return <Loader />;

  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">관람을 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {data.length < 1 && <Empty />}
        {data.map((item) => (
          <SeeListItem key={item.cultureId} item={item} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default SeeList;
