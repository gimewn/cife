import ReservationListItem from './ReservationListItem';

const ReservationList = () => {
  const data = [
    {
      culture_id: 1,
      d_day: 13,
      title: '난쟁이들',
      category: '뮤지컬',
      is_important: true,
      saw_date: '2024 - 11 - 30',
      link: 'https://naver.com',
    },
    {
      culture_id: 2,
      d_day: 23,
      title: '난쟁이들',
      category: '뮤지컬',
      is_important: false,
      saw_date: '2024 - 11 - 30',
      link: 'https://naver.com',
    },
  ];

  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">예매를 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {data.map((item) => (
          <ReservationListItem key={item.culture_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
