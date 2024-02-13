import { useQuery } from 'react-query';

import { getReservationList } from '@api/Home';

import ReservationListItem from '@components/Home/ReservationListItem';

const ReservationList = () => {
  const { data, isLoading } = useQuery(['homeReservationList'], getReservationList);

  if (isLoading) return <p>Loding...</p>;

  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">예매를 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {data.map((item) => (
          <ReservationListItem key={item.cultureId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
