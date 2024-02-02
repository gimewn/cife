import ReservationListItem from '@components/Home/ReservationListItem';

import { DUMMY_DATA } from '@util/variable';

const ReservationList = () => {
  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">예매를 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {DUMMY_DATA.map((item) => (
          <ReservationListItem key={item.culture_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
