import { useQuery } from 'react-query';

import { getReservationList } from '@api/Home';

import ReservationListItem from '@components/Home/ReservationListItem';
import Loader from '@components/Loader';
import Empty from '@components/Empty';

const ReservationList = () => {
  const { data, isLoading, refetch } = useQuery(['homeReservationList'], getReservationList);

  if (isLoading) return <Loader />;

  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">예매를 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {data.length < 1 && <Empty />}
        {data.map((item) => (
          <ReservationListItem key={item.cultureId} item={item} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
